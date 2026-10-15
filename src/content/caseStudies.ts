// Case studies page copy. Every result here is real client data already used
// elsewhere on the site; nothing is estimated.

import { denverShop, gscClientA, gscClientB, guides, scottsdalePractice, shopifyLaunch } from "./services/shared";
import type { PageCommon, ProofItem, SectionHeading } from "./services/types";

export const caseMeta = {
  title: "Case Studies & Results | AI SEO, Local SEO & Websites | Rank It Globally",
  description:
    "Real results from Rank It Globally clients: unedited Google Search Console reports, Google Business Profiles, a $253K Shopify launch, client videos and 27 live websites.",
};

export const caseHero = {
  eyebrow: "Case studies",
  h1Lead: "Proof you can check,",
  h1Accent: "not promises.",
  intro:
    "Unedited Search Console reports, real Google Business Profiles, client video reviews and live websites you can visit yourself. If we can't show it, we don't claim it.",
  chips: ["Unedited screenshots", "Real Google profiles", "Client videos", "Live websites"],
};

export const caseHonesty: SectionHeading & { items: { title: string; body: string }[] } = {
  eyebrow: "How to read our proof",
  title: "Results you can verify,",
  accent: "with nothing hidden.",
  intro: "Agency case studies are easy to dress up. Here's how ours are put together.",
  items: [
    { title: "Real sources, real dates", body: "Every result names its source (Search Console, Google Business Profile, Shopify) and the period it covers." },
    { title: "Unedited screenshots", body: "Reports are shown as they came out of the tool. No cropped charts, no projections." },
    { title: "Unnamed until permitted", body: "Some clients stay anonymous until they give written permission. The numbers are still theirs." },
  ],
};

export type CaseResult = {
  goal: "search" | "local" | "ecommerce";
  kicker: string;
  headline: string;
  client: string;
  what: string;
  item: ProofItem;
  service: { href: string; label: string };
};

export const caseGoals = [
  { id: "all", label: "All results" },
  { id: "search", label: "AI & organic search" },
  { id: "local", label: "Local & Google Maps" },
  { id: "ecommerce", label: "E-commerce" },
] as const;

export const caseResults: CaseResult[] = [
  {
    goal: "search",
    kicker: "AI & organic search",
    headline: "10.3K clicks from Google in 90 days",
    client: "Client B · unnamed",
    what: "Daily clicks climbed steadily from mid-August to the end of the period, with 1.61M impressions and an average position of 8.1.",
    item: gscClientB,
    service: { href: "/seo-services", label: "SEO services" },
  },
  {
    goal: "search",
    kicker: "AI & organic search",
    headline: "5.92K clicks and 1.17M impressions",
    client: "Client A · unnamed",
    what: "Clicks and impressions trended up across the 90 days, averaging position 7.2, so many pages sit on page one.",
    item: gscClientA,
    service: { href: "/ai-seo-services", label: "AI SEO & GEO" },
  },
  {
    goal: "local",
    kicker: "Local & Google Maps",
    headline: "4.9 stars from 384 Google reviews",
    client: "Dents, Hail & Detail · Denver, CO",
    what: "An auto dent, hail and detail shop with a Book Online button on its profile, so new customers can choose and book in one step.",
    item: { ...denverShop, title: "Dents, Hail & Detail, Denver" },
    service: { href: "/local-seo-services", label: "Local SEO & Google Business Profile" },
  },
  {
    goal: "local",
    kicker: "Local & Google Maps",
    headline: "4.8 stars from 36 Google reviews",
    client: "Naturopathic practice · Scottsdale, AZ",
    what: "For a specialty practice, a strong rating from real patients matters more than raw volume.",
    item: scottsdalePractice,
    service: { href: "/reputation-management", label: "Review & reputation management" },
  },
  {
    goal: "ecommerce",
    kicker: "E-commerce",
    headline: "$253K in sales in one launch weekend",
    client: "Shopify brand · unnamed",
    what: "626 orders at a 12.26% conversion rate. The store was ready when the demand arrived.",
    item: shopifyLaunch,
    service: { href: "/ecommerce-development", label: "E-commerce & Shopify" },
  },
];

export const casePage: PageCommon = {
  slug: "case-studies",
  path: "/case-studies",
  ctaLabel: "Get My Free AI Visibility Audit",
  sticky: "Want results like these for your business?",
  auditScope: ["SEO", "Local SEO / Google Business Profile"],
  midCta: { title: "", body: "" },
  faqIntro: "What people ask before trusting an agency's results.",
  faqs: [
    {
      question: "Are these results typical?",
      answer: "Results depend on your market, competition, starting point and how long we work together. These are real outcomes from real clients, not averages, and we'll give you honest expectations for your business during the free audit.",
    },
    {
      question: "Why are some clients unnamed?",
      answer: "Some clients haven't given written permission to be named yet. We show their real data, such as unedited Search Console reports, without identifying them until they agree.",
    },
    {
      question: "Can I speak with a past client?",
      answer: "You can watch video reviews from real clients on this page and read our verified reviews on Clutch. If you need a reference for a specific industry, ask us during your audit.",
    },
    {
      question: "Do you have results in my industry?",
      answer: "We've worked with home services, dental and medical practices, auto services, e-commerce brands, tech companies and more. Browse the live websites below, or see our [industry pages](/industries).",
    },
    {
      question: "How long until I see results like these?",
      answer: "Google Business Profile fixes can help within weeks. Organic search and AI answer visibility usually take two to four months to build, and grow from there.",
    },
  ],
  guides: [guides.notShowingUp, guides.aiOverviews, guides.seoCost],
  relatedServices: ["/ai-seo-services", "/local-seo-services", "/seo-services"],
  finalCta: {
    title: "Want results like these",
    accent: "for your business?",
    body: "Start with a free AI visibility audit. We'll show you where you stand on Google, Maps and AI answers, and what it would take to grow.",
    bullets: ["Your visibility on Google, Maps and AI answers", "The competitors taking your customers", "Realistic expectations for your market"],
  },
};
