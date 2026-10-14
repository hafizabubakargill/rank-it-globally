import { homeLeadMath, homeServicesPage as page } from "@/content/industries/homeServices";
import { Bento, CtaBand, Faq, FinalCta, Guides, Head, Illustration, Industries, PainCards, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { ExampleIllustration, IndustryHero, IndustryPageShell, Plan, Rules, Segments } from "../IndustryKit";
import "./home-services.css";

function HeroInbox() {
  return (
    <ExampleIllustration label="Illustration of a contractor's phone: a shared lead sent to four pros with a fee charged, next to a direct call from the business's own Google profile with no fee" className="hs-hero-visual">
      <div className="hs-phone">
        <div className="hs-phone-bar"><b>9:41 PM</b><span>Today</span></div>
        <div className="hs-note hs-note--shared">
          <small>Lead marketplace</small>
          <strong>Water heater repair · 2.4 mi</strong>
          <span>Also sent to 3 other pros</span>
          <em>Lead fee charged</em>
        </div>
        <div className="hs-note hs-note--call">
          <small>Incoming call · from your Google profile</small>
          <strong>Burst pipe, need someone tonight</strong>
          <span>Found you: &ldquo;plumber open now&rdquo;</span>
          <em>No lead fee</em>
          <div className="hs-call-btns"><i>Decline</i><i>Answer</i></div>
        </div>
      </div>
      <div className="sv-glass hs-badge">
        <span>Your Business</span>
        <strong>★★★★★ · Open 24 hours</strong>
        <small>Plumber · Serves your area</small>
      </div>
    </ExampleIllustration>
  );
}

function LeadMath() {
  return (
    <div className="hs-math">
      <Illustration label="Diagram: on the left, one homeowner's request fans out to four contractors; on the right, one homeowner calls one contractor directly" className="hs-math-illo">
        <div className="hs-math-cols">
          <div className="hs-math-col">
            <span className="hs-home">🏠</span>
            <div className="hs-fan">
              <i className="is-you">You</i><i>Pro 2</i><i>Pro 3</i><i>Pro 4</i>
            </div>
          </div>
          <div className="hs-math-col is-owned">
            <span className="hs-home">🏠</span>
            <div className="hs-line" />
            <div className="hs-fan"><i className="is-you">You</i></div>
          </div>
        </div>
      </Illustration>
      <div className="hs-math-lists">
        {[homeLeadMath.shared, homeLeadMath.owned].map((col, index) => (
          <div className={index ? "sv-card hs-math-list is-owned" : "sv-card hs-math-list"} key={col.title}>
            <h3>{col.title}</h3>
            <ul>{col.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeServicesPage() {
  return (
    <IndustryPageShell page={page}>
      <IndustryHero page={page} visual={<HeroInbox />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={homeLeadMath} center />
        <LeadMath />
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

      <Section tone="tint">
        <Plan page={page} />
      </Section>

      <Faq page={page} tone="mesh" />
      <Guides page={page} tone="tint" />
      <Industries
        tone="dots"
        exclude={page.path}
        heading={{ eyebrow: "Other industries", title: "Not a contractor?", accent: "See your industry.", intro: "The same local search and AI visibility work, shaped for other trust-driven businesses." }}
      />
      <FinalCta page={page} />
    </IndustryPageShell>
  );
}
