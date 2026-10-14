import type { Metadata } from "next";
import Link from "next/link";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import "@/components/industry-pages/industry-kit.css";
import { Ctas, FinalCta, Head, Section } from "@/components/service-pages/kit/Kit";
import { industryPageList } from "@/content/industries";
import { guides } from "@/content/services/shared";
import type { PageCommon, ServiceIcon } from "@/content/services/types";
import { siteUrl } from "@/content/organization";

const pageUrl = `${siteUrl}/industries`;
const title = "Industry Marketing Services | Rank It Globally";
const description =
  "Local SEO and AI search visibility shaped for home services, dental and medical practices, real estate agents, e-commerce brands and tech startups.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: pageUrl, siteName: "Rank It Globally", type: "website", images: ["/assets/brand/favicon.png"] },
  twitter: { card: "summary_large_image", site: "@rankitglobally", title, description, images: ["/assets/brand/favicon.png"] },
};

const iconBySlug: Record<string, ServiceIcon> = {
  "home-services-marketing": "pin",
  "dental-medical-marketing": "shield",
  "real-estate-marketing": "profile",
  "ecommerce-marketing": "cart",
  "tech-startup-marketing": "ai",
};

// Shared CTA and audit-form fields for the hub's closing section.
const hub: PageCommon = {
  slug: "industries",
  ctaLabel: "Get My Free Growth Audit",
  sticky: "",
  midCta: { title: "", body: "" },
  faqIntro: "",
  faqs: [],
  guides: [guides.notShowingUp],
  relatedServices: [],
  auditScope: ["Full Audit"],
  finalCta: {
    title: "Not sure where you fit?",
    accent: "Start with an audit.",
    body: "Tell us about your business. We'll show you how you appear on Google and in AI answers, and what to fix first.",
    bullets: ["Search and AI answer visibility", "Competitors taking your customers", "The first fixes worth making"],
  },
};

export default function IndustriesPage() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${pageUrl}#collection`, name: "Industry Marketing Services", description, url: pageUrl, isPartOf: { "@id": `${siteUrl}/#website` } },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: industryPageList.map((industry, index) => ({ "@type": "ListItem", position: index + 1, name: industry.name, url: `${siteUrl}${industry.path}` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Industries", item: pageUrl },
      ],
    },
  ];

  return (
    <main className="sv-page in-page" id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <header className="sv-hero">
        <div className="sv-wrap">
          <div className="sv-crumbs" role="navigation" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Industries</li>
            </ol>
          </div>
          <p className="sv-eyebrow">Industry marketing</p>
          <h1>
            Marketing shaped around <span className="sv-hl">how your customers choose.</span>
          </h1>
          <p className="sv-hero-intro">
            A homeowner with a burst pipe, a parent picking a dentist and a founder comparing software all search differently.
            We build local search and AI answer visibility around how your customers actually decide.
          </p>
          <Ctas page={hub} />
        </div>
      </header>

      <Section tone="tint" labelledBy="industry-directory">
        <Head id="industry-directory" heading={{ eyebrow: "Choose your industry", title: "Five industries,", accent: "five different plans.", intro: "Each page covers the pressures owners in that industry face right now, the rules we work within and the one plan we recommend." }} />
        <ul className="in-hub-grid">
          {industryPageList.map((industry) => (
            <li key={industry.path}>
              <Link className="sv-card in-hub-card" href={industry.path}>
                <span className="sv-bento-icon" aria-hidden="true"><EastsideIcon name={iconBySlug[industry.slug] ?? "strategy"} /></span>
                <strong>{industry.name}</strong>
                <span className="in-hub-desc">{industry.hub.description}</span>
                <span className="in-hub-for">Built for: {industry.hub.audiences.join(", ")}</span>
                <span className="in-hub-more">See the plan <span aria-hidden="true">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta page={hub} />
    </main>
  );
}
