import { NextResponse } from "next/server";
import { normalizeWebsite } from "@/lib/website";
import { leadNotificationHtml, sendBrevoEmail, upsertBrevoContact } from "@/lib/brevo";
import { hasSanityWriteConfig, writeClient } from "@/sanity/writeClient";

export const runtime = "nodejs";

type AuditRequest = {
  website?: string;
  url?: string;
  email?: string;
  fullName?: string;
  businessEmail?: string;
  phoneNumber?: string;
  auditScope?: string[];
  budgetRange?: string;
  message?: string;
  sourcePage?: string;
};

type AuditLeadDetails = {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  websiteUrl: string;
  normalizedWebsite: string;
  auditScope: string[];
  budgetRange: string;
  message: string;
  sourcePage: string;
  submissionType: "full" | "legacy-minimal";
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

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

  void upsertBrevoContact({
    email,
    website,
    name: leadDetails.fullName,
    source: "Growth Audit request",
  }).catch((error) => {
    console.error("Audit Brevo contact upsert failed", error);
  });

  void sendAdminLeadReceipt({ website, email, leadDetails, sanityLeadId }).catch((error) => {
    console.error("Audit admin lead receipt failed", error);
    if (sanityLeadId) {
      void patchAuditLead(sanityLeadId, {
        adminLeadEmailStatus: "failed",
        adminEmailError:
          error instanceof Error ? error.message : "Admin notification failed.",
      });
    }
  });

  return NextResponse.json({
    success: true,
    message: "Thanks. Pick a time and let's talk through it.",
    lead: {
      website,
      email,
      sanityLeadId,
    },
  });
}

async function sendAdminLeadReceipt({
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
  const text = [
    "New Growth Audit form submission received.",
    "",
    formatLeadDetails(leadDetails),
    "",
    "Reach out directly or wait for the visitor to book a call on Calendly.",
  ].join("\n");

  const adminRecipients = getAdminRecipients();
  const results = await Promise.all(
    adminRecipients.map((adminEmail) =>
      sendBrevoEmail({
        to: adminEmail,
        subject: `New Growth Audit lead: ${website}`,
        text,
        html: leadNotificationHtml(text, {
          title: "New Growth Audit Lead",
          eyebrow: "Lead Received",
          intro: "A visitor submitted the Growth Audit form.",
          website,
          email,
        }),
      }),
    ),
  );
  const errors = collectEmailErrors(results, adminRecipients);

  if (sanityLeadId) {
    await patchAuditLead(sanityLeadId, {
      adminLeadEmailStatus: errors.length ? "failed" : "sent",
      ...(errors.length ? { adminEmailError: errors.join("\n") } : {}),
    });
  }

  if (errors.length) {
    console.error("Audit admin lead receipt failed", errors);
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
  const auditScope = Array.isArray(payload.auditScope)
    ? payload.auditScope.map(clean).filter(Boolean)
    : [];
  const budgetRange = clean(payload.budgetRange);
  const message = clean(payload.message);
  const sourcePage = clean(payload.sourcePage) || "/growth-audit";
  const hasExpandedFields = Boolean(
    fullName || phoneNumber || auditScope.length || budgetRange || message,
  );

  return {
    fullName,
    businessEmail,
    phoneNumber,
    websiteUrl: clean(rawWebsite),
    normalizedWebsite,
    auditScope,
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
  if (!lead.websiteUrl) missing.push("Website URL");
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
    websiteUrl: lead.normalizedWebsite,
    normalizedWebsite: lead.normalizedWebsite,
    auditScope: lead.auditScope,
    budgetRange: lead.budgetRange,
    message: lead.message,
    adminLeadEmailStatus: "pending",
  });

  return result._id;
}

async function patchAuditLead(
  id: string,
  patch: {
    adminLeadEmailStatus?: "pending" | "sent" | "failed";
    adminEmailError?: string;
  },
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
    `Website: ${lead.normalizedWebsite}`,
    `Wants help with: ${lead.auditScope.length ? lead.auditScope.join(", ") : "Not provided"}`,
    `Monthly budget: ${lead.budgetRange || "Not provided"}`,
    `Message: ${lead.message || "Not provided"}`,
    `Source page: ${lead.sourcePage}`,
  ].join("\n");
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
