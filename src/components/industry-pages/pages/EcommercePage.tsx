import { channelMix, ecommercePage as page } from "@/content/industries/ecommerce";
import { Bento, CtaBand, DataCard, Faq, FinalCta, Guides, Head, Industries, PainCards, ProofClosing, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { ExampleIllustration, IndustryHero, IndustryPageShell, Plan, Rules, Segments } from "../IndustryKit";
import "./ecommerce.css";

const heroChannels = [
  { name: "Paid social", width: 78, rented: true },
  { name: "Organic search", width: 12 },
  { name: "AI shopping answers", width: 4 },
  { name: "Email & returning", width: 6 },
];

function HeroDashboard() {
  return (
    <ExampleIllustration label="Illustration of a store dashboard where most revenue comes from paid social and very little from organic search or AI shopping answers, with an alert about rising ad costs" className="ec-hero-visual">
      <div className="ec-dash">
        <div className="ec-dash-top"><b>Revenue by channel</b><span>Last 30 days</span></div>
        <ul className="ec-bars">
          {heroChannels.map((channel) => (
            <li key={channel.name}>
              <span>{channel.name}</span>
              <div><i className={channel.rented ? "is-rented" : ""} style={{ width: `${channel.width}%` }} /></div>
            </li>
          ))}
        </ul>
        <div className="ec-dash-note">Most of the month rides on one ad account.</div>
      </div>
      <div className="sv-glass ec-alert">
        <small>Ad platform</small>
        <strong>Cost per purchase is rising</strong>
        <span>Attribution: modeled</span>
      </div>
    </ExampleIllustration>
  );
}

function ChannelMix() {
  const rented = channelMix.channels.filter((channel) => channel.type === "rented");
  const owned = channelMix.channels.filter((channel) => channel.type === "owned");
  return (
    <div className="ec-mix">
      {[["Rented", rented], ["Owned", owned]].map(([label, list]) => (
        <div className={`ec-mix-col${label === "Owned" ? " is-owned" : ""}`} key={label as string}>
          <h3>{label as string}</h3>
          <ul>
            {(list as typeof channelMix.channels).map((channel) => (
              <li key={channel.name}><strong>{channel.name}</strong><span>{channel.note}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function EcommercePage() {
  const proof = page.proof!;
  return (
    <IndustryPageShell page={page}>
      <IndustryHero page={page} visual={<HeroDashboard />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <div className="sv-split">
          <Head heading={channelMix} />
          <ChannelMix />
        </div>
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

      <Section tone="mesh">
        <div className="sv-split ec-proof">
          <div>
            <Head heading={proof} />
            <ProofClosing closing={proof.closing} />
          </div>
          <DataCard item={proof.items[0]} />
        </div>
      </Section>

      <Section tone="ink">
        <Head heading={page.rules} />
        <Rules rules={page.rules} />
      </Section>

      <Section tone="tint">
        <Head heading={page.timeline} />
        <Timeline steps={page.timeline.steps} />
      </Section>

      <Section tone="mesh">
        <Plan page={page} />
      </Section>

      <Faq page={page} tone="tint" />
      <Guides page={page} tone="mesh" />
      <Industries
        tone="dots"
        exclude={page.path}
        heading={{ eyebrow: "Other industries", title: "Not an online store?", accent: "See your industry.", intro: "The same search and AI visibility work, shaped for service businesses and startups." }}
      />
      <FinalCta page={page} />
    </IndustryPageShell>
  );
}
