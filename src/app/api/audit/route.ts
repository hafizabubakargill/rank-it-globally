import { NextResponse } from "next/server";
import { buildAuditReport, isEmail, normalizeWebsite } from "@/lib/audit";
import { reportToHtml, sendBrevoEmail, upsertBrevoContact } from "@/lib/brevo";

export const runtime = "nodejs";

type AuditRequest = {
  website?: string;
  url?: string;
  email?: string;
};

export async function POST(request: Request) {
  let payload: AuditRequest;

  try {
    payload = (await request.json()) as AuditRequest;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const rawWebsite = payload.website || payload.url || "";
  const rawEmail = payload.email || "";

  if (!rawWebsite || !rawEmail) {
    return NextResponse.json(
      { success: false, message: "Website and email are required." },
      { status: 400 },
    );
  }

  if (!isEmail(rawEmail)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  let website: string;
  try {
    website = normalizeWebsite(rawWebsite);
  } catch {
    return NextResponse.json(
      { success: false, message: "Enter a valid website URL." },
      { status: 400 },
    );
  }

  const email = rawEmail.trim().toLowerCase();
  const audit = await buildAuditReport({ website, email });
  const visitorHtml = reportToHtml(audit.report);
  const adminEmail = process.env.BREVO_ADMIN_EMAIL;

  const [contactResult, visitorEmailResult, adminEmailResult] = await Promise.all([
    upsertBrevoContact({ email, website }),
    sendBrevoEmail({
      to: email,
      subject: "Your Rank It Globally website audit",
      text: audit.report,
      html: visitorHtml,
    }),
    adminEmail
      ? sendBrevoEmail({
          to: adminEmail,
          subject: `New site audit lead: ${website}`,
          text: `New audit lead\n\nWebsite: ${website}\nEmail: ${email}\n\n${audit.report}`,
          html: reportToHtml(
            `New audit lead\n\nWebsite: ${website}\nEmail: ${email}\n\n${audit.report}`,
          ),
        })
      : Promise.resolve({
          ok: false,
          skipped: true,
          error: "BREVO_ADMIN_EMAIL is not configured.",
        }),
  ]);

  return NextResponse.json({
    success: true,
    message: "Audit request received.",
    lead: {
      website,
      email,
    },
    email: {
      visitor: visitorEmailResult,
      admin: adminEmailResult,
      contact: contactResult,
    },
    providers: {
      pageSpeed: {
        ok: audit.pageSpeed.ok,
        error: audit.pageSpeed.error,
      },
      dataForSeo: {
        ok: audit.dataForSeo.ok,
        error: audit.dataForSeo.error,
      },
    },
  });
}
