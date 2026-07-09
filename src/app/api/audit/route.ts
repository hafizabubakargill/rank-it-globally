import { NextResponse } from "next/server";
import { buildAuditReport, isEmail, normalizeWebsite } from "@/lib/audit";
import { reportToHtml, sendBrevoEmail, upsertBrevoContact } from "@/lib/brevo";
import { hasSanityWriteConfig, writeClient } from "@/sanity/writeClient";

export const runtime = "nodejs";

type AuditRequest = {
  website?: string;
  url?: string;
  email?: string;
  fullName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  companyName?: string;
  businessLocation?: string;
  industry?: string;
  auditScope?: string[];
  biggestProblem?: string;
  mainGoal?: string;
  budgetRange?: string;
  message?: string;
  sourcePage?: string;
};

type AuditLeadDetails = {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl: string;
  normalizedWebsite: string;
  businessLocation: string;
  industry: string;
  auditScope: string[];
  biggestProblem: string;
  mainGoal: string;
  budgetRange: string;
  message: string;
  sourcePage: string;
  submissionType: "full" | "legacy-minimal";
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
  const rawEmail = payload.businessEmail || payload.email || "";

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
  const leadDetails = buildLeadDetails(payload, {
    email,
    rawWebsite,
    normalizedWebsite: website,
  });
  const missingFields = getMissingRequiredFields(leadDetails);

  if (leadDetails.submissionType === "full" && missingFields.length) {
    return NextResponse.json(
      {
        success: false,
        message: `Please complete: ${missingFields.join(", ")}.`,
      },
      { status: 400 },
    );
  }

  const sanityLeadId = await createAuditLead(leadDetails).catch((error) => {
    console.error("Audit Sanity lead creation failed", error);
    return undefined;
  });

  void processAuditLead({ website, email, leadDetails, sanityLeadId }).catch((error) => {
    console.error("Audit background job failed", error);
    if (sanityLeadId) {
      void patchAuditLead(sanityLeadId, { status: "failed" });
    }
  });
  void sendAdminLeadReceipt({ website, email, leadDetails }).catch((error) => {
    console.error("Audit admin lead receipt failed", error);
  });

  return NextResponse.json({
    success: true,
    message: "Audit request received. The report is being prepared and emailed.",
    lead: {
      website,
      email,
      sanityLeadId,
    },
    queued: true,
  });
}

async function processAuditLead({
  website,
  email,
  leadDetails,
  sanityLeadId,
}: {
  website: string;
  email: string;
  leadDetails: AuditLeadDetails;
  sanityLeadId?: string;
}) {
  const audit = await buildAuditReport({ website, email });
  const adminRecipients = getAdminRecipients();
  const leadText = formatLeadDetails(leadDetails);
  const providerStatus = [
    `${audit.pageSpeed.source}: ${audit.pageSpeed.ok ? "completed" : audit.pageSpeed.error}`,
    `${audit.dataForSeo.source}: ${audit.dataForSeo.ok ? "completed" : audit.dataForSeo.error}`,
  ].join("\n");

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
    leadText,
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

  if (sanityLeadId) {
    await patchAuditLead(sanityLeadId, {
      status: "email_sent",
      reportSummary: audit.report.slice(0, 12000),
      providerStatus,
    });
  }
}

async function sendAdminLeadReceipt({
  website,
  email,
  leadDetails,
}: {
  website: string;
  email: string;
  leadDetails: AuditLeadDetails;
}) {
  const text = [
    "New audit form submission received.",
    "",
    formatLeadDetails(leadDetails),
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

function buildLeadDetails(
  payload: AuditRequest,
  {
    email,
    rawWebsite,
    normalizedWebsite,
  }: { email: string; rawWebsite: string; normalizedWebsite: string },
): AuditLeadDetails {
  const fullName = clean(payload.fullName);
  const businessEmail = clean(payload.businessEmail) || email;
  const phoneNumber = clean(payload.phoneNumber);
  const companyName = clean(payload.companyName);
  const businessLocation = clean(payload.businessLocation);
  const industry = clean(payload.industry);
  const auditScope = Array.isArray(payload.auditScope)
    ? payload.auditScope.map(clean).filter(Boolean)
    : [];
  const biggestProblem = clean(payload.biggestProblem);
  const mainGoal = clean(payload.mainGoal);
  const budgetRange = clean(payload.budgetRange);
  const message = clean(payload.message);
  const sourcePage = clean(payload.sourcePage) || "/free-audit";
  const hasExpandedFields = Boolean(
    fullName ||
      phoneNumber ||
      companyName ||
      businessLocation ||
      industry ||
      auditScope.length ||
      biggestProblem ||
      mainGoal ||
      budgetRange ||
      message,
  );

  return {
    fullName,
    businessEmail,
    phoneNumber,
    companyName,
    websiteUrl: clean(rawWebsite),
    normalizedWebsite,
    businessLocation,
    industry,
    auditScope,
    biggestProblem,
    mainGoal,
    budgetRange,
    message,
    sourcePage,
    submissionType: hasExpandedFields ? "full" : "legacy-minimal",
  };
}

function getMissingRequiredFields(lead: AuditLeadDetails) {
  const missing: string[] = [];
  if (!lead.fullName) missing.push("Full name");
  if (!lead.businessEmail) missing.push("Business email");
  if (!lead.phoneNumber) missing.push("Phone number");
  if (!lead.companyName) missing.push("Business / company name");
  if (!lead.websiteUrl) missing.push("Website URL");
  if (!lead.businessLocation) missing.push("Business location");
  if (!lead.industry) missing.push("Business type / industry");
  if (!lead.auditScope.length) missing.push("What you want audited");
  if (!lead.biggestProblem) missing.push("Biggest problem");
  if (!lead.mainGoal) missing.push("Main goal");
  if (!lead.budgetRange) missing.push("Monthly budget range");
  return missing;
}

async function createAuditLead(lead: AuditLeadDetails) {
  if (!hasSanityWriteConfig) return undefined;

  const result = await writeClient.create({
    _type: "auditLead",
    submittedAt: new Date().toISOString(),
    status: "received",
    sourcePage: lead.sourcePage,
    fullName: lead.fullName,
    businessEmail: lead.businessEmail,
    phoneNumber: lead.phoneNumber,
    companyName: lead.companyName,
    websiteUrl: lead.normalizedWebsite,
    normalizedWebsite: lead.normalizedWebsite,
    businessLocation: lead.businessLocation,
    industry: lead.industry,
    auditScope: lead.auditScope,
    biggestProblem: lead.biggestProblem,
    mainGoal: lead.mainGoal,
    budgetRange: lead.budgetRange,
    message: lead.message,
  });

  return result._id;
}

async function patchAuditLead(
  id: string,
  patch: { status?: string; reportSummary?: string; providerStatus?: string },
) {
  if (!hasSanityWriteConfig) return;
  await writeClient.patch(id).set(patch).commit();
}

function formatLeadDetails(lead: AuditLeadDetails) {
  return [
    `Submission type: ${lead.submissionType}`,
    `Full name: ${lead.fullName || "Not provided"}`,
    `Business email: ${lead.businessEmail}`,
    `Phone number: ${lead.phoneNumber || "Not provided"}`,
    `Company: ${lead.companyName || "Not provided"}`,
    `Website: ${lead.normalizedWebsite}`,
    `Business location: ${lead.businessLocation || "Not provided"}`,
    `Industry: ${lead.industry || "Not provided"}`,
    `Audit scope: ${lead.auditScope.length ? lead.auditScope.join(", ") : "Not provided"}`,
    `Biggest problem: ${lead.biggestProblem || "Not provided"}`,
    `Main goal: ${lead.mainGoal || "Not provided"}`,
    `Monthly budget: ${lead.budgetRange || "Not provided"}`,
    `Message: ${lead.message || "Not provided"}`,
    `Source page: ${lead.sourcePage}`,
  ].join("\n");
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
