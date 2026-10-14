import { dentalMedicalPage as page, practiceMatchup } from "@/content/industries/dentalMedical";
import { Bento, CtaBand, DataCard, Faq, FinalCta, Guides, Head, Industries, PainCards, ProofClosing, Section, Timeline } from "@/components/service-pages/kit/Kit";
import { ExampleIllustration, IndustryHero, IndustryPageShell, Plan, Rules, Segments } from "../IndustryKit";
import "./dental-medical.css";

function HeroAiAnswer() {
  return (
    <ExampleIllustration label="Illustration of an AI assistant answering a patient who asks for a family dentist taking new patients, recommending your practice and citing its Google reviews and website" className="dm-hero-visual">
      <div className="dm-chat">
        <div className="dm-chat-top"><span className="dm-dot" /><b>AI assistant</b></div>
        <p className="dm-q">Is there a good family dentist near me that takes new patients and my insurance?</p>
        <div className="dm-a">
          <p>Here are well-reviewed options nearby:</p>
          <div className="dm-pick is-you">
            <strong>Your Practice</strong>
            <span>Accepting new patients · Saturday hours · Listed insurance plans</span>
            <em>Patients mention the friendly team and on-time appointments.</em>
          </div>
          <div className="dm-pick">
            <strong className="sv-blur">Lakeside Dental Group</strong>
            <span>Multiple locations · Call center booking</span>
          </div>
          <div className="dm-sources"><small>Sources</small><i>Google reviews</i><i>yourpractice.com/insurance</i><i>yourpractice.com/new-patients</i></div>
        </div>
      </div>
      <div className="sv-glass dm-book">
        <small>Online booking</small>
        <strong>New patient exam</strong>
        <div><i>Tue 8:30</i><i className="is-on">Thu 4:00</i><i>Sat 9:00</i></div>
      </div>
    </ExampleIllustration>
  );
}

function Matchup() {
  return (
    <div className="dm-match" role="table" aria-label="What a group practice has compared with what an independent practice has">
      <div className="dm-match-head" role="row">
        <span role="columnheader">Group practice</span>
        <span role="columnheader">Your practice</span>
      </div>
      {practiceMatchup.rows.map((row) => (
        <div className="dm-match-row" role="row" key={row.you}>
          <span role="cell" className="dm-them">{row.them}</span>
          <span role="cell" className="dm-you">{row.you}</span>
        </div>
      ))}
    </div>
  );
}

export function DentalMedicalPage() {
  const proof = page.proof!;
  return (
    <IndustryPageShell page={page}>
      <IndustryHero page={page} visual={<HeroAiAnswer />} />

      <Section tone="mesh">
        <Head heading={page.problem} />
        <PainCards problem={page.problem} />
      </Section>

      <Section tone="ink">
        <div className="sv-split">
          <Head heading={practiceMatchup} />
          <Matchup />
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
        <div className="sv-split dm-proof">
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
        heading={{ eyebrow: "Other industries", title: "Not a practice?", accent: "See your industry.", intro: "The same local search and AI visibility work, shaped for other trust-driven businesses." }}
      />
      <FinalCta page={page} />
    </IndustryPageShell>
  );
}
