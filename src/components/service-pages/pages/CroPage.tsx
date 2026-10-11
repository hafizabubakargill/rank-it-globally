import { croChecklist, croFunnel, croPage as page } from "@/content/services/cro";
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
  ProofClosing,
  Scenarios,
  Section,
  ServicePageShell,
  Timeline,
} from "../kit/Kit";
import "./cro.css";

function HeroHeatmap() {
  return (
    <Illustration label="Illustration of a web page with a heatmap overlay showing where visitors click and how far they scroll" className="cro-hero-visual">
      <div className="cro-page">
        <div className="cro-page-nav"><b /><span /><span /><em>Call</em></div>
        <b className="cro-h w90" /><b className="cro-h w60" />
        <p className="cro-sub" />
        <div className="cro-btn">Book my consultation</div>
        <div className="cro-cards"><i /><i /><i /></div>
        <div className="cro-form"><span /><span /><span /><span /></div>
        <span className="cro-heat cro-heat--1" /><span className="cro-heat cro-heat--2" /><span className="cro-heat cro-heat--3" /><span className="cro-heat cro-heat--4" />
        <span className="cro-cursor">➤</span>
        <div className="cro-scroll"><i /><small>Scroll depth</small></div>
      </div>
      <div className="sv-glass cro-ab">
        <small>A/B test · example</small>
        <div><span>A: &ldquo;Submit&rdquo;</span><b className="cro-ab-a" /></div>
        <div><span>B: &ldquo;Get my free quote&rdquo;</span><b className="cro-ab-b" /><em>Winner</em></div>
      </div>
    </Illustration>
  );
}

function FunnelBars() {
  return (
    <Illustration label="Illustration of a funnel where each step from landing to becoming a lead gets narrower" className="cro-funnel-illo">
      <ol className="cro-funnel">
        {croFunnel.steps.map((step) => (
          <li key={step.label}>
            <div className="cro-funnel-bar" style={{ width: `${step.width}%` }}><span>{step.label}</span></div>
            <small>{step.note}</small>
          </li>
        ))}
      </ol>
    </Illustration>
  );
}

function Scorecard() {
  return (
    <div className="cro-score">
      <div className="cro-score-card">
        <div className="cro-score-head"><strong>Page scorecard</strong><span>4 checks</span></div>
        <ol>
          {croChecklist.items.map((item, index) => (
            <li key={item.title}>
              <span className="cro-score-n" aria-hidden="true">{index + 1}</span>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
              <span className="cro-score-tick" aria-hidden="true">✓</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ConversionGauge() {
  return (
    <div className="cro-gauge-wrap">
      <div className="cro-gauge" style={{ "--p": "12.26" } as React.CSSProperties} aria-hidden="true">
        <div><strong>12.26%</strong><span>conversion rate</span></div>
      </div>
      <div className="cro-gauge-copy">
        <span className="sv-eyebrow">Real result</span>
        <h3>{page.proof.items[0].title}</h3>
        {page.proof.items[0].body.map((p) => <p key={p}>{p}</p>)}
        <dl>
          {page.proof.items[0].stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
        </dl>
        <small>Source: {page.proof.items[0].source}</small>
        {/* TODO(owner): add real screenshot (Shopify launch weekend dashboard), unedited. */}
      </div>
    </div>
  );
}

export function CroPage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroHeatmap />} />

      <Section tone="tint">
        <div className="sv-split">
          <Head heading={croFunnel} />
          <FunnelBars />
        </div>
      </Section>

      <Section tone="ink">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="mesh">
        <div className="sv-split">
          <Head heading={croChecklist} />
          <Scorecard />
        </div>
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <Bento items={page.included.items} layout={["wide", "wide"]} />
      </Section>

      <CtaBand page={page} />

      <Section tone="ink" className="cro-proof">
        <Head heading={page.proof} />
        <ConversionGauge />
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <Section tone="tint" className="cro-timeline">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.scenarios} />
        <Scenarios items={page.scenarios.items} />
      </Section>

      <Industries heading={page.industries} />
      <Compare heading={page.comparison} rows={page.comparison.rows} />
      <Faq page={page} tone="tint" />
      <Guides page={page} tone="dots" />
      <FinalCta page={page} />
    </ServicePageShell>
  );
}
