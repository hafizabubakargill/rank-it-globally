import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { seoFunnel, seoPage as page, seoPipeline } from "@/content/services/seo";
import { RichText } from "../RichText";
import {
  Compare,
  CtaBand,
  DataCard,
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
import "./seo.css";

function HeroSerp() {
  const rows = ["Competitor A — Plumbing & Drains", "Competitor B — 24/7 Plumbers", "Directory listing — Top plumbers"];
  return (
    <Illustration label="Illustration of a Google results page where your business climbs from position 14 to the top three, with tracked calls" className="seo-hero-visual">
      <div className="sv-glass seo-serp">
        <div className="seo-search"><span className="seo-g">G</span><span>emergency plumber austin</span><i>⌕</i></div>
        <div className="seo-result is-you">
          <small>yourbusiness.com › emergency-plumbing</small>
          <strong>24/7 Emergency Plumber in Austin | Your Business</strong>
          <span>Licensed plumbers on call tonight. Upfront pricing, same-day visits…</span>
          <em className="seo-climb">#14 → #2</em>
        </div>
        {rows.map((row) => (
          <div className="seo-result" key={row}>
            <small>example.com</small>
            <strong>{row}</strong>
            <span className="seo-line" />
          </div>
        ))}
      </div>
      <div className="sv-glass seo-calls">
        <small>Calls from organic search</small>
        <div className="seo-spark">{[20, 26, 24, 34, 40, 38, 52, 60].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        <strong>Tracked to the lead</strong>
      </div>
    </Illustration>
  );
}

function Funnel() {
  return (
    <div className="seo-funnel">
      {seoFunnel.stages.map((stage, index) => (
        <div className={`seo-funnel-stage seo-funnel-stage--${index}`} key={stage.label}>
          <strong>{stage.value}</strong>
          <span>{stage.label}</span>
          <small>{stage.note}</small>
        </div>
      ))}
      <p className="seo-funnel-source">Impressions and clicks: Google Search Console, Client B, Jul 5 – Oct 3, 2026.</p>
    </div>
  );
}

function Pipeline() {
  const icons = ["search", "content", "shield"] as const;
  return (
    <ol className="seo-pipe">
      {seoPipeline.stages.map((stage, index) => (
        <li key={stage.title}>
          <span className="seo-pipe-icon" aria-hidden="true"><EastsideIcon name={icons[index]} /></span>
          <span className="seo-pipe-step">Step {index + 1}</span>
          <h3>{stage.title}</h3>
          <p className="seo-pipe-q">{stage.question}</p>
          <p className="seo-pipe-breaks"><b>What breaks it:</b> {stage.breaks}</p>
        </li>
      ))}
    </ol>
  );
}

function AuditChecklist() {
  const items: [string, "ok" | "warn" | "bad"][] = [
    ["Pages indexed in Google", "warn"],
    ["Mobile page speed (LCP)", "bad"],
    ["Title tags match search intent", "warn"],
    ["Schema markup", "bad"],
    ["Internal links to money pages", "warn"],
    ["Call & form tracking", "bad"],
    ["HTTPS and sitemap", "ok"],
  ];
  return (
    <Illustration label="Illustration of a technical SEO audit checklist with passing, warning and failing checks" className="seo-checklist-illo">
      <div className="seo-checklist">
        <div className="seo-checklist-head"><strong>Site audit</strong><span>yourbusiness.com</span></div>
        {items.map(([label, status]) => (
          <div className="seo-check" key={label}><span>{label}</span><em className={`is-${status}`}>{status === "ok" ? "Pass" : status === "warn" ? "Fix" : "Fail"}</em></div>
        ))}
        <div className="seo-score"><span>Health score</span><div className="sv-bar"><i style={{ width: "46%" }} /></div><b>46 → 90+</b></div>
      </div>
    </Illustration>
  );
}

export function SeoPage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroSerp />} />

      <Section tone="dots">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <div className="sv-split">
          <Head heading={seoFunnel} />
          <Funnel />
        </div>
      </Section>

      <Section tone="mesh">
        <Head heading={seoPipeline} center />
        <Pipeline />
      </Section>

      <Section tone="tint">
        <div className="seo-included">
          <div className="seo-included-side">
            <Head heading={page.included} />
            <AuditChecklist />
          </div>
          <ol className="seo-deliverables">
            {page.included.items.map((item, index) => (
              <li className="sv-card" key={item.title}>
                <span className="seo-del-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="seo-del-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p><RichText text={item.body} /></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink">
        <Head heading={page.proof} />
        <div className="seo-proof">
          {page.proof.items.map((item) => <DataCard item={item} key={item.title} />)}
        </div>
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <CtaBand page={page} />

      <Section tone="dots" className="sv-sec--flush-top seo-timeline">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.scenarios} />
        <Scenarios items={page.scenarios.items} />
      </Section>

      <Compare heading={page.comparison} rows={page.comparison.rows} />
      <Industries heading={page.industries} tone="tint" />
      <Faq page={page} tone="dots" />
      <Guides page={page} />
      <FinalCta page={page} />
    </ServicePageShell>
  );
}
