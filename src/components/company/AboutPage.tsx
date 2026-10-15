import Link from "next/link";
import ClutchReviews from "@/components/ClutchReviews";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { Ctas, Faq, FinalCta, Guides, Head, Industries, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { StickyCta } from "@/components/service-pages/kit/StickyCta";
import { aboutExpect, aboutFacts, aboutHero, aboutMeta, aboutPage as page, aboutPaths, aboutPrinciples, founder } from "@/content/about";
import { organizationId, siteUrl, whatsappHref } from "@/content/organization";
import { CompanySchema } from "./CompanyKit";

function FactCard() {
  return (
    <aside className="ab-facts" aria-label="Rank It Globally at a glance">
      <div className="ab-facts-head">
        {/* Photo from the co-founder's author profile in Sanity. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={founder.photo} alt={`${founder.name}, ${founder.role} of Rank It Globally`} width={72} height={72} />
        <div>
          <strong>{founder.name}</strong>
          <span>{founder.role}, Rank It Globally</span>
        </div>
      </div>
      <dl>
        {aboutFacts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.href ? <a href={fact.href} target="_blank" rel="noopener noreferrer">{fact.value}</a> : fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function AboutPage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    image: founder.photo,
    worksFor: { "@id": organizationId },
    url: `${siteUrl}/about-us`,
  };
  return (
    <main className="sv-page co-page" id="main-content">
      <CompanySchema page={{ ...page, path: "/about-us" }} type="AboutPage" name="About Rank It Globally" description={aboutMeta.description} extra={[person]} />

      <header className="sv-hero">
        <div className="sv-wrap sv-hero-grid">
          <div>
            <div className="sv-crumbs" role="navigation" aria-label="Breadcrumb">
              <ol><li><Link href="/">Home</Link></li><li aria-current="page">About</li></ol>
            </div>
            <p className="sv-eyebrow">{aboutHero.eyebrow}</p>
            <h1>{aboutHero.h1Lead} <span className="sv-hl">{aboutHero.h1Accent}</span></h1>
            <p className="sv-hero-intro">{aboutHero.intro}</p>
            <Ctas page={page} />
          </div>
          <FactCard />
        </div>
      </header>

      <Section tone="mesh">
        <div className="ab-story">
          <Head heading={founder.heading} />
          <div className="ab-story-copy">
            {founder.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "is-lead" : ""}>{paragraph}</p>)}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <Head heading={aboutPrinciples} center />
        <ul className="ab-principles">
          {aboutPrinciples.items.map((item, index) => (
            <li key={item.title}>
              <span className="ab-p-n" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className="ab-p-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink">
        <Head heading={aboutPaths} />
        <ul className="ab-paths">
          {aboutPaths.items.map((item) => (
            <li key={item.href}>
              <Link className="ab-path" href={item.href}>
                <strong>{item.question}</strong>
                <span>{item.answer}</span>
                <em>{item.cta} <span aria-hidden="true">→</span></em>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mesh" className="hm-voices">
        <Head heading={{ eyebrow: "What clients say", title: "Verified reviews,", accent: "not hand-picked quotes.", intro: "Our reviews on Clutch are verified by Clutch. You can watch client video reviews on our [case studies](/case-studies) page." }} />
        <ClutchReviews ctaHref="/case-studies" ctaLabel="See our case studies" />
      </Section>

      <Section tone="tint">
        <Head heading={aboutExpect} />
        <Timeline steps={aboutExpect.steps} />
      </Section>

      <Industries
        tone="dots"
        heading={{ eyebrow: "Who we work with", title: "Businesses whose customers", accent: "search before they buy.", intro: "We go deepest in these industries." }}
      />
      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <FinalCta page={page} />
      <StickyCta label={page.ctaLabel} text={page.sticky} whatsappHref={whatsappHref} />
    </main>
  );
}
