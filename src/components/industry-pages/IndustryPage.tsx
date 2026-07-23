import type { Metadata } from "next";
import Link from "next/link";
import {
  EastsideFinalCta,
  EastsideIcon,
  EastsideRelatedLinks,
  EastsideSectionHeading,
} from "@/components/bellevue-services/BellevueServiceShared";
import { BellevueServiceFaqs } from "@/components/bellevue-services/BellevueServiceFaqs";
import type { IndustryCard, IndustryPageConfig } from "@/content/industryPages";
import "@/components/bellevue-services/bellevue-services.css";
import "./industry-pages.css";

const siteUrl = "https://rankitglobally.com";

export function createIndustryMetadata(config: IndustryPageConfig): Metadata {
  const pageUrl = `${siteUrl}/industries/${config.slug}`;

  return {
    title: config.metadataTitle,
    description: config.description,
    alternates: { canonical: pageUrl },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: config.metadataTitle,
      description: config.description,
      siteName: "Rank It Globally",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadataTitle,
      description: config.description,
    },
  };
}

function IndustryCardView({ card, className = "" }: { card: IndustryCard; className?: string }) {
  return (
    <article className={`industry-card ${className}`.trim()}>
      <div className="industry-card-icon">
        <EastsideIcon name={card.icon} />
      </div>
      <h3>{card.title}</h3>
      <p>{card.body}</p>
      {card.tags?.length ? (
        <ul className="industry-tag-list" aria-label={`${card.title} includes`}>
          {card.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      ) : null}
    </article>
  );
}

function createSchema(config: IndustryPageConfig) {
  const pageUrl = `${siteUrl}/industries/${config.slug}`;
  const organizationId = `${siteUrl}/#organization`;
  const serviceId = `${pageUrl}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId,
        name: config.shortName,
        description: config.description,
        url: pageUrl,
        serviceType: config.shortName,
        areaServed: { "@type": "Place", name: "Worldwide" },
        provider: {
          "@type": "Organization",
          "@id": organizationId,
          name: "Rank It Globally",
          url: siteUrl,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${config.shortName} services`,
          itemListElement: config.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.body,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: config.shortName, item: pageUrl },
        ],
      },
    ],
  };
}

export function IndustryPage({ config }: { config: IndustryPageConfig }) {
  const schema = createSchema(config);

  return (
    <main className="marketing-page eastside-page industry-page" data-theme={config.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />

      <section className="marketing-hero industry-hero">
        <div className="industry-hero-copy">
          <p className="marketing-eyebrow">{config.eyebrow}</p>
          <h1>
            {config.heroLead} <span className="gtext">{config.heroAccent}</span>
          </h1>
          <p className="marketing-lead">{config.heroBody}</p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/free-audit">
              Get My Free Audit <span className="ar">→</span>
            </Link>
            <Link className="marketing-link" href="/case-studies">See our work</Link>
          </div>
        </div>

        <div className="industry-hero-panel" aria-label={config.heroLabel}>
          <div className="industry-panel-grid" aria-hidden="true" />
          <p className="eastside-panel-label">{config.heroLabel}</p>
          <div className="industry-signal-path">
            {config.heroSignals.map((signal, index) => (
              <div className="industry-signal" key={signal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{signal}</strong>
              </div>
            ))}
          </div>
          <div className="industry-panel-outcome">
            <span>Outcome</span>
            <strong>{config.heroOutcome}</strong>
          </div>
        </div>
      </section>

      <section className="industry-section industry-section-light">
        <EastsideSectionHeading eyebrow="Where growth gets stuck" title={config.challengeTitle} accent={config.challengeAccent}>
          {config.challengeBody}
        </EastsideSectionHeading>
        <div className="industry-challenge-grid">
          {config.challenges.map((card) => <IndustryCardView card={card} key={card.title} />)}
        </div>
      </section>

      <section className="industry-section industry-section-dark">
        <EastsideSectionHeading eyebrow="Connected capabilities" title={config.servicesTitle} accent={config.servicesAccent}>
          {config.servicesBody}
        </EastsideSectionHeading>
        <div className="industry-service-grid">
          {config.services.map((card) => <IndustryCardView card={card} className="industry-service-card" key={card.title} />)}
        </div>
      </section>

      <section className="industry-section industry-section-soft">
        <EastsideSectionHeading eyebrow="How the work moves" title={config.workflowTitle} accent={config.workflowAccent}>
          {config.workflowBody}
        </EastsideSectionHeading>
        <div className="industry-workflow">
          {config.workflow.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="industry-section industry-section-light">
        <EastsideSectionHeading eyebrow="Channel opportunities" title={config.opportunitiesTitle} accent={config.opportunitiesAccent}>
          {config.opportunitiesBody}
        </EastsideSectionHeading>
        <div className="industry-opportunity-grid">
          {config.opportunities.map((card) => <IndustryCardView card={card} className="industry-opportunity-card" key={card.title} />)}
        </div>
      </section>

      <section className="industry-section industry-section-proof">
        <EastsideSectionHeading eyebrow="Evidence over activity" title={config.proofTitle} accent={config.proofAccent}>
          {config.proofBody}
        </EastsideSectionHeading>
        <div className="industry-proof-grid">
          {config.proof.map((item, index) => (
            <article key={item.title}>
              <div className="industry-proof-head">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.kicker}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="industry-audience" aria-labelledby={`${config.slug}-audience-title`}>
        <div>
          <p className="marketing-eyebrow">Who this can support</p>
          <h2 id={`${config.slug}-audience-title`}>Built around the way your <span className="gtext">buyers decide.</span></h2>
        </div>
        <ul className="eastside-chip-list">
          {config.audiences.map((audience) => <li key={audience}>{audience}</li>)}
        </ul>
      </section>

      <section className="industry-section industry-section-faq" aria-labelledby={`${config.slug}-faq-title`}>
        <EastsideSectionHeading eyebrow="Questions before you start" title="Clear answers for" accent="better decisions." />
        <h2 className="sr-only" id={`${config.slug}-faq-title`}>{config.shortName} frequently asked questions</h2>
        <BellevueServiceFaqs items={config.faqs} idPrefix={config.slug} />
      </section>

      <EastsideRelatedLinks
        title="Connect the next"
        accent="part of the journey."
        links={config.related}
        ariaLabel={`${config.shortName} related services and resources`}
      />

      <EastsideFinalCta
        eyebrow={config.ctaEyebrow}
        title={config.ctaTitle}
        accent={config.ctaAccent}
        body={config.ctaBody}
      />
    </main>
  );
}
