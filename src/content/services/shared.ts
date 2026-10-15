import type { ProofItem } from "./types";

// Blog posts that exist today. Only link to posts that are live.
export const guides = {
  seoCost: {
    href: "/blog/how-much-does-seo-cost",
    label: "How Much Does SEO Actually Cost? (An Agency's Honest Breakdown)",
    description: "What drives SEO pricing, and how to judge whether a quote is fair.",
  },
  aiOverviews: {
    href: "/blog/how-to-get-into-google-ai-overviews",
    label: "How to Get Your Business Into Google's AI Overviews (Step-by-Step Guide)",
    description: "The page structure, schema and signals that make content easy for AI to quote.",
  },
  notShowingUp: {
    href: "/blog/why-is-my-website-not-ranking-on-google",
    label: "Why Your Website Doesn't Show Up on Google (7 Real Reasons + Fixes)",
    description: "The most common reasons a site stays invisible, and how to fix each one.",
  },
};

const gscPeriod = "Google Search Console · Jul 5 – Oct 3, 2026";
const gscFooter =
  'Google\'s own footer on this report: "Get more details on your site\'s performance in generative AI features on Google Search."';

export const gscClientA: ProofItem = {
  title: "Client A: 5.92K clicks in 90 days",
  source: gscPeriod,
  stats: [
    { label: "Clicks", value: "5.92K" },
    { label: "Impressions", value: "1.17M" },
    { label: "Average CTR", value: "0.5%" },
    { label: "Average position", value: "7.2" },
  ],
  alt: "Google Search Console performance report for Client A, July 5 to October 3, 2026: 5.92K clicks, 1.17M impressions, 0.5% average CTR and an average position of 7.2, with daily clicks and impressions trending up across the period.",
  screenshot: { src: "/assets/proof/gsc-client-a.png", width: 1600, height: 550 },
  footnote: gscFooter,
  body: [],
};

export const gscClientB: ProofItem = {
  title: "Client B: 10.3K clicks in 90 days",
  source: gscPeriod,
  stats: [
    { label: "Clicks", value: "10.3K" },
    { label: "Impressions", value: "1.61M" },
    { label: "Average CTR", value: "0.6%" },
    { label: "Average position", value: "8.1" },
  ],
  alt: "Google Search Console performance report for Client B, July 5 to October 3, 2026: 10.3K clicks, 1.61M impressions, 0.6% average CTR and an average position of 8.1, with daily clicks rising sharply from mid-August.",
  screenshot: { src: "/assets/proof/gsc-client-b.png", width: 1600, height: 533 },
  footnote: gscFooter,
  body: [],
};

// TODO(owner): add real screenshot (Shopify launch weekend dashboard), unedited.
export const shopifyLaunch: ProofItem = {
  title: "$253K in sales in one launch weekend",
  source: "Shopify dashboard · one launch weekend",
  stats: [
    { label: "Sales", value: "$253K" },
    { label: "Orders", value: "626" },
    { label: "Conversion rate", value: "12.26%" },
  ],
  alt: "Shopify analytics dashboard for one client launch weekend: $253K in total sales, 626 orders and a 12.26% conversion rate.",
  body: [],
};

// TODO(owner): add names once written permission is confirmed.
// TODO(owner): add real screenshot (Denver shop Google Business Profile), unedited.
export const denverShop: ProofItem = {
  title: "An auto dent, hail & detail shop in Denver, CO",
  source: "Google Business Profile",
  stats: [
    { label: "Google rating", value: "4.9★" },
    { label: "Google reviews", value: "384" },
    { label: "On the profile", value: "Book Online" },
  ],
  alt: "Google Business Profile of an auto dent, hail and detail shop in Denver, Colorado, showing a 4.9-star rating from 384 Google reviews and a Book Online button.",
  body: [],
};

// TODO(owner): add names once written permission is confirmed.
// TODO(owner): add real screenshot (Scottsdale practice Google Business Profile), unedited.
export const scottsdalePractice: ProofItem = {
  title: "A naturopathic practice in Scottsdale, AZ",
  source: "Google Business Profile",
  stats: [
    { label: "Google rating", value: "4.8★" },
    { label: "Google reviews", value: "36" },
  ],
  alt: "Google Business Profile of a naturopathic practice in Scottsdale, Arizona, showing a 4.8-star rating from 36 Google reviews.",
  body: [],
};
