import type { Metadata } from "next";
import Link from "next/link";
import {
  EastsideFinalCta,
  EastsideIcon,
  EastsideRelatedLinks,
  EastsideSectionHeading,
} from "@/components/bellevue-services/BellevueServiceShared";
import {
  BellevueServiceFaqs,
  type BellevueFaqItem,
} from "@/components/bellevue-services/BellevueServiceFaqs";
import "@/components/bellevue-services/bellevue-services.css";
import "./page.css";

const pageUrl = "https://rankitglobally.com/local-seo-bellevue/";
const title = "Local SEO Services in Bellevue, WA — Google Maps & GBP Optimization";
const description =
  "Local SEO services for Bellevue businesses, including Google Business Profile optimization, Google Maps visibility, reviews, citations, local content, and technical SEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: pageUrl, title, description, siteName: "Rank It Globally" },
  twitter: { card: "summary", title, description },
};

const services = [
  {
    icon: "profile",
    title: "Google Business Profile optimization",
    body: "We refine categories, services, descriptions, photos, attributes, and profile signals so your listing accurately represents the business and supports high-intent local searches.",
    tags: ["Primary categories", "Services", "Photos", "Profile health"],
  },
  {
    icon: "citations",
    title: "Citation and NAP consistency",
    body: "Business name, address, and phone details should agree across trusted directories and data sources. We find conflicts, prioritize corrections, and strengthen entity consistency.",
    tags: ["Directory audit", "NAP cleanup", "Entity consistency", "Local trust"],
  },
  {
    icon: "reviews",
    title: "Review strategy",
    body: "We build a practical request and response process that helps teams earn more useful customer feedback while staying aligned with platform guidelines.",
    tags: ["Review requests", "Response guidance", "Reputation", "Trust signals"],
  },
  {
    icon: "schema",
    title: "Local schema and technical SEO",
    body: "We connect location details, services, crawlability, structured data, internal links, and mobile performance so search engines can understand the business clearly.",
    tags: ["LocalBusiness schema", "Crawlability", "Mobile UX", "Internal links"],
  },
  {
    icon: "content",
    title: "Geo-targeted content",
    body: "We create genuinely useful service-area content around Bellevue and the Eastside without relying on thin, duplicated city pages.",
    tags: ["Service pages", "Local intent", "Eastside topics", "Conversion paths"],
  },
  {
    icon: "ai",
    title: "AI-assisted local visibility",
    body: "Clear business facts, strong service explanations, consistent entities, and credible proof help traditional search and AI answer systems interpret your local relevance.",
    tags: ["Entity clarity", "Answer engines", "Source consistency", "Local proof"],
  },
] as const;

const workflow = [
  ["01", "Audit the local footprint", "Review the website, profile, citations, reviews, competitors, tracking, and local search presentation."],
  ["02", "Prioritize the gaps", "Separate urgent accuracy and technical issues from longer-term visibility opportunities."],
  ["03", "Optimize the core assets", "Improve the Google Business Profile, website signals, service information, and conversion path."],
  ["04", "Build local trust", "Strengthen reviews, local references, useful content, and supporting evidence across the Eastside."],
  ["05", "Measure and refine", "Track qualified visibility and actions, then expand what is creating meaningful business outcomes."],
] as const;

const industryCoverage = [
  { icon: "profile", title: "Healthcare", body: "Appointments, practitioner trust, location accuracy, and a calm path to care." },
  { icon: "search", title: "Law firms", body: "Practice-area intent, credible expertise, and qualified consultation journeys." },
  { icon: "reviews", title: "Home services", body: "Service areas, urgent search intent, reputation, and direct call actions." },
  { icon: "content", title: "Real estate", body: "Neighborhood expertise, listings, local authority, and lead-ready pages." },
  { icon: "reviews", title: "Restaurants", body: "Discovery, hours, menus, reviews, reservations, and directions." },
  { icon: "strategy", title: "Professional services", body: "Specialist fit, evidence, and clear consultation pathways." },
  { icon: "profile", title: "Retail", body: "Store discovery, product context, local availability, and visits." },
  { icon: "citations", title: "Automotive", body: "Services, availability, reputation, location signals, and calls." },
] as const;

const relatedLinks = [
  { href: "/bellevue-seo-services", label: "Bellevue SEO services", description: "Build the broader technical, content, and authority foundation." },
  { href: "/bellevue-social-media-marketing", label: "Bellevue social media marketing", description: "Create demand and connect campaign learning with search." },
  { href: "/blog/how-much-does-seo-cost", label: "SEO pricing guide", description: "Understand common scopes, tiers, and practical budget tradeoffs." },
  { href: "/case-studies", label: "Case studies", description: "See how websites and growth systems come together in practice." },
] as const;

const faqs: BellevueFaqItem[] = [
  { question: "What is local SEO?", answer: "Local SEO improves how a business appears for searches connected to a place, especially Google Maps, the local results, and location-focused organic searches. It combines the website, Google Business Profile, reviews, citations, and local relevance signals." },
  { question: "How is local SEO different from regular SEO?", answer: "Local SEO emphasizes proximity, map visibility, business information, reviews, and location intent. Broader organic SEO builds visibility across topics that may not depend on a searcher's location. Many Bellevue service businesses need both." },
  { question: "Can you improve our Google Maps visibility?", answer: "We can improve the relevance, accuracy, completeness, and supporting signals around a listing. No ethical provider can guarantee a specific Maps position because proximity, competition, search context, and Google's systems also influence results." },
  { question: "Do we need a physical Bellevue address?", answer: "Not every business needs a public storefront, but the Google Business Profile must follow Google's eligibility and service-area rules. We do not create virtual locations or recommend misleading address practices." },
  { question: "How long does local SEO take?", answer: "Accuracy and profile improvements can help early, while competitive visibility usually develops over several months. Timing depends on the market, current authority, review activity, website quality, and the work already completed." },
  { question: "Does review management form part of local SEO?", answer: "Yes. Reviews influence customer trust and can reinforce local relevance. We help create a compliant request process, response guidance, and a clear path for learning from customer feedback." },
  { question: "Can you target Bellevue, Kirkland, and Redmond together?", answer: "Yes, when the business genuinely serves those areas. We build a shared Eastside foundation and add distinct local content only where it gives visitors useful, non-duplicated information." },
  { question: "What will you measure?", answer: "Measurement can include profile discovery, calls, direction requests, website visits, local rankings, organic visibility, form submissions, and other qualified actions. Reporting should connect visibility to business outcomes rather than focus on rankings alone." },
];

const provider = {
  "@type": "Organization",
  name: "Rank It Globally",
  url: "https://rankitglobally.com/",
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Local SEO Services in Bellevue",
    serviceType: "Local SEO and Google Business Profile optimization",
    url: pageUrl,
    description,
    provider,
    areaServed: ["Bellevue", "Kirkland", "Redmond"].map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bellevue local SEO services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.body },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rankitglobally.com/" },
      { "@type": "ListItem", position: 2, name: "Local SEO Bellevue", item: pageUrl },
    ],
  },
];

export default function LocalSeoBellevuePage() {
  return (
    <main className="marketing-page eastside-page local-seo-page">
      {schema.map((entry, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}

      <section className="marketing-hero eastside-hero">
        <div className="eastside-hero-copy">
          <p className="marketing-eyebrow">Local SEO · Bellevue and the Eastside</p>
          <h1>Be visible when local customers are <span className="gtext">ready to act.</span></h1>
          <p>Connect Google Maps, your Business Profile, local search pages, reviews, and technical signals into one clear discovery system.</p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/free-audit">Get My Free Audit <span className="ar">→</span></Link>
            <Link className="marketing-link" href="/case-studies">See our work</Link>
          </div>
        </div>
        <div className="eastside-hero-panel local-search-map" aria-label="Illustration of a local search journey">
          <p className="eastside-panel-label">A connected local visibility system</p>
          <div className="local-map-canvas" aria-hidden="true">
            <span className="local-map-road local-map-road-one" />
            <span className="local-map-road local-map-road-two" />
            <span className="local-map-pin local-map-pin-primary" />
            <span className="local-map-pin local-map-pin-secondary" />
          </div>
          <div className="local-search-result">
            <span className="local-result-rank">01</span>
            <div><strong>Your business</strong><small>Bellevue service · Open now</small></div>
            <span className="local-result-score">Relevant</span>
          </div>
          <ul className="local-map-signals">
            <li>Accurate profile</li><li>Local relevance</li><li>Trusted reviews</li><li>Clear website</li>
          </ul>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="What we optimize" title="Every signal should tell the" accent="same local story.">
          Local visibility becomes stronger when the listing, website, reviews, and third-party references reinforce one another.
        </EastsideSectionHeading>
        <div className="eastside-service-grid">
          {services.map((service) => (
            <article className="eastside-service-card" key={service.title}>
              <span className="eastside-service-icon"><EastsideIcon name={service.icon} /></span>
              <h3>{service.title}</h3><p>{service.body}</p>
              <ul className="eastside-tag-list">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft local-area-section">
        <EastsideSectionHeading eyebrow="Bellevue market context" title="Build locally, then expand across the" accent="Eastside with purpose.">
          We use one strong business foundation and add market-specific detail only where it improves relevance and the customer experience.
        </EastsideSectionHeading>
        <div className="eastside-signal-grid">
          <article className="eastside-signal-card"><span className="eastside-card-kicker">Primary market</span><strong>Bellevue</strong><p>High-intent service discovery, competitive local results, and audiences that expect clear digital experiences.</p></article>
          <article className="eastside-signal-card"><span className="eastside-card-kicker">Adjacent demand</span><strong>Kirkland + Redmond</strong><p>Natural Eastside expansion when the business genuinely serves these customers and can support distinct local value.</p></article>
          <article className="eastside-signal-card"><span className="eastside-card-kicker">Wider reach</span><strong>Issaquah + nearby areas</strong><p>Measured expansion guided by customer geography, operational coverage, and search demand rather than city-page volume.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="How the work moves" title="A local SEO system that improves" accent="in deliberate stages.">
          The sequence adapts to the current bottleneck, but the foundation always comes before expansion.
        </EastsideSectionHeading>
        <ol className="eastside-workflow">
          {workflow.map(([number, stepTitle, body]) => <li key={number}><span className="eastside-workflow-number">{number}</span><div><h3>{stepTitle}</h3><p>{body}</p></div></li>)}
        </ol>
      </section>

      <section className="eastside-section eastside-section--soft">
        <EastsideSectionHeading eyebrow="Local and organic search" title="Different surfaces. One" accent="connected strategy.">
          Local SEO wins the nearby decision moment; organic SEO builds the wider authority that supports it.
        </EastsideSectionHeading>
        <div className="eastside-comparison-grid local-comparison-grid">
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Local SEO</span><h3>Maps and nearby intent</h3><p>Google Business Profile, reviews, citations, service areas, local pages, and map-result actions.</p></article>
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Organic SEO</span><h3>Topics and wider discovery</h3><p>Technical SEO, service expertise, useful content, authority, and visibility beyond the map results.</p></article>
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Best fit</span><h3>Use both as one system</h3><p>A consistent entity and strong website give local and organic search more credible evidence to work with.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark local-industry-section">
        <EastsideSectionHeading eyebrow="Where local SEO matters" title="Built for businesses with a" accent="real service footprint.">
          We tailor the local strategy to how customers choose, contact, visit, or book each type of business.
        </EastsideSectionHeading>
        <div className="local-industry-grid">
          {industryCoverage.map((industry) => (
            <article key={industry.title}>
              <span className="local-industry-icon"><EastsideIcon name={industry.icon} /></span>
              <h3>{industry.title}</h3>
              <p>{industry.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft">
        <EastsideSectionHeading eyebrow="Proof over promises" title="Local growth needs a clearer path" accent="from search to action.">
          Our work joins discoverability with practical website journeys instead of treating rankings as the finish line.
        </EastsideSectionHeading>
        <div className="eastside-proof-grid">
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Foundation</span><strong>Accurate everywhere</strong><p>Consistent business facts and services reduce ambiguity for customers and search systems.</p></article>
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Experience</span><strong>Useful after the click</strong><p>Fast pages, clear services, proof, and direct actions turn local discovery into qualified enquiries.</p></article>
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Measurement</span><strong>Actions, not vanity</strong><p>Calls, bookings, forms, direction requests, and qualified traffic guide the next optimization cycle.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="Common questions" title="Local SEO in Bellevue," accent="explained clearly." />
        <BellevueServiceFaqs items={faqs} idPrefix="local-seo" />
      </section>

      <EastsideRelatedLinks
        title="Choose the next"
        accent="useful step."
        links={[...relatedLinks]}
      />

      <EastsideFinalCta eyebrow="Start with local clarity" title="See what is limiting your" accent="Bellevue visibility." body="Request a free audit and we will identify the profile, website, review, and local search opportunities worth addressing first." />
    </main>
  );
}
