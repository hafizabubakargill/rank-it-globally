import type { Metadata } from "next";
import Link from "next/link";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import "@/components/bellevue-services/bellevue-services.css";
import "@/components/industry-pages/industry-pages.css";
import { industryPages } from "@/content/industryPages";

const siteUrl = "https://rankitglobally.com";
const pageUrl = `${siteUrl}/industries`;
const pageDescription =
  "Explore industry-focused marketing systems for healthcare, e-commerce, home services, law firms, real estate, and technology companies.";

const industries = Object.values(industryPages);

const iconBySlug: Record<string, string> = {
  "dental-medical-marketing": "shield",
  "ecommerce-marketing": "cart",
  "home-services-marketing": "pin",
  "law-firm-marketing": "content",
  "real-estate-marketing": "profile",
  "tech-startup-marketing": "ai",
};

export const metadata: Metadata = {
  title: "Industry Marketing Services | Rank It Globally",
  description: pageDescription,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Industry Marketing Services | Rank It Globally",
    description: pageDescription,
    url: pageUrl,
    siteName: "Rank It Globally",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Marketing Services | Rank It Globally",
    description: pageDescription,
  },
};

export default function IndustriesPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      name: "Industry Marketing Services",
      description: pageDescription,
      url: pageUrl,
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.shortName,
        url: `${siteUrl}/industries/${industry.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="marketing-page industry-index-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="industry-index-hero marketing-hero">
        <div className="industry-index-copy">
          <p className="marketing-eyebrow">Industry marketing systems</p>
          <h1>
            Strategies shaped around{" "}
            <span className="gtext">how your customers choose.</span>
          </h1>
          <p className="marketing-lead">
            Different markets build trust, generate demand, and convert attention
            in different ways. Explore focused plans that connect search, paid
            media, content, and conversion around your sector.
          </p>
          <div className="industry-index-actions">
            <a className="marketing-primary-link" href="#industry-directory">
              Explore industries <span aria-hidden="true">↓</span>
            </a>
            <Link className="marketing-secondary-link" href="/case-studies">
              See our work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="industry-index-visual" aria-hidden="true">
          <div className="industry-index-grid" />
          <p>One connected growth system</p>
          <div className="industry-index-signal">
            <span>01</span>
            <div>
              <strong>Demand signals</strong>
              <small>What people search, ask, and compare</small>
            </div>
          </div>
          <div className="industry-index-signal">
            <span>02</span>
            <div>
              <strong>Trust signals</strong>
              <small>What makes the business credible</small>
            </div>
          </div>
          <div className="industry-index-signal">
            <span>03</span>
            <div>
              <strong>Conversion path</strong>
              <small>What turns attention into action</small>
            </div>
          </div>
        </div>
      </section>

      <section
        className="industry-index-directory"
        id="industry-directory"
        aria-labelledby="industry-directory-title"
      >
        <div className="industry-index-inner">
          <div className="eastside-section-heading">
            <p className="marketing-eyebrow">Focused growth plans</p>
            <h2 id="industry-directory-title">
              Choose your industry.{" "}
              <span className="gtext">See the connected plan.</span>
            </h2>
            <p>
              Each guide starts with the customer journey and joins the channels
              that can create qualified demand for that market.
            </p>
          </div>

          <div className="industry-index-card-grid">
            {industries.map((industry) => (
              <article
                className="industry-index-card"
                data-theme={industry.theme}
                key={industry.slug}
              >
                <div className="industry-index-card-icon" aria-hidden="true">
                  <EastsideIcon name={iconBySlug[industry.slug] ?? "strategy"} />
                </div>
                <h3>{industry.shortName}</h3>
                <p>{industry.description}</p>
                <ul aria-label={`Examples for ${industry.shortName}`}>
                  {industry.audiences.slice(0, 3).map((audience) => (
                    <li key={audience}>{audience}</li>
                  ))}
                </ul>
                <Link href={`/industries/${industry.slug}`}>
                  Explore the strategy <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-index-method">
        <div className="industry-index-inner">
          <div className="eastside-section-heading">
            <p className="marketing-eyebrow">Connected by design</p>
            <h2>
              The industry changes.{" "}
              <span className="gtext">The method stays disciplined.</span>
            </h2>
          </div>
          <div className="industry-index-method-grid">
            <article>
              <span>01</span>
              <h3>Understand demand</h3>
              <p>
                Map how customers discover, evaluate, and contact businesses in
                the sector.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Fix the foundation</h3>
              <p>
                Improve the website, tracking, search presence, and conversion
                path before scaling.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Grow with evidence</h3>
              <p>
                Expand the channels and messages that produce the strongest
                qualified response.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="industry-index-cta">
        <div>
          <p className="marketing-eyebrow">Your sector is not listed?</p>
          <h2>
            Start with your business,{" "}
            <span className="gtext">not a template.</span>
          </h2>
          <p>
            We can review your market, customer journey, and current visibility
            before recommending the right mix.
          </p>
          <div className="industry-index-actions industry-index-actions-centered">
            <Link className="marketing-primary-link" href="/free-audit">
              Get My Free Audit <span aria-hidden="true">→</span>
            </Link>
            <Link className="marketing-secondary-link" href="/contact-us">
              Talk to our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
