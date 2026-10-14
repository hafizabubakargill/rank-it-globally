import { guides } from "../services/shared";
import type { SectionHeading } from "../services/types";
import type { IndustryCore } from "./types";

export const homeServicesPage: IndustryCore = {
  slug: "home-services-marketing",
  path: "/industries/home-services-marketing",
  name: "Home Services Marketing",
  title: "Home Services Marketing for Contractors | Local & AI Search",
  description:
    "Marketing for plumbers, HVAC, electricians, roofers and landscapers: rank in the Google Map Pack and AI answers, and own your leads instead of sharing them.",
  h1Lead: "Home Services Marketing",
  h1Accent: "for contractors done sharing leads.",
  heroPromise: "Your own calls, not the same lead four pros bought.",
  heroIntro:
    "You do the work well, but the homeowner calls the business they find first. We help plumbers, HVAC companies, electricians, roofers and landscapers show up in the Google Map Pack and in AI answers, so customers call you directly and the lead belongs to you alone.",
  ctaLabel: "Get My Free Home Services Audit",
  ctaMicro: "We check where you appear for your top services across your service area, against the competitors taking those calls.",
  sticky: "Still paying for shared leads?",
  auditChips: ["Map Pack rankings", "Google Business Profile", "Reviews vs. competitors", "AI answers"],
  problem: {
    eyebrow: "Sound familiar?",
    title: "You're paying for leads",
    accent: "your competitors also bought.",
    intro: "Most contractors we talk to aren't short on skill. They're short on calls that come straight to them, and the alternatives keep getting more expensive.",
    points: [
      {
        quote: "I paid for the lead, and three other guys called them first.",
        body: "Many per-lead platforms send one homeowner's request to several pros at once. You pay whether you win the job or not, and the fastest dialer usually wins. In 2023 the FTC finalized a $7.2 million order against HomeAdvisor over how it described the leads it sold to contractors.",
        fix: "Calls from your own Google profile and website, with no per-lead fee.",
      },
      {
        quote: "The big franchise shows up everywhere. We don't show up at all.",
        body: "National brands and private-equity-backed roll-ups have bigger budgets and polished profiles in every town. On the map, you're competing on profile quality, reviews and relevance, not on budget.",
        fix: "A Google Business Profile and local pages built to beat them nearby.",
      },
      {
        quote: "We're open at 10 p.m., but nobody finds us.",
        body: "Emergency searches like \"plumber near me open now\" are among the most valuable searches in any industry. Google favors businesses whose hours, categories and services clearly match.",
        fix: "Accurate hours, emergency services and categories that match urgent searches.",
      },
      {
        quote: "Customers say they \"asked ChatGPT\" for a contractor.",
        body: "Homeowners now ask AI assistants and Google's AI Overviews who to call. Those answers lean on reviews, profiles and clear service pages. If yours are thin, you're left out.",
        fix: "Profiles, reviews and pages that AI tools can read and recommend.",
      },
    ],
  },
  segments: {
    eyebrow: "By trade",
    title: "Every trade loses calls",
    accent: "in a different place.",
    intro: "A roofer and a plumber don't have the same busy season, the same competitors or the same kind of customer. We start with what's actually costing your trade work.",
    items: [
      { icon: "pin", name: "Plumbing & drains", examples: "Emergency repair, water heaters, sewer lines", pain: "The 11 p.m. burst pipe goes to whoever is first on the map and shows \"Open 24 hours\", often a national rooter brand.", fix: "Emergency-ready profile, service pages and fast-loading tap-to-call." },
      { icon: "analytics", name: "HVAC", examples: "AC repair, furnace installs, maintenance plans", pain: "Demand spikes in heat waves and cold snaps. Consolidators buying local shops are outspending independents right when it counts.", fix: "Seasonal pages and posts live before the rush, not during it." },
      { icon: "shield", name: "Electrical", examples: "Panel upgrades, EV chargers, generators", pain: "Customers searching new services like EV charger installs want proof you're licensed for it, and most electrician sites barely mention them.", fix: "Pages for each high-value service, with your license details shown." },
      { icon: "community", name: "Roofing", examples: "Storm repair, replacements, inspections", pain: "After a hail storm, out-of-town crews flood the area. Homeowners look for a local company with recent, real reviews.", fix: "Fresh reviews, local project photos and city pages that prove you're local." },
      { icon: "media", name: "Landscaping & lawn care", examples: "Maintenance, hardscaping, irrigation", pain: "The work is visual and recurring, yet many profiles show no photos and a vague service area.", fix: "Photo-rich profile, neighborhood pages and a clear service area." },
      { icon: "profile", name: "Multi-trade & growing shops", examples: "Two or more trades, several crews", pain: "One generic website tries to rank for everything and ranks for nothing in particular.", fix: "A page per service and per area, linked so Google understands the whole business." },
    ],
  },
  included: {
    eyebrow: "What we do",
    title: "Everything that puts your name",
    accent: "in front of local homeowners.",
    intro: "We focus on the organic side of local search: the Map Pack, your website and AI answers. These keep bringing calls without a fee per lead.",
    items: [
      { icon: "profile", title: "Google Business Profile management", body: "Categories, services, hours, photos and weekly posts handled for you. See [Local SEO & Google Business Profile](/local-seo-services)." },
      { icon: "pin", title: "Service-area and city pages", body: "Useful pages for each town and service you want calls from, written for homeowners, not stuffed with keywords." },
      { icon: "reviews", title: "Review requests and replies", body: "Automatic asks after each completed job and replies in your voice. See [Review & Reputation Management](/reputation-management)." },
      { icon: "mobile", title: "A website built to get calls", body: "Fast pages, a phone number customers can tap in one second and clear quote forms. See [Web Design & Development](/web-development)." },
      { icon: "ai", title: "AI answer visibility", body: "Structured FAQs, schema and consistent business facts so AI tools can cite you. See [AI SEO & GEO](/ai-seo-services)." },
      { icon: "analytics", title: "Call and lead tracking", body: "See which calls, forms and directions requests came from search, so you know what's working." },
    ],
  },
  rules: {
    eyebrow: "Compliance built in",
    title: "Marketing that holds up",
    accent: "to your state board.",
    intro: "Home services has a lighter regulatory load than healthcare or real estate, but a few rules catch contractors out every year.",
    items: [
      { title: "\"Licensed and insured\" has to be true where you work", body: "Contractor licensing is set state by state, and sometimes city by city. We only show license claims you can back up for each area you serve." },
      { title: "Some states require your license number in ads", body: "California and Florida, for example, require a contractor's license number in advertising. We add it wherever your state requires it." },
      { title: "No fake or bought reviews", body: "The FTC's rule on fake reviews took effect in October 2024. We never write, buy or filter reviews. Every customer is asked the same way." },
      { title: "Google Business Profile rules", body: "Service-area businesses hide their address if customers don't visit it, and business names can't be stuffed with keywords. Breaking these rules can get a profile suspended." },
    ],
    note: "We're not lawyers. If a claim depends on your license class or local rules, we confirm it with you before it's published.",
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "with us.",
    intro: "We fix what's costing you calls today before building for next season.",
    steps: [
      { period: "Days 1–30", title: "Audit and profile fixes", body: "Map rankings checked across your service area, Google Business Profile corrected and call tracking set up." },
      { period: "Days 31–60", title: "Pages and reviews", body: "Service and city pages published, review requests switched on, website call paths tightened." },
      { period: "Days 61–90", title: "Grow and report", body: "Seasonal content, AI-answer improvements and your first report showing calls by source." },
    ],
  },
  plan: {
    eyebrow: "One plan",
    title: "One plan for owning",
    accent: "your local leads.",
    intro: "No menu of add-ons to piece together. One plan, shaped by your audit and your service area.",
    name: "Local Lead Engine",
    summary: "The local search work that brings homeowners straight to your phone, run for you every month.",
    includes: [
      "Google Business Profile management and weekly posts",
      "Service and city pages for the work you want more of",
      "Automated review requests and replies",
      "AI answer visibility and schema",
      "Monthly report: calls, forms and map rankings",
    ],
    note: "We quote after your free audit, based on your trades, service area and competition. No published rate card.",
    // TODO(owner): confirm contract length and cancellation terms to show here.
  },
  midCta: {
    title: "See which contractors are taking your calls.",
    body: "Our free audit shows where you rank across your service area and what the top three are doing differently.",
  },
  faqIntro: "What contractors ask us before they stop buying shared leads.",
  faqs: [
    {
      question: "How is this different from buying leads on Angi or Thumbtack?",
      answer:
        "Lead platforms charge per lead, and the same homeowner may be sent to several pros. With local SEO, customers find your own Google profile and website and call you directly. There's no fee per call, and the work keeps paying off after the first month.",
    },
    {
      question: "How long until I get more calls from Google?",
      answer:
        "Profile fixes can affect Map Pack visibility within weeks, especially if your profile has errors today. New service and city pages usually take a few months to rank. We set expectations for your market during the free audit.",
    },
    {
      question: "Can you help if I serve several towns but only have one address?",
      answer:
        "Yes. Most contractors are service-area businesses. We set up your service area on Google correctly and build useful pages for the towns you serve, without fake addresses, which break Google's rules.",
    },
    {
      question: "Do you guarantee the number one spot on Google Maps?",
      answer:
        "No. No one controls Google's rankings, and anyone who guarantees a position is guessing. We improve the things that influence local rankings: your profile, reviews, relevance and website.",
    },
    {
      question: "Do you run Google Ads or Local Services Ads?",
      answer:
        "No. We focus on organic local search, your website and AI answers, which keep bringing calls without a per-click or per-lead fee. If you already run ads, a faster website with clearer calls to action helps those too.",
    },
    {
      question: "How do customers find contractors through AI tools?",
      answer:
        "Homeowners ask ChatGPT, Google's AI Overviews and similar tools who to call. These tools rely on reviews, business profiles and clear service pages. We make yours consistent and easy to quote. Learn more on our [AI SEO & GEO](/ai-seo-services) page.",
    },
  ],
  guides: [guides.notShowingUp, guides.seoCost],
  relatedServices: ["/local-seo-services", "/reputation-management", "/web-development"],
  auditScope: ["Local SEO / Google Business Profile"],
  finalCta: {
    title: "Get a straight answer on",
    accent: "where you rank.",
    body: "Tell us your trade and service area. We'll show you where you rank, where competitors beat you and what to fix first.",
    bullets: [
      "Map rankings for your top services across your area",
      "Google Business Profile and review gaps vs. the top 3",
      "The first fixes that should bring more direct calls",
    ],
  },
  hub: {
    description: "Map Pack visibility, service-area pages and reviews that bring calls straight to you, instead of shared leads.",
    audiences: ["Plumbers", "HVAC companies", "Electricians", "Roofers", "Landscapers"],
  },
};

export const homeLeadMath: SectionHeading & {
  shared: { title: string; points: string[] };
  owned: { title: string; points: string[] };
} = {
  eyebrow: "Rented vs. owned",
  title: "One homeowner,",
  accent: "two very different leads.",
  intro: "A shared lead is a race you pay to enter. A call from your own Google profile is a customer who chose you.",
  shared: {
    title: "Shared lead",
    points: ["Sent to several pros at once", "You pay even if you lose the job", "Gone when you stop paying"],
  },
  owned: {
    title: "Call from your profile",
    points: ["They picked you from the map", "No fee for the call", "Keeps coming as reviews grow"],
  },
};
