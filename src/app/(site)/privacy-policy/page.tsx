import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Rank It Globally",
  description:
    "Privacy Policy for Rank It Globally, including how website audit requests, contact details, analytics, and third-party services are handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="June 19, 2026"
      intro="This Privacy Policy explains how Rank It Globally collects, uses, and protects information submitted through our website, audit form, booking links, and related services."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "When you use our website or request a free audit, we may collect your name, email address, website URL, business details you choose to provide, and technical information related to the submitted website.",
            "We may also collect standard usage information such as browser type, pages visited, referring URLs, approximate location, device information, and interaction data through analytics or hosting logs.",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "We use your information to respond to inquiries, prepare website audits, send requested reports, book consultations, improve our services, and communicate about Rank It Globally offerings.",
            "If you submit the audit form, your website URL may be processed through tools such as Google PageSpeed Insights, DataForSEO, Anthropic Claude, and email delivery systems to generate and send the report.",
          ],
        },
        {
          title: "Email and Marketing",
          body: [
            "We may send transactional emails related to your audit request or consultation. We may also send occasional follow-up or marketing emails if you have provided your contact details to us.",
            "You can ask us to stop marketing communications at any time by contacting hello@rankitglobally.com or using any unsubscribe option included in our emails.",
          ],
        },
        {
          title: "Service Providers",
          body: [
            "We use trusted service providers to operate the website, process audit data, deliver email, manage content, schedule calls, and understand website performance.",
            "These providers may include hosting platforms, Brevo, Google, DataForSEO, Anthropic, Sanity, Calendly, and similar tools needed to deliver the service.",
          ],
        },
        {
          title: "Data Retention",
          body: [
            "We keep submitted information only as long as reasonably needed for the purposes described in this policy, to maintain business records, resolve issues, comply with legal obligations, and improve our services.",
            "You may request deletion or correction of your personal information by emailing hello@rankitglobally.com.",
          ],
        },
        {
          title: "Security",
          body: [
            "We use reasonable administrative, technical, and organizational safeguards to protect information. No online system is completely secure, so we cannot guarantee absolute security.",
            "You should not submit passwords, private API keys, payment details, or other sensitive credentials through the public audit form.",
          ],
        },
        {
          title: "Your Rights",
          body: [
            "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information.",
            "To make a privacy request, contact hello@rankitglobally.com and include enough detail for us to verify and respond to the request.",
          ],
        },
        {
          title: "Contact",
          body: [
            "For privacy questions, contact Rank It Globally at hello@rankitglobally.com.",
          ],
        },
      ]}
    />
  );
}
