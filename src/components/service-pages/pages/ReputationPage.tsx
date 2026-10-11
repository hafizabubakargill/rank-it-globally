import { reputationPage as page, reviewFlywheel, reviewRules } from "@/content/services/reputation";
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
import "./reputation.css";

function HeroReviewFlow() {
  return (
    <Illustration label="Illustration of a text message asking a customer for a review, a new five-star review notification and a reply from the business" className="rep-hero-visual">
      <div className="rep-phone">
        <div className="rep-phone-top"><b>Your Business</b><small>Text message</small></div>
        <div className="rep-msg rep-msg--in">Hi Sam, thanks for choosing us today! Would you mind sharing how we did? It takes 30 seconds: g.page/review</div>
        <div className="rep-msg rep-msg--out">Done! You guys were great 🙌</div>
      </div>
      <div className="sv-glass rep-notif">
        <small>New Google review</small>
        <span className="rep-stars">★★★★★</span>
        <p>&ldquo;Friendly, fast and honest about the price.&rdquo;</p>
      </div>
      <div className="sv-glass rep-reply">
        <small>Your reply · drafted for you</small>
        <p>Thanks so much, Sam! We&apos;re glad it went smoothly. See you next time.</p>
      </div>
    </Illustration>
  );
}

function Rules() {
  return (
    <div className="rep-rules">
      <div className="rep-rules-col is-ok">
        <h3><span aria-hidden="true">✓</span> Allowed</h3>
        <ul>{reviewRules.allowed.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rep-rules-col is-no">
        <h3><span aria-hidden="true">✕</span> Not allowed</h3>
        <ul>{reviewRules.banned.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  );
}

function Flywheel() {
  return (
    <div className="rep-fly">
      <div className="rep-fly-ring" aria-hidden="true"><span>★</span></div>
      <ol>
        {reviewFlywheel.steps.map((step, index) => (
          <li key={step.title} className={`rep-fly-step rep-fly-step--${index}`}>
            <b>{index + 1}</b>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Playbook() {
  return (
    <Illustration label="Illustration of a one-star complaint and a calm, professional reply that addresses the issue and offers to make it right" className="rep-play-illo">
      <div className="rep-play">
        <div className="rep-review is-bad">
          <div><b>Customer</b><span className="rep-stars is-low">★☆☆☆☆</span></div>
          <p>&ldquo;Waited 40 minutes past my appointment time. Not happy.&rdquo;</p>
        </div>
        <div className="rep-review is-reply">
          <div><b>Owner response</b><span className="sv-chip">Calm · specific · offline next step</span></div>
          <p>&ldquo;We&apos;re sorry about the wait, that&apos;s not the experience we want for anyone. We were short-staffed that morning and should have told you. Please call us at the front desk so we can make it right.&rdquo;</p>
        </div>
      </div>
    </Illustration>
  );
}

export function ReputationPage() {
  const proof = page.proof.items[0];
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroReviewFlow />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={reviewRules} center />
        <Rules />
      </Section>

      <Section tone="tint">
        <div className="sv-split">
          <Head heading={reviewFlywheel} />
          <Flywheel />
        </div>
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <Bento items={page.included.items} />
        <div className="rep-play-wrap">
          <div>
            <h3>How we answer a bad review</h3>
            <p>Acknowledge, take responsibility where it&apos;s fair, explain briefly and move the conversation offline. Future customers read the reply more closely than the complaint.</p>
          </div>
          <Playbook />
        </div>
      </Section>

      <CtaBand page={page} />

      <Section tone="ink" className="rep-proof">
        <Head heading={page.proof} />
        <div className="rep-big">
          <div className="rep-big-rating">
            <strong>4.9</strong>
            <span className="rep-stars rep-stars--big" aria-hidden="true">★★★★★</span>
            <small>from 384 Google reviews</small>
          </div>
          <div className="rep-big-copy">
            <h3>{proof.title}</h3>
            {proof.body.map((p) => <p key={p}>{p}</p>)}
            <dl>{proof.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
            <small>Source: {proof.source}</small>
            {/* TODO(owner): add real screenshot (Denver shop Google Business Profile), unedited. */}
          </div>
        </div>
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <Section tone="mesh" className="rep-timeline">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
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
