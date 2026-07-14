import type { Metadata } from "next";
import Link from "next/link";
import {
  EastsideFinalCta,
  EastsideIcon,
  EastsideRelatedLinks,
  EastsideSectionHeading,
} from "@/components/bellevue-services/BellevueServiceShared";
import {
  BellevueServiceFaqs,
  type BellevueFaqItem,
} from "@/components/bellevue-services/BellevueServiceFaqs";
import "@/components/bellevue-services/bellevue-services.css";
import "./page.css";

const pageUrl = "https://rankitglobally.com/bellevue-social-media-marketing/";
const title = "Social Media Marketing Services in Bellevue, WA";
const description =
  "Social media strategy, content creation, community management, paid campaigns, and reporting for Bellevue and Eastside businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: pageUrl, title, description, siteName: "Rank It Globally" },
  twitter: { card: "summary", title, description },
};

const services = [
  { icon: "strategy", title: "Social strategy", body: "A practical channel, audience, message, and campaign plan built around business goals rather than a generic posting calendar.", tags: ["Audience", "Positioning", "Content pillars", "Channel plan"] },
  { icon: "media", title: "Content creation", body: "Platform-aware concepts, copy, graphics, short-form video direction, and reusable creative systems that keep production consistent.", tags: ["Creative concepts", "Copywriting", "Video direction", "Design system"] },
  { icon: "community", title: "Community management", body: "Thoughtful publishing, response guidance, listening, and escalation workflows that help the brand remain attentive without losing its voice.", tags: ["Publishing", "Responses", "Listening", "Brand voice"] },
  { icon: "ads", title: "Paid social advertising", body: "Campaign structure, creative testing, audience strategy, landing-page alignment, and optimization across the channels suited to the offer.", tags: ["Meta Ads", "TikTok Ads", "Creative tests", "Landing pages"] },
  { icon: "analytics", title: "Analytics and reporting", body: "Reporting focused on qualified actions, creative learning, audience signals, and what the next campaign cycle should change.", tags: ["Attribution", "Campaign insights", "Lead quality", "Next actions"] },
  { icon: "search", title: "Social and SEO integration", body: "Social content can reinforce expertise, demand, branded discovery, and useful website assets when search and campaign teams share one content system.", tags: ["Demand creation", "Search insights", "Repurposing", "Cross-channel proof"] },
] as const;

const platforms = [
  { code: "in", name: "LinkedIn", fit: "B2B expertise, recruiting, partnerships, and high-consideration professional services." },
  { code: "ig", name: "Instagram", fit: "Visual brands, local discovery, lifestyle storytelling, products, and community interaction." },
  { code: "f", name: "Facebook", fit: "Local audiences, established communities, events, retargeting, and broad paid reach." },
  { code: "tt", name: "TikTok", fit: "Short-form education, culture, product discovery, personality-led creative, and rapid testing." },
  { code: "yt", name: "YouTube", fit: "Demonstrations, explainers, customer education, evergreen video, and search-led viewing." },
] as const;

const workflow = [
  ["01", "Plan", "Define the audience, offer, content pillars, channels, and the action each campaign should support."],
  ["02", "Produce", "Create a coordinated batch of copy, graphics, video direction, and channel-specific variations."],
  ["03", "Publish", "Schedule content in a deliberate rhythm and connect posts to landing pages, offers, or community goals."],
  ["04", "Optimize", "Test hooks, formats, audiences, placements, and conversion journeys using real campaign signals."],
  ["05", "Report", "Turn results into clear learning: what resonated, what converted, and what the next cycle should improve."],
] as const;

const faqs: BellevueFaqItem[] = [
  { question: "Which social platform is best for a Bellevue business?", answer: "The best platform depends on the audience, offer, sales cycle, available creative, and campaign goal. LinkedIn often suits B2B services, while Instagram, Facebook, TikTok, and YouTube each support different discovery and content behaviors." },
  { question: "Do we need to be active on every platform?", answer: "No. A smaller number of well-run channels usually creates a stronger experience than spreading limited time and creative across every network. We choose platforms according to business fit and production capacity." },
  { question: "What is included in social media management?", answer: "Scope can include strategy, content planning, copy, creative direction, publishing, community workflows, paid campaigns, reporting, and campaign optimization. The mix is tailored to the channels and internal resources already available." },
  { question: "Can you manage Meta and TikTok ads?", answer: "Yes. We can plan and manage paid campaigns across Meta and TikTok when those channels suit the audience and offer. Campaign work includes creative testing, audience structure, landing-page alignment, measurement, and ongoing optimization." },
  { question: "How quickly can social media marketing produce results?", answer: "Paid campaigns can generate early learning once they have enough delivery, while organic content usually builds familiarity and trust over a longer period. Timing varies by creative quality, offer, audience, budget, and conversion experience." },
  { question: "How do social media and SEO work together?", answer: "Social media creates demand, distributes expertise, reveals audience questions, and supplies content that can be developed into useful search assets. SEO captures active demand. Shared planning makes both channels more coherent." },
  { question: "What should social media reporting include?", answer: "Useful reporting explains reach and engagement in context, then connects them to traffic, enquiries, sales, lead quality, creative performance, and the next decisions. It should not stop at follower counts or isolated impressions." },
  { question: "Can social media insights improve our website content?", answer: "Yes. Repeated audience questions, objections, comments, and winning creative themes can inform service pages, FAQs, articles, offers, and conversion copy. Social learning is a useful research input, not a replacement for search and customer data." },
];

const searchOutcomes = [
  { icon: "community", title: "Listen for real questions", body: "Comments, replies, sales conversations, and creative response reveal the language people actually use." },
  { icon: "content", title: "Turn signals into assets", body: "Strong questions become useful service-page sections, FAQs, articles, campaign angles, and conversion copy." },
  { icon: "analytics", title: "Feed results back in", body: "Search behavior and campaign response guide the next content cycle instead of leaving each channel isolated." },
] as const;

const relatedLinks = [
  { href: "/bellevue-seo-services", label: "Bellevue SEO services", description: "Turn audience demand into durable organic visibility." },
  { href: "/local-seo-bellevue", label: "Bellevue local SEO", description: "Strengthen Maps, profile, review, and nearby search signals." },
  { href: "/case-studies", label: "Case studies", description: "Explore connected website, content, and campaign work." },
  { href: "/free-audit", label: "Free website audit", description: "Find the most important gaps before choosing a channel plan." },
] as const;

const provider = { "@type": "Organization", name: "Rank It Globally", url: "https://rankitglobally.com/" };
const schema = [
  {
    "@context": "https://schema.org", "@type": "Service", name: "Social Media Marketing Services in Bellevue", serviceType: "Social media marketing and paid social advertising", url: pageUrl, description, provider,
    areaServed: ["Bellevue", "Kirkland", "Redmond"].map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Bellevue social media services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.body } })) },
  },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rankitglobally.com/" },
    { "@type": "ListItem", position: 2, name: "Bellevue Social Media Marketing", item: pageUrl },
  ] },
];

export default function BellevueSocialMediaMarketingPage() {
  return (
    <main className="marketing-page eastside-page social-bellevue-page">
      {schema.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <section className="marketing-hero eastside-hero">
        <div className="eastside-hero-copy">
          <p className="marketing-eyebrow">Social media marketing · Bellevue</p>
          <h1>Turn attention into a <span className="gtext">repeatable growth system.</span></h1>
          <p>Strategy, content, community, paid campaigns, and reporting designed to work as one connected customer journey.</p>
          <div className="marketing-actions">
            <Link className="cta-e cta-e-lg" href="/free-audit">Get My Free Audit <span className="ar">→</span></Link>
            <Link className="marketing-link" href="/case-studies">Explore case studies</Link>
          </div>
        </div>
        <div className="eastside-hero-panel social-pipeline-panel" aria-label="Illustration of a social content and campaign pipeline">
          <p className="eastside-panel-label">One idea, built for the right channels</p>
          <div className="social-idea-node"><span>01</span><strong>Audience insight</strong><small>Question, need, or offer</small></div>
          <div className="social-pipeline-line" aria-hidden="true"><i /><i /><i /></div>
          <div className="social-channel-grid">
            <span><b>in</b>Expert post</span><span><b>ig</b>Visual story</span><span><b>tt</b>Short video</span><span><b>f</b>Paid creative</span>
          </div>
          <div className="social-outcome-row"><span>Learn</span><span>Engage</span><span>Convert</span><span>Improve</span></div>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="Connected social delivery" title="From strategy to reporting," accent="without the channel silos.">
          Every piece of work has a job: build familiarity, answer a question, create demand, support a campaign, or help someone take the next step.
        </EastsideSectionHeading>
        <div className="eastside-service-grid">
          {services.map((service) => <article className="eastside-service-card" key={service.title}>
            <span className="eastside-service-icon"><EastsideIcon name={service.icon} /></span><h3>{service.title}</h3><p>{service.body}</p>
            <ul className="eastside-tag-list">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft social-platform-section">
        <EastsideSectionHeading eyebrow="Channel decisions" title="Use each platform for" accent="what it does best.">
          Platform choice follows audience behavior and business fit, not whichever channel is currently loudest.
        </EastsideSectionHeading>
        <div className="social-platform-grid">
          {platforms.map((platform) => <article key={platform.name}><span className="social-platform-mark">{platform.code}</span><div><h3>{platform.name}</h3><p>{platform.fit}</p></div></article>)}
        </div>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="Bellevue audience context" title="Content should match a market that" accent="researches before it responds.">
          Eastside audiences often compare options carefully. Useful expertise, credible proof, and a clear offer matter more than constant posting.
        </EastsideSectionHeading>
        <div className="eastside-signal-grid">
          <article className="eastside-signal-card"><span className="eastside-card-kicker">B2B and technology</span><strong>Explain complex value clearly</strong><p>Point-of-view content, useful education, and credible expertise support longer consideration cycles.</p></article>
          <article className="eastside-signal-card"><span className="eastside-card-kicker">Local services</span><strong>Make trust easy to scan</strong><p>People, process, work quality, customer evidence, and clear local relevance help buyers decide whom to contact.</p></article>
          <article className="eastside-signal-card"><span className="eastside-card-kicker">Products and experiences</span><strong>Show the offer in context</strong><p>Demonstrations, stories, use cases, creative testing, and strong landing pages move discovery toward action.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--soft">
        <EastsideSectionHeading eyebrow="Content-to-campaign workflow" title="A production rhythm that keeps" accent="learning every cycle.">
          The work moves forward in a clear sequence, with organic and paid insights informing one another.
        </EastsideSectionHeading>
        <ol className="eastside-workflow">
          {workflow.map(([number, stepTitle, body]) => <li key={number}><span className="eastside-workflow-number">{number}</span><div><h3>{stepTitle}</h3><p>{body}</p></div></li>)}
        </ol>
      </section>

      <section className="eastside-section eastside-section--dark">
        <EastsideSectionHeading eyebrow="Organic and paid social" title="Build familiarity and accelerate" accent="the strongest messages.">
          The right balance depends on available creative, audience size, sales cycle, and how quickly the business needs reliable campaign learning.
        </EastsideSectionHeading>
        <div className="eastside-comparison-grid">
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Organic social</span><h3>Earn familiarity over time</h3><p>Brand voice, expertise, community, customer stories, and consistent useful publishing.</p></article>
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Paid social</span><h3>Test and distribute deliberately</h3><p>Audience structure, creative variations, offers, landing pages, retargeting, and optimization.</p></article>
          <article className="eastside-comparison-card"><span className="eastside-card-kicker">Integrated system</span><h3>Let each channel teach the other</h3><p>Organic response informs paid creative; campaign learning improves content, offers, and conversion journeys.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--soft social-proof-section">
        <EastsideSectionHeading eyebrow="Multi-channel proof" title="The campaign is only as strong as" accent="the journey after the click.">
          We connect social creative with the website, message, conversion path, and measurement needed to turn attention into useful action.
        </EastsideSectionHeading>
        <div className="eastside-proof-grid">
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Prana Beauty TT</span><strong>Website and campaign continuity</strong><p>Website development and ongoing Meta and TikTok campaign management share one commercial story.</p></article>
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Creative system</span><strong>More learning from each asset</strong><p>Concepts can be adapted across organic, paid, short-form, and landing-page experiences without becoming repetitive.</p></article>
          <article className="eastside-proof-card"><span className="eastside-card-kicker">Reporting</span><strong>Decisions instead of dashboards</strong><p>Performance reviews translate channel signals into practical creative, audience, and journey improvements.</p></article>
        </div>
      </section>

      <section className="eastside-section eastside-section--dark social-search-section">
        <EastsideSectionHeading eyebrow="Social plus search" title="Create demand, then capture it" accent="when people start searching.">
          Social reveals the language and questions that audiences respond to. Search turns those insights into durable pages and answers.
        </EastsideSectionHeading>
        <div className="social-search-system">
          <div className="social-search-core">
            <span className="social-search-core-icon"><EastsideIcon name="search" /></span>
            <span className="eastside-card-kicker">Shared learning loop</span>
            <strong>One audience. Two discovery moments.</strong>
            <p>Social earns attention before intent is fully formed. Search captures the moment that interest turns into active research.</p>
          </div>
          <div className="social-search-loop" aria-label="Social and search integration workflow">
            <span>Audience questions</span><span>Social content</span><span>Search demand</span><span>Useful website content</span><span>Campaign learning</span>
          </div>
        </div>
        <div className="social-search-outcomes">
          {searchOutcomes.map((item) => (
            <article key={item.title}>
              <span><EastsideIcon name={item.icon} /></span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="eastside-section eastside-section--soft">
        <EastsideSectionHeading eyebrow="Common questions" title="Bellevue social media marketing," accent="without the guesswork." />
        <BellevueServiceFaqs items={faqs} idPrefix="social-media" />
      </section>

      <EastsideRelatedLinks
        title="Connect the next"
        accent="part of the journey."
        links={[...relatedLinks]}
      />

      <EastsideFinalCta eyebrow="Build a clearer campaign system" title="Find the gaps between attention" accent="and conversion." body="Request a free audit and we will review the message, creative journey, website experience, and measurement opportunities worth prioritizing." />
    </main>
  );
}
