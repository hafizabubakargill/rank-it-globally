// About page copy. Facts only: co-founder names, roles and photos come from
// the owner, and the Clutch rating from clutch.co/profile/rank-it-globally.
// No address or location is shown (owner decision).

import { guides } from "./services/shared";
import type { PageCommon, SectionHeading, ServiceIcon } from "./services/types";

export const aboutMeta = {
  title: "About Rank It Globally | AI SEO & Local SEO Agency",
  description:
    "Meet Rank It Globally: an AI SEO and local SEO agency co-founded by Haroon Shahbaz and Hafiz Abubakar Gill. How we work, what we believe and how we help.",
};

export const aboutHero = {
  eyebrow: "About Rank It Globally",
  h1Lead: "We help good businesses become",
  h1Accent: "the answer customers find.",
  intro:
    "Rank It Globally is an AI SEO and local SEO agency. We get businesses recommended on Google, Google Maps and AI answers, and we measure our work in the calls, bookings and enquiries it brings in.",
};

export const aboutFacts = [
  { label: "What we do", value: "AI SEO, local SEO, GEO and conversion-ready websites" },
  { label: "Who we work with", value: "Businesses whose customers search before they buy" },
  { label: "Verified reviews", value: "5.0 on Clutch (3 reviews)", href: "https://clutch.co/profile/rank-it-globally" },
  { label: "Talk to us", value: "WhatsApp (786) 591-7846 · hello@rankitglobally.com" },
];

export const founders = [
  {
    name: "Haroon Shahbaz",
    role: "Co-founder",
    focus: "Web design, development, SEO & strategy",
    photo: "/assets/team/haroon-shahbaz.jpg",
    bio: "Haroon leads strategy, SEO and web design and development. He works with clients across the US, UK, Canada, Australia and the UAE, and runs his own web properties too. Staying in the trenches keeps the thinking sharp.",
  },
  {
    name: "Hafiz Abubakar Gill",
    role: "Co-founder",
    focus: "Custom solutions & technical builds",
    photo: "/assets/team/hafiz-abubakar-gill.jpg",
    bio: "Abubakar leads custom solutions and the technical side of every project: custom builds, integrations and the technical foundations that help a site load fast, get indexed and turn visitors into leads.",
  },
];

export const story = {
  heading: {
    eyebrow: "Our story",
    title: "Two co-founders,",
    accent: "one hands-on team.",
    intro: "",
  } satisfies SectionHeading,
  paragraphs: [
    "Rank It Globally grew out of more than 150 freelance client engagements. The agency keeps what clients valued about that: direct access to the people doing the work, and honest reporting, now with a team behind it to execute faster.",
    "Haroon Shahbaz and Hafiz Abubakar Gill co-founded Rank It Globally with one goal: help businesses show up online and actually grow. Haroon brings strategy, SEO and web design; Abubakar brings custom solutions and the technical depth to build what a plan needs.",
    "Search has changed more in the last two years than in the ten before. Customers now ask Google's AI Overviews and ChatGPT who to call. Our job is to make sure the answer is you.",
  ],
};

export const aboutPrinciples: SectionHeading & { items: { icon: ServiceIcon; title: string; body: string }[] } = {
  eyebrow: "What we believe",
  title: "Four promises",
  accent: "we work by.",
  intro: "These shape every plan, every report and every conversation.",
  items: [
    { icon: "analytics", title: "Leads over rankings", body: "Rankings are a means, not the goal. We report the calls, forms and bookings that come from search." },
    { icon: "shield", title: "No shortcuts", body: "No bought reviews, no paid link schemes, no keyword-stuffed profiles. Nothing that could get you penalized later." },
    { icon: "content", title: "Plain English, every month", body: "You get a clear report and a list of what we did. No jargon and no vanity charts." },
    { icon: "profile", title: "You talk to the strategist", body: "The person planning your work is the person you talk to, on WhatsApp or a call." },
  ],
};

export const aboutPaths: SectionHeading & { items: { question: string; answer: string; href: string; cta: string }[] } = {
  eyebrow: "How we help",
  title: "Start with the problem",
  accent: "you have today.",
  intro: "Pick the one that sounds most like you. Each page explains exactly what we'd do.",
  items: [
    { question: "\"We don't show up on Google Maps.\"", answer: "Local SEO and Google Business Profile work to reach the Maps top 3.", href: "/local-seo-services", cta: "Local SEO" },
    { question: "\"ChatGPT and AI Overviews name our competitors.\"", answer: "AI SEO and GEO so AI tools understand, trust and cite you.", href: "/ai-seo-services", cta: "AI SEO & GEO" },
    { question: "\"We're stuck on page two.\"", answer: "SEO that fixes the technical problems and builds pages that rank.", href: "/seo-services", cta: "SEO" },
    { question: "\"People visit, but nobody calls.\"", answer: "A faster, clearer website and conversion fixes that turn visits into leads.", href: "/web-development", cta: "Web design" },
    { question: "\"Our reviews don't reflect our work.\"", answer: "A policy-safe system to earn more 5-star reviews and reply to every one.", href: "/reputation-management", cta: "Reviews" },
    { question: "\"Our online store depends on ads.\"", answer: "Shopify builds, e-commerce SEO and conversion work for revenue you own.", href: "/ecommerce-development", cta: "E-commerce" },
  ],
};

export const aboutExpect: SectionHeading & { steps: { period: string; title: string; body: string }[] } = {
  eyebrow: "Working with us",
  title: "What working together",
  accent: "actually looks like.",
  intro: "Simple, predictable and easy to stay on top of.",
  steps: [
    { period: "Week 1", title: "Free audit and plan", body: "We review your Google, Maps and AI visibility, walk you through it and agree the first priorities." },
    { period: "Every week", title: "Work you can see", body: "Fixes, pages, profile updates and review requests go live. Questions get answered on WhatsApp." },
    { period: "Every month", title: "A report that makes sense", body: "Calls, forms and bookings from search, what changed and what we're doing next." },
  ],
};

export const aboutPage: PageCommon = {
  slug: "about-us",
  path: "/about-us",
  ctaLabel: "Get My Free AI Visibility Audit",
  sticky: "Want to see where you stand on Google and AI?",
  auditScope: ["SEO", "Local SEO / Google Business Profile"],
  midCta: { title: "", body: "" },
  faqIntro: "Quick answers about who we are and how we work.",
  faqs: [
    {
      question: "Do you work with businesses remotely?",
      answer: "Yes. We work with every client remotely, over WhatsApp, email and video calls. Most of our clients are in the US.",
    },
    {
      question: "Who will I work with?",
      answer: "A strategist who plans and oversees your work and is your main point of contact. You can reach them on WhatsApp or book a call, and you won't be passed between account managers.",
    },
    {
      question: "How do you report results?",
      answer: "Every month you get a plain-English report showing calls, forms and bookings from search, how your visibility on Google, Maps and AI answers changed, and a list of the work we completed.",
    },
    {
      question: "Do you run paid ads?",
      answer: "No. We focus on organic visibility: Google search, Google Maps and AI answers, plus the website that turns that visibility into leads.",
    },
    {
      question: "How do I get started?",
      answer: "Request a free AI visibility audit. We check where you show up today, walk you through what's holding you back and recommend one plan. There's no obligation.",
    },
  ],
  guides: [guides.aiOverviews, guides.notShowingUp, guides.seoCost],
  relatedServices: ["/ai-seo-services", "/local-seo-services", "/seo-services"],
  finalCta: {
    title: "Let's see where",
    accent: "you stand.",
    body: "Tell us about your business. A real person will check your visibility on Google, Maps and AI answers and walk you through what to fix first.",
    bullets: ["Your visibility on Google, Maps and AI answers", "The competitors taking your customers", "One clear plan, with no obligation"],
  },
};
