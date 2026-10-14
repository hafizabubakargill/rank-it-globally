import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FreeAuditForm from "@/components/FreeAuditForm";
import { BellevueServiceFaqs } from "@/components/bellevue-services/BellevueServiceFaqs";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { organizationId, siteUrl, whatsappHref, whatsappLabel } from "@/content/organization";
import { publicProjects } from "@/content/publicPages";
import { industryNavLinks, serviceNavLinks, type SiteNavIcon } from "@/content/siteNav";
import type { ComparisonRow, PageCommon, ProofItem, Scenario, SectionHeading, ServiceCore } from "@/content/services/types";
import { plainText, RichText } from "../RichText";
import { StickyCta } from "./StickyCta";
import "@/components/bellevue-services/bellevue-services.css";
import "./kit.css";

const shareImage = "/assets/brand/favicon.png";

export function createServiceMetadata(page: ServiceCore): Metadata {
  const canonical = `${siteUrl}/${page.slug}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { type: "website", url: canonical, title: page.title, description: page.description, siteName: "Rank It Globally", images: [shareImage] },
    twitter: { card: "summary_large_image", site: "@rankitglobally", title: page.title, description: page.description, images: [shareImage] },
  };
}

export function ServiceSchema({ page }: { page: ServiceCore }) {
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
      provider: { "@type": "Organization", "@id": organizationId, name: "Rank It Globally", url: siteUrl, email: "hello@rankitglobally.com" },
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
        { "@type": "ListItem", position: 3, name: page.name, item: pageUrl },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ---------- Page shell ---------- */


export function ServicePageShell({ page, children }: { page: ServiceCore; children: React.ReactNode }) {
  return (
    <main className="sv-page" id="main-content">
      <ServiceSchema page={page} />
      {children}
      <StickyCta label={page.ctaLabel} text={page.sticky} whatsappHref={whatsappHref} />
    </main>
  );
}

export function Section({
  tone,
  id,
  className = "",
  labelledBy,
  children,
}: {
  tone: "ink" | "tint" | "mesh" | "dots" | "accent";
  id?: string;
  className?: string;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`sv-sec sv-sec--${tone} ${className}`.trim()} aria-labelledby={labelledBy}>
      <div className="sv-wrap">{children}</div>
    </section>
  );
}

export function Head({ heading, center = false, id }: { heading: SectionHeading; center?: boolean; id?: string }) {
  return (
    <div className={center ? "sv-head sv-head--center" : "sv-head"}>
      <p className="sv-eyebrow">{heading.eyebrow}</p>
      <h2 id={id}>
        {heading.title} <span className="sv-hl">{heading.accent}</span>
      </h2>
      {heading.intro ? <p><RichText text={heading.intro} /></p> : null}
    </div>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="sv-wa-icon">
      <path d="M12.04 2.2c-5.35 0-9.7 4.25-9.7 9.49 0 1.84.54 3.58 1.48 5.03L2.3 21.8l5.25-1.46a9.86 9.86 0 0 0 4.49 1.1c5.35 0 9.7-4.25 9.7-9.5s-4.35-9.74-9.7-9.74Zm0 17.6a8.12 8.12 0 0 1-4.12-1.13l-.3-.18-3.12.87.9-3.02-.2-.31a7.76 7.76 0 0 1-1.2-4.09c0-4.35 3.6-7.89 8.04-7.89s8.05 3.54 8.05 7.9c0 4.34-3.61 7.85-8.05 7.85Zm4.4-5.91c-.24-.12-1.42-.69-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.63-1.2-1.41-1.34-1.65-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.75-.19-.46-.39-.39-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.16 1.69 2.54 4.1 3.56.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function Ctas({ page, light = false }: { page: Pick<PageCommon, "ctaLabel">; light?: boolean }) {
  return (
    <div className="sv-actions">
      <Link className={light ? "sv-btn sv-btn--light" : "sv-btn"} href="#audit">
        {page.ctaLabel} <span aria-hidden="true">→</span>
      </Link>
      <a className="sv-btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {whatsappLabel}
      </a>
    </div>
  );
}

/* ---------- Hero ---------- */

export function Hero({ page, visual }: { page: ServiceCore; visual: React.ReactNode }) {
  return (
    <header className="sv-hero">
      <div className="sv-wrap sv-hero-grid">
        <div>
          <div className="sv-crumbs" role="navigation" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
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
          <ul className="sv-strip" aria-label="Results from client work">
            {page.proofStrip.map((stat) => (
              <li key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
        {visual}
      </div>
    </header>
  );
}

/* ---------- Illustration frame ---------- */

export function Illustration({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <figure className={`sv-illo ${className}`.trim()} role="img" aria-label={label}>
      <div aria-hidden="true">{children}</div>
    </figure>
  );
}

/* ---------- Problem ---------- */

export function PainCards({ problem }: { problem: ServiceCore["problem"] }) {
  return (
    <div className="sv-pain-grid">
      {problem.points.map((point) => (
        <article className="sv-card sv-pain" key={point.quote}>
          <h3 className="sv-pain-quote">{point.quote}</h3>
          <p><RichText text={point.body} /></p>
          <p className="sv-pain-fix"><RichText text={point.fix} /></p>
        </article>
      ))}
    </div>
  );
}

/* ---------- Included ---------- */

export function Bento({
  items,
  layout,
  visuals = {},
}: {
  items: ServiceCore["included"]["items"];
  layout?: ("wide" | "tall" | "full" | "")[];
  visuals?: Record<number, React.ReactNode>;
}) {
  return (
    <div className="sv-bento">
      {items.map((item, index) => {
        const size = layout?.[index] ?? "";
        return (
          <article className={`sv-card sv-bento-item${size ? ` sv-bento-item--${size}` : ""}`} key={item.title}>
            <span className="sv-bento-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
            <h3>{item.title}</h3>
            <p><RichText text={item.body} /></p>
            {visuals[index] ? <div className="sv-bento-visual" aria-hidden="true">{visuals[index]}</div> : null}
          </article>
        );
      })}
    </div>
  );
}

/* ---------- Timeline ---------- */

export function Timeline({ steps }: { steps: ServiceCore["timeline"]["steps"] }) {
  return (
    <ol className="sv-track">
      {steps.map((step, index) => (
        <li className="sv-card" key={step.period}>
          <span className="sv-track-dot" aria-hidden="true">{index + 1}</span>
          <p className="sv-track-period">{step.period}</p>
          <h3>{step.title}</h3>
          <p><RichText text={step.body} /></p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- CTA band ---------- */

export function CtaBand({ page }: { page: PageCommon }) {
  return (
    <div className="sv-wrap sv-band-wrap">
      <aside className="sv-band" aria-label="Free audit offer">
        <div>
          <h2>{page.midCta.title}</h2>
          <p>{page.midCta.body}</p>
        </div>
        <Link className="sv-btn sv-btn--light" href="#audit">
          {page.ctaLabel} <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </div>
  );
}

/* ---------- Proof ---------- */

export function DataCard({ item }: { item: ProofItem }) {
  return (
    <article className="sv-card sv-data">
      {/* Shows the real numbers until the unedited screenshot is added (see TODOs in shared.ts). */}
      <span className="sv-data-source">{item.source}</span>
      <dl aria-label={item.alt}>
        {item.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <h3>{item.title}</h3>
      {item.body.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
      {item.footnote ? <p className="sv-data-foot">{item.footnote}</p> : null}
    </article>
  );
}

export function ProofClosing({ closing }: { closing?: string }) {
  return (
    <p className="sv-proof-closing" style={{ marginTop: "1.5rem" }}>
      {closing ? <><RichText text={closing} />{" "}</> : null}
      <Link href="/case-studies">Browse more of our work on the Case Studies page</Link>.
    </p>
  );
}

export function ProjectGrid({ slugs }: { slugs: string[] }) {
  const projects = slugs
    .map((slug) => publicProjects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
  return (
    <ul className="sv-projects" aria-label="Selected projects">
      {projects.map((project) => (
        <li key={project.slug}>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="sv-project">
            <span className="sv-project-shot">
              <Image src={project.screenshot} alt={`${project.name} homepage screenshot`} fill loading="lazy" sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw" />
            </span>
            <span className="sv-project-meta">
              <strong>{project.name}</strong>
              <small>{project.platform} · {project.result}</small>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Scenarios ---------- */

export function Scenarios({ items }: { items: Scenario[] }) {
  return (
    <>
      <p className="sv-swipe-hint" aria-hidden="true">Swipe to see more examples →</p>
      <div className="sv-scenarios">
        {items.map((item) => (
          <article className="sv-card sv-scenario" key={item.business}>
            <div className="sv-scenario-top">
              <span className="sv-scenario-avatar" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <span>
                <h3>{item.business}</h3>
                <small>{item.where}</small>
              </span>
            </div>
            <dl>
              <div><dt>Where they are</dt><dd>{item.situation}</dd></div>
              <div><dt>What they want</dt><dd>{item.goal}</dd></div>
              <div><dt>What we&apos;d do first</dt><dd><RichText text={item.plan} /></dd></div>
            </dl>
          </article>
        ))}
      </div>
      <p className="sv-scenario-note">Typical examples, not client case studies.</p>
    </>
  );
}

/* ---------- Industries ---------- */

function IndustryIcon({ name }: { name: SiteNavIcon }) {
  const paths: Partial<Record<SiteNavIcon, React.ReactNode>> = {
    law: <path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7ZM7 21h10" />,
    medical: <><path d="M8 3v5a4 4 0 0 0 8 0V3M5 3v6a7 7 0 0 0 14 0V3" /><path d="M12 16v1a4 4 0 0 0 8 0v-2" /><circle cx="20" cy="13" r="2" /></>,
    tech: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    store: <><path d="M4 10h16M5 10v10h14V10M7 4h10l3 6H4l3-6Z" /><path d="M9 14h6" /></>,
    tools: <path d="M14.7 6.3a4 4 0 0 0-5-5L13 4.6 9.5 8.1 6.2 4.8a4 4 0 0 0 5 5L4 17l3 3 7.2-7.2a4 4 0 0 0 5-5L16 11l-3.5-3.5 2.2-1.2Z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Industries({ heading, tone = "dots", exclude }: { heading: SectionHeading; tone?: "dots" | "tint" | "mesh"; exclude?: string }) {
  return (
    <Section tone={tone}>
      <Head heading={heading} />
      <ul className="sv-industries">
        {industryNavLinks.filter((industry) => industry.href !== exclude).map((industry) => (
          <li key={industry.href}>
            <Link href={industry.href}>
              <IndustryIcon name={industry.icon} />
              <span>
                <strong>{industry.label}</strong>
                <small>{industry.description}</small>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* TODO(owner): add "Plans from $X/month" if the owner wants a price signal. */}
    </Section>
  );
}

/* ---------- Comparison ---------- */

export function Compare({ heading, rows }: { heading: SectionHeading; rows: ComparisonRow[] }) {
  return (
    <Section tone="ink">
      <Head heading={heading} />
      <div className="sv-compare-wrap">
        <table className="sv-compare">
          <caption className="sv-visually-hidden">How Rank It Globally compares with a typical agency, a freelancer and doing it yourself</caption>
          <thead>
            <tr>
              <th scope="col"><span className="sv-visually-hidden">What you get</span></th>
              <th scope="col" className="sv-us">Rank It Globally</th>
              <th scope="col">Typical agency</th>
              <th scope="col">Freelancer</th>
              <th scope="col">DIY</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td className="sv-us" data-label="Rank It Globally"><span className="sv-tick" aria-hidden="true">✓</span>{row.rig}</td>
                <td data-label="Typical agency">{row.agency}</td>
                <td data-label="Freelancer">{row.freelancer}</td>
                <td data-label="DIY">{row.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ page, tone = "tint" }: { page: PageCommon; tone?: "tint" | "mesh" | "dots" }) {
  return (
    <Section tone={tone}>
      <div className="sv-faq-grid">
        <div className="sv-head">
          <p className="sv-eyebrow">Straight answers</p>
          <h2>Frequently asked <span className="sv-hl">questions</span></h2>
          <p>{page.faqIntro}</p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="sv-btn" href="#audit">{page.ctaLabel} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <BellevueServiceFaqs
          items={page.faqs}
          idPrefix={page.slug}
          renderedAnswers={page.faqs.map((faq) => <RichText key={faq.question} text={faq.answer} />)}
        />
      </div>
    </Section>
  );
}

/* ---------- Related guides ---------- */

export function Guides({ page, tone = "mesh" }: { page: PageCommon; tone?: "tint" | "mesh" | "dots" }) {
  const related = page.relatedServices
    .map((href) => serviceNavLinks.find((service) => service.href === href))
    .filter((service) => service !== undefined);
  return (
    <Section tone={tone} labelledBy={`${page.slug}-guides`}>
      <div className="sv-head">
        <p className="sv-eyebrow">Keep learning</p>
        <h2 id={`${page.slug}-guides`}>Related <span className="sv-hl">guides</span></h2>
        <p>Plain-English guides from our blog.</p>
      </div>
      <ul className="sv-guides">
        {page.guides.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href}>
              <span>Guide</span>
              <strong>{guide.label}</strong>
              <small>{guide.description}</small>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="sv-related" aria-label="Related services">
        <li className="sv-related-label" aria-hidden="true">Pairs well with</li>
        {related.map((service) => (
          <li key={service.href}><Link href={service.href}>{service.label} <span aria-hidden="true">→</span></Link></li>
        ))}
      </ul>
    </Section>
  );
}

/* ---------- Final CTA with the real audit form ---------- */

// Pre-selects the matching "What do you want help with?" option so each lead
// arrives tagged with the service it came from.
const auditScopeByTheme: Record<ServiceCore["theme"], string[]> = {
  ai: ["SEO"],
  seo: ["SEO"],
  local: ["Local SEO / Google Business Profile"],
  web: ["Website Design"],
  ecommerce: ["Ecommerce Performance"],
  cro: ["Leads / Conversions"],
  reputation: ["Local SEO / Google Business Profile"],
};

export function FinalCta({ page }: { page: PageCommon }) {
  return (
    <Section tone="ink" id="audit" className="sv-final" labelledBy={`${page.slug}-final`}>
      <div className="sv-final-grid">
        <div>
          <p className="sv-eyebrow">{page.ctaLabel.replace(/^Get My /, "")}</p>
          <h2 className="sv-h2" id={`${page.slug}-final`}>
            {page.finalCta.title} <span className="sv-hl">{page.finalCta.accent}</span>
          </h2>
          <p style={{ margin: "1.1rem 0 0", color: "var(--sv-on-dark-muted)", lineHeight: 1.7 }}>{page.finalCta.body}</p>
          <ul className="sv-final-list">
            {page.finalCta.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <a className="sv-btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Prefer to chat? {whatsappLabel}
          </a>
        </div>
        <div className="sv-form-card">
          <Suspense fallback={<div className="standalone-audit-form audit-form-compact" />}>
            <FreeAuditForm compact sourcePage={page.path ?? `/${page.slug}`} defaultScope={page.auditScope ?? (page.theme ? auditScopeByTheme[page.theme] : [])} submitLabel={page.ctaLabel} />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}
