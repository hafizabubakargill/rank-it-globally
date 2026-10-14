import { guides } from "../services/shared";
import type { ComparisonRow, SectionHeading } from "../services/types";
import type { IndustryCore } from "./types";

export const techStartupsPage: IndustryCore = {
  slug: "tech-startup-marketing",
  path: "/industries/tech-startup-marketing",
  name: "Tech Startup Marketing",
  title: "Tech Startup Marketing | SEO & AI Search for SaaS Founders",
  description:
    "SEO and AI search visibility for startup founders: comparison, alternatives and use-case pages that put you on AI shortlists and lower CAC, without an in-house team.",
  h1Lead: "Tech Startup Marketing",
  h1Accent: "for founders who can't buy their way in.",
  heroPromise: "Get on the shortlist when buyers ask AI.",
  heroIntro:
    "Your buyers ask ChatGPT and Google for the best tool in your category, and the answer names your competitors. We build the search and AI visibility that puts you on that shortlist, with pages that bring in demos at a lower cost than paid channels.",
  ctaLabel: "Get My Free Startup Growth Audit",
  ctaMicro: "We check which category, comparison and use-case searches you appear for on Google and in AI answers, and which competitors take them.",
  sticky: "Missing from AI shortlists in your category?",
  auditChips: ["AI shortlist presence", "Comparison searches", "Technical SEO", "Demo conversion"],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your paid channels get pricier",
    accent: "every quarter.",
    intro: "You've probably tried paid search, LinkedIn and a content push. Here's why it feels harder than it did a few years ago.",
    points: [
      {
        quote: "CAC went up on every channel at once.",
        body: "Paid search, paid social and LinkedIn have all become more crowded and expensive for B2B keywords. When every channel rises together, there's nowhere cheaper to move the budget.",
        fix: "A search and AI channel whose cost per lead falls as it grows.",
      },
      {
        quote: "Our investors want efficient growth, not growth at any cost.",
        body: "Global venture funding fell by more than half from its 2021 peak (Crunchbase). Since then, boards ask about CAC payback and burn multiple, and a pipeline that only grows with spend is harder to defend.",
        fix: "Pipeline you can report on: organic demos, cost per demo and payback.",
      },
      {
        quote: "I'm the CEO and the marketing team.",
        body: "Founders squeeze marketing between sales calls and fundraising. Incumbents have content teams and years of backlinks you can't match with spare evenings.",
        fix: "A team that runs it end to end, with you approving, not writing.",
      },
      {
        quote: "We published 40 AI-written posts. Nothing happened.",
        body: "Google's spam policies have targeted scaled, low-value content since March 2024, and AI answers cite sources with real expertise. Volume without a point of view doesn't rank or get cited.",
        fix: "Fewer, sharper pages built on your product knowledge.",
      },
    ],
  },
  segments: {
    eyebrow: "By stage and model",
    title: "What works at seed",
    accent: "breaks at Series A.",
    intro: "A two-founder team and a startup with its first marketing hire need different things from search. So does a developer tool versus vertical SaaS.",
    items: [
      { icon: "strategy", name: "Founder-led, pre-seed to seed", examples: "No marketer yet", pain: "Every hour on marketing is an hour off product and sales, so nothing gets finished.", fix: "A focused set of pages that capture buyers already searching." },
      { icon: "community", name: "First marketing hire", examples: "Seed to Series A", pain: "One marketer owns content, paid, events and the website, and SEO always slips.", fix: "An extension of your marketer's team that owns search and AI visibility." },
      { icon: "analytics", name: "B2B SaaS", examples: "Sales-led or product-led", pain: "Buyers build a shortlist before talking to sales. If you're not on it, you never hear about the deal.", fix: "Comparison and alternatives pages for the shortlist stage." },
      { icon: "content", name: "Developer tools", examples: "APIs, SDKs, infrastructure", pain: "Developers ignore marketing copy. They trust docs, examples and honest comparisons.", fix: "Docs-led SEO and technical content developers actually read." },
      { icon: "ai", name: "AI-native products", examples: "A crowded new category", pain: "Dozens of launches a week, all claiming the same thing. Buyers can't tell you apart.", fix: "Use-case pages that show who you're for and how you differ." },
      { icon: "profile", name: "Vertical SaaS", examples: "Software for one industry", pain: "Your buyers aren't technical. They search for their problem, not your category name.", fix: "Pages written in your customer's language, around their problems." },
    ],
  },
  included: {
    eyebrow: "What we do",
    title: "The search and AI work",
    accent: "that fills your pipeline.",
    intro: "We focus on organic search, AI answers and the pages that turn visits into demos. We don't run paid campaigns.",
    items: [
      { icon: "ai", title: "AI shortlist visibility", body: "Structured, citable pages and consistent product facts so AI tools include you. See [AI SEO & GEO](/ai-seo-services)." },
      { icon: "search", title: "Comparison and alternatives pages", body: "Honest \"you vs. competitor\" and \"alternatives to\" pages for buyers at the shortlist stage." },
      { icon: "content", title: "Use-case and integration pages", body: "A page for each job your product does and each tool it connects to, written for the searcher." },
      { icon: "schema", title: "Technical SEO", body: "Site architecture, rendering, speed and schema, so JavaScript-heavy sites still get indexed. See [SEO Services](/seo-services)." },
      { icon: "cro", title: "Demo and signup conversion", body: "Pricing, demo and signup pages tested so more visitors become pipeline. See [CRO](/cro-strategy)." },
      { icon: "analytics", title: "Pipeline reporting", body: "Organic and AI-referred demos and signups tracked through to your CRM, not just traffic." },
    ],
  },
  rules: {
    eyebrow: "Compliance built in",
    title: "Comparison content",
    accent: "that holds up.",
    intro: "No licensing board governs startup marketing, but the FTC's truth-in-advertising rules do. Comparison pages are where startups most often slip.",
    items: [
      { title: "Every comparative claim is backed up", body: "Claims like \"faster\" or \"cheaper than\" must be true and supportable. We tie each one to a source, such as public pricing or a documented benchmark, and avoid \"#1\" claims we can't prove." },
      { title: "Competitor names used fairly", body: "We name competitors to describe them accurately, never to imply a partnership, and we don't use their logos." },
      { title: "Honest reviews on G2 and Capterra", body: "The FTC's rule on fake reviews, in effect since October 2024, bans buying reviews. Review requests follow each platform's rules, including how incentives must be disclosed." },
      { title: "Customer logos and quotes with permission", body: "We only show customer logos, quotes and results that you have written permission to use." },
    ],
    note: "If your product is in a regulated space such as fintech or healthtech, your own compliance rules apply on top, and we follow your legal team's guidance.",
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "with us.",
    intro: "We start with the searches closest to a buying decision, so pipeline comes before traffic.",
    steps: [
      { period: "Days 1–30", title: "Audit and shortlist map", body: "AI shortlist and search visibility measured, technical blockers fixed, demo tracking connected to your CRM." },
      { period: "Days 31–60", title: "Bottom-of-funnel pages", body: "First comparison, alternatives and use-case pages published, demo and pricing pages improved." },
      { period: "Days 61–90", title: "Expand and report", body: "Integration and problem-led pages, AI citation work, and your first report on organic and AI-referred pipeline." },
    ],
  },
  plan: {
    eyebrow: "One plan",
    title: "One plan for pipeline",
    accent: "that doesn't scale with spend.",
    intro: "Not a retainer for blog posts. One plan, shaped by your audit, your category and your sales motion.",
    name: "Search & AI Pipeline Plan",
    summary: "The search, AI visibility and conversion work that gets you on buyers' shortlists, run for you with your team approving.",
    includes: [
      "Comparison, alternatives and use-case pages",
      "AI shortlist visibility and schema",
      "Technical SEO for modern JavaScript sites",
      "Demo, pricing and signup page testing",
      "Monthly report: organic and AI-referred demos and signups",
    ],
    note: "We quote after your free audit, based on your category, site and goals. No published rate card.",
  },
  midCta: {
    title: "Find out who AI recommends instead of you.",
    body: "Our free audit checks the category and comparison questions buyers ask, and which competitors get named.",
  },
  faqIntro: "What founders and growth leads ask us before adding search and AI to their plan.",
  faqs: [
    {
      question: "How long until SEO produces pipeline for a startup?",
      answer:
        "Bottom-of-funnel pages, like comparisons and alternatives, can start bringing demos within a few months because the searches are specific and less competitive. Broader category terms take longer. We prioritize the pages closest to a buying decision so pipeline comes first.",
    },
    {
      question: "How do we get recommended by ChatGPT and other AI tools?",
      answer:
        "AI tools draw on pages that answer a question clearly, consistent facts about your product, and mentions on sites they trust, such as review platforms and comparison articles. We build citable pages and make your product facts consistent across the web. See our [AI SEO & GEO](/ai-seo-services) page.",
    },
    {
      question: "We're pre-product-market fit. Is SEO worth it yet?",
      answer:
        "Usually only in a narrow form. Before product-market fit, your positioning may change, so we keep it to a few pages for searches your buyers already make, plus a technically sound site. Broader content waits until your positioning is stable.",
    },
    {
      question: "How are you different from a SaaS content agency?",
      answer:
        "Many SaaS agencies sell content volume. We focus on the pages closest to a buying decision, on AI answer visibility and on conversion, and we report on demos and signups rather than traffic or word counts.",
    },
    {
      question: "Do you write the content, or do we?",
      answer:
        "We write it. We interview you or your team to capture product knowledge and a real point of view, then draft, publish and update the pages. You review for accuracy, which usually takes minutes, not hours.",
    },
    {
      question: "Do you run LinkedIn or Google Ads?",
      answer:
        "No. We focus on organic search, AI answers and conversion. Those lower your blended CAC over time, and better landing pages also make any paid campaigns you run more efficient.",
    },
  ],
  guides: [guides.aiOverviews, guides.seoCost],
  relatedServices: ["/ai-seo-services", "/seo-services", "/cro-strategy"],
  auditScope: ["SEO"],
  finalCta: {
    title: "See where you stand",
    accent: "in search and AI answers.",
    body: "Share your site and two competitors. We'll show you which buying searches and AI answers you're missing, and the first pages to build.",
    bullets: [
      "AI shortlist presence for your category's key questions",
      "Comparison and use-case search gaps vs. two competitors",
      "Technical and conversion blockers on your site",
    ],
  },
  hub: {
    description: "AI shortlist visibility and bottom-of-funnel pages that lower CAC for founders without a marketing team.",
    audiences: ["Startup founders", "Growth leads", "B2B SaaS teams"],
  },
};

export const shortlistPages: SectionHeading & { rows: { query: string; page: string; why: string }[] } = {
  eyebrow: "Where buyers decide",
  title: "Pages that win",
  accent: "the shortlist.",
  intro: "The searches closest to a purchase are specific, lower volume and full of intent. Each one needs its own kind of page.",
  rows: [
    { query: "\"best [category] for [use case]\"", page: "Use-case page", why: "Shows who you're built for, in their words" },
    { query: "\"[competitor] alternatives\"", page: "Alternatives page", why: "Catches buyers who are ready to switch" },
    { query: "\"[you] vs [competitor]\"", page: "Comparison page", why: "Answers the question sales hears on every call" },
    { query: "\"[tool] integration with [app]\"", page: "Integration page", why: "Proves you fit the stack they already use" },
    { query: "\"[you] pricing\"", page: "Clear pricing page", why: "Stops buyers leaving to guess what you cost" },
  ],
};

export const startupCompare: SectionHeading & { rows: ComparisonRow[] } = {
  eyebrow: "Your options",
  title: "Agency, freelancer",
  accent: "or do it yourself?",
  intro: "An honest look at the usual ways startups handle search. The right answer depends on your stage and budget.",
  rows: [
    { label: "Focus", rig: "Pages closest to a buying decision, plus AI answers", agency: "Often content volume", freelancer: "Usually writing only", diy: "Whatever time allows" },
    { label: "AI shortlist visibility", rig: "Built into every page", agency: "Varies", freelancer: "Rarely", diy: "Hard to measure" },
    { label: "Technical SEO", rig: "Included", agency: "Sometimes extra", freelancer: "Rarely", diy: "Depends on your engineers" },
    { label: "Reporting", rig: "Demos and signups in your CRM", agency: "Often traffic and rankings", freelancer: "Varies", diy: "Ad hoc" },
    { label: "Founder time needed", rig: "Short reviews for accuracy", agency: "Briefs and reviews", freelancer: "Briefs, edits and publishing", diy: "All of it" },
  ],
};
