import { ecommercePage as page, ecomLaunch, ecomLeaks, ecomMigration } from "@/content/services/ecommerce";
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
  Timeline,
} from "../kit/Kit";
import "./ecommerce.css";

function HeroStore() {
  return (
    <div className="eco-hero-visual">
      <Illustration label="Illustration of a product page on a phone with photos, reviews, clear shipping information and an add to cart button" className="eco-pdp-illo">
        <div className="eco-pdp">
          <div className="eco-pdp-img"><span>New</span></div>
          <div className="eco-pdp-thumbs"><i /><i /><i /><i /></div>
          <strong>Everyday Hoodie</strong>
          <span className="eco-pdp-stars">★★★★★ <em>Reviews shown up front</em></span>
          <div className="eco-pdp-sizes"><b>S</b><b className="on">M</b><b>L</b><b>XL</b></div>
          <div className="eco-pdp-ship">Free shipping over $75 · 30-day returns</div>
          <div className="eco-pdp-btn">Add to cart</div>
        </div>
      </Illustration>
      <div className="eco-real">
        <small>Real result · one client launch weekend</small>
        <strong>$253K</strong>
        <div className="eco-real-row"><span><b>626</b> orders</span><span><b>12.26%</b> conversion</span></div>
        <em>Source: Shopify dashboard</em>
      </div>
    </div>
  );
}

function Leaks() {
  return (
    <ol className="eco-leaks">
      {ecomLeaks.steps.map((step, index) => (
        <li key={step.stage}>
          <div className="eco-leak-pipe" aria-hidden="true"><span>{index + 1}</span><i className="eco-drip" /></div>
          <h3>{step.stage}</h3>
          <p className="eco-leak-bad"><b>Leak:</b> {step.leak}</p>
          <p className="eco-leak-fix"><b>Fix:</b> {step.fix}</p>
        </li>
      ))}
    </ol>
  );
}

function Migration() {
  return (
    <div className="sv-split">
      <Head heading={ecomMigration} />
      <Illustration label="Diagram of products, customers, orders, reviews, content and URLs moving from an old store platform to Shopify" className="eco-mig-illo">
        <div className="eco-mig">
          <div className="eco-mig-box is-old"><small>Old platform</small><strong>WooCommerce</strong></div>
          <ul>{ecomMigration.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="eco-mig-box is-new"><small>New store</small><strong>Shopify</strong></div>
        </div>
      </Illustration>
    </div>
  );
}

export function EcommercePage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroStore />} />

      <Section tone="dots">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <Head heading={ecomLeaks} />
        <Leaks />
      </Section>

      <Section tone="mesh">
        <Head heading={page.included} />
        <Bento items={page.included.items} layout={["wide", "wide", "", "", "", "wide", "wide"]} />
      </Section>

      <Section tone="tint">
        <Migration />
      </Section>

      <Section tone="ink" className="eco-proof">
        <Head heading={page.proof} />
        <div className="eco-bigstats">
          {page.proof.items[0].stats.map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
        <p className="eco-proof-note">{page.proof.items[0].body[0]} <em>Source: {page.proof.items[0].source}.</em></p>
        {/* TODO(owner): add real screenshot (Shopify launch weekend dashboard), unedited, alt: page.proof.items[0].alt */}
        <ProjectGrid slugs={["spc-sports", "kennedy-cellars", "newtiful-care"]} />
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <CtaBand page={page} />

      <Section tone="dots" className="sv-sec--flush-top">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
        <div className="eco-launch">
          <h3>{ecomLaunch.title}</h3>
          <ol>
            {ecomLaunch.items.map((item) => <li key={item.when}><b>{item.when}</b><span>{item.task}</span></li>)}
          </ol>
        </div>
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
