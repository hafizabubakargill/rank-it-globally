import { shortlistPages, startupCompare, techStartupsPage as page } from "@/content/industries/techStartups";
import { Bento, Compare, CtaBand, Faq, FinalCta, Guides, Head, Industries, PainCards, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { ExampleIllustration, IndustryHero, IndustryPageShell, Plan, Rules, Segments } from "../IndustryKit";
import "./tech-startups.css";

function HeroShortlist() {
  return (
    <ExampleIllustration label="Illustration of an AI assistant answering a buyer who asks for the best scheduling software for small clinics, listing your product first and citing your comparison page and a review site" className="ts-hero-visual">
      <div className="ts-ai">
        <div className="ts-ai-top"><span /><span /><span /><b>AI assistant</b></div>
        <p className="ts-q">What&apos;s the best scheduling software for a small clinic? We use Stripe and Google Calendar.</p>
        <ol className="ts-list">
          <li className="is-you"><b>1</b><div><strong>Your Product</strong><small>Built for small clinics · Stripe and Google Calendar integrations</small></div></li>
          <li><b>2</b><div><strong className="sv-blur">BookWell Pro</strong><small>Popular with larger practices</small></div></li>
          <li><b>3</b><div><strong className="sv-blur">CalendarCloud</strong><small>General-purpose scheduling</small></div></li>
        </ol>
        <div className="ts-cites"><small>Sources</small><i>yourproduct.com/compare</i><i>yourproduct.com/integrations/stripe</i><i>Review site</i></div>
      </div>
      <div className="sv-glass ts-crm">
        <small>CRM · new demo request</small>
        <strong>Source: AI referral</strong>
        <span>Landed on: comparison page</span>
      </div>
    </ExampleIllustration>
  );
}

function ShortlistMap() {
  return (
    <div className="ts-map" role="table" aria-label="Buyer searches and the page type that wins each one">
      <div className="ts-map-row ts-map-head" role="row">
        <span role="columnheader">What the buyer searches</span>
        <span role="columnheader">Page that wins it</span>
        <span role="columnheader">Why it works</span>
      </div>
      {shortlistPages.rows.map((row) => (
        <div className="ts-map-row" role="row" key={row.page}>
          <span role="cell" className="ts-query">{row.query}</span>
          <span role="cell" className="ts-page">{row.page}</span>
          <span role="cell" className="ts-why">{row.why}</span>
        </div>
      ))}
    </div>
  );
}

export function TechStartupsPage() {
  return (
    <IndustryPageShell page={page}>
      <IndustryHero page={page} visual={<HeroShortlist />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={shortlistPages} />
        <ShortlistMap />
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
        <Head heading={page.rules} />
        <Rules rules={page.rules} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Compare heading={startupCompare} rows={startupCompare.rows} />

      <Section tone="tint">
        <Plan page={page} />
      </Section>

      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <Industries
        tone="dots"
        exclude={page.path}
        heading={{ eyebrow: "Other industries", title: "Not a startup?", accent: "See your industry.", intro: "The same search and AI visibility work, shaped for local businesses and online stores." }}
      />
      <FinalCta page={page} />
    </IndustryPageShell>
  );
}
