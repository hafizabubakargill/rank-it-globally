import Link from "next/link";
import type { ServicePageConfig } from "@/content/servicePages";
import { BellevueServiceFaqs } from "@/components/bellevue-services/BellevueServiceFaqs";
import {
  EastsideFinalCta,
  EastsideIcon,
  EastsideRelatedLinks,
  EastsideSectionHeading,
} from "@/components/bellevue-services/BellevueServiceShared";
import "@/components/bellevue-services/bellevue-services.css";
import "./service-pages.css";

const siteUrl = "https://rankitglobally.com";

function ServiceHeroVisual({ config }: { config: ServicePageConfig }) {
  return (
    <div className={`service-page-visual service-page-visual--${config.theme}`} aria-hidden="true">
      <div className="service-page-visual-topline">
        <span>{config.heroLabel}</span>
        <span className="service-page-live-dot">Active</span>
      </div>
      <div className="service-page-visual-flow">
        {config.heroSteps.map((step, index) => (
          <div className="service-page-flow-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="service-page-visual-result">
        <span className="service-page-result-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 17 9 12l3 3 7-8" />
            <path d="M14 7h5v5" />
          </svg>
        </span>
        <span>
          <small>Connected outcome</small>
          <strong>{config.heroOutcome}</strong>
        </span>
      </div>
      <span className="service-page-orbit service-page-orbit-one" />
      <span className="service-page-orbit service-page-orbit-two" />
    </div>
  );
}

function ServiceSchema({ config }: { config: ServicePageConfig }) {
  const pageUrl = `${siteUrl}/${config.slug}/`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.shortName,
    description: config.description,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Rank It Globally",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${config.shortName} deliverables`,
      itemListElement: config.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.body,
        },
      })),
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: config.shortName, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function ServicePage({ config }: { config: ServicePageConfig }) {
  return (
    <main className={`marketing-page eastside-page service-page service-page--${config.theme}`}>
      <ServiceSchema config={config} />

      <section className="marketing-hero eastside-hero service-page-hero">
        <div className="eastside-hero-copy">
          <p className="marketing-eyebrow">{config.eyebrow}</p>
          <h1>
            {config.heroLead} <span className="gtext">{config.heroAccent}</span>
          </h1>
          <p>{config.heroBody}</p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/free-audit">
              Get My Free Audit <span className="ar">→</span>
            </Link>
            <Link className="marketing-link" href="/case-studies">
              Explore our work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <ServiceHeroVisual config={config} />
      </section>

      <section className="eastside-section eastside-section--dark service-page-services">
        <EastsideSectionHeading eyebrow={config.servicesEyebrow} title={config.servicesTitle} accent={config.servicesAccent}>
          {config.servicesBody}
        </EastsideSectionHeading>
        <div className="eastside-service-grid">
          {config.services.map((service) => (
            <article className="eastside-service-card" key={service.title}>
              <span className="eastside-service-icon"><EastsideIcon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul className="eastside-tag-list" aria-label={`${service.title} capabilities`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft">
        <EastsideSectionHeading eyebrow={config.insightEyebrow} title={config.insightTitle} accent={config.insightAccent}>
          {config.insightBody}
        </EastsideSectionHeading>
        <div className="eastside-signal-grid">
          {config.insights.map((insight) => (
            <article className="eastside-signal-card" key={insight.title}>
              <span className="eastside-card-kicker">{insight.kicker}</span>
              <strong>{insight.title}</strong>
              <p>{insight.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section service-page-workflow-section">
        <EastsideSectionHeading eyebrow={config.workflowEyebrow} title={config.workflowTitle} accent={config.workflowAccent}>
          {config.workflowBody}
        </EastsideSectionHeading>
        <ol className="eastside-workflow service-page-workflow">
          {config.workflow.map((step, index) => (
            <li key={step.title}>
              <span className="eastside-workflow-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="eastside-section eastside-section--dark service-page-comparison">
        <EastsideSectionHeading eyebrow={config.comparisonEyebrow} title={config.comparisonTitle} accent={config.comparisonAccent}>
          {config.comparisonBody}
        </EastsideSectionHeading>
        <div className="eastside-comparison-grid">
          {config.comparisons.map((comparison) => (
            <article className="eastside-comparison-card" key={comparison.title}>
              <span className="eastside-card-kicker">{comparison.kicker}</span>
              <h3>{comparison.title}</h3>
              <p>{comparison.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft service-page-ecosystem">
        <EastsideSectionHeading eyebrow={config.ecosystemEyebrow} title={config.ecosystemTitle} accent={config.ecosystemAccent}>
          {config.ecosystemBody}
        </EastsideSectionHeading>
        <ul className="eastside-chip-list service-page-chip-list">
          {config.ecosystem.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
          ))}
        </ul>
      </section>

      <section className="eastside-section service-page-faqs">
        <EastsideSectionHeading eyebrow="Questions before choosing a scope" title="Clear answers," accent="before the work begins.">
          Understand how the service operates, what affects timing, and where it fits in a connected growth system.
        </EastsideSectionHeading>
        <BellevueServiceFaqs items={config.faqs} idPrefix={config.slug} />
      </section>

      <EastsideRelatedLinks title="Connect the next" accent="part of the journey." links={config.related} />
      <EastsideFinalCta eyebrow={config.ctaEyebrow} title={config.ctaTitle} accent={config.ctaAccent} body={config.ctaBody} />
    </main>
  );
}
