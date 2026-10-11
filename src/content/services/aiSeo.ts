import { gscClientA, gscClientB, guides } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const aiSeoPage: ServiceCore = {
  slug: "ai-seo-services",
  name: "AI SEO & GEO Services",
  serviceType: "Generative engine optimization (GEO) and AI search optimization",
  theme: "ai",
  title: "AI SEO & GEO Services in the USA | Rank It Globally",
  description:
    "Get your business cited by ChatGPT, Google AI Overviews, Perplexity and Gemini. GEO + SEO for US businesses. Start with a free AI visibility check.",
  h1Lead: "AI SEO & GEO",
  h1Accent: "Services",
  heroPromise: "Get recommended when customers ask AI who to hire.",
  heroIntro:
    "AI SEO and GEO (generative engine optimization) is the work of getting your business named and cited when people ask ChatGPT, Google AI Overviews, Perplexity or Gemini who to hire. We help US small and mid-size businesses become a clear, trusted source those tools quote, so more of those conversations turn into calls and leads.",
  ctaLabel: "Get My Free AI Visibility Check",
  ctaMicro: "We test real customer prompts across 4 AI platforms and show you who gets named instead.",
  sticky: "Is ChatGPT recommending your competitors?",
  proofStrip: [
    { value: "10.3K clicks", label: "in 90 days for one client" },
    { value: "1.61M", label: "impressions in the same period" },
    { value: "Real data", label: "Tracked in Google Search Console" },
  ],
  problem: {
    eyebrow: "The new search reality",
    title: "Your customers stopped scrolling.",
    accent: "They started asking.",
    intro:
      "Many buyers now get one AI-written answer with two or three names in it and never click anything else. That zero-click shift is quietly rerouting leads.",
    points: [
      {
        quote: "I asked ChatGPT for a recommendation and we weren't even mentioned.",
        body: "Buyers type whole questions like \"which family dentist near me takes walk-ins?\" If the answer names three practices and not yours, that patient is gone.",
        fix: "We test the exact prompts your buyers use and find out why you're missing.",
      },
      {
        quote: "A smaller competitor keeps showing up in Google's AI Overview.",
        body: "It's rarely about who's better; it's whose information is clearer and easier to trust.",
        fix: "We make your business the easiest, safest answer to quote.",
      },
      {
        quote: "I have no idea what AI is saying about us.",
        body: "AI answers can be outdated, confuse you with a similar name or skip your most profitable service.",
        fix: "You get a baseline report across ChatGPT, Perplexity, Gemini and AI Overviews.",
      },
      {
        quote: "Our SEO reports don't mention any of this.",
        body: "Rank trackers can't tell you whether Perplexity cites you or why ChatGPT doesn't.",
        fix: "We report on AI mentions alongside rankings, calls and leads.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Everything AI tools need",
    accent: "to understand and cite you.",
    intro:
      "Generative engine optimization (also called AEO or LLM SEO) builds on solid SEO, then adds the entity, content and citation work AI tools rely on.",
    items: [
      { icon: "ai", title: "AI visibility audit", body: "Your customers' questions tested across ChatGPT, Perplexity, Gemini and AI Overviews: who's named, what's said and which sources are used." },
      { icon: "profile", title: "Entity & brand consistency", body: "Consistent name, address, phone and services everywhere, backed by Organization, LocalBusiness and Person schema." },
      { icon: "content", title: "Answer-first page rewrites", body: "Key pages rewritten so the first lines answer the question in a form AI can quote." },
      { icon: "schema", title: "FAQ content & structured data", body: "FAQs built from real buyer questions, marked up with structured data." },
      { icon: "citations", title: "Citation building", body: "Directories, review profiles and third-party mentions AI tools use to judge credibility." },
      { icon: "analytics", title: "Monthly AI visibility report", body: "How often you're named, where and what changed, tied to Search Console, calls and leads." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days,",
    accent: "step by step.",
    intro: "Foundations first, then content, then the wider web, measured against a day-one baseline.",
    steps: [
      { period: "Days 1–30", title: "Audit, baseline and fixes", body: "AI visibility audit, a prompt baseline across all four platforms, and the schema and technical fixes that help machines read your site." },
      { period: "Days 31–60", title: "Content and entity work", body: "Answer-first rewrites and FAQs on key pages, plus a clean-up of inconsistent business details across your site, profiles and directories." },
      { period: "Days 61–90", title: "Citations and first report", body: "Citation and mention building, ongoing monitoring and your first AI visibility report against the baseline." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Real Search Console data,",
    accent: "not mock-ups.",
    intro:
      "Two unnamed clients, same 90 days. Search Console now also measures performance in generative AI features, exactly what this service targets.",
    items: [
      {
        ...gscClientA,
        body: [
          "5.92K clicks from 1.17M impressions at an average position of 7.2: the kind of first-page visibility AI tools tend to draw from.",
          // TODO(owner): describe the work done for Client A if you want it shown.
        ],
      },
      {
        ...gscClientB,
        body: [
          "10.3K clicks from 1.61M impressions at an average position of 8.1, reported from the same Search Console data you can open yourself.",
          // TODO(owner): describe the work done for Client B if you want it shown.
        ],
      },
    ],
    // TODO(owner): add a real before/after ChatGPT prompt screenshot if available.
    closing: "AI answers lean on pages that already rank, so this work runs alongside our [SEO Services](/seo-services).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "Businesses that should be in",
    accent: "the AI answer already.",
    intro: "If buyers in your market ask AI for recommendations, this is for you. Typical examples:",
    items: [
      {
        icon: "profile",
        business: "A family dental practice",
        where: "Suburban Texas, 2 locations",
        situation: "Great reviews, but ChatGPT names three competitors for walk-in dentist searches.",
        goal: "Be named when local parents ask AI.",
        plan: "Prompt baseline, LocalBusiness schema per location and answer-first walk-in pages.",
      },
      {
        icon: "shield",
        business: "A personal injury law firm",
        where: "Phoenix, AZ",
        situation: "Google's AI Overview cites legal directories instead of the firm.",
        goal: "Get its own pages cited for car accident questions.",
        plan: "Bar-compliant FAQ answers, attorney schema and citations on trusted legal sites.",
      },
      {
        icon: "strategy",
        business: "A B2B SaaS startup",
        where: "Remote team, US customers",
        situation: "Perplexity shortlists for its category never include the product.",
        goal: "Appear in AI shortlists and comparisons.",
        plan: "Clear positioning, comparison pages and mentions on the review sites AI cites.",
      },
      {
        icon: "pin",
        business: "A roofing contractor",
        where: "Dallas–Fort Worth",
        situation: "Inconsistent listings make AI confuse them with a similarly named company.",
        goal: "Be the clear answer for local roof repair.",
        plan: "Listing clean-up, consistent schema and storm-season service pages.",
      },
    ],
  },
  midCta: {
    title: "Curious what ChatGPT says about you right now?",
    body: "We'll run your customers' questions through four AI platforms and highlight who gets named.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "AI visibility for",
    accent: "service businesses and stores.",
    intro: "The questions customers ask AI are different in every industry, so we tailor the prompts we track and the pages we restructure.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "How we compare",
    accent: "on AI search.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency: freelancer-level attention, agency-level execution and straight talk about what AI can't promise.",
    rows: [
      { label: "Tracks AI citations across 4 platforms", rig: "ChatGPT, Perplexity, Gemini and AI Overviews", agency: "Often not tracked yet", freelancer: "Varies by person", diy: "Manual spot checks" },
      { label: "Combines GEO with traditional SEO", rig: "One plan covering both", agency: "Often sold as separate packages", freelancer: "Usually one or the other", diy: "Hard to cover both" },
      { label: "Schema & entity work included", rig: "Included in every plan", agency: "Sometimes an add-on", freelancer: "Depends on skill set", diy: "Steep learning curve" },
      { label: "Reporting on AI mentions, not just rankings", rig: "Monthly AI visibility report", agency: "Often rankings-only reports", freelancer: "Varies", diy: "No reporting system" },
      { label: "Honest about what can't be guaranteed", rig: "No promises we can't control", agency: "Some promise guaranteed placement", freelancer: "Varies", diy: "Trial and error" },
    ],
  },
  faqIntro: "Straight answers about how AI search works and what we can realistically do for you.",
  faqs: [
    {
      question: "What is GEO and how is it different from SEO?",
      answer:
        "GEO, or generative engine optimization, aims to get your business cited inside AI-generated answers. SEO aims to rank your pages in search results. The two overlap heavily: AI tools often draw from pages that already rank well, so we treat GEO as a layer on top of strong SEO rather than a replacement for it.",
    },
    {
      question: "Do I still need regular SEO?",
      answer:
        "Yes. Strong organic rankings and clear, well-structured pages are a big part of what AI tools cite. If your site is hard to crawl or your service pages are thin, AI tools have little to work with. That's why our [SEO Services](/seo-services) and AI SEO work are planned together.",
    },
    {
      question: "How long until AI tools mention my business?",
      answer:
        "We usually measure progress over 60 to 90 days or more. The timeline depends on how competitive your market is, how much authority your site already has and how consistent your business information is today. Anyone who gives you a fixed date is guessing. We show you the baseline and track movement every month.",
    },
    {
      question: "Can you guarantee ChatGPT will recommend us?",
      answer:
        "No, and no one honestly can. AI tools decide their own answers. What we control is how clear, consistent and well-cited your business is: structured pages, accurate entity data, quotable answers and mentions on sources AI tools trust. Those are the levers that improve your chances, and we report on them openly.",
    },
    {
      question: "Which AI platforms do you track?",
      answer:
        "We track ChatGPT, Perplexity, Gemini and Google AI Overviews. For each one we test the prompts your customers are likely to use, record whether you're named, and note which sources the answer relied on. That tells us where to focus next, platform by platform.",
    },
    {
      question: "How do you measure results?",
      answer:
        "We measure your share of answers for a fixed set of target prompts, Google Search Console data (including its new generative AI reporting) and, most importantly, the leads and calls that follow. Visibility only matters if it brings in business, so every report ties back to enquiries.",
    },
  ],
  guides: [guides.aiOverviews, guides.notShowingUp],
  relatedServices: ["/seo-services", "/local-seo-services"],
  finalCta: {
    title: "Find out what AI says",
    accent: "about you today.",
    body: "We'll test your customers' questions, show who gets named instead and outline the first fixes.",
    bullets: [
      "Prompt tests across ChatGPT, Perplexity, Gemini and AI Overviews",
      "Who gets named instead of you, and why",
      "The first three fixes we'd make, in plain English",
    ],
  },
};

// Page-specific sections.
export const aiSeoShift: SectionHeading & { before: string[]; after: string[] } = {
  eyebrow: "Search then vs. now",
  title: "From ten blue links",
  accent: "to one answer.",
  intro: "Classic SEO fought for a spot on a results page. AI search hands buyers one short answer with a few names in it.",
  before: ["Buyer types a few keywords", "Scans a page of ten links", "Opens three or four sites", "Compares and decides"],
  after: ["Buyer asks a full question", "Reads one AI-written answer", "Sees two or three businesses named", "Calls one of them"],
};

export const aiSeoSignals: SectionHeading & { items: { title: string; body: string }[] } = {
  eyebrow: "How AI picks who to name",
  title: "Four signals decide",
  accent: "whether you're mentioned.",
  intro: "Public guidance and our own prompt testing point to the same four levers.",
  items: [
    { title: "Entity clarity", body: "Consistent facts across your site, schema and listings make it obvious who you are." },
    { title: "Quotable answers", body: "Pages that answer in the first two sentences are easier to cite than vague copy." },
    { title: "Third-party proof", body: "Reviews, directories and press mentions give AI a reason to trust you." },
    { title: "Search authority", body: "AI answers often draw on pages that already rank." },
  ],
};
