import { guides, shopifyLaunch } from "../services/shared";
import type { SectionHeading } from "../services/types";
import type { IndustryCore } from "./types";

export const ecommercePage: IndustryCore = {
  slug: "ecommerce-marketing",
  path: "/industries/ecommerce-marketing",
  name: "E-commerce Marketing",
  title: "E-commerce Marketing for DTC & Shopify Brands | SEO & AI",
  description:
    "E-commerce marketing for DTC and Shopify brands: SEO, AI shopping visibility and conversion work that cut your dependence on paid social and its rising costs.",
  h1Lead: "E-commerce Marketing",
  h1Accent: "for brands that rely too much on ads.",
  heroPromise: "Grow sales you don't pay for twice.",
  heroIntro:
    "If one algorithm change can wreck your month, your growth is rented. We help DTC and Shopify brands build revenue they own, from organic search, AI shopping answers and a store that converts more of the traffic you already pay for.",
  ctaLabel: "Get My Free Store Growth Audit",
  ctaMicro: "We review your organic visibility, AI shopping presence, site speed and checkout against the brands winning your category.",
  sticky: "Too much revenue riding on one ad platform?",
  auditChips: ["Organic search", "AI shopping answers", "Conversion rate", "Site speed"],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your revenue depends on",
    accent: "a platform you don't control.",
    intro: "Many DTC brands were built on cheap, precise social ads. That era ended, and the costs keep moving in one direction.",
    points: [
      {
        quote: "Our ads stopped working the way they used to, and we still don't know why.",
        body: "Apple's App Tracking Transparency, rolled out from April 2021, cut the data ad platforms use to target and measure. Meta itself estimated the change would cost it about $10 billion in 2022 revenue. Brands felt it as higher costs and fuzzier attribution.",
        fix: "Channels that don't depend on tracking a user across apps.",
      },
      {
        quote: "One algorithm update and our best month became our worst.",
        body: "When most sales come from one platform, its changes become your problem. TikTok briefly went dark in the US in January 2025. Brands that relied on it had no backup.",
        fix: "Organic search and AI visibility as a second, steadier engine.",
      },
      {
        quote: "Margins are thinner, and the ad bill keeps climbing.",
        body: "Tariffs and the end of the US de minimis exemption in August 2025 raised landed costs for many brands. Every point of margin lost makes paid acquisition harder to justify.",
        fix: "More revenue from the traffic you already have, through conversion work.",
      },
      {
        quote: "Shoppers ask ChatGPT what to buy now.",
        body: "ChatGPT and Google's AI Mode now recommend products right in the answer. They lean on product data, reviews and clear category pages. Thin product pages get skipped.",
        fix: "Product data, schema and content that AI shopping tools can read.",
      },
    ],
  },
  segments: {
    eyebrow: "By store type",
    title: "Where your store leaks sales",
    accent: "depends on how you sell.",
    intro: "A subscription brand and a 5,000-SKU catalog store need different fixes. We start with the leak that costs you the most.",
    items: [
      { icon: "media", name: "Paid-social DTC brands", examples: "Built on Meta or TikTok", pain: "Most revenue comes from one or two ad accounts. Rising costs eat the margin, and there's no organic floor underneath.", fix: "Organic search and AI shopping visibility to share the load." },
      { icon: "cart", name: "Marketplace sellers going direct", examples: "Amazon or Etsy first", pain: "The marketplace owns the customer and the data. Your own store gets little traffic and converts poorly.", fix: "A store and search presence that bring buyers straight to you." },
      { icon: "community", name: "Subscription brands", examples: "Replenishment and memberships", pain: "Acquisition costs only work if customers stay. A confusing subscribe flow loses them before the first box ships.", fix: "Clearer offer pages and a smoother first purchase." },
      { icon: "search", name: "Large-catalog stores", examples: "Hundreds or thousands of SKUs", pain: "Filters create thousands of near-duplicate URLs, and important collections never rank.", fix: "Collection structure, filter handling and product schema at scale." },
      { icon: "shield", name: "Store migrations", examples: "WooCommerce, BigCommerce or Magento to Shopify", pain: "Rankings and revenue can drop after a migration if redirects and data are missed.", fix: "A migration planned around SEO: every URL mapped and redirected. See [E-commerce & Shopify](/ecommerce-development)." },
      { icon: "analytics", name: "B2B & wholesale stores", examples: "Trade buyers and bulk orders", pain: "Buyers research for weeks, compare specs and need pricing and minimums up front.", fix: "Spec-rich product pages and search content for trade buyers." },
    ],
  },
  included: {
    eyebrow: "What we do",
    title: "Everything between a search",
    accent: "and a completed checkout.",
    intro: "We focus on the channels you own and the store itself. We don't buy or manage ads.",
    items: [
      { icon: "search", title: "E-commerce SEO", body: "Collection and product pages, technical fixes and internal links that rank for what shoppers search. See [SEO Services](/seo-services)." },
      { icon: "ai", title: "AI shopping visibility", body: "Product schema, clean product data and helpful content so AI tools can recommend your products. See [AI SEO & GEO](/ai-seo-services)." },
      { icon: "cro", title: "Conversion rate optimization", body: "Product pages, cart and checkout tested and improved so more visitors buy. See [CRO](/cro-strategy)." },
      { icon: "cart", title: "Shopify builds and migrations", body: "Fast, conversion-focused stores, and migrations that keep your rankings. See [E-commerce & Shopify](/ecommerce-development)." },
      { icon: "mobile", title: "Site speed", body: "Faster pages on mobile, where most shoppers browse, without stripping out features that sell." },
      { icon: "analytics", title: "Analytics you can trust", body: "Clean GA4 and Shopify reporting, so you can see what organic search and conversion work actually earn." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "$253K in one",
    accent: "launch weekend.",
    intro: "Numbers from a real Shopify dashboard in our client work. The brand is unnamed until we have written permission to share it.",
    items: [
      {
        ...shopifyLaunch,
        body: [
          "One client launch weekend brought in $253K in sales from 626 orders, at a 12.26% conversion rate. The store was ready when the demand arrived.",
          // TODO(owner): describe the work done on this launch only if it's documented in a case study.
        ],
      },
    ],
    closing: "See how we build stores on our [E-commerce & Shopify](/ecommerce-development) page.",
  },
  rules: {
    eyebrow: "Compliance built in",
    title: "Growth that won't get you",
    accent: "flagged or fined.",
    intro: "E-commerce marketing has its own rules from the FTC and the platforms. These are the ones we build around.",
    items: [
      { title: "Influencer and UGC disclosures", body: "The FTC's Endorsement Guides, updated in 2023, require clear disclosure of paid or gifted endorsements. Creator content we use on your site keeps those disclosures." },
      { title: "No fake or filtered reviews", body: "The FTC's rule on fake reviews took effect in October 2024. It bans buying reviews and hiding negative ones. Product page reviews come from real customers." },
      { title: "Honest email signups", body: "Signup forms set clear expectations. Any emails you send must follow CAN-SPAM: no misleading subject lines, a physical address and opt-outs honored within 10 business days." },
      { title: "Accurate product claims and data", body: "\"Made in USA\" claims must meet the FTC's standard. Prices and availability must match your Google Merchant Center feed, or products can be disapproved." },
    ],
    note: "Final responsibility for product claims stays with your brand. We flag anything that needs your sign-off before it goes live.",
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "with us.",
    intro: "Conversion fixes come first, because they make every visitor you already pay for more valuable.",
    steps: [
      { period: "Days 1–30", title: "Audit and quick wins", body: "Speed, checkout and tracking issues fixed; organic and AI shopping baselines measured." },
      { period: "Days 31–60", title: "Collections and products", body: "Collection pages restructured, product schema and data cleaned up, first conversion tests live." },
      { period: "Days 61–90", title: "Content and reporting", body: "Buying guides and comparison content published, and your first report on organic revenue and conversion rate." },
    ],
  },
  plan: {
    eyebrow: "One plan",
    title: "One plan for revenue",
    accent: "you own.",
    intro: "No stack of disconnected services. One plan, shaped by your audit, your catalog and your platform.",
    name: "Owned Growth Plan",
    summary: "The SEO, AI shopping and conversion work that grows sales without a bigger ad bill, run for you every month.",
    includes: [
      "Collection, product and technical SEO",
      "AI shopping visibility and product schema",
      "Ongoing conversion testing on product pages and checkout",
      "Site speed improvements",
      "Monthly report: organic revenue, conversion rate and rankings",
    ],
    note: "We quote after your free audit, based on your catalog size, platform and goals. No published rate card.",
  },
  midCta: {
    title: "Find out how exposed you are to one ad platform.",
    body: "Our free audit shows your organic and AI shopping visibility, and where your store is losing buyers before checkout.",
  },
  faqIntro: "What DTC founders and store operators ask us before shifting budget from ads.",
  faqs: [
    {
      question: "Can SEO really replace paid ads for an e-commerce brand?",
      answer:
        "Not overnight, and it doesn't have to. The goal is to reduce your dependence on paid social, so a cost spike or algorithm change doesn't sink the month. Organic search and AI visibility build a steadier base, and conversion work makes your existing ad spend go further.",
    },
    {
      question: "How long does e-commerce SEO take?",
      answer:
        "Technical fixes and conversion improvements can show results within weeks. New collection pages and content usually take a few months to rank, depending on your category's competition. We share realistic timelines after the free audit.",
    },
    {
      question: "Do you only work with Shopify stores?",
      answer:
        "Shopify is our main platform, and we also migrate stores to Shopify from WooCommerce, BigCommerce and Magento. SEO and conversion work applies on most platforms, and we'll tell you during the audit if yours is holding you back.",
    },
    {
      question: "How do products show up in ChatGPT and Google's AI Mode?",
      answer:
        "AI shopping tools draw on product data, structured data, reviews and helpful content. Clean product feeds, complete product schema and pages that answer real buying questions make your products easier to recommend. See our [AI SEO & GEO](/ai-seo-services) page.",
    },
    {
      question: "Do you manage Meta, TikTok or Google Shopping ads?",
      answer:
        "No. We focus on organic search, AI visibility and your store's conversion rate. Many clients keep running ads with their own team or agency, and a faster, better-converting store makes those ads more profitable.",
    },
    {
      question: "Will a Shopify migration hurt my rankings?",
      answer:
        "It can if it's done carelessly. We map every old URL to its new one, keep product data and reviews, and set up permanent redirects before launch, so rankings and revenue carry over.",
    },
  ],
  guides: [guides.aiOverviews, guides.seoCost],
  relatedServices: ["/ecommerce-development", "/cro-strategy", "/seo-services"],
  auditScope: ["Ecommerce Performance"],
  finalCta: {
    title: "Find the sales you're",
    accent: "leaving on the table.",
    body: "Share your store URL. We'll show you where organic, AI shopping and conversion gains are hiding, and what to fix first.",
    bullets: [
      "Organic and AI shopping visibility vs. your top competitors",
      "Speed, product page and checkout friction review",
      "A first plan to depend less on paid social",
    ],
  },
  hub: {
    description: "SEO, AI shopping visibility and conversion work that help DTC and Shopify brands rely less on paid social.",
    audiences: ["DTC brands", "Shopify stores", "Marketplace sellers going direct"],
  },
};

export const channelMix: SectionHeading & {
  channels: { name: string; type: "rented" | "owned"; note: string }[];
} = {
  eyebrow: "Rented vs. owned",
  title: "Every channel is either rented",
  accent: "or owned.",
  intro: "Rented channels stop the day you stop paying, and their owner sets the rules. Owned channels keep working and get cheaper over time.",
  channels: [
    { name: "Paid social", type: "rented", note: "Costs and targeting set by the platform" },
    { name: "Marketplaces", type: "rented", note: "They own the customer and the data" },
    { name: "Organic search", type: "owned", note: "Rankings keep bringing visits without a click fee" },
    { name: "AI shopping answers", type: "owned", note: "Earned with product data and helpful content" },
    { name: "Your store's conversion rate", type: "owned", note: "Multiplies every other channel" },
    { name: "Your customer list", type: "owned", note: "Repeat buyers you can reach directly" },
  ],
};
