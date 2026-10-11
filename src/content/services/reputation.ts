import { denverShop, guides } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const reputationPage: ServiceCore = {
  slug: "reputation-management",
  name: "Review & Reputation Management",
  serviceType: "Online review and reputation management",
  theme: "reputation",
  title: "Review & Reputation Management Services (USA)",
  description:
    "Get more 5-star Google reviews the right way: automated requests, responses, monitoring and policy-safe handling of bad reviews. Free review audit.",
  h1Lead: "Review & Reputation Management",
  h1Accent: "Services",
  heroPromise: "More 5-star reviews, handled within Google's rules.",
  heroIntro:
    "Review and reputation management helps US local businesses earn more genuine Google reviews, respond to every one of them and handle negative feedback the right way. We set up automated review requests, write responses in your voice and monitor your profiles, so your reputation brings in more calls and bookings.",
  ctaLabel: "Get My Free Review Audit",
  ctaMicro: "We compare your rating, review count, recency and response rate with your top local competitors.",
  sticky: "Competitors have more reviews than you?",
  proofStrip: [
    { value: "384 Google reviews", label: "at 4.9★ for a Denver auto shop" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your customers love you.",
    accent: "Google doesn't know it yet.",
    intro: "Most customers check reviews before they call, and many decide in seconds from the star rating and how recent the reviews are. If your reviews don't reflect your work, you lose customers you should win.",
    points: [
      { quote: "Happy customers almost never leave reviews.", body: "They mean to, then forget. Unhappy customers are more motivated, so your profile skews toward the few who had a bad day.", fix: "An automatic ask after every job, so happy customers actually post." },
      { quote: "One bad review seems to undo ten good ones.", body: "A harsh review near the top, with no reply, scares off new customers. How you respond matters almost as much as the review itself.", fix: "Calm, professional replies that reassure future customers." },
      { quote: "I don't have time to reply to reviews.", body: "Thoughtful replies fall to the bottom of the list. Unanswered reviews make a business look like nobody's paying attention.", fix: "Responses written for you, in your voice." },
      { quote: "The competitor down the street has 400 reviews.", body: "On the map, customers compare side by side. Hundreds of recent reviews beat a few dozen old ones, even if your work is better.", fix: "A steady stream of fresh reviews that closes the gap." },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "A complete review system,",
    accent: "run for you.",
    intro: "Reputation management isn't about gaming ratings. It's about asking every customer, responding well and watching what people say. Every plan includes:",
    items: [
      { icon: "community", title: "Review request system (SMS and email)", body: "Automated requests to every customer after a job or visit, with a direct link to your Google review form." },
      { icon: "content", title: "Review responses", body: "Thoughtful replies in your voice: thanks for happy customers, calm answers to complaints." },
      { icon: "profile", title: "Google Business Profile Q&A management", body: "Common questions added and answered, and new ones monitored, so customers get accurate answers." },
      { icon: "analytics", title: "Review monitoring and alerts", body: "Fast alerts on new negative feedback, so nothing sits unanswered." },
      { icon: "shield", title: "Policy-safe handling of negative reviews", body: "Professional replies to genuine complaints; reviews that break Google's policies flagged for Google to assess." },
      { icon: "reviews", title: "Review widgets on your website", body: "Your real Google reviews displayed on your site, so visitors see the same proof they'd find on the map." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of reputation management.",
    intro: "The request system goes live first, because every week without it is a week of missed reviews.",
    steps: [
      { period: "Days 1–30", title: "Review request system live", body: "Current reviews audited, automated SMS and email requests set up and connected to your customer list or booking system." },
      { period: "Days 31–60", title: "Response workflow", body: "Tone of voice agreed, the backlog of unanswered reviews replied to, and an ongoing response process in place." },
      { period: "Days 61–90", title: "Monitoring and monthly report", body: "Monitoring and alerts switched on, review widgets added to your site and your first monthly reputation report." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "384 Google reviews",
    accent: "at 4.9 stars.",
    intro: "What a strong local reputation looks like. This client is unnamed until we have written permission to share it.",
    items: [
      {
        ...denverShop,
        body: [
          "This auto dent, hail and detail shop in Denver, Colorado holds a 4.9-star average from 384 Google reviews, with a \"Book Online\" button right on its Google Business Profile. That volume, rating and easy booking path let new customers choose quickly.",
          // TODO(owner): describe the work done for the Denver shop if you want it shown.
        ],
      },
    ],
    closing: "Reviews are one part of local visibility. See [Local SEO & Google Business Profile](/local-seo-services).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "Trust-driven businesses",
    accent: "that live on reviews.",
    intro: "Reviews carry the most weight where customers trust you with their health, home, car or money. A few typical examples:",
    items: [
      { icon: "profile", business: "A pediatric dental office", where: "Raleigh, NC", situation: "Parents love the team, but the profile has 40 reviews and the newest is eight months old.", goal: "A steady flow of recent reviews from happy parents.", plan: "SMS requests after each visit, replies to every review and a reviews widget on the new-patient page." },
      { icon: "pin", business: "An auto repair shop", where: "Phoenix, AZ", situation: "Two angry reviews from the same week sit at the top with no reply.", goal: "Recover trust without arguing in public.", plan: "Professional responses, a policy check on both reviews and a request system to rebuild recent volume." },
      { icon: "media", business: "A boutique fitness studio", where: "Austin, TX", situation: "Members rave in class but rarely post; a new competitor opened with a review blitz.", goal: "Show the community's real love on Google.", plan: "Automated asks after a member's third class, Q&A management and monthly monitoring." },
      { icon: "shield", business: "A roofing company", where: "Oklahoma City, OK", situation: "Storm-season jobs bring in hundreds of customers, but reviews come in bursts and then stop.", goal: "Consistent reviews year-round, tied to completed jobs.", plan: "Requests triggered when a job is marked complete, photo prompts and response templates for common questions." },
    ],
  },
  midCta: {
    title: "How do your reviews stack up against the competition?",
    body: "Our free review audit compares your rating, volume, recency and response rate with the businesses beating you on the map.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Reputation management for",
    accent: "trust-driven businesses.",
    intro: "Reviews matter most where customers trust you with their health, home, money or legal matters. Explore how we work with each industry.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "Reputation management",
    accent: "that follows the rules.",
    intro: "We never buy reviews, incentivize them or only ask happy customers. Our founder delivered 150+ client engagements as a freelance SEO before founding the agency, and we've seen how shortcuts can get a profile penalized.",
    rows: [
      { label: "Policy-safe review requests", rig: "Every customer asked, no incentives, no gating", agency: "Varies by agency", freelancer: "Varies", diy: "Easy to break the rules by mistake" },
      { label: "Responses written for you", rig: "In your voice, approved by you", agency: "Sometimes templated", freelancer: "Varies", diy: "You write every reply" },
      { label: "Monitoring and alerts", rig: "Included", agency: "Often an extra tool", freelancer: "Rarely", diy: "Checking manually" },
      { label: "Reviews shown on your website", rig: "Review widgets included", agency: "Sometimes extra", freelancer: "Varies", diy: "Copy and paste" },
      { label: "Tied to local SEO results", rig: "Reported alongside map rankings", agency: "Often reported separately", freelancer: "Varies", diy: "Hard to connect" },
    ],
  },
  faqIntro: "What business owners ask us about reviews, ratings and Google's rules.",
  faqs: [
    {
      question: "Can you delete bad reviews?",
      answer:
        "We can't delete reviews, and no one legitimately can. Reviews that break the platform's policies, such as spam, fake reviews, conflicts of interest or offensive content, can be flagged for removal, and the platform decides. For genuine negative reviews, we help you respond professionally, which reassures future customers.",
    },
    {
      question: "Is it allowed to ask customers for reviews?",
      answer:
        "Yes. Google allows and encourages businesses to ask customers for reviews. The rules are simple: ask all your customers, not just the happy ones, and never offer discounts, gifts or payment in exchange. Our request system follows those rules, so your profile stays safe.",
    },
    {
      question: "How many reviews per month is realistic?",
      answer:
        "It depends mainly on how many customers you serve each month and how quickly requests go out after the job. A busy shop will collect far more than a specialist practice. Consistency matters more than spikes: a steady flow of recent reviews looks more trustworthy, to customers and to Google, than a sudden burst.",
    },
    {
      question: "Which platforms do you cover?",
      // TODO(owner): list the specific review platforms the agency supports beyond Google (e.g. Yelp, Facebook) once confirmed.
      answer:
        "Google comes first, because Google reviews feed the Map Pack and are usually the first thing customers see. Depending on your industry, other review sites can matter too, and we'll confirm which ones we'll cover during your free review audit, based on where your customers actually look.",
    },
    {
      question: "Do you write the responses for us?",
      answer:
        "Yes. We write responses in your voice and follow the tone and guidelines you approve at the start. Positive reviews get a genuine thank-you, and negative reviews get a calm, professional reply that addresses the issue. Sensitive cases come to you before anything is posted, so you always stay in control.",
    },
    {
      question: "How does this help local SEO?",
      answer:
        "Reviews are one of the prominence signals Google uses to rank businesses in the Map Pack. They also affect clicks: a higher rating and more recent reviews make people more likely to choose you over the competitor next to you. That's why we report reviews alongside your [local SEO](/local-seo-services) results.",
    },
  ],
  guides: [guides.notShowingUp, guides.aiOverviews],
  relatedServices: ["/local-seo-services", "/seo-services"],
  finalCta: {
    title: "See how your reviews",
    accent: "stack up.",
    body: "We'll compare your reviews, rating and response rate with your top local competitors, and show you how to close the gap within Google's rules.",
    bullets: [
      "Rating, volume and recency vs. your top 3 competitors",
      "Unanswered reviews and response quality check",
      "A policy-safe plan to grow reviews every month",
    ],
  },
};

export const reviewRules: SectionHeading & { allowed: string[]; banned: string[] } = {
  eyebrow: "Google's review rules in 30 seconds",
  title: "What's allowed,",
  accent: "and what gets you in trouble.",
  intro: "Google's policies are clear, and breaking them can get reviews removed or a profile restricted. Every request system we set up stays on the right side of this line.",
  allowed: [
    "Asking every customer for an honest review",
    "Sending a direct review link by text or email",
    "Replying to every review, good or bad",
    "Flagging reviews that break Google's policies",
  ],
  banned: [
    "Offering discounts, gifts or payment for reviews",
    "\"Review gating\": only asking customers you know are happy",
    "Writing reviews yourself or buying them",
    "Asking staff or family to post reviews",
  ],
};

export const reviewFlywheel: SectionHeading & { steps: { title: string; body: string }[] } = {
  eyebrow: "Why reviews compound",
  title: "Reviews feed rankings.",
  accent: "Rankings feed reviews.",
  intro: "More recent reviews make you more prominent on the map and more clickable in results. More customers means more reviews. Once the loop is running, it keeps turning.",
  steps: [
    { title: "Ask", body: "Every customer gets a quick, friendly request." },
    { title: "Review", body: "Happy customers post, often with detail and photos." },
    { title: "Respond", body: "Every review gets a reply, showing you care." },
    { title: "Rank & win", body: "Prominence and clicks rise, bringing new customers to ask." },
  ],
};
