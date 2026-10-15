// Homepage copy. Strings may contain inline links written as [label](/path);
// they render as links on the page and as plain text in JSON-LD.

import { guides, gscClientA, gscClientB } from "./services/shared";
import type { ComparisonRow, PageCommon, SectionHeading, ServiceIcon } from "./services/types";

export const homeMeta = {
  title: "AI SEO Agency for Google, Maps & AI Answers | Rank It Globally",
  description:
    "Get your business recommended in Google AI Overviews, ChatGPT and the Google Maps top 3. AI SEO, local SEO and GEO that bring you organic leads. Free audit.",
};

export const homeHero = {
  eyebrow: "AI SEO · Local SEO · GEO",
  h1Lead: "When customers ask Google or AI who to call,",
  h1Accent: "it should be you.",
  intro:
    "Rank It Globally is an AI SEO and local SEO agency. We get your business into Google's AI Overviews, ChatGPT answers, the Google Maps top 3 and the first page of Google, using your website and Google Business Profile. That means more calls, bookings and enquiries from search, without paying for every click.",
  micro: "Free, and checked by a real person: where you show up on Google, Maps, ChatGPT and AI Overviews, and what's holding you back.",
  surfaces: ["Google AI Overviews", "ChatGPT & Perplexity", "Google Maps top 3", "Google search results"],
};

// Shared CTA, FAQ and form fields read by the service-page kit.
export const homePage: PageCommon = {
  slug: "home",
  path: "/",
  ctaLabel: "Get My Free AI Visibility Audit",
  sticky: "Are Google and AI recommending your competitors?",
  auditScope: ["SEO", "Local SEO / Google Business Profile"],
  midCta: {
    title: "Want to know where you stand right now?",
    body: "Our free audit shows where you appear on Google, Maps and AI answers, and which competitors are getting the customers you're missing.",
  },
  faqIntro: "Straight answers about AI SEO, local SEO and getting more leads from search.",
  faqs: [
    {
      question: "What does an AI SEO agency do?",
      answer:
        "An AI SEO agency makes your business easy for Google and AI tools such as ChatGPT, Perplexity and Google's AI Overviews to find, understand and recommend. We improve your website, your Google Business Profile, your reviews and the facts about your business across the web, so you show up when customers search or ask an AI assistant for what you offer.",
    },
    {
      question: "How do I get my business into Google's AI Overviews?",
      answer:
        "Google's AI Overviews draw on pages that answer a question clearly and come from businesses Google already trusts. The basics are pages that answer real customer questions, structured data (schema), a complete Google Business Profile, recent reviews and consistent business details across the web. We cover the steps in our guide to [getting into Google's AI Overviews](/blog/how-to-get-into-google-ai-overviews).",
    },
    {
      question: "What's the difference between SEO, local SEO and GEO?",
      answer:
        "SEO helps your website rank in Google's regular results. Local SEO gets you into the Google Maps top 3 for nearby searches, mostly through your Google Business Profile and reviews. GEO, or generative engine optimization, gets your business cited in AI answers from ChatGPT, Perplexity and Google's AI Overviews. They share the same foundations, so we run them as one plan.",
    },
    {
      question: "How long does it take to get more leads from search?",
      answer:
        "Google Business Profile fixes can improve Maps visibility within weeks. New pages and AI answer visibility usually take two to four months to build, depending on your market and competition. We set realistic expectations for your business during the free audit.",
    },
    {
      question: "How much does AI SEO cost?",
      answer:
        "It depends on your market, competition and how many locations or services you want to grow. We quote one monthly plan after your free audit, so you only pay for what your business needs. See [how much SEO costs](/blog/how-much-does-seo-cost) for typical ranges.",
    },
    {
      question: "Do you guarantee first place on Google?",
      answer:
        "No. No one controls Google's rankings or AI answers, so a guaranteed position is a red flag. We improve the things that decide who gets shown, report on the calls and enquiries that come from search, and tell you honestly what's working.",
    },
    {
      question: "Do you run Google or Facebook ads?",
      answer:
        "No. We focus on organic visibility: Google search, Google Maps and AI answers. Those keep bringing leads without a fee for every click, and a stronger website makes any ads you run elsewhere work better too.",
    },
    {
      question: "Who do you work with?",
      answer:
        "Mainly US businesses whose customers search online before they buy: home services, dental and medical practices, real estate agents, online stores and B2B and tech companies. If customers search for what you do, the free audit will show whether we can help.",
    },
  ],
  guides: [guides.aiOverviews, guides.notShowingUp, guides.seoCost],
  relatedServices: ["/ai-seo-services", "/local-seo-services", "/seo-services"],
  finalCta: {
    title: "Find out if Google and AI",
    accent: "recommend you.",
    body: "Tell us about your business. We'll check where you show up on Google, Maps, ChatGPT and AI Overviews, who's beating you and the first fixes that should bring more leads.",
    bullets: [
      "Your visibility on Google, Maps and AI answers",
      "The competitors taking the customers you're missing",
      "The first fixes that should bring more calls and enquiries",
    ],
  },
};

export const homeProblem: SectionHeading & { points: { quote: string; body: string; fix: string }[] } = {
  eyebrow: "Search changed",
  title: "If you're not in the answer,",
  accent: "you're not in the running.",
  intro:
    "Customers still search for what you do. But Google now shows an AI Overview and a map of three businesses before any website, and more people simply ask ChatGPT. If your business isn't named in those answers, you lose the customer before they see your site.",
  points: [
    {
      quote: "We do great work. Nobody can find us online.",
      body: "Customers can't choose you if they never see you. Most pick from the first few businesses Google or AI shows them.",
      fix: "We make your business visible where customers search.",
    },
    {
      quote: "Our leads stop the day our ad budget does.",
      body: "Ads rent attention one click at a time. Organic visibility keeps bringing calls month after month.",
      fix: "Leads from search that keep coming without a click fee.",
    },
    {
      quote: "A competitor with worse reviews ranks above us.",
      body: "Rankings reward a complete profile, relevant pages and consistent business details, not just good work.",
      fix: "We close the gap with the businesses outranking you.",
    },
    {
      quote: "I have no idea if ChatGPT even knows we exist.",
      body: "AI tools recommend businesses they can understand and trust. Most small business websites give them nothing to quote.",
      fix: "We make your business easy for AI to find, understand and cite.",
    },
  ],
};

export const homeClickStudy = {
  title: "When an AI summary appears, fewer people click through to websites",
  rows: [
    { label: "Google results without an AI summary", value: 15 },
    { label: "Google results with an AI summary", value: 8 },
  ],
  source: "[Pew Research Center, 2025](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/): share of visits where people clicked a regular search result.",
};

export const homeFit = {
  heading: {
    eyebrow: "Is this for you?",
    title: "Built for businesses that want",
    accent: "more leads from search.",
    intro: "We'd rather tell you up front than waste your time.",
  } satisfies SectionHeading,
  yes: [
    "Customers search online for what you sell or the service you offer",
    "You rely on referrals or ads, and want a lead source you own",
    "Competitors show up on Google Maps or in AI answers, and you don't",
    "Your website looks fine but doesn't bring in calls or enquiries",
  ],
  no: [
    "You need leads by next week. Ads are faster for that.",
    "You want a guaranteed #1 ranking. No one can honestly promise one.",
  ],
};

export const homeSystem: SectionHeading & {
  steps: string[];
  items: { icon: ServiceIcon; title: string; body: string; href: string; points?: string[] }[];
} = {
  eyebrow: "Organic lead generation",
  title: "One system to get you found,",
  accent: "chosen and called.",
  intro: "Every service feeds the same goal: more customers finding you through search and getting in touch.",
  steps: ["They search", "You're found", "You're trusted", "They contact you"],
  items: [
    { icon: "ai", title: "AI SEO & GEO", body: "Get named in Google's AI Overviews, ChatGPT and Perplexity when customers ask for what you do.", href: "/ai-seo-services", points: ["Google AI Overviews", "ChatGPT & Perplexity", "Schema & citations"] },
    { icon: "pin", title: "Local SEO & Google Business Profile", body: "Rank in the Google Maps top 3 and turn your profile into a source of calls and bookings.", href: "/local-seo-services", points: ["Maps top 3", "Profile optimization", "Reviews & citations"] },
    { icon: "search", title: "SEO", body: "Reach page one for the searches that bring paying customers, not just traffic.", href: "/seo-services", points: ["Technical fixes", "Pages that rank", "Lead tracking"] },
    { icon: "reviews", title: "Reviews & reputation", body: "More 5-star reviews, earned within Google's rules, and replies that win trust.", href: "/reputation-management", points: ["Review requests", "Replies in your voice", "Policy-safe"] },
    { icon: "mobile", title: "A website that converts", body: "Fast, clear pages built to turn visitors from search into calls and enquiries.", href: "/web-development", points: ["Fast pages", "Tap-to-call", "SEO-ready build"] },
    { icon: "cro", title: "Conversion optimization", body: "More leads from the traffic you already have, with every change measured.", href: "/cro-strategy", points: ["A/B tests", "Form fixes", "Measured results"] },
  ],
};

export const homeProof = {
  heading: {
    eyebrow: "Proof",
    title: "Real clients,",
    accent: "real search growth.",
    intro: "Real Google Search Console numbers for two unnamed clients over the same 90 days. Clients stay unnamed until we have written permission to share them.",
  } satisfies SectionHeading,
  items: [gscClientA, gscClientB],
};

export const homeIndustries: SectionHeading & { items: { search: string; name: string; href: string; icon: ServiceIcon; line: string }[] } = {
  eyebrow: "Who we help",
  title: "If customers search for it,",
  accent: "we'll put you in front of them.",
  intro: "We go deepest in these industries. Each page explains what's changing for businesses like yours and how we'd help.",
  items: [
    { search: "plumber near me open now", name: "Home services", href: "/industries/home-services-marketing", icon: "pin", line: "Calls that come to you, not shared leads." },
    { search: "family dentist taking new patients", name: "Dental & medical", href: "/industries/dental-medical-marketing", icon: "shield", line: "Win patients from the group chains." },
    { search: "best realtor in my neighborhood", name: "Real estate", href: "/industries/real-estate-marketing", icon: "profile", line: "Clients who find you before the portals." },
    { search: "best running shoes for flat feet", name: "E-commerce", href: "/industries/ecommerce-marketing", icon: "cart", line: "Sales that don't depend on ad spend." },
    { search: "best scheduling software for clinics", name: "Tech startups", href: "/industries/tech-startup-marketing", icon: "ai", line: "Get on the shortlist when buyers ask AI." },
  ],
};

export const homeTimeline: SectionHeading & { steps: { period: string; title: string; body: string }[] } = {
  eyebrow: "How it works",
  title: "From free audit",
  accent: "to steady leads.",
  intro: "No long onboarding. You'll know what we're fixing and why from the first call.",
  steps: [
    { period: "Step 1", title: "Free AI visibility audit", body: "We check where you show up on Google, Maps and AI answers, and walk you through what's holding you back." },
    { period: "Step 2", title: "Your plan and first fixes", body: "Google Business Profile, website and tracking fixes first, then the pages and reviews that build visibility." },
    { period: "Step 3", title: "Monthly growth and reporting", body: "Every month you see your calls, forms and bookings from search, plus a plain-English list of what we did." },
  ],
};

export const homeCompare: SectionHeading & { rows: ComparisonRow[] } = {
  eyebrow: "Why Rank It Globally",
  title: "SEO that's measured in",
  accent: "leads, not reports.",
  intro: "An honest comparison with the usual ways businesses handle search.",
  rows: [
    { label: "What gets reported", rig: "Calls, forms and bookings from search", agency: "Often rankings and traffic", freelancer: "Varies", diy: "Hard to measure" },
    { label: "AI answers (GEO) included", rig: "Built into every plan", agency: "Often a separate package", freelancer: "Rarely", diy: "Still a moving target" },
    { label: "Google Business Profile & reviews", rig: "Included", agency: "Sometimes extra", freelancer: "Varies", diy: "Time-consuming" },
    { label: "Who you talk to", rig: "The strategist doing the work", agency: "Usually an account manager", freelancer: "The freelancer", diy: "You" },
    { label: "Shortcuts", rig: "None: no bought reviews or links", agency: "Varies by agency", freelancer: "Varies", diy: "Easy to break rules by mistake" },
  ],
};
