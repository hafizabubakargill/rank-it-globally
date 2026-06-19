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
  void processAuditLead({ website, email }).catch((error) => {
    console.error("Audit background job failed", error);
  });
  void sendAdminLeadReceipt({ website, email }).catch((error) => {
    console.error("Audit admin lead receipt failed", error);
  });

  return NextResponse.json({
    success: true,
    message: "Audit request received. The report is being prepared and emailed.",
    lead: {
      website,
      email,
    },
    queued: true,
  });
}

async function processAuditLead({ website, email }: { website: string; email: string }) {
  const audit = await buildAuditReport({ website, email });
  const adminRecipients = getAdminRecipients();

  const visitorHtml = reportToHtml(audit.report, {
    title: "Your Website Audit Is Ready",
    eyebrow: "Rank It Globally Audit",
    intro:
      "We checked your website performance, crawlability, on-page SEO signals, and conversion opportunities.",
    website,
    email,
  });

  const adminText = [
    "New audit lead",
    "",
    `Website: ${website}`,
    `Email: ${email}`,
    "",
    "Provider status:",
    `- ${audit.pageSpeed.source}: ${audit.pageSpeed.ok ? "completed" : audit.pageSpeed.error}`,
    `- ${audit.dataForSeo.source}: ${audit.dataForSeo.ok ? "completed" : audit.dataForSeo.error}`,
    "",
    audit.report,
  ].join("\n");

  await Promise.all([
    upsertBrevoContact({ email, website }),
    sendBrevoEmail({
      to: email,
      bcc: adminRecipients,
      subject: "Your Rank It Globally website audit is ready",
      text: audit.report,
      html: visitorHtml,
    }),
    ...adminRecipients.map((adminEmail) =>
      sendBrevoEmail({
        to: adminEmail,
        subject: `New audit lead and report: ${website}`,
        text: adminText,
        html: reportToHtml(adminText, {
          title: "New Audit Lead Submitted",
          eyebrow: "Admin Notification",
          intro:
            "A visitor submitted the free audit form. Their generated report is included below.",
          website,
          email,
          admin: true,
        }),
      }),
    ),
  ]);
}

async function sendAdminLeadReceipt({
  website,
  email,
}: {
  website: string;
  email: string;
}) {
  const text = [
    "New audit form submission received.",
    "",
    `Website: ${website}`,
    `Email: ${email}`,
    "",
    "The automated report is now being generated. A second email with the full report will follow after PageSpeed, DataForSEO, and AI analysis complete.",
  ].join("\n");

  await Promise.all(
    getAdminRecipients().map((adminEmail) =>
      sendBrevoEmail({
        to: adminEmail,
        subject: `New audit form submission: ${website}`,
        text,
        html: reportToHtml(text, {
          title: "New Audit Form Submission",
          eyebrow: "Lead Received",
          intro:
            "A visitor submitted the free audit form. The full automated report is being generated.",
          website,
          email,
          admin: true,
        }),
      }),
    ),
  );
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
