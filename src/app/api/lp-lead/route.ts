import { NextResponse } from "next/server";
import { normalizeWebsite } from "@/lib/website";
import { leadNotificationHtml, sendBrevoEmail, upsertBrevoContact } from "@/lib/brevo";
import { hasSanityWriteConfig, writeClient } from "@/sanity/writeClient";

export const runtime = "nodejs";

type LpLeadRequest = {
  fullName?: string;
  email?: string;
  website?: string;
  improvementGoal?: string;
  formVariant?: "hero" | "compact";
  sourcePage?: string;
};

type LpLeadDetails = {
  fullName: string;
  workEmail: string;
  websiteUrl: string;
  normalizedWebsite: string;
  improvementGoal: string;
  formVariant: "hero" | "compact";
  sourcePage: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: LpLeadRequest;

  try {
    payload = (await request.json()) as LpLeadRequest;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const rawEmail = clean(payload.email);
  const rawWebsite = clean(payload.website);
  const formVariant = payload.formVariant === "compact" ? "compact" : "hero";

  if (!rawEmail || !rawWebsite) {
    return NextResponse.json(
      { success: false, message: "Work email and website are required." },
      { status: 400 },
    );
  }

  if (!isEmail(rawEmail)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (formVariant === "hero" && !clean(payload.fullName)) {
    return NextResponse.json(
      { success: false, message: "Name is required." },
      { status: 400 },
    );
  }

  let normalizedWebsite: string;
  try {
    normalizedWebsite = normalizeWebsite(rawWebsite);
  } catch {
    return NextResponse.json(
      { success: false, message: "Enter a valid website URL." },
      { status: 400 },
    );
  }

  const leadDetails: LpLeadDetails = {
    fullName: clean(payload.fullName),
    workEmail: rawEmail.toLowerCase(),
    websiteUrl: rawWebsite,
    normalizedWebsite,
    improvementGoal: clean(payload.improvementGoal),
    formVariant,
    sourcePage: clean(payload.sourcePage) || "/conversion-upside",
  };

  const sanityLeadId = await createLpLead(leadDetails).catch((error) => {
    console.error("LP lead Sanity creation failed", error);
    return undefined;
  });

  void upsertBrevoContact({
    email: leadDetails.workEmail,
    website: normalizedWebsite,
    name: leadDetails.fullName,
    source: "Case study LP",
  }).catch((error) => {
    console.error("LP lead Brevo contact upsert failed", error);
  });

  void sendAdminLeadReceipt({ leadDetails, sanityLeadId }).catch((error) => {
    console.error("LP lead admin receipt failed", error);
    if (sanityLeadId) {
      void patchLpLead(sanityLeadId, {
        adminLeadEmailStatus: "failed",
        adminEmailError:
          error instanceof Error ? error.message : "Admin notification failed.",
      });
    }
  });

  return NextResponse.json({
    success: true,
    message: "Thanks — we'll be in touch shortly.",
  });
}

async function sendAdminLeadReceipt({
  leadDetails,
  sanityLeadId,
}: {
  leadDetails: LpLeadDetails;
  sanityLeadId?: string;
}) {
  const text = [
    "New case-study landing page lead received.",
    "",
    `Form: ${leadDetails.formVariant}`,
    `Full name: ${leadDetails.fullName || "Not provided"}`,
    `Work email: ${leadDetails.workEmail}`,
    `Website: ${leadDetails.normalizedWebsite}`,
    `Looking to improve: ${leadDetails.improvementGoal || "Not provided"}`,
    `Source page: ${leadDetails.sourcePage}`,
  ].join("\n");

  const adminRecipients = getAdminRecipients();
  const results = await Promise.all(
    adminRecipients.map((adminEmail) =>
      sendBrevoEmail({
        to: adminEmail,
        subject: `New case study LP lead: ${leadDetails.workEmail}`,
        text,
        html: leadNotificationHtml(text, {
          title: "New Case Study LP Lead",
          eyebrow: "Lead Received",
          intro: "A visitor submitted a form on the LinkedIn case-study landing page.",
          website: leadDetails.normalizedWebsite,
          email: leadDetails.workEmail,
        }),
      }),
    ),
  );
  const errors = collectEmailErrors(results, adminRecipients);

  if (sanityLeadId) {
    await patchLpLead(sanityLeadId, {
      adminLeadEmailStatus: errors.length ? "failed" : "sent",
      ...(errors.length ? { adminEmailError: errors.join("\n") } : {}),
    });
  }

  if (errors.length) {
    console.error("LP lead admin receipt failed", errors);
  }
}

function getAdminRecipients() {
  return Array.from(
    new Set(
      [process.env.BREVO_ADMIN_EMAIL, "hello@rankitglobally.com"]
        .map((email) => email?.trim().toLowerCase())
        .filter(Boolean) as string[],
    ),
  );
}

async function createLpLead(lead: LpLeadDetails) {
  if (!hasSanityWriteConfig) return undefined;

  const result = await writeClient.create({
    _type: "lpLead",
    submittedAt: new Date().toISOString(),
    status: "received",
    sourcePage: lead.sourcePage,
    formVariant: lead.formVariant,
    fullName: lead.fullName,
    workEmail: lead.workEmail,
    websiteUrl: lead.normalizedWebsite,
    normalizedWebsite: lead.normalizedWebsite,
    improvementGoal: lead.improvementGoal,
    adminLeadEmailStatus: "pending",
  });

  return result._id;
}

async function patchLpLead(
  id: string,
  patch: {
    adminLeadEmailStatus?: "pending" | "sent" | "failed";
    adminEmailError?: string;
  },
) {
  if (!hasSanityWriteConfig) return;
  await writeClient.patch(id).set(patch).commit();
}

function collectEmailErrors(
  results: Awaited<ReturnType<typeof sendBrevoEmail>>[],
  recipients: string[],
) {
  return results
    .map((result, index) =>
      result.ok ? "" : `${recipients[index]}: ${String(result.error)}`,
    )
    .filter(Boolean);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
