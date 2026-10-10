import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BellevueServiceFaqs } from "@/components/bellevue-services/BellevueServiceFaqs";
import { EastsideIcon, EastsideSectionHeading } from "@/components/bellevue-services/BellevueServiceShared";
import { organizationId, siteUrl, whatsappHref, whatsappLabel } from "@/content/organization";
import { publicProjects } from "@/content/publicPages";
import { industryNavLinks, serviceNavLinks } from "@/content/siteNav";
import type { ProofItem, SectionHeading, ServicePageContent } from "@/content/services/types";
import { plainText, RichText } from "./RichText";
import "@/components/bellevue-services/bellevue-services.css";
import "./service-pages.css";

const shareImage = "/assets/brand/favicon.png";

export function createServiceMetadata(page: ServicePageContent): Metadata {
  const canonical = `${siteUrl}/${page.slug}`;

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: "Rank It Globally",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      site: "@rankitglobally",
      title: page.title,
      description: page.description,
      images: [shareImage],
    },
  };
}

function ServiceSchema({ page }: { page: ServicePageContent }) {
  const pageUrl = `${siteUrl}/${page.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.name,
      serviceType: page.serviceType,
      description: page.description,
      url: pageUrl,
      areaServed: { "@type": "Country", name: "United States" },
      provider: {
        "@type": "Organization",
        "@id": organizationId,
        name: "Rank It Globally",
        url: siteUrl,
        email: "hello@rankitglobally.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: plainText(faq.answer) },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
        { "@type": "ListItem", position: 3, name: page.name, item: pageUrl },
      ],
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="svc-whatsapp-icon">
      <path d="M12.04 2.2c-5.35 0-9.7 4.25-9.7 9.49 0 1.84.54 3.58 1.48 5.03L2.3 21.8l5.25-1.46a9.86 9.86 0 0 0 4.49 1.1c5.35 0 9.7-4.25 9.7-9.5s-4.35-9.74-9.7-9.74Zm0 17.6a8.12 8.12 0 0 1-4.12-1.13l-.3-.18-3.12.87.9-3.02-.2-.31a7.76 7.76 0 0 1-1.2-4.09c0-4.35 3.6-7.89 8.04-7.89s8.05 3.54 8.05 7.9c0 4.34-3.61 7.85-8.05 7.85Zm4.4-5.91c-.24-.12-1.42-.69-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.63-1.2-1.41-1.34-1.65-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.75-.19-.46-.39-.39-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.16 1.69 2.54 4.1 3.56.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function WhatsAppLink({ className }: { className: string }) {
  return (
    <a className={className} href={whatsappHref} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      {whatsappLabel}
    </a>
  );
}

function Heading({ heading, id }: { heading: SectionHeading; id?: string }) {
  return (
    <div id={id}>
      <EastsideSectionHeading eyebrow={heading.eyebrow} title={heading.title} accent={heading.accent}>
        <RichText text={heading.intro} />
      </EastsideSectionHeading>
    </div>
  );
}

function ProofFigure({ item }: { item: ProofItem }) {
  return (
    <figure className="svc-proof-figure">
      {item.screenshot ? (
        <Image
          src={item.screenshot.src}
          alt={item.alt}
          width={item.screenshot.width}
          height={item.screenshot.height}
          loading="lazy"
          sizes="(max-width: 980px) 100vw, 50vw"
        />
      ) : (
        <div className="svc-proof-slot" role="img" aria-label={item.alt}>
          <span className="svc-proof-slot-source">{item.source}</span>
          <dl>
            {item.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          {item.footnote ? <p className="svc-proof-slot-footnote">{item.footnote}</p> : null}
        </div>
      )}
    </figure>
  );
}

export function ServiceDetailPage({ page }: { page: ServicePageContent }) {
  const relatedServices = page.relatedServices
    .map((href) => serviceNavLinks.find((service) => service.href === href))
    .filter((service) => service !== undefined);
  const projects = (page.proof.projectSlugs ?? [])
    .map((slug) => publicProjects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <main className={`marketing-page eastside-page service-page svc-page service-page--${page.theme}`}>
      <ServiceSchema page={page} />

      {/* 1. Hero */}
      <section className="marketing-hero eastside-hero service-page-hero svc-hero">
        <div className="eastside-hero-copy">
          <div className="svc-breadcrumbs" role="navigation" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li aria-current="page">{page.name}</li>
            </ol>
          </div>
          <p className="marketing-eyebrow">{page.heroPromise}</p>
          <h1>
            {page.h1Lead} <span className="gtext">{page.h1Accent}</span>
          </h1>
          <p>{page.heroIntro}</p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/growth-audit">
              {page.ctaLabel} <span className="ar">→</span>
            </Link>
            <WhatsAppLink className="marketing-link svc-whatsapp-link" />
          </div>
          <ul className="svc-proof-strip" aria-label="Results from client work">
            {page.proofStrip.map((stat) => (
              <li key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`service-page-visual service-page-visual--${page.theme}`} aria-hidden="true">
          <div className="service-page-visual-topline">
            <span>{page.heroPanel.label}</span>
            <span className="service-page-live-dot">Active</span>
          </div>
          <div className="service-page-visual-flow">
            {page.heroPanel.steps.map((step, index) => (
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
              <small>What we work toward</small>
              <strong>{page.heroPanel.outcome}</strong>
            </span>
          </div>
          <span className="service-page-orbit service-page-orbit-one" />
          <span className="service-page-orbit service-page-orbit-two" />
        </div>
      </section>

      {/* 2. The problem */}
      <section className="eastside-section eastside-section--soft">
        <Heading heading={page.problem} />
        <div className="eastside-signal-grid svc-problem-grid">
          {page.problem.points.map((point) => (
            <article className="eastside-signal-card" key={point.title}>
              <h3 className="svc-card-title">{point.title}</h3>
              <p><RichText text={point.body} /></p>
            </article>
          ))}
        </div>
      </section>

      {/* 3. What's included */}
      <section className="eastside-section eastside-section--dark service-page-services">
        <Heading heading={page.included} />
        <div className="eastside-service-grid">
          {page.included.items.map((item) => (
            <article className="eastside-service-card" key={item.title}>
              <span className="eastside-service-icon"><EastsideIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p><RichText text={item.body} /></p>
            </article>
          ))}
        </div>
        {page.included.features?.map((feature) => (
          <div className="svc-feature-block" id={feature.id} key={feature.id}>
            <h3>{feature.title}</h3>
            <div className="svc-feature-body">
              <div>
                {feature.paragraphs.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
              </div>
              <ul>
                {feature.bullets.map((bullet) => <li key={bullet}><RichText text={bullet} /></li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* 4. How it works */}
      <section className="eastside-section service-page-workflow-section">
        <Heading heading={page.timeline} />
        <ol className="eastside-workflow service-page-workflow svc-timeline">
          {page.timeline.steps.map((step, index) => (
            <li key={step.period}>
              <span className="eastside-workflow-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="svc-timeline-period">{step.period}</p>
              <h3>{step.title}</h3>
              <p><RichText text={step.body} /></p>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Proof */}
      <section className="eastside-section eastside-section--soft svc-proof-section">
        <Heading heading={page.proof} />
        {page.proof.items.length ? (
          <div className={page.proof.items.length > 1 ? "svc-proof-grid svc-proof-grid--pair" : "svc-proof-grid"}>
            {page.proof.items.map((item) => (
              <article className="svc-proof-card" key={item.title}>
                <ProofFigure item={item} />
                <div className="svc-proof-copy">
                  {item.screenshot ? <span className="eastside-card-kicker">{item.source}</span> : null}
                  <h3>{item.title}</h3>
                  {item.body.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
                </div>
              </article>
            ))}
          </div>
        ) : null}
        {projects.length ? (
          <ul className="svc-project-grid" aria-label="Selected projects">
            {projects.map((project) => (
              <li key={project.slug}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="svc-project-card">
                  <span className="svc-project-shot">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} homepage screenshot`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </span>
                  <span className="svc-project-meta">
                    <strong>{project.name}</strong>
                    <small>{project.platform} · {project.result}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        {page.proof.checklist ? (
          <div className="svc-checklist">
            <h3>{page.proof.checklist.title}</h3>
            <p>{page.proof.checklist.intro}</p>
            <ol>
              {page.proof.checklist.items.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        <p className="svc-proof-closing">
          {page.proof.closing ? <><RichText text={page.proof.closing} />{" "}</> : null}
          <Link href="/case-studies">Browse more of our work on the Case Studies page</Link>.
        </p>
      </section>

      {/* 6. Industries */}
      <section className="eastside-section svc-industries">
        <Heading heading={page.industries} />
        <ul className="svc-industry-grid">
          {industryNavLinks.map((industry) => (
            <li key={industry.href}>
              <Link href={industry.href}>
                <strong>{industry.label}</strong>
                <small>{industry.description}</small>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Pricing signal */}
      {/* TODO(owner): add "Plans from $X/month" if the owner wants a price signal. */}

      {/* 8. Why Rank It Globally */}
      <section className="eastside-section eastside-section--dark svc-compare-section">
        <Heading heading={page.comparison} />
        <div className="svc-compare-wrap">
          <table className="svc-compare">
            <caption className="svc-visually-hidden">How Rank It Globally compares with a typical agency, a freelancer and doing it yourself</caption>
            <thead>
              <tr>
                <th scope="col"><span className="svc-visually-hidden">What you get</span></th>
                <th scope="col" className="svc-compare-us">Rank It Globally</th>
                <th scope="col">Typical agency</th>
                <th scope="col">Freelancer</th>
                <th scope="col">DIY</th>
              </tr>
            </thead>
            <tbody>
              {page.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="svc-compare-us" data-label="Rank It Globally"><span className="svc-check" aria-hidden="true">✓</span>{row.rig}</td>
                  <td data-label="Typical agency">{row.agency}</td>
                  <td data-label="Freelancer">{row.freelancer}</td>
                  <td data-label="DIY">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="eastside-section service-page-faqs">
        <EastsideSectionHeading eyebrow="Straight answers" title="Frequently asked" accent="questions">
          {page.faqIntro}
        </EastsideSectionHeading>
        <BellevueServiceFaqs items={page.faqs} idPrefix={page.slug} renderedAnswers={page.faqs.map((faq) => <RichText key={faq.question} text={faq.answer} />)} />
      </section>

      {/* 10. Related guides */}
      <section className="eastside-related-panel svc-related" aria-labelledby={`${page.slug}-related-title`}>
        <div className="eastside-related-intro">
          <p className="marketing-eyebrow">Keep reading</p>
          <h2 id={`${page.slug}-related-title`}>
            Related <span className="gtext">guides</span>
          </h2>
          <p>Plain-English guides from our blog, plus the services that usually work alongside this one.</p>
        </div>
        <div className="svc-related-lists">
          <ul className="eastside-related-grid" aria-label="Related guides">
            {page.guides.map((guide, index) => (
              <li key={guide.href}>
                <Link href={guide.href}>
                  <span className="eastside-related-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{guide.label}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span className="eastside-related-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="svc-related-subhead">Related services</h3>
          <ul className="svc-related-services">
            {relatedServices.map((service) => (
              <li key={service.href}>
                <Link href={service.href}>{service.label} <span aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="eastside-final-cta">
        <div className="eastside-cta-map" aria-hidden="true">
          <span className="eastside-cta-route eastside-cta-route-one" />
          <span className="eastside-cta-route eastside-cta-route-two" />
          <span className="eastside-cta-pin eastside-cta-pin-one" />
          <span className="eastside-cta-pin eastside-cta-pin-two" />
          <span className="eastside-cta-pin eastside-cta-pin-three" />
        </div>
        <p className="marketing-eyebrow">{page.finalCta.eyebrow}</p>
        <h2>
          {page.finalCta.title} <span>{page.finalCta.accent}</span>
        </h2>
        <p>{page.finalCta.body}</p>
        <div className="marketing-actions">
          <Link className="cta-e cta-e-lg" href="/growth-audit">
            {page.ctaLabel} <span className="ar">→</span>
          </Link>
          <WhatsAppLink className="marketing-link svc-whatsapp-link" />
        </div>
      </section>
    </main>
  );
}
