import { denverShop, guides, scottsdalePractice } from "./shared";
import type { ServicePageContent } from "./types";

export const localSeoPage: ServicePageContent = {
  slug: "local-seo-services",
  name: "Local SEO & Google Business Profile",
  serviceType: "Local SEO and Google Business Profile optimization",
  theme: "local",
  title: "Local SEO & Google Business Profile Services (USA)",
  description:
    "Rank in the Google Map Pack and turn your Business Profile into a lead source: profile optimization, reviews, citations and local pages. Free GBP audit.",
  h1Lead: "Local SEO & Google Business Profile",
  h1Accent: "Services",
  heroPromise: "Show up in the Map Pack when locals search for you.",
  heroIntro:
    "Local SEO and Google Business Profile services help US businesses appear in the Google Map Pack and local results when nearby customers search for what they offer. We optimize your profile, build reviews and citations, and create local pages, so more people in your area call, book or ask for directions.",
  ctaLabel: "Get My Free Google Business Profile Audit",
  heroPanel: {
    label: "Local visibility program",
    steps: ["Optimize profile", "Clean citations", "Grow reviews", "Track the grid"],
    outcome: "More calls, bookings and direction requests from Google Maps",
  },
  proofStrip: [
    { value: "4.9★ · 384 reviews", label: "Denver auto shop on Google" },
    { value: "4.8★ · 36 reviews", label: "Scottsdale naturopathic practice" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Locals are searching.",
    accent: "They're finding someone else.",
    intro:
      "When someone nearby searches for your service, Google shows a map with three businesses before anything else. Those three get most of the calls. If you're not one of them, these are usually the reasons.",
    points: [
      {
        title: "\"Our competitors show up on the map and we don't.\"",
        body: "You search for your own service and see the same three competitors every time. They aren't always better or bigger. Their profiles are simply more complete, better reviewed and more consistent across the web.",
      },
      {
        title: "\"Our Google profile hasn't been touched in years.\"",
        body: "Wrong categories, missing services, old photos, no posts and unanswered questions all tell Google, and customers, that a business might not be active. A stale profile quietly loses calls every week.",
      },
      {
        title: "\"We have a few reviews, and they're old.\"",
        body: "Customers compare review counts and dates in seconds. A handful of reviews from three years ago looks weak next to a competitor with hundreds of recent ones, even if your work is just as good.",
      },
      {
        title: "\"Our business info is different everywhere.\"",
        body: "An old address on one directory, a different phone number on another, a slightly different business name on a third. Inconsistent information confuses Google about who you are and where you serve.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Your profile, website and citations",
    accent: "working together.",
    intro:
      "Google ranks local businesses on relevance, distance and prominence. You can't move your address, but you can make your business more relevant and more prominent. That's what every local SEO plan covers.",
    items: [
      {
        icon: "profile",
        title: "Google Business Profile setup and optimization",
        body: "We set the right primary and secondary categories, list every service, add real photos, publish posts and seed the Q&A so your profile answers customer questions before they call.",
      },
      {
        icon: "reviews",
        title: "Review generation system",
        body: "We set up a simple way to ask every customer for a review, following Google's rules, so new reviews arrive steadily instead of in rare bursts. See our [Review & Reputation Management](/reputation-management) service.",
      },
      {
        icon: "citations",
        title: "Citation and NAP cleanup",
        body: "We find and fix your name, address and phone (NAP) across directories and data aggregators, and add listings where your business should appear but doesn't.",
      },
      {
        icon: "pin",
        title: "Location and service-area pages",
        body: "We create genuinely useful pages for each real location or service area, with local details and proof, not thin copies with the city name swapped.",
      },
      {
        icon: "schema",
        title: "Local schema",
        body: "We add LocalBusiness structured data to your website so search engines can match your site to your Google profile and understand your services and hours.",
      },
      {
        icon: "analytics",
        title: "Map-pack rank tracking (grid)",
        body: "We track where you rank on the map across a grid of points around your business, so you can see exactly which neighborhoods you show up in and where you don't yet.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "on the map.",
    intro:
      "Profile and citation fixes usually come first because they're quick and they set the foundation. Reviews and local pages build on top, and the rank grid shows you where it's working.",
    steps: [
      {
        period: "Days 1–30",
        title: "Profile optimization and citation cleanup",
        body: "We audit and optimize your Google Business Profile, set a starting rank grid, and clean up inconsistent business details across the main directories.",
      },
      {
        period: "Days 31–60",
        title: "Review system and local pages",
        body: "We launch your review request system and build or improve the location and service-area pages your website needs.",
      },
      {
        period: "Days 61–90",
        title: "Posting cadence and grid review",
        body: "We settle into a regular posting schedule, compare your rank grid against the baseline and agree on the next priorities with you.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "What a strong local profile",
    accent: "looks like.",
    intro:
      "Two client profiles, shown without names until we have written permission to share them. Both show the signals that win local searches: a high rating, a healthy number of reviews and a clear next step for the customer.",
    items: [
      {
        ...denverShop,
        body: [
          "This Denver auto dent, hail and detail shop holds a 4.9-star rating from 384 Google reviews, and its profile includes a \"Book Online\" button so customers can schedule straight from the map.",
          "That combination of volume, rating and a one-tap booking path is exactly what we build toward for every local client.",
          // TODO(owner): describe the work done for the Denver shop if you want it shown.
        ],
      },
      {
        ...scottsdalePractice,
        body: [
          "This naturopathic practice in Scottsdale, Arizona holds a 4.8-star rating from 36 Google reviews.",
          "For a specialist practice, a steady stream of detailed, recent reviews builds the trust new patients look for before they book.",
          // TODO(owner): describe the work done for the Scottsdale practice if you want it shown.
        ],
      },
    ],
    closing: "Local rankings also feed AI answers. See our [AI SEO & GEO Services](/ai-seo-services) and broader [SEO Services](/seo-services).",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Local SEO for businesses",
    accent: "that serve their community.",
    intro:
      "Map visibility matters most for businesses where customers choose someone nearby: practices, firms, contractors and agents. Here's how we approach the industries we work with.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "Local SEO done",
    accent: "properly, and by the rules.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before founding the agency. We bring that hands-on attention to your profile, and we never cut corners that could get it suspended.",
    rows: [
      { label: "GBP + website + citations handled together", rig: "One plan for all three", agency: "Often handled separately", freelancer: "Usually covers one or two", diy: "Hard to keep consistent" },
      { label: "Review system included", rig: "Included", agency: "Often an extra tool or fee", freelancer: "Varies", diy: "Manual asking" },
      { label: "Map-pack grid tracking", rig: "Grid across your service area", agency: "Sometimes a single ranking", freelancer: "Varies", diy: "Checking from your own phone" },
      { label: "Policy-safe (no fake reviews, no review gating)", rig: "Always", agency: "Varies by agency", freelancer: "Varies", diy: "Easy to get wrong" },
      { label: "Local pages that aren't duplicate \"doorway\" pages", rig: "Unique, useful pages per area", agency: "Some use city-swap templates", freelancer: "Varies", diy: "Time-consuming to write" },
    ],
  },
  faqIntro: "Answers to the local SEO questions we hear most from business owners.",
  faqs: [
    {
      question: "How do I rank in the Google Map Pack?",
      answer:
        "Google ranks local results on three things: relevance (how well your profile matches the search), distance (how close you are to the searcher) and prominence (how well known and well reviewed you are). You can't change distance, but you can improve relevance with a complete profile and prominence with reviews, citations and a strong website.",
    },
    {
      question: "How long does local SEO take?",
      answer:
        "Profile fixes and citation cleanup can make a difference within weeks. Steady gains across the map usually take a few months, because reviews and authority build over time. Competitive categories in big cities take longer than niche services in smaller towns. The rank grid shows you progress neighborhood by neighborhood.",
    },
    {
      question: "Can you remove bad reviews?",
      answer:
        "Only reviews that break Google's policies, such as spam, fake reviews or offensive content, can be flagged for removal, and Google makes the final decision. For genuine negative reviews, we help you respond professionally, which often reassures future customers more than a perfect score would.",
    },
    {
      question: "Do I need a physical address?",
      answer:
        "No. Service-area businesses like plumbers or mobile detailers can hide their address and list the areas they serve instead. You still need a real business location to verify the profile, and you must follow Google's guidelines. Virtual offices and mailboxes aren't allowed and can get a profile suspended.",
    },
    {
      question: "Can you handle multiple locations?",
      answer:
        "Yes. Each real location gets its own optimized Google Business Profile and its own useful page on your website, with accurate details and local proof. We keep information consistent across every location and report on each one separately, so you can see which branches are winning and which need attention.",
    },
    {
      question: "What's included each month?",
      answer:
        "Ongoing profile updates and posts, review requests and monitoring, citation maintenance, local page improvements, local schema checks and a monthly report with your rank grid, calls, direction requests and website visits from your profile. We also flag anything that needs your input, like new photos or services.",
    },
  ],
  guides: [guides.notShowingUp],
  relatedServices: ["/reputation-management", "/seo-services", "/ai-seo-services"],
  finalCta: {
    eyebrow: "Free Google Business Profile audit",
    title: "Find out why you're",
    accent: "not on the map yet.",
    body: "We'll review your profile, reviews and citations against the businesses outranking you, and show you the fixes worth making first.",
  },
};
