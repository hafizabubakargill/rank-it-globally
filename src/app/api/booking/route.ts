import { NextResponse } from "next/server";
import { reportToHtml, sendBrevoEmail, upsertBrevoContact } from "@/lib/brevo";

export const runtime = "nodejs";

type BookingRequest = {
  invitee_uri?: string;
};

type CalendlyInviteeResponse = {
  resource?: {
    email?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    timezone?: string;
    scheduled_event?: string;
    event?: string;
    uri?: string;
  };
};

export async function POST(request: Request) {
  let payload: BookingRequest;

  try {
    payload = (await request.json()) as BookingRequest;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const inviteeUri = payload.invitee_uri?.trim();
  if (!inviteeUri) {
    return NextResponse.json(
      { success: false, message: "Calendly invitee URI is required." },
      { status: 400 },
    );
  }

  if (!isCalendlyInviteeUri(inviteeUri)) {
    return NextResponse.json(
      { success: false, message: "Invalid Calendly invitee URI." },
      { status: 400 },
    );
  }

  const token = process.env.CALENDLY_TOKEN;
  if (!token) {
    return NextResponse.json(
      { success: false, message: "CALENDLY_TOKEN is not configured." },
      { status: 500 },
    );
  }

  let invitee: Awaited<ReturnType<typeof fetchCalendlyInvitee>>;
  try {
    invitee = await fetchCalendlyInvitee(inviteeUri, token);
  } catch (error) {
    console.error("Calendly invitee fetch failed", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch Calendly invitee." },
      { status: 502 },
    );
  }
  if (!invitee.email) {
    return NextResponse.json(
      { success: false, message: "Calendly invitee email was not available." },
      { status: 502 },
    );
  }

  const adminEmail = process.env.BREVO_ADMIN_EMAIL?.trim().toLowerCase();
  const name = invitee.name || [invitee.firstName, invitee.lastName].filter(Boolean).join(" ");

  const contactResult = await upsertBrevoContact({
    email: invitee.email,
    name,
    source: "Calendly booking",
  });

  let adminEmailResult:
    | Awaited<ReturnType<typeof sendBrevoEmail>>
    | { ok: false; skipped: true; error: string } = {
    ok: false,
    skipped: true,
    error: "BREVO_ADMIN_EMAIL is not configured.",
  };

  if (adminEmail) {
    const notification = buildBookingNotification({
      email: invitee.email,
      name,
      timezone: invitee.timezone,
      inviteeUri,
      scheduledEventUri: invitee.scheduledEventUri,
    });

    adminEmailResult = await sendBrevoEmail({
      to: adminEmail,
      subject: `New Calendly booking: ${name || invitee.email}`,
      text: notification,
      html: reportToHtml(notification, {
        title: "New Calendly Booking",
        eyebrow: "Admin Notification",
        intro: "A visitor booked a free consultation through Calendly.",
        email: invitee.email,
        admin: true,
      }),
    });
  }

  return NextResponse.json({
    success: true,
    lead: {
      email: invitee.email,
      name,
    },
    brevo: {
      contact: contactResult,
      adminEmail: adminEmailResult,
    },
  });
}

function isCalendlyInviteeUri(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname === "api.calendly.com" &&
      url.pathname.includes("/scheduled_events/") &&
      url.pathname.includes("/invitees/")
    );
  } catch {
    return false;
  }
}

async function fetchCalendlyInvitee(inviteeUri: string, token: string) {
  const res = await fetch(inviteeUri, {
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Calendly invitee fetch failed: ${await res.text()}`);
  }

  const data = (await res.json()) as CalendlyInviteeResponse;
  const resource = data.resource || {};

  return {
    email: resource.email?.trim().toLowerCase() || "",
    name: resource.name?.trim() || "",
    firstName: resource.first_name?.trim() || "",
    lastName: resource.last_name?.trim() || "",
    timezone: resource.timezone?.trim() || "",
    inviteeUri: resource.uri || inviteeUri,
    scheduledEventUri: resource.scheduled_event || resource.event || "",
  };
}

function buildBookingNotification({
  email,
  name,
  timezone,
  inviteeUri,
  scheduledEventUri,
}: {
  email: string;
  name: string;
  timezone: string;
  inviteeUri: string;
  scheduledEventUri: string;
}) {
  return [
    "New Calendly booking received.",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email}`,
    timezone ? `Timezone: ${timezone}` : null,
    scheduledEventUri ? `Scheduled event: ${scheduledEventUri}` : null,
    `Invitee: ${inviteeUri}`,
    "",
    "The contact has been added to Brevo with source: Calendly booking.",
  ]
    .filter(Boolean)
    .join("\n");
}
