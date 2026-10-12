import { denverShop, guides, scottsdalePractice } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const localSeoPage: ServiceCore = {
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
  ctaMicro: "We compare your profile, reviews and citations with the three businesses beating you on the map.",
  sticky: "Not in the top 3 on Google Maps?",
  proofStrip: [
    { value: "4.9★ · 384 reviews", label: "Denver auto shop on Google" },
    { value: "4.8★ · 36 reviews", label: "Scottsdale naturopathic practice" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Locals are searching.",
    accent: "They're finding someone else.",
    intro: "When someone nearby searches \"near me\", Google shows a map with three businesses before anything else. Those three get most of the calls. If you're not one of them, it's usually one of these.",
    points: [
      {
        quote: "The same three competitors show up on the map every time.",
        body: "They aren't always bigger or better. Their profiles are more complete, better reviewed and more consistent across the web.",
        fix: "We close the gap with the businesses outranking you, signal by signal.",
      },
      {
        quote: "Our Google profile hasn't been touched in years.",
        body: "Wrong categories, missing services, old photos and unanswered questions tell Google, and customers, that you might not be active.",
        fix: "Full profile optimization plus a steady posting rhythm.",
      },
      {
        quote: "We have twelve reviews and the newest one is from 2023.",
        body: "Customers compare review counts and dates in seconds. A handful of old reviews looks weak next to hundreds of recent ones.",
        fix: "A policy-safe system that asks every customer for a review.",
      },
      {
        quote: "Yelp has our old address and Facebook has our old phone number.",
        body: "Inconsistent details across directories confuse Google about who you are and where you serve, and quietly drag rankings down.",
        fix: "Citation clean-up so your name, address and phone match everywhere.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Your profile, website and citations",
    accent: "working together.",
    intro: "Every local SEO plan covers the signals Google uses for the Map Pack, from the profile itself to the website and directories that back it up.",
    items: [
      { icon: "profile", title: "Google Business Profile setup and optimization", body: "The right primary and secondary categories, every service listed, real photos, regular posts and a seeded Q&A." },
      { icon: "reviews", title: "Review generation system", body: "A simple way to ask every customer for a review, within Google's rules. See [Review & Reputation Management](/reputation-management)." },
      { icon: "citations", title: "Citation and NAP cleanup", body: "Name, address and phone fixed across directories and data aggregators, plus listings where you're missing." },
      { icon: "pin", title: "Location and service-area pages", body: "Genuinely useful pages for each real location or service area, with local details and proof, not city-swapped copies." },
      { icon: "schema", title: "Local schema", body: "LocalBusiness structured data so search engines connect your site to your profile, services and hours." },
      { icon: "analytics", title: "Map-pack rank tracking (grid)", body: "Rankings checked across a grid of points around you, so you see which neighborhoods you win and where you don't yet." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "on the map.",
    intro: "Profile and citation fixes come first because they're fast and set the foundation. Reviews and local pages build on top.",
    steps: [
      { period: "Days 1–30", title: "Profile and citation clean-up", body: "Profile audit and optimization, a starting rank grid, and inconsistent details fixed across the main directories." },
      { period: "Days 31–60", title: "Review system and local pages", body: "Your review request system goes live and we build or improve the location and service-area pages you need." },
      { period: "Days 61–90", title: "Posting rhythm and grid review", body: "A regular posting schedule, a rank grid compared with the baseline and the next priorities agreed with you." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "What a strong local profile",
    accent: "looks like.",
    intro: "Two client profiles, shown without names until we have written permission. Both show the signals that win local searches: a high rating, plenty of reviews and a clear next step.",
    items: [
      {
        ...denverShop,
        body: [
          "A 4.9-star rating from 384 Google reviews, with a \"Book Online\" button so customers can schedule straight from the map.",
          // TODO(owner): describe the work done for the Denver shop if you want it shown.
        ],
      },
      {
        ...scottsdalePractice,
        body: [
          "A 4.8-star rating from 36 Google reviews: for a specialist practice, detailed recent reviews build the trust new patients look for.",
          // TODO(owner): describe the work done for the Scottsdale practice if you want it shown.
        ],
      },
    ],
    closing: "Local rankings also feed AI answers. See [AI SEO & GEO Services](/ai-seo-services) and [SEO Services](/seo-services).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "If customers pick someone nearby,",
    accent: "this is for you.",
    intro: "Map visibility matters most when buyers choose based on distance and trust. A few typical examples:",
    items: [
      { icon: "pin", business: "A plumbing company", where: "Houston suburbs, service-area business", situation: "Shows up on the map only within a mile of the office, nowhere in the suburbs it actually serves.", goal: "Win \"plumber near me\" across its whole service area.", plan: "Service-area setup, suburb pages with real job photos and a review push after every completed call." },
      { icon: "profile", business: "A multi-location dental group", where: "3 offices, Chicagoland", situation: "Each office has a half-finished profile and one shared contact page on the website.", goal: "Each office ranking for \"dentist near me\" in its own neighborhood.", plan: "One optimized profile and one useful page per office, location schema and per-office reporting." },
      { icon: "mobile", business: "A mobile auto detailer", where: "Denver metro, no storefront", situation: "Worried that hiding the address means never ranking at all.", goal: "Get booked from Maps without a public address.", plan: "A compliant service-area profile, booking link on the profile and photo-rich posts from real jobs." },
      { icon: "shield", business: "A personal injury firm", where: "Tampa, FL", situation: "Ranks well downtown, invisible ten minutes away, with reviews spread across old listings.", goal: "Map visibility across the metro and more consultation calls.", plan: "Category tuning, citation consolidation, review requests after case milestones and grid tracking." },
    ],
  },
  midCta: {
    title: "See where you rank, street by street.",
    body: "Your free Google Business Profile audit includes a snapshot of your map rankings around your location and the three competitors beating you.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Local SEO for businesses",
    accent: "that serve their community.",
    intro: "Practices, firms, contractors and agents all live and die by the map. Here's how we approach each industry.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "Local SEO done",
    accent: "properly, and by the rules.",
    intro: "Our founder delivered 150+ client engagements as a freelance SEO before founding the agency. We bring that hands-on attention to your profile, and we never cut corners that could get it suspended.",
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
  guides: [guides.notShowingUp, guides.aiOverviews],
  relatedServices: ["/reputation-management", "/seo-services", "/ai-seo-services"],
  finalCta: {
    title: "Find out why you're",
    accent: "not on the map yet.",
    body: "We'll review your profile, reviews and citations against the businesses outranking you, and show you the fixes worth making first.",
    bullets: [
      "Profile completeness score and missing categories",
      "Map ranking snapshot around your location",
      "Citation errors and review gap vs. top competitors",
    ],
  },
};

export const localFactors: SectionHeading & { items: { title: string; body: string; control: string }[] } = {
  eyebrow: "How the Map Pack works",
  title: "Google picks the top three",
  accent: "using three factors.",
  intro: "Google has said publicly that local results are based mainly on relevance, distance and prominence. You can't move your building, but two of the three are yours to win.",
  items: [
    { title: "Relevance", body: "How well your profile and website match what the person searched: categories, services, descriptions and local pages.", control: "You control this" },
    { title: "Distance", body: "How far you are from the searcher or the location in their search. It's why rankings change from street to street.", control: "Fixed, but measurable" },
    { title: "Prominence", body: "How well known you are: reviews, ratings, citations, links and mentions across the web.", control: "You control this" },
  ],
};

export const localGrid: SectionHeading = {
  eyebrow: "See it street by street",
  title: "Rankings change every few blocks.",
  accent: "So we track a grid.",
  intro: "A single \"we rank #3\" number hides the truth. Grid tracking checks your map position from dozens of points around your business, so you can see exactly where you're visible and where the next customers are.",
};
