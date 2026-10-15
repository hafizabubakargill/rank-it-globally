import Image from "next/image";
import Link from "next/link";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import ClutchReviews from "@/components/ClutchReviews";
import LpVideoTestimonials from "@/components/LpVideoTestimonials";
import { Ctas, Faq, FinalCta, Guides, Head, Industries, Section } from "@/components/service-pages/kit/Kit";
import { StickyCta } from "@/components/service-pages/kit/StickyCta";
import { caseHero, caseHonesty, caseMeta, casePage as page, caseResults } from "@/content/caseStudies";
import { whatsappHref } from "@/content/organization";
import { publicProjects, type ProjectCard } from "@/content/publicPages";
import { CaseResults } from "./CaseResults";
import { CompanySchema } from "./CompanyKit";
import "@/components/industry-pages/industry-kit.css";

function getWorkTags(project: ProjectCard) {
  const searchable = [project.slug, project.name, project.category, project.platform, project.result].join(" ").toLowerCase();
  const tags = ["Web Portfolio"];
  if (project.category === "Local Service" || /dental|paint|cleaning|auto|forklift|salon|law|real estate|local/.test(searchable)) tags.push("SEO");
  if (project.category === "E-Commerce" || /shopify|woocommerce|store|retail|product|dtc|e-commerce/.test(searchable)) tags.push("E-Commerce");
  if (project.category === "Local Service") tags.push("Local Services");
  return Array.from(new Set(tags));
}

function getCardSize(index: number) {
  if (index % 9 === 0) return "large";
  if (index % 5 === 0) return "wide";
  if (index % 4 === 0) return "tall";
  return "standard";
}

const galleryProjects = publicProjects.map((project, index) => ({ ...project, tags: getWorkTags(project), cardSize: getCardSize(index) }));

function HeroProof() {
  return (
    <figure className="cs-hero-visual" role="img" aria-label="A real Google Search Console report, a real Google Business Profile with a 4.9-star rating from 384 reviews, and a 5.0 Clutch rating">
      <div aria-hidden="true">
        <div className="cs-hv-shot">
          <Image src="/assets/proof/gsc-client-b.png" alt="" width={1600} height={533} sizes="480px" priority />
          <span>Client B · 10.3K clicks · 90 days</span>
        </div>
        <div className="sv-glass cs-hv-gbp">
          <small>Google Business Profile</small>
          <strong>Dents, Hail &amp; Detail</strong>
          <span><b>4.9</b> ★★★★★ · 384 reviews</span>
        </div>
        <div className="sv-glass cs-hv-clutch">
          <small>Verified on Clutch</small>
          <strong>5.0 ★★★★★</strong>
        </div>
      </div>
    </figure>
  );
}

export function CaseStudiesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Client results",
    itemListElement: caseResults.map((result, index) => ({ "@type": "ListItem", position: index + 1, name: `${result.headline} (${result.client})` })),
  };
  return (
    <main className="sv-page co-page" id="main-content">
      <CompanySchema page={{ ...page, path: "/case-studies" }} type="CollectionPage" name="Case Studies" description={caseMeta.description} extra={[itemList]} />

      <header className="sv-hero">
        <div className="sv-wrap sv-hero-grid">
          <div>
            <div className="sv-crumbs" role="navigation" aria-label="Breadcrumb">
              <ol><li><Link href="/">Home</Link></li><li aria-current="page">Case Studies</li></ol>
            </div>
            <p className="sv-eyebrow">{caseHero.eyebrow}</p>
            <h1>{caseHero.h1Lead} <span className="sv-hl">{caseHero.h1Accent}</span></h1>
            <p className="sv-hero-intro">{caseHero.intro}</p>
            <Ctas page={page} />
            <ul className="in-chips" aria-label="What we show">
              {caseHero.chips.map((chip) => <li key={chip}>{chip}</li>)}
            </ul>
          </div>
          <HeroProof />
        </div>
      </header>

      <Section tone="tint" className="co-honesty">
        <div className="co-honesty-grid">
          <Head heading={caseHonesty} />
          <ol className="co-honesty-list">
            {caseHonesty.items.map((item, index) => (
              <li key={item.title}><span aria-hidden="true">{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="mesh" id="results">
        <Head heading={{ eyebrow: "Client results", title: "Real outcomes,", accent: "by goal.", intro: "Pick what you care about most. Each result shows where the data comes from and the service behind it." }} />
        <CaseResults results={caseResults} />
      </Section>

      <Section tone="tint" className="hm-voices">
        <Head heading={{ eyebrow: "In their words", title: "Hear it from", accent: "the business owners.", intro: "Video reviews from real clients, and our verified reviews on Clutch." }} />
        <LpVideoTestimonials showHeading={false} />
        <ClutchReviews ctaHref="#audit" ctaLabel={page.ctaLabel} />
      </Section>

      <section className="co-gallery" aria-labelledby="live-work">
        <div className="sv-wrap">
          <div className="sv-head">
            <p className="sv-eyebrow">Live websites</p>
            <h2 id="live-work">Work you can <span className="sv-hl">visit right now.</span></h2>
            <p>Websites we&apos;ve designed, built or optimized for clients across the US, Canada and beyond. Click any site to open it.</p>
          </div>
        </div>
        <CaseStudyGallery projects={galleryProjects} />
      </section>

      <Industries
        tone="dots"
        heading={{ eyebrow: "By industry", title: "See how we'd help", accent: "your industry.", intro: "What's changing for businesses like yours, and the plan we'd recommend." }}
      />
      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <FinalCta page={page} />
      <StickyCta label={page.ctaLabel} text={page.sticky} whatsappHref={whatsappHref} />
    </main>
  );
}
