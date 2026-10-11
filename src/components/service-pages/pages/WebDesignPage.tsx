import Image from "next/image";
import { webAnatomy, webDesignPage as page, webFeatures, webVitals } from "@/content/services/webDesign";
import { RichText } from "../RichText";
import {
  Bento,
  Compare,
  CtaBand,
  Faq,
  FinalCta,
  Guides,
  Head,
  Hero,
  Illustration,
  Industries,
  PainCards,
  ProjectGrid,
  ProofClosing,
  Scenarios,
  Section,
  ServicePageShell,
} from "../kit/Kit";
import "./web-design.css";

function HeroDevices() {
  return (
    <figure className="web-hero-visual">
      <div className="web-browser">
        <div className="web-browser-bar"><i /><i /><i /><span>vanislepaint.com</span></div>
        <div className="web-browser-shot">
          <Image src="/assets/screenshots/van-isle-paint-full.webp" alt="Van Isle Paint homepage designed and built by Rank It Globally" fill priority sizes="(max-width: 980px) 90vw, 560px" />
        </div>
      </div>
      <div className="web-phone">
        <div className="web-phone-shot">
          <Image src="/assets/screenshots/wilmette-family-dental-full.webp" alt="Wilmette Family Dental homepage on a phone" fill sizes="160px" />
        </div>
      </div>
      <figcaption className="sv-glass web-hero-cap"><small>Real client projects</small><strong>Van Isle Paint · Wilmette Family Dental</strong></figcaption>
    </figure>
  );
}

function Anatomy() {
  return (
    <div className="web-anatomy">
      <Illustration label="Illustration of a website homepage with numbered hotspots on the headline, trust badges, call to action, mobile layout and speed" className="web-wire-illo">
        <div className="web-wire">
          <div className="web-wire-nav"><b /><span /><span /><span /><em>Call now</em></div>
          <div className="web-wire-hero">
            <div>
              <i className="web-spot" data-n="1" />
              <b className="w90" /><b className="w70" />
              <p className="web-wire-sub" />
              <div className="web-wire-cta"><i className="web-spot" data-n="3" /><span>Book a visit</span></div>
              <div className="web-wire-trust"><i className="web-spot" data-n="2" /><em>★★★★★</em><em>Licensed</em><em>Insured</em></div>
            </div>
            <div className="web-wire-img" />
          </div>
          <div className="web-wire-cards"><span /><span /><span /></div>
          <i className="web-spot web-spot--phone" data-n="4" />
          <div className="web-wire-speed"><i className="web-spot" data-n="5" />Loads in under 2.5s</div>
        </div>
      </Illustration>
      <ol className="web-spots">
        {webAnatomy.spots.map((spot, index) => (
          <li key={spot.title}>
            <span aria-hidden="true">{index + 1}</span>
            <div><h3>{spot.title}</h3><p>{spot.body}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Features() {
  return (
    <div className="web-features">
      {webFeatures.map((feature, index) => (
        <div className="web-feature" id={feature.id} key={feature.id}>
          <div className="web-feature-copy">
            <h3>{feature.title}</h3>
            {feature.paragraphs.map((p) => <p key={p}><RichText text={p} /></p>)}
            <ul className="sv-list-check">{feature.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
          {index === 0 ? (
            <Illustration label="Illustration of a wireframe turning into a finished, colorful page design" className="web-morph-illo">
              <div className="web-morph">
                <div className="web-morph-card is-wire"><b /><b className="w70" /><span /><div><i /><i /><i /></div></div>
                <span className="web-morph-arrow">→</span>
                <div className="web-morph-card is-final"><b /><b className="w70" /><span /><div><i /><i /><i /></div></div>
              </div>
            </Illustration>
          ) : (
            <Illustration label="Illustration of a single landing page with one headline, proof, a short form and one button" className="web-lp-illo">
              <div className="web-lp">
                <b className="w90" /><b className="w60" />
                <div className="web-lp-proof"><em>★★★★★</em><em>Before / after</em></div>
                <div className="web-lp-form"><span /><span /><strong>Get my quote</strong></div>
              </div>
            </Illustration>
          )}
        </div>
      ))}
    </div>
  );
}

function Vitals() {
  return (
    <div className="web-vitals">
      <div className="web-gauges">
        {webVitals.metrics.map((metric) => (
          <div className="sv-card web-gauge" key={metric.name}>
            <div className="web-gauge-ring" aria-hidden="true"><span>{metric.name}</span></div>
            <strong>Good: {metric.good}</strong>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>
      <Illustration label="Illustration of a redirect map sending old page addresses to their new pages" className="web-redirect-illo">
        <div className="web-redirect">
          <strong>Redirect map</strong>
          {[["/services.html", "/plumbing-services"], ["/about-us.php", "/about"], ["/contact.html", "/contact"], ["/blog/?p=118", "/blog/water-heater-guide"]].map(([from, to]) => (
            <div key={from}><code>{from}</code><span>301 →</span><code>{to}</code></div>
          ))}
        </div>
      </Illustration>
    </div>
  );
}

function Gantt() {
  const rows = [
    { label: "Strategy & wireframes", start: 0, span: 2 },
    { label: "Design & copy", start: 2, span: 3 },
    { label: "Build & QA", start: 5, span: 2 },
    { label: "Launch & redirects", start: 7, span: 1 },
  ];
  return (
    <div className="web-gantt-wrap">
      <ol className="web-gantt">
        <li className="web-gantt-head" aria-hidden="true"><span />{Array.from({ length: 8 }).map((_, i) => <em key={i}>W{i + 1}</em>)}</li>
        {rows.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <i style={{ gridColumn: `${row.start + 2} / span ${row.span}` }} />
          </li>
        ))}
      </ol>
      <div className="web-steps">
        {page.timeline.steps.map((step) => (
          <div className="sv-card" key={step.period}>
            <p className="sv-track-period">{step.period}</p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WebDesignPage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroDevices />} />

      <Section tone="ink">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="mesh">
        <Head heading={webAnatomy} />
        <Anatomy />
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <Bento items={page.included.items} />
        <Features />
      </Section>

      <Section tone="tint">
        <Head heading={webVitals} />
        <Vitals />
      </Section>

      <CtaBand page={page} />

      <Section tone="ink">
        <Head heading={page.proof} />
        <ProjectGrid slugs={["van-isle-paint", "wilmette-family-dental", "genesis-biolabs", "chicago-tech", "simmons-capital", "cosmic-coco"]} />
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.timeline} />
        <Gantt />
      </Section>

      <Section tone="tint">
        <Head heading={page.scenarios} />
        <Scenarios items={page.scenarios.items} />
      </Section>

      <Industries heading={page.industries} />
      <Compare heading={page.comparison} rows={page.comparison.rows} />
      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <FinalCta page={page} />
    </ServicePageShell>
  );
}
