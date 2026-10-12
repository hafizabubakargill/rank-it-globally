import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import { localFactors, localGrid, localSeoPage as page } from "@/content/services/localSeo";
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
import "./local-seo.css";

function HeroPhone() {
  return (
    <Illustration label="Illustration of a phone showing a near me search with your business pinned first in the Google Map Pack" className="loc-hero-visual">
      <div className="loc-phone">
        <div className="loc-phone-notch" />
        <div className="loc-search">plumber near me</div>
        <div className="loc-map">
          <span className="loc-pin loc-pin--you"><b>1</b></span>
          <span className="loc-pin loc-pin--b"><b>2</b></span>
          <span className="loc-pin loc-pin--c"><b>3</b></span>
          <span className="loc-me" />
        </div>
        <div className="loc-pack">
          <div className="loc-pack-row is-you"><strong>Your Business</strong><span>★★★★★ · Open now · 2.1 mi</span><em>Call</em></div>
          <div className="loc-pack-row"><strong className="sv-blur">Riverside Rooter &amp; Plumbing</strong><span>★★★★☆ · Closes 6pm · 3.4 mi</span></div>
          <div className="loc-pack-row"><strong className="sv-blur">Bayou City Drain Co.</strong><span>★★★★☆ · Open 24 hours · 4.8 mi</span></div>
        </div>
      </div>
      <div className="sv-glass loc-toast"><small>From your profile this week</small><strong>Calls · Directions · Bookings</strong></div>
    </Illustration>
  );
}

function Factors() {
  return (
    <div className="loc-factors">
      <Illustration label="Diagram of three overlapping circles for relevance, distance and prominence, with the Map Pack in the middle" className="loc-venn-illo">
        <div className="loc-venn">
          <span className="loc-venn-c loc-venn-c--1">Relevance</span>
          <span className="loc-venn-c loc-venn-c--2">Distance</span>
          <span className="loc-venn-c loc-venn-c--3">Prominence</span>
          <span className="loc-venn-core">Top 3</span>
        </div>
      </Illustration>
      <ol className="loc-factor-list">
        {localFactors.items.map((item) => (
          <li className="sv-card" key={item.title}>
            <div className="loc-factor-top"><h3>{item.title}</h3><span className={item.control === "You control this" ? "is-yours" : ""}>{item.control}</span></div>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

const before = [5, 7, 9, 12, 15, 18, 20, 3, 4, 6, 9, 12, 15, 19, 2, 2, 3, 6, 10, 14, 17, 1, 1, 2, 4, 8, 12, 16, 2, 2, 3, 6, 10, 13, 18, 4, 4, 6, 9, 12, 16, 20, 6, 7, 9, 12, 15, 19, 20];
const after = [3, 3, 4, 5, 7, 9, 11, 2, 2, 3, 4, 5, 7, 9, 1, 1, 2, 3, 4, 6, 8, 1, 1, 1, 2, 3, 5, 7, 1, 1, 2, 3, 4, 6, 8, 2, 2, 3, 4, 5, 7, 9, 3, 3, 4, 5, 7, 9, 11];

function tone(rank: number) {
  if (rank <= 3) return "g";
  if (rank <= 7) return "y";
  if (rank <= 12) return "o";
  return "r";
}

function RankGrid() {
  return (
    <Illustration label="Illustration of a 7 by 7 map ranking grid, mostly red and orange before, mostly green after optimization" className="loc-grid-illo">
      <div className="loc-grids">
        {[["Before", before], ["The 90-day goal", after]].map(([label, data]) => (
          <div className="loc-grid-card" key={label as string}>
            <span>{label as string}</span>
            <div className="loc-grid">
              {(data as number[]).map((rank, i) => <i key={i} className={`is-${tone(rank)}${i === 24 ? " is-center" : ""}`}>{rank > 20 ? "20+" : rank}</i>)}
            </div>
          </div>
        ))}
      </div>
      <div className="loc-legend"><i className="is-g" />1–3 <i className="is-y" />4–7 <i className="is-o" />8–12 <i className="is-r" />13+</div>
    </Illustration>
  );
}

function ProfileAnatomy() {
  const callouts = ["Primary & secondary categories", "Every service listed", "Real photos, updated", "Weekly posts", "Seeded Q&A", "Reviews with replies", "Book / Call buttons"];
  return (
    <div className="loc-anatomy">
      <Illustration label="Illustration of an optimized Google Business Profile with labels for categories, services, photos, posts, Q&A, reviews and booking buttons" className="loc-profile-illo">
        <div className="loc-profile">
          <div className="loc-profile-cover" />
          <strong>Your Business</strong>
          <span className="loc-stars">★★★★★ <em>Plumber · Open 24 hours</em></span>
          <div className="loc-profile-btns"><b>Call</b><b>Directions</b><b>Book online</b></div>
          <div className="loc-profile-photos"><i>🔧</i><i>🚐</i><i>🚿</i><i>👷</i></div>
          <div className="loc-profile-post"><small>Update · 2 days ago</small>Same-day water heater installs this week.</div>
        </div>
      </Illustration>
      <ul className="loc-callouts">
        {callouts.map((c, i) => <li key={c}><span>{i + 1}</span>{c}</li>)}
      </ul>
    </div>
  );
}

export function LocalSeoPage() {
  return (
    <ServicePageShell page={page}>
      <Hero page={page} visual={<HeroPhone />} />

      <Section tone="tint">
        <Head heading={localFactors} />
        <Factors />
      </Section>

      <Section tone="ink">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="mesh">
        <div className="sv-split">
          <Head heading={localGrid} />
          <RankGrid />
        </div>
      </Section>

      <Section tone="dots">
        <Head heading={page.included} />
        <ProfileAnatomy />
        <div className="loc-included">
          {page.included.items.map((item) => (
            <article className="sv-card" key={item.title}>
              <span className="sv-bento-icon" aria-hidden="true"><EastsideIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p><RichText text={item.body} /></p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand page={page} />

      <Section tone="tint" className="sv-sec--flush-top">
        <Head heading={page.proof} />
        <div className="loc-proof">
          {page.proof.items.map((item) => <DataCard item={item} key={item.title} />)}
        </div>
        <ProofClosing closing={page.proof.closing} />
      </Section>

      <Section tone="ink" className="loc-timeline">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="mesh">
        <Head heading={page.scenarios} />
        <Scenarios items={page.scenarios.items} />
      </Section>

      <Industries heading={page.industries} tone="dots" />
      <Compare heading={page.comparison} rows={page.comparison.rows} />
      <Faq page={page} tone="tint" />
      <Guides page={page} tone="dots" />
      <FinalCta page={page} />
    </ServicePageShell>
  );
}
