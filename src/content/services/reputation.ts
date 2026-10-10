import { denverShop, guides } from "./shared";
import type { ServicePageContent } from "./types";

export const reputationPage: ServicePageContent = {
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
  heroPanel: {
    label: "Reputation program",
    steps: ["Ask every customer", "Respond", "Monitor", "Showcase"],
    outcome: "A steady stream of genuine reviews that win more calls",
  },
  proofStrip: [
    { value: "384 Google reviews", label: "at 4.9★ for a Denver auto shop" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your customers love you.",
    accent: "Google doesn't know it yet.",
    intro:
      "Most customers check reviews before they call, and many decide in seconds based on the star rating and how recent the reviews are. If your reviews don't reflect the quality of your work, you lose customers you should be winning.",
    points: [
      {
        title: "\"Happy customers almost never leave reviews.\"",
        body: "Satisfied customers mean to leave a review, then forget. Unhappy ones are more motivated to write. Without a simple, consistent way to ask, your reviews end up skewed toward the few people who had a bad day.",
      },
      {
        title: "\"One bad review seems to undo ten good ones.\"",
        body: "A single harsh review near the top of your profile can scare off new customers, especially if it sits there with no reply. How you respond matters almost as much as the review itself.",
      },
      {
        title: "\"I don't have time to reply to reviews.\"",
        body: "You're running a business. Writing thoughtful replies to every review, good and bad, falls to the bottom of the list. But unanswered reviews make a business look like no one is paying attention.",
      },
      {
        title: "\"Competitors have more reviews, and newer ones.\"",
        body: "Customers compare businesses side by side on the map. When a competitor has hundreds of recent reviews and you have a few dozen old ones, the choice looks easy, even if your work is better.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "A complete review system,",
    accent: "run for you.",
    intro:
      "Good reputation management isn't about gaming ratings. It's about asking every customer consistently, responding well and keeping an eye on what people say. Here's what every plan includes.",
    items: [
      {
        icon: "community",
        title: "Review request system (SMS and email)",
        body: "We set up automated SMS and email requests that go to every customer after a job or visit, with a direct link to your Google review form.",
      },
      {
        icon: "content",
        title: "Review responses",
        body: "We write thoughtful replies to your reviews in your voice, thanking happy customers and addressing complaints calmly and professionally. You approve the approach.",
      },
      {
        icon: "profile",
        title: "Google Business Profile Q&A management",
        body: "We add and answer common questions on your profile and keep an eye on new ones, so customers get accurate answers instead of guesses from strangers.",
      },
      {
        icon: "analytics",
        title: "Review monitoring and alerts",
        body: "We monitor your reviews and alert you quickly to new negative feedback, so nothing sits unanswered and urgent issues reach you fast.",
      },
      {
        icon: "shield",
        title: "Policy-safe handling of negative reviews",
        body: "We respond to genuine complaints professionally and flag reviews that break Google's policies, such as spam or fake reviews, for Google to assess.",
      },
      {
        icon: "reviews",
        title: "Review widgets on your website",
        body: "We display your real Google reviews on your website, so visitors see the same social proof there that they'd find on the map.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of reputation management.",
    intro:
      "The review request system goes live first, because every week without it is a week of missed reviews. Responses and monitoring follow, and by month three you get a clear report on how your reputation is changing.",
    steps: [
      {
        period: "Days 1–30",
        title: "Review request system live",
        body: "We audit your current reviews, set up automated SMS and email requests, and connect them to your customer list or booking system.",
      },
      {
        period: "Days 31–60",
        title: "Response workflow",
        body: "We agree on your tone of voice, reply to your backlog of unanswered reviews and set up an ongoing response process.",
      },
      {
        period: "Days 61–90",
        title: "Monitoring and monthly report",
        body: "We switch on monitoring and alerts, add review widgets to your website and deliver your first monthly reputation report.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "384 Google reviews",
    accent: "at 4.9 stars.",
    intro:
      "Here's what a strong local reputation looks like. This client is unnamed until we have written permission to share it.",
    items: [
      {
        ...denverShop,
        body: [
          "This auto dent, hail and detail shop in Denver, Colorado holds a 4.9-star average from 384 Google reviews, with a \"Book Online\" button right on its Google Business Profile.",
          "That volume of reviews, paired with a near-perfect rating and an easy way to book, gives new customers the confidence to choose quickly.",
          // TODO(owner): describe the work done for the Denver shop if you want it shown.
        ],
      },
    ],
    closing: "Reviews are one part of local visibility. See our [Local SEO & Google Business Profile](/local-seo-services) service.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Reputation management for",
    accent: "trust-driven businesses.",
    intro:
      "Reviews carry the most weight where customers are choosing someone to trust with their health, home, money or legal matters. Explore how we work with each industry.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "Reputation management",
    accent: "that follows the rules.",
    intro:
      "We never buy reviews, incentivize them or only ask happy customers. Our founder delivered 150+ client engagements as a freelance SEO before founding the agency, and we've seen how shortcuts can get a profile penalized.",
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
  guides: [guides.notShowingUp],
  relatedServices: ["/local-seo-services", "/seo-services"],
  finalCta: {
    eyebrow: "Free review audit",
    title: "See how your reviews",
    accent: "stack up.",
    body: "We'll compare your reviews, rating and response rate with your top local competitors, and show you how to close the gap within Google's rules.",
  },
};
