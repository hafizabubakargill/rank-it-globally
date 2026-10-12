import { aiSeoPage as page, aiSeoShift, aiSeoSignals } from "@/content/services/aiSeo";
import {
  Bento,
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
import "./ai-seo.css";

function HeroChat() {
  return (
    <Illustration label="Illustration of an AI assistant answering a customer's question and naming your business first, with a citation to your website" className="ai-hero-visual">
      <div className="sv-glass ai-chat">
        <div className="ai-chat-bar"><i /><i /><i /><span>AI assistant</span></div>
        <div className="ai-bubble ai-bubble--user">Which family dentist near me takes walk-ins on Saturdays?</div>
        <div className="ai-bubble ai-bubble--bot">
          <p>Here are three practices nearby that accept Saturday walk-ins:</p>
          <ol>
            <li className="is-you"><b>Your Practice</b><span className="ai-cite">yourpractice.com</span></li>
            <li><b className="sv-blur">Brushy Creek Dental</b><span className="ai-cite ai-cite--muted">directory</span></li>
            <li><b className="sv-blur">Parkside Family Smiles</b></li>
          </ol>
        </div>
        <div className="ai-platforms">
          {["ChatGPT", "Perplexity", "Gemini", "AI Overviews"].map((name) => (
            <span className="sv-chip" key={name}><em>✓</em>{name}</span>
          ))}
        </div>
      </div>
      <div className="sv-glass ai-float ai-float--a"><small>Share of answers</small><strong>3 of 4 platforms</strong></div>
      <div className="sv-glass ai-float ai-float--b"><small>Cited source</small><strong>Your service page</strong></div>
    </Illustration>
  );
}

function ShiftVisual() {
  return (
    <div className="ai-shift">
      <Illustration label="Illustration comparing a classic results page with ten links to an AI answer that names three businesses" className="ai-shift-illo">
        <div className="ai-shift-grid">
          <div className="sv-card ai-shift-col">
            <span className="ai-shift-label">Then</span>
            <div className="ai-serp">
              {[
                ["roundrockdental.com", "Family Dentist in Round Rock, TX | Walk-Ins Welcome"],
                ["yelp-style directory", "THE 10 BEST Dentists in Round Rock (Updated 2026)"],
                ["smilecare-tx.com", "Emergency & Family Dentistry | Same-Day Visits"],
                ["healthgrades-style listing", "Top-Rated Dentists Near Round Rock, TX"],
                ["brushycreekdental.com", "Brushy Creek Dental | New Patients Welcome"],
              ].map(([site, title]) => (
                <div className="ai-serp-row" key={title}><small className="sv-blur">{site}</small><span>{title}</span></div>
              ))}
            </div>
          </div>
          <div className="sv-card ai-shift-col ai-shift-col--now">
            <span className="ai-shift-label">Now</span>
            <div className="ai-answer">
              <p>✦ AI answer</p>
              <span className="ai-answer-text">For Saturday walk-ins near Round Rock, these three practices come up most often in reviews and listings:</span>
              <div className="ai-answer-names"><span className="is-you">Your practice?</span><span className="sv-blur">Parkside Smiles</span><span className="sv-blur">Creekview Dental</span></div>
            </div>
          </div>
        </div>
      </Illustration>
      <div className="ai-shift-lists">
        <div>
          <h3>How buyers searched</h3>
          <ol>{aiSeoShift.before.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
        <div>
          <h3>How buyers search now</h3>
          <ol>{aiSeoShift.after.map((step) => <li key={step}>{step}</li>)}</ol>
        </div>
      </div>
    </div>
  );
}

function SignalsHub() {
  return (
    <div className="ai-hub">
      <div className="ai-hub-core" aria-hidden="true">
        <span>AI answer</span>
        <svg viewBox="0 0 200 200" className="ai-hub-rings"><circle cx="100" cy="100" r="60" /><circle cx="100" cy="100" r="85" /><circle cx="100" cy="100" r="98" /></svg>
      </div>
      <ol className="ai-hub-list">
        {aiSeoSignals.items.map((item, index) => (
          <li className="sv-card" key={item.title}>
            <span className="ai-hub-num" aria-hidden="true">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const bentoVisuals = {
  0: (
    <div className="ai-mini-table">
      {[["walk-in dentist near me", "✓", "✗", "✓", "✗"], ["emergency dentist open now", "✗", "✗", "✓", "✗"], ["dentist that takes my insurance", "✓", "✓", "✗", "✓"]].map((row) => (
        <div key={row[0]}><span>{row[0]}</span>{row.slice(1).map((cell, i) => <em key={i} className={cell === "✓" ? "ok" : "no"}>{cell}</em>)}</div>
      ))}
    </div>
  ),
  1: (
    <pre className="ai-code">{`{
  "@type": "LocalBusiness",
  "name": "Your Practice",
  "telephone": "same everywhere",
  "sameAs": [ ...profiles ]
}`}</pre>
  ),
  2: (
    <div className="ai-before-after">
      <p className="is-before">&ldquo;We are a passionate team dedicated to excellence...&rdquo;</p>
      <p className="is-after">&ldquo;Yes, we take Saturday walk-ins from 9am to 1pm in Round Rock.&rdquo;</p>
    </div>
  ),
  5: (
    <div className="ai-bars">
      {[28, 40, 46, 58, 66, 74].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}
    </div>
  ),
};

export function AiSeoPage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroChat />} />

      <Section tone="mesh">
        <Head heading={aiSeoShift} />
        <ShiftVisual />
      </Section>

      <Section tone="tint">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={aiSeoSignals} />
        <SignalsHub />
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <Bento items={page.included.items} layout={["wide", "wide", "", "", "", "full"]} visuals={bentoVisuals} />
      </Section>

      <CtaBand page={page} />

      <Section tone="mesh" className="sv-sec--flush-top">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="ink">
        <Head heading={page.proof} />
        <div className="ai-proof-grid">
          {page.proof.items.map((item) => <DataCard item={item} key={item.title} />)}
        </div>
        <div className="ai-proof-callout">
          <span aria-hidden="true">✦</span>
          <p>Search Console now reports <strong>performance in generative AI features</strong>: AI visibility shows up in Google&apos;s own data.</p>
        </div>
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <Section tone="tint">
        <Head heading={page.scenarios} />
        <Scenarios items={page.scenarios.items} />
      </Section>

      <Industries heading={page.industries} />
      <Compare heading={page.comparison} rows={page.comparison.rows} />
      <Faq page={page} />
      <Guides page={page} />
      <FinalCta page={page} />
    </ServicePageShell>
  );
}
