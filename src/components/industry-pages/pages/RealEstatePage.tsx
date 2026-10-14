import { buyerJourney, fairHousingRedline, realEstatePage as page } from "@/content/industries/realEstate";
import { Bento, CtaBand, Faq, FinalCta, Guides, Head, Illustration, Industries, PainCards, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { ExampleIllustration, IndustryHero, IndustryPageShell, Plan, Rules, Segments } from "../IndustryKit";
import "./real-estate.css";

function HeroSearch() {
  return (
    <ExampleIllustration label="Illustration of a Google search for living in a neighborhood: an AI Overview cites your neighborhood guide, and your agent profile appears with your brokerage name" className="re-hero-visual">
      <div className="re-serp">
        <div className="re-bar"><span>living in maple heights</span><i aria-hidden="true">⌕</i></div>
        <div className="re-ai">
          <small>AI Overview</small>
          <p>Maple Heights is known for tree-lined streets, older brick homes and a short commute downtown. Local agent guides note most homes are 3–4 bedroom single-family houses.</p>
          <div className="re-cite"><b>Maple Heights Neighborhood Guide</b><span>yourname-realty.com</span></div>
        </div>
        <div className="re-result">
          <span className="re-avatar" />
          <div>
            <strong>Your Name · Real Estate Agent</strong>
            <span>Your Brokerage LLC · Serves Maple Heights</span>
            <span className="re-stars">★★★★★ <em>Google reviews</em></span>
          </div>
        </div>
      </div>
      <div className="sv-glass re-listing">
        <div className="re-house" />
        <strong>Home valuation request</strong>
        <small>From your Maple Heights guide</small>
      </div>
    </ExampleIllustration>
  );
}

function Journey() {
  return (
    <ol className="re-journey">
      {buyerJourney.steps.map((step, index) => (
        <li key={step.title} className={index === buyerJourney.steps.length - 1 ? "is-last" : ""}>
          <span className="re-step-n" aria-hidden="true">{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

function Redline() {
  return (
    <Illustration label="Example of listing copy edited for Fair Housing: a line describing who the home is ideal for is crossed out and replaced with a line describing the home and nearby amenities" className="re-redline">
      <div className="re-copy is-before">
        <small>✕ Describes people</small>
        <p><s>{fairHousingRedline.before}</s></p>
      </div>
      <div className="re-copy is-after">
        <small>✓ Describes the home</small>
        <p>{fairHousingRedline.after}</p>
      </div>
    </Illustration>
  );
}

export function RealEstatePage() {
  return (
    <IndustryPageShell page={page}>
      <IndustryHero page={page} visual={<HeroSearch />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={buyerJourney} center />
        <Journey />
      </Section>

      <Section tone="tint">
        <Head heading={page.segments} />
        <Segments segments={page.segments} />
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <Bento items={page.included.items} />
      </Section>

      <CtaBand page={page} />

      <Section tone="ink">
        <div className="re-rules-head">
          <Head heading={page.rules} />
          <Redline />
        </div>
        <Rules rules={page.rules} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="tint">
        <Plan page={page} />
      </Section>

      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <Industries
        tone="dots"
        exclude={page.path}
        heading={{ eyebrow: "Other industries", title: "Not in real estate?", accent: "See your industry.", intro: "The same local search and AI visibility work, shaped for other trust-driven businesses." }}
      />
      <FinalCta page={page} />
    </IndustryPageShell>
  );
}
