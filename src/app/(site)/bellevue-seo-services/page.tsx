import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BellevueFaqs } from "./BellevueFaqs";
import "./page.css";

const pageUrl = "https://rankitglobally.com/bellevue-seo-services/";

export const metadata: Metadata = {
  title: "Best SEO Company in Bellevue, WA — RankitGlobally",
  description:
    "Bellevue SEO services covering technical SEO, content strategy, authority building, local SEO, and AI search optimization.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Best SEO Company in Bellevue, WA — RankitGlobally",
    description:
      "Full-service SEO for Bellevue businesses, built around technical clarity, useful content, local visibility, and measurable growth.",
    siteName: "Rank It Globally",
  },
  twitter: {
    card: "summary",
    title: "Best SEO Company in Bellevue, WA — RankitGlobally",
    description:
      "Technical, local, content, and AI search optimization for Bellevue businesses.",
  },
};

type IconName =
  | "technical"
  | "page"
  | "content"
  | "links"
  | "location"
  | "ai";

type ServiceItem = {
  name: string;
  stage: "Foundation" | "Growth" | "Competitive edge";
  icon: IconName;
  description: string[];
  deliverables: string[];
};

const services: ServiceItem[] = [
  {
    name: "Technical SEO",
    stage: "Foundation",
    icon: "technical",
    description: [
      "Technical SEO makes sure Google can find, crawl, render, and understand the pages that matter. Content and links cannot compensate for a site that is slow, fragmented, or difficult to index.",
      "We turn crawl findings into a prioritized implementation plan, then address the issues most likely to limit visibility and conversions.",
    ],
    deliverables: [
      "Core Web Vitals",
      "Crawl errors",
      "Site architecture",
      "Schema markup",
      "Indexation",
      "Page speed",
    ],
  },
  {
    name: "On-Page SEO",
    stage: "Foundation",
    icon: "page",
    description: [
      "Every important page should answer one clear search intent. We map Bellevue-focused and service-level keyword clusters to the right URLs, then improve titles, headings, copy, internal links, and supporting signals.",
      "The result is a site that is easier for search engines to classify and easier for prospective customers to navigate.",
    ],
    deliverables: [
      "Search intent mapping",
      "Titles and descriptions",
      "Heading structure",
      "Internal linking",
      "Image context",
      "Content refreshes",
    ],
  },
  {
    name: "Content Strategy & Production",
    stage: "Growth",
    icon: "content",
    description: [
      "Useful content gives your site more qualified searches to compete for. We plan service pages, supporting articles, comparison content, and local resources around the questions Bellevue buyers ask before they contact a business.",
      "Each piece has a defined audience, search intent, conversion path, and role within the wider site architecture.",
    ],
    deliverables: [
      "Topic research",
      "Content briefs",
      "Service pages",
      "Expert articles",
      "Content optimization",
      "Schema opportunities",
    ],
  },
  {
    name: "Authority & Link Building",
    stage: "Growth",
    icon: "links",
    description: [
      "Authority is earned when relevant websites, publications, partners, and local sources reference your business. We focus on editorial outreach and genuinely useful assets instead of low-quality directories or artificial link networks.",
      "Link acquisition is tied to the pages and topics that need authority, not treated as an isolated monthly quota.",
    ],
    deliverables: [
      "Authority review",
      "Editorial outreach",
      "Digital PR angles",
      "Linkable assets",
      "Competitor gap analysis",
      "Link monitoring",
    ],
  },
  {
    name: "Local SEO",
    stage: "Growth",
    icon: "location",
    description: [
      "For businesses serving Bellevue and the Eastside, local visibility often influences the highest-intent calls and visits. We align your website, Google Business Profile, local references, reviews, and service-area content.",
      "The strategy can expand naturally into Kirkland, Redmond, and nearby markets without producing thin or duplicated city pages.",
    ],
    deliverables: [
      "Google Business Profile",
      "Local landing pages",
      "Citation consistency",
      "Review strategy",
      "Local schema",
      "Service-area signals",
    ],
  },
  {
    name: "AI Search Optimization (AEO/GEO)",
    stage: "Competitive edge",
    icon: "ai",
    description: [
      "AI search systems favor clear entities, well-structured answers, consistent business information, and credible supporting evidence. We organize your site so answer engines can interpret what you do, where you work, and why your expertise is trustworthy.",
      "This complements traditional SEO rather than replacing it: crawlability, useful content, authority, and structured data still form the foundation.",
    ],
    deliverables: [
      "Entity clarity",
      "Answer-first content",
      "Structured data",
      "Source consistency",
      "Expert signals",
      "AI visibility reviews",
    ],
  },
];

const processSteps = [
  {
    period: "Month 1",
    title: "Audit and strategy",
    body: "We assess technical health, content gaps, authority, local signals, competitors, and the conversion path, then rank the work by likely impact.",
  },
  {
    period: "Months 2–3",
    title: "Build the foundation",
    body: "Technical fixes, information architecture, internal linking, existing-page improvements, and the first priority content move together.",
  },
  {
    period: "Months 4–6",
    title: "Grow useful coverage",
    body: "Content production, authority building, local visibility, and conversion improvements expand around the strongest early signals.",
  },
  {
    period: "Month 7+",
    title: "Compound what works",
    body: "We refresh winners, strengthen pages close to breaking through, prune weak work, and expand into adjacent services and Eastside markets.",
  },
];

const proofItems = [
  {
    client: "Van Isle Paint",
    visual: "/assets/screenshots/van-isle-paint-full.webp",
    type: "Local service",
    title: "A clearer local journey from search to estimate request",
    body: "Local intent, service-page structure, technical clarity, and stronger conversion paths were treated as one connected system.",
  },
  {
    client: "SPC Sports",
    visual: "/assets/screenshots/spc-sports-full.webp",
    type: "E-commerce",
    title: "Technical performance built into the shopping experience",
    body: "Site speed, product discovery, crawlability, and merchandising structure were improved together instead of as isolated tasks.",
  },
  {
    client: "SAYC Store",
    visual: "/assets/screenshots/sayc-store-full.webp",
    type: "E-commerce",
    title: "SEO and conversion improvements aligned to revenue",
    body: "Search visibility, product presentation, trust, and checkout journeys were developed around measurable commercial actions.",
  },
];

const marketSignals = [
  {
    icon: "audience",
    number: "01",
    title: "Tech-aware audiences",
    body: "Fast pages, clear evidence, and technically credible experiences matter.",
    signal: "Clarity + speed",
  },
  {
    icon: "region",
    number: "02",
    title: "Local and regional intent",
    body: "Bellevue searches often extend naturally into Kirkland, Redmond, and the Eastside.",
    signal: "Bellevue + Eastside",
  },
  {
    icon: "decision",
    number: "03",
    title: "High-value decisions",
    body: "Professional services, healthcare, property, and B2B buyers research before converting.",
    signal: "Trust + proof",
  },
] as const;

const industries = [
  "Law firms",
  "Dental and medical",
  "Technology and SaaS",
  "Real estate",
  "E-commerce",
  "Restaurants",
  "Home services",
  "Professional services",
];

const faqs = [
  {
    question: "How much do SEO services cost in Bellevue?",
    answer:
      "SEO investment depends on the size of the site, competition, service area, content needs, and how much implementation is required. We begin with an audit and recommend a scope tied to the highest-impact opportunities rather than forcing every business into the same package.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Local and technical improvements can create early movement, while competitive organic topics usually require several months of consistent work. We report leading indicators first—crawl health, impressions, local visibility, and ranking movement—before expecting compounding traffic and lead gains.",
  },
  {
    question: "Can I do SEO for my Bellevue business myself?",
    answer:
      "Yes, the fundamentals can be handled internally if someone has the time and technical confidence. An agency becomes useful when you need coordinated technical work, content production, authority building, local optimization, measurement, and ongoing prioritization.",
  },
  {
    question: "What is the difference between local SEO and regular SEO?",
    answer:
      "Local SEO focuses on map results, Google Business Profile visibility, reviews, local references, and location-specific intent. Organic SEO covers the wider search results and topic authority. Bellevue service businesses often need both working together.",
  },
  {
    question: "What does an SEO agency do every month?",
    answer:
      "Monthly work can include technical monitoring, page optimization, content production, authority outreach, local SEO management, reporting, and strategy changes based on performance. The exact mix should follow the current bottleneck rather than a fixed checklist.",
  },
  {
    question: "What is AI search optimization?",
    answer:
      "AI search optimization improves the clarity, structure, evidence, and entity signals that help answer engines understand and cite a business. It builds on traditional SEO foundations such as crawlability, useful content, authority, and structured data.",
  },
  {
    question: "Is SEO worth it for a small Bellevue business?",
    answer:
      "It can be when customers actively search for your services and the value of new business supports a sustained strategy. A focused audit should determine whether SEO, local visibility, conversion work, paid media, or another channel deserves priority first.",
  },
  {
    question: "Do you need a physical office in Bellevue to rank locally?",
    answer:
      "Not always. Service-area businesses can build relevant local visibility without claiming an office they do not have. The strategy should use accurate business information, genuine service-area evidence, useful local content, reviews, and a properly configured Google Business Profile where eligible.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": pageUrl + "#service",
      name: "SEO Services in Bellevue, WA",
      serviceType: "Search Engine Optimization",
      description:
        "Technical SEO, content strategy, authority building, local SEO, and AI search optimization for Bellevue businesses.",
      url: pageUrl,
      provider: {
        "@type": "Organization",
        "@id": "https://rankitglobally.com/#organization",
        name: "Rank It Globally",
        url: "https://rankitglobally.com/",
      },
      areaServed: ["Bellevue", "Kirkland", "Redmond"].map((name) => ({
        "@type": "City",
        name,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bellevue SEO Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": pageUrl + "#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": pageUrl + "#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rankitglobally.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Services Bellevue",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function BellevueSeoServicesPage() {
  return (
    <main className="marketing-page bellevue-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="marketing-hero bellevue-hero">
        <div className="bellevue-hero-copy">
          <p className="marketing-eyebrow">SEO Services in Bellevue, WA</p>
          <h1>
            Bellevue SEO built for rankings,{" "}
            <span className="gtext">designed for revenue.</span>
          </h1>
          <p>
            Technical SEO, useful content, local visibility, authority, and AI
            search optimization—organized around the searches that bring
            Bellevue businesses qualified customers.
          </p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/free-audit">
              Get My Free Audit <span className="ar">→</span>
            </Link>
            <Link className="marketing-link" href="/case-studies">
              See the work in action
            </Link>
          </div>
        </div>

        <div className="bellevue-process-panel" aria-label="Monthly SEO process">
          <p className="bellevue-panel-label">What we execute across the engagement</p>
          <ol className="bellevue-process-list">
            {services.map((service, index) => (
              <li key={service.name}>
                <span className="bellevue-process-number">{index + 1}</span>
                <span>{service.name}</span>
                <small>{service.stage}</small>
              </li>
            ))}
          </ol>
          <div className="bellevue-panel-footer">
            <span>Technical clarity</span>
            <span>Useful content</span>
            <span>Qualified leads</span>
          </div>
        </div>
      </section>

      <section className="bellevue-section bellevue-section--dark">
        <SectionHeading
          eyebrow="What is included"
          title="What our Bellevue SEO services"
          accent="actually include."
        >
          SEO is a connected system. Each discipline below supports the others,
          with priorities set by your market, site, and current visibility.
        </SectionHeading>
        <div className="bellevue-service-stack">
          {services.map((service) => (
            <article className="bellevue-service-card" key={service.name}>
              <div className="bellevue-service-identity">
                <span className="bellevue-service-icon" aria-hidden="true">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3>{service.name}</h3>
                <span className="bellevue-stage">{service.stage}</span>
              </div>
              <div className="bellevue-service-body">
                {service.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <ul aria-label={service.name + " deliverables"}>
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bellevue-section bellevue-section--soft bellevue-market-section">
        <SectionHeading
          eyebrow="The Bellevue market"
          title="Search visibility for a"
          accent="high-intent, competitive market."
        >
          Bellevue buyers compare businesses online before they call, book,
          visit, or request a proposal. The opportunity is not simply more
          traffic—it is becoming the clearest trusted option at the moment of
          choice.
        </SectionHeading>
        <div className="bellevue-market-grid">
          {marketSignals.map((item) => (
            <article key={item.title}>
              <div className="bellevue-market-card-head">
                <span className="bellevue-market-icon" aria-hidden="true">
                  <MarketIcon name={item.icon} />
                </span>
                <span className="bellevue-market-number">{item.number}</span>
              </div>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
              <span className="bellevue-market-signal">{item.signal}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bellevue-section bellevue-section--dark">
        <SectionHeading
          eyebrow="How we work"
          title="From audit to"
          accent="compounding returns."
        />
        <ol className="bellevue-timeline">
          {processSteps.map((step, index) => (
            <li key={step.period}>
              <span className="bellevue-timeline-marker">
                <small>{step.period}</small>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bellevue-section bellevue-section--soft bellevue-proof-section">
        <SectionHeading
          eyebrow="Proof, not promises"
          title="SEO connected to the"
          accent="whole customer journey."
        >
          Our work joins technical performance, visibility, usability, and
          conversion instead of treating SEO as a monthly content checklist.
        </SectionHeading>
        <div className="bellevue-proof-grid">
          {proofItems.map((item) => (
            <article key={item.client}>
              <div className="bellevue-proof-brand">
                <Image
                  src={item.visual}
                  alt={`${item.client} website preview`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <small>{item.type}</small>
              <strong>{item.client}</strong>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <Link className="marketing-link" href="/case-studies">
          Explore more case studies
        </Link>
      </section>

      <section className="bellevue-section bellevue-section--dark">
        <SectionHeading
          eyebrow="Industry experience"
          title="Bellevue SEO shaped around"
          accent="how your customers choose."
        >
          Search behavior, competition, proof, and conversion paths differ by
          industry. Strategy should reflect those differences.
        </SectionHeading>
        <ul className="bellevue-industry-list" aria-label="Industries served">
          {industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
        <p className="bellevue-cost-note">
          Planning a budget? Read our{" "}
          <Link href="/blog/how-much-does-seo-cost">SEO cost guide</Link> for a
          practical breakdown of scope and pricing levels.
        </p>
      </section>

      <section className="bellevue-section bellevue-section--soft bellevue-faq-section">
        <SectionHeading
          eyebrow="Common questions"
          title="Frequently asked questions about"
          accent="SEO services in Bellevue."
        />
        <BellevueFaqs items={faqs} />
      </section>

      <section className="bellevue-final-cta">
        <div className="bellevue-cta-graphic" aria-hidden="true">
          <span className="bellevue-cta-tile bellevue-cta-tile-search">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="10.5" cy="10.5" r="5.5" />
              <path d="m15 15 4.5 4.5" />
            </svg>
          </span>
          <span className="bellevue-cta-tile bellevue-cta-tile-growth">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m4 17 5-5 4 3 7-8" />
              <path d="M15 7h5v5" />
            </svg>
          </span>
          <span className="bellevue-cta-ring bellevue-cta-ring-left" />
          <span className="bellevue-cta-ring bellevue-cta-ring-right" />
        </div>
        <p className="marketing-eyebrow">Start with clarity</p>
        <h2>
          Ready to grow your Bellevue business{" "}
          <span className="gtext">through search?</span>
        </h2>
        <p>
          We will identify the technical, content, local, AI-search, and
          conversion issues most likely to hold the site back.
        </p>
        <div className="marketing-actions">
          <Link className="cta-e cta-e-lg" href="/free-audit">
            Get My Free Audit <span className="ar">→</span>
          </Link>
          <Link className="marketing-link" href="/case-studies">
            View case studies
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bellevue-section-heading">
      <p className="marketing-eyebrow">{eyebrow}</p>
      <h2>
        {title} <span className="gtext">{accent}</span>
      </h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function MarketIcon({ name }: { name: (typeof marketSignals)[number]["icon"] }) {
  const paths = {
    audience: (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 5.5a3 3 0 0 1 0 5.8M17 14a4.5 4.5 0 0 1 3.5 4.4V20" />
      </>
    ),
    region: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    decision: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="m3 7 6-4 6 5 7-6" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function ServiceIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    technical: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 9h8M8 13h5M8 17h8" />
      </>
    ),
    page: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5M10 12h5M10 16h5" />
      </>
    ),
    content: (
      <>
        <path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10z" />
        <path d="m14 7 3 3M4 20l1-4" />
      </>
    ),
    links: (
      <>
        <path d="m9.5 14.5 5-5" />
        <path d="m7.5 16.5-2 2a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0" transform="translate(3)" />
        <path d="m16.5 7.5 2-2a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0" transform="translate(-3)" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    ai: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="4" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 10h2M20 10h2M9 10h6M9 14h3" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
