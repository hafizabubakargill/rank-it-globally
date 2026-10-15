import Link from "next/link";
import ClutchReviews from "@/components/ClutchReviews";
import LpClientLogos from "@/components/LpClientLogos";
import LpVideoTestimonials from "@/components/LpVideoTestimonials";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { ExampleIllustration } from "@/components/industry-pages/IndustryKit";
import { plainText, RichText } from "@/components/service-pages/RichText";
import { Compare, CtaBand, Ctas, DataCard, Faq, FinalCta, Guides, Head, PainCards, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { StickyCta } from "@/components/service-pages/kit/StickyCta";
import {
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
import { organizationAddress, organizationId, organizationSchema, siteUrl, whatsappHref } from "@/content/organization";
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

// Built from a real client's Google Business Profile (Dents, Hail & Detail,
// Denver: 4.9 stars, 384 reviews, Book Online). The AI answer wording and the
// lead card are illustrative, and the caption says so.
function HeroResults() {
  return (
    <ExampleIllustration
      label="Illustration of a Google search for hail damage repair in Denver: the AI Overview and the first Maps result show Dents, Hail & Detail, a real client with a 4.9-star rating from 384 Google reviews, and a new booking comes in"
      className="hm-hero-visual"
      note="Built from a real client's Google profile."
    >
      <div className="hm-serp">
        <div className="hm-bar"><span>hail damage repair denver</span><i>⌕</i></div>
        <div className="hm-ai">
          <small>AI Overview</small>
          <p>For hail and paintless dent repair in Denver, <b>Dents, Hail &amp; Detail</b> is a highly rated option, with strong reviews and online booking.</p>
          <span className="hm-cite">Sources: Google reviews · business website</span>
        </div>
        <div className="hm-maps">
          <small>Places</small>
          <div className="hm-place is-you">
            <b>1</b>
            <div><strong>Dents, Hail &amp; Detail</strong><span><em className="hm-stars">4.9 ★★★★★</em> (384) · Denver, CO</span></div>
            <em className="hm-book">Book online</em>
          </div>
          <div className="hm-place"><b>2</b><div><strong className="sv-blur">Front Range Dent Pros</strong><span>4.3 ★★★★☆ (41)</span></div></div>
        </div>
      </div>
      <div className="sv-glass hm-lead">
        <small>New booking · from Google</small>
        <strong>&ldquo;Hail repair estimate for my truck&rdquo;</strong>
        <span>Found through search, not an ad</span>
      </div>
    </ExampleIllustration>
  );
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

function SystemGrid() {
  const featured = homeSystem.items.filter((item) => item.points);
  const more = homeSystem.items.filter((item) => !item.points);
  return (
    <>
      <ol className="hm-path" aria-label="How search turns into a lead">
        {homeSystem.steps.map((step, index) => <li key={step}><b>{index + 1}</b>{step}</li>)}
      </ol>
      <ul className="hm-money">
        {featured.map((item) => (
          <li key={item.href}>
            <Link className="hm-money-card" href={item.href}>
              <span className="hm-money-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul className="hm-money-points">{item.points?.map((point) => <li key={point}>{point}</li>)}</ul>
              <span className="hm-money-cta">Explore {item.title.split(" & ")[0]} <span aria-hidden="true">→</span></span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hm-more-services">
        {more.map((item) => (
          <li key={item.href}>
            <Link className="hm-mini-card" href={item.href}>
              <span className="hm-mini-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <span className="hm-mini-copy"><strong>{item.title}</strong><span>{item.body}</span></span>
              <span className="hm-mini-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
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

      <header className="sv-hero">
        <div className="sv-wrap sv-hero-grid">
          <div>
            <p className="sv-eyebrow">{homeHero.eyebrow}</p>
            <h1>
              {homeHero.h1Lead} <span className="sv-hl">{homeHero.h1Accent}</span>
            </h1>
            <p className="sv-hero-intro">{homeHero.intro}</p>
            <Ctas page={page} />
            <p className="sv-micro">{homeHero.micro}</p>
            <ul className="in-chips" aria-label="Where we get you found">
              {homeHero.surfaces.map((surface) => <li key={surface}>{surface}</li>)}
            </ul>
          </div>
          <HeroResults />
        </div>
      </header>

      <LpClientLogos label="Businesses we've worked with" />

      <Section tone="mesh">
        <Head heading={homeProblem} />
        <PainCards problem={homeProblem} />
      </Section>

      <Section tone="tint">
        <Head heading={homeFit.heading} center />
        <Fit />
      </Section>

      <Section tone="dots">
        <Head heading={homeSystem} />
        <SystemGrid />
      </Section>

      <CtaBand page={page} />

      <Section tone="ink">
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
