import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import FreeAuditForm from "@/components/FreeAuditForm";
import { auditChecks, calendlyUrl } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Free Website Audit | Rank It Globally",
  description:
    "Request a free website audit covering PageSpeed, technical SEO, crawlability, AI search readiness, and conversion opportunities.",
  alternates: {
    canonical: "https://rankitglobally.com/free-audit",
  },
};

export default function FreeAuditPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Website Audit",
    provider: {
      "@type": "Organization",
      name: "Rank It Globally",
      url: "https://rankitglobally.com",
    },
    areaServed: "Worldwide",
    serviceType: "Website SEO and conversion audit",
    url: "https://rankitglobally.com/free-audit",
  };

  return (
    <main className="marketing-page audit-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="audit-hero">
        <div className="audit-hero-copy">
          <div className="marketing-eyebrow">Free Website Audit</div>
          <h1>Find the leaks costing you rankings, leads, and sales.</h1>
          <p>
            Tell us about your business and what feels stuck. We will check
            speed, crawlability, on-page SEO, AI search readiness, and
            conversion friction, then send the report to your inbox.
          </p>
          <div className="audit-checks">
            {auditChecks.map((check) => (
              <span key={check}>{check}</span>
            ))}
          </div>
        </div>
        <div className="audit-hero-card">
          <Suspense fallback={<div className="standalone-audit-form" />}>
            <FreeAuditForm />
          </Suspense>
        </div>
      </section>

      <section className="marketing-split">
        <div>
          <p className="marketing-eyebrow">What you get</p>
          <h2>A plain-English report, not a mystery spreadsheet.</h2>
        </div>
        <div className="marketing-copy">
          <p>
            The audit is designed to show what is stopping the site from being
            found, understood, and trusted. It combines automated checks with AI
            analysis so the recommendations are easier to act on.
          </p>
          <p>
            If you want help prioritizing the fixes, book a call and we will
            walk through what is worth doing now versus later.
          </p>
          <Link
            className="marketing-link"
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a call instead
          </Link>
        </div>
      </section>
    </main>
  );
}
