import Link from "next/link";
import ClutchReviews from "@/components/ClutchReviews";
import LpClientLogos from "@/components/LpClientLogos";
import LpVideoTestimonials from "@/components/LpVideoTestimonials";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { plainText, RichText } from "@/components/service-pages/RichText";
import { Compare, Ctas, DataCard, Faq, FinalCta, Guides, Head, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { StickyCta } from "@/components/service-pages/kit/StickyCta";
import { HeroEngine } from "./HeroEngine";
import { ServiceExplorer } from "./ServiceExplorer";
import {
  homeClickStudy,
  homeCompare,
  homeFit,
  homeHero,
  homeIndustries,
  homePage as page,
  homeProblem,
  homeProof,
  homeSystem,
  homeTimeline,
} from "@/content/home";
import { organizationId, organizationSchema, siteUrl, whatsappHref } from "@/content/organization";
import "@/components/industry-pages/industry-kit.css";
import "./home.css";

function HomeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "Rank It Globally",
      url: siteUrl,
      description: "AI SEO and local SEO agency that gets US businesses recommended on Google, Google Maps and AI answers, so they get more leads from search.",
      email: "hello@rankitglobally.com",
      logo: organizationSchema.logo,
      image: organizationSchema.logo,
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
      knowsAbout: ["AI SEO", "Generative engine optimization", "Local SEO", "Google Business Profile", "Google AI Overviews", "Search engine optimization"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Search visibility services",
        itemListElement: homeSystem.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.title, description: item.body, url: `${siteUrl}${item.href}` },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Rank It Globally",
      url: `${siteUrl}/`,
      publisher: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: plainText(faq.answer) } })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function Fit() {
  return (
    <div className="hm-fit">
      <div className="sv-card hm-fit-col is-yes">
        <h3>This is for you if</h3>
        <ul>{homeFit.yes.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="sv-card hm-fit-col is-no">
        <h3>It&apos;s probably not if</h3>
        <ul>{homeFit.no.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link className="sv-btn" href="#audit">{page.ctaLabel} <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}

function Problem() {
  const max = Math.max(...homeClickStudy.rows.map((row) => row.value));
  return (
    <div className="hp">
      <div className="hp-left">
        <Head heading={homeProblem} />
        <figure className="hp-chart">
          <figcaption>{homeClickStudy.title}</figcaption>
          <ul>
            {homeClickStudy.rows.map((row, index) => (
              <li key={row.label} className={index ? "is-ai" : ""}>
                <span className="hp-chart-label">{row.label}</span>
                <span className="hp-chart-track"><i style={{ width: `${(row.value / max) * 100}%` }} /></span>
                <b>{row.value}%</b>
              </li>
            ))}
          </ul>
          <p className="hp-chart-source"><RichText text={homeClickStudy.source} /></p>
        </figure>
      </div>
      <ol className="hp-list">
        {homeProblem.points.map((point, index) => (
          <li key={point.quote}>
            <span className="hp-n" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>&ldquo;{point.quote}&rdquo;</h3>
              <p>{point.body}</p>
              <p className="hp-fix"><span aria-hidden="true">✓</span> {point.fix}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function IndustryList() {
  return (
    <ul className="hm-ind">
      {homeIndustries.items.map((item) => (
        <li key={item.href}>
          <Link className="hm-ind-card" href={item.href}>
            <span className="hm-ind-top">
              <span className="hm-ind-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <strong>{item.name}</strong>
            </span>
            <span className="hm-ind-search"><i aria-hidden="true">⌕</i>{item.search}</span>
            <span className="hm-ind-you" aria-hidden="true">↳ Your business, first</span>
            <span className="hm-ind-line">{item.line}</span>
            <span className="hm-ind-cta">See how we help <span aria-hidden="true">→</span></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <main className="sv-page hm-page" id="main-content">
      <HomeSchema />

      <header className="sv-hero hm-hero">
        <div className="sv-wrap">
          <div className="hm-hero-copy">
            <p className="sv-eyebrow">{homeHero.eyebrow}</p>
            <h1>
              {homeHero.h1Lead} <span className="sv-hl">{homeHero.h1Accent}</span>
            </h1>
            <p className="sv-hero-intro">{homeHero.intro}</p>
            <Ctas page={page} />
            <p className="sv-micro">{homeHero.micro}</p>
          </div>
          <HeroEngine />
        </div>
      </header>

      <LpClientLogos label="Businesses we've worked with" />

      <Section tone="mesh">
        <Problem />
      </Section>

      <Section tone="tint">
        <Head heading={homeFit.heading} center />
        <Fit />
      </Section>

      <Section tone="ink" className="sx-sec">
        <Head heading={homeSystem} center />
        <ServiceExplorer services={homeSystem.items} />
      </Section>

      <Section tone="mesh">
        <Head heading={homeProof.heading} />
        <div className="hm-proof">
          {homeProof.items.map((item) => <DataCard item={item} key={item.title} />)}
        </div>
        <p className="sv-proof-closing" style={{ marginTop: "1.25rem" }}>
          <RichText text="See how we approach this on our [AI SEO & GEO](/ai-seo-services) and [SEO](/seo-services) pages, or browse our [case studies](/case-studies)." />
        </p>
      </Section>

      <Section tone="tint" className="hm-voices">
        <Head heading={{ eyebrow: "Client stories", title: "Don't take our word for it.", accent: "Hear it from clients.", intro: "Video reviews from real business owners, and our verified reviews on Clutch." }} />
        <LpVideoTestimonials showHeading={false} />
        <ClutchReviews ctaHref="#audit" ctaLabel={page.ctaLabel} />
      </Section>

      <Section tone="ink" className="hm-ind-sec">
        <Head heading={homeIndustries} />
        <IndustryList />
        <p className="hm-note">Not listed? If customers search online for what you do, the free audit will show whether we can help.</p>
      </Section>

      <Section tone="tint">
        <Head heading={homeTimeline} />
        <Timeline steps={homeTimeline.steps} />
      </Section>

      <Compare heading={homeCompare} rows={homeCompare.rows} />
      <Faq page={page} tone="mesh" id="faq" />
      <Guides page={page} tone="tint" />
      <FinalCta page={page} />
      <StickyCta label={page.ctaLabel} text={page.sticky} whatsappHref={whatsappHref} />
    </main>
  );
}
