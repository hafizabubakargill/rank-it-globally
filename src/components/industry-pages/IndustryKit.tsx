import type { Metadata } from "next";
import Link from "next/link";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { Ctas, Head } from "@/components/service-pages/kit/Kit";
import { StickyCta } from "@/components/service-pages/kit/StickyCta";
import { plainText, RichText } from "@/components/service-pages/RichText";
import type { IndustryCore } from "@/content/industries/types";
import { organizationAddress, organizationId, organizationSchema, siteUrl, whatsappHref } from "@/content/organization";
import "./industry-kit.css";

const shareImage = "/assets/brand/favicon.png";

export function createIndustryMetadata(page: IndustryCore): Metadata {
  const canonical = `${siteUrl}${page.path}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { type: "website", url: canonical, title: page.title, description: page.description, siteName: "Rank It Globally", images: [shareImage] },
    twitter: { card: "summary_large_image", site: "@rankitglobally", title: page.title, description: page.description, images: [shareImage] },
  };
}

// ProfessionalService for the agency (WhatsApp is a messaging line, so it is a
// ContactPoint URL, not a `telephone`), the industry Service, a FAQPage that
// mirrors the visible FAQ word for word, and the breadcrumb trail.
export function IndustrySchema({ page }: { page: IndustryCore }) {
  const pageUrl = `${siteUrl}${page.path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "Rank It Globally",
      url: siteUrl,
      email: "hello@rankitglobally.com",
      logo: organizationSchema.logo,
      image: organizationSchema.logo,
      address: organizationAddress,
      areaServed: { "@type": "Country", name: "United States" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@rankitglobally.com",
        url: whatsappHref,
        description: "WhatsApp messages only. This number does not take calls.",
        availableLanguage: "English",
      },
      sameAs: organizationSchema.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.name,
      serviceType: page.name,
      description: page.description,
      url: pageUrl,
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "BusinessAudience", audienceType: page.hub.audiences.join(", ") },
      provider: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: plainText(faq.answer) } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
        { "@type": "ListItem", position: 3, name: page.name, item: pageUrl },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function IndustryPageShell({ page, children }: { page: IndustryCore; children: React.ReactNode }) {
  return (
    <main className="sv-page in-page" id="main-content">
      <IndustrySchema page={page} />
      {children}
      <StickyCta label={page.ctaLabel} text={page.sticky} whatsappHref={whatsappHref} />
    </main>
  );
}

export function IndustryHero({ page, visual }: { page: IndustryCore; visual: React.ReactNode }) {
  return (
    <header className="sv-hero">
      <div className="sv-wrap sv-hero-grid">
        <div>
          <div className="sv-crumbs" role="navigation" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li aria-current="page">{page.name}</li>
            </ol>
          </div>
          <p className="sv-eyebrow">{page.heroPromise}</p>
          <h1>
            {page.h1Lead} <span className="sv-hl">{page.h1Accent}</span>
          </h1>
          <p className="sv-hero-intro">{page.heroIntro}</p>
          <Ctas page={page} />
          <p className="sv-micro">{page.ctaMicro}</p>
          <ul className="in-chips" aria-label="What the free audit covers">
            {page.auditChips.map((chip) => <li key={chip}>{chip}</li>)}
          </ul>
        </div>
        {visual}
      </div>
    </header>
  );
}

// Illustration with invented sample content (names, messages, ratings). It is
// flagged data-placeholder and captioned as an example, per the brief.
export function ExampleIllustration({ label, className = "", note = "Example screen, not live data.", children }: { label: string; className?: string; note?: string; children: React.ReactNode }) {
  return (
    <figure className={`sv-illo ${className}`.trim()} data-placeholder="true">
      <div role="img" aria-label={label}>
        <div aria-hidden="true">{children}</div>
      </div>
      <figcaption className="in-example-note">{note}</figcaption>
    </figure>
  );
}

export function Segments({ segments }: { segments: IndustryCore["segments"] }) {
  return (
    <>
      <p className="sv-swipe-hint" aria-hidden="true">Swipe to see more →</p>
      <div className="in-segments">
        {segments.items.map((item) => (
          <article className="sv-card in-segment" key={item.name}>
            <div className="in-segment-top">
              <span className="sv-scenario-avatar" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <span>
                <h3>{item.name}</h3>
                <small>{item.examples}</small>
              </span>
            </div>
            <p className="in-segment-pain"><RichText text={item.pain} /></p>
            <p className="in-segment-fix"><RichText text={item.fix} /></p>
          </article>
        ))}
      </div>
    </>
  );
}

export function Rules({ rules }: { rules: IndustryCore["rules"] }) {
  return (
    <>
      <ol className="in-rules">
        {rules.items.map((rule, index) => (
          <li className="sv-card" key={rule.title}>
            <span className="in-rule-n" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{rule.title}</h3>
            <p><RichText text={rule.body} /></p>
          </li>
        ))}
      </ol>
      <p className="in-rules-note"><RichText text={rules.note} /></p>
    </>
  );
}

export function Plan({ page }: { page: IndustryCore }) {
  const { plan } = page;
  return (
    <div className="in-plan">
      <div className="in-plan-copy">
        <Head heading={plan} />
      </div>
      <article className="in-plan-card" aria-labelledby={`${page.slug}-plan`}>
        <p className="in-plan-kicker">One plan, built around your audit</p>
        <h3 id={`${page.slug}-plan`}>{plan.name}</h3>
        <p className="in-plan-summary">{plan.summary}</p>
        <ul className="sv-final-list">
          {plan.includes.map((item) => <li key={item}><RichText text={item} /></li>)}
        </ul>
        <p className="in-plan-price"><strong>Pricing:</strong> {plan.note}</p>
        <Link className="sv-btn" href="#audit">{page.ctaLabel} <span aria-hidden="true">→</span></Link>
      </article>
    </div>
  );
}
