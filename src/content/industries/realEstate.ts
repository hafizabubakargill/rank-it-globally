import { guides } from "../services/shared";
import type { SectionHeading } from "../services/types";
import type { IndustryCore } from "./types";

export const realEstatePage: IndustryCore = {
  slug: "real-estate-marketing",
  path: "/industries/real-estate-marketing",
  name: "Real Estate Marketing",
  title: "Real Estate Agent Marketing | Local SEO & AI Search",
  description:
    "Marketing for real estate agents, teams and brokerages: neighborhood SEO, Google Business Profile and AI answer visibility, so clients find you before the portals.",
  h1Lead: "Real Estate Marketing",
  h1Accent: "for agents who want their own pipeline.",
  heroPromise: "Be the agent people find before they find a portal.",
  heroIntro:
    "Your referrals used to fill the calendar. Now buyers and sellers start online, and the portals sell those leads back to you. We help agents, team leads and brokerage owners rank for their neighborhoods on Google and in AI answers, so clients contact you directly.",
  ctaLabel: "Get My Free Agent Visibility Audit",
  ctaMicro: "We check how you show up for your neighborhoods on Google, Maps and AI answers, compared with the agents getting those clients.",
  sticky: "Tired of paying portals for your own market?",
  auditChips: ["Neighborhood rankings", "Google Business Profile", "Reviews", "AI answers"],
  problem: {
    eyebrow: "Sound familiar?",
    title: "You're renting leads",
    accent: "in a market you already know.",
    intro: "You know every street in your farm area. Online, a portal and three other agents stand between you and the people moving there.",
    points: [
      {
        quote: "I paid for a portal lead, and so did two other agents.",
        body: "Portal leads are often sold to several agents in the same area, or come with a referral fee taken from your commission at closing. Either way, the client was never yours to begin with.",
        fix: "Clients who find your own website, profile and reviews first.",
      },
      {
        quote: "Referrals used to be enough. They aren't anymore.",
        body: "Most buyers and sellers now search online before they talk to anyone, and existing-home sales in 2023 and 2024 were the lowest since the mid-1990s (NAR). Fewer deals means more agents competing for each one.",
        fix: "A steady stream of local searchers on top of your sphere.",
      },
      {
        quote: "Buyers ask me to justify my fee before we've seen a house.",
        body: "Since August 2024, NAR's settlement rules require a written buyer agreement before touring, and offers of compensation are no longer on the MLS. Buyers now compare agents before the first showing.",
        fix: "Pages and reviews that explain your value before the first call.",
      },
      {
        quote: "People ask ChatGPT who the best agent in town is.",
        body: "AI assistants and Google's AI Overviews answer \"who's a good realtor in [neighborhood]?\" with names pulled from reviews, profiles and local content. Most agents have none of that online.",
        fix: "Neighborhood guides and a profile AI tools can cite.",
      },
    ],
  },
  segments: {
    eyebrow: "By business model",
    title: "Solo agent, team or brokerage,",
    accent: "the gap is different.",
    intro: "What holds back a new solo agent isn't what holds back a 12-agent team. We start with your model and your market.",
    items: [
      { icon: "profile", name: "Solo agents", examples: "Building a personal brand", pain: "Your brokerage's website ranks, but you don't. Clients searching your name find a profile page shared with 80 other agents.", fix: "Your own site, Google profile and neighborhood pages." },
      { icon: "community", name: "Team leads", examples: "3–20 agents under one brand", pain: "You're paying for leads to keep agents busy, and margins shrink with every portal invoice.", fix: "Owned lead sources the whole team can work from." },
      { icon: "shield", name: "Independent brokerages", examples: "Competing with national franchises", pain: "Franchise brands have national recognition and big portals on their side. Your local knowledge doesn't show online.", fix: "Market-by-market pages that prove you know the area best." },
      { icon: "media", name: "Luxury specialists", examples: "High-end listings and clients", pain: "Luxury sellers research agents carefully and expect a polished presence. A generic template undercuts your listing presentation.", fix: "A premium site with listing and neighborhood content that matches your price point." },
      { icon: "pin", name: "Relocation agents", examples: "Corporate, military and out-of-state moves", pain: "Out-of-town buyers can't ask friends for a referral. They search and ask AI tools about neighborhoods they've never seen.", fix: "Relocation guides that answer their questions and lead to you." },
      { icon: "analytics", name: "New construction & investors", examples: "Builders, investors, 1031 buyers", pain: "These clients search by numbers and areas, not by agent name, and land on aggregator sites.", fix: "Area and market pages built around what they search for." },
    ],
  },
  included: {
    eyebrow: "What we do",
    title: "Everything that makes you",
    accent: "the local name online.",
    intro: "We focus on organic search, AI answers, reviews and your website. Leads you earn this way don't come with a referral fee.",
    items: [
      { icon: "pin", title: "Neighborhood and community pages", body: "Useful guides to the areas you serve: housing types, commutes, amenities and market notes. Never who \"should\" live there." },
      { icon: "profile", title: "Google Business Profile for agents", body: "A complete profile with your service areas, reviews and brokerage details. See [Local SEO & Google Business Profile](/local-seo-services)." },
      { icon: "reviews", title: "Client review system", body: "Review requests after every closing, and replies in your voice. See [Review & Reputation Management](/reputation-management)." },
      { icon: "ai", title: "AI answer visibility", body: "Structured FAQs, schema and consistent facts so AI tools can recommend you. See [AI SEO & GEO](/ai-seo-services)." },
      { icon: "mobile", title: "An agent website that converts", body: "Fast pages, clear contact options and a home valuation request form. See [Web Design & Development](/web-development)." },
      { icon: "content", title: "Buyer and seller guides", body: "Plain answers on buyer agreements, fees and the selling process, so clients arrive informed." },
    ],
  },
  rules: {
    eyebrow: "Compliance built in",
    title: "Fair Housing is a hard line,",
    accent: "not a style choice.",
    intro: "Real estate marketing has legal limits that don't apply to most businesses. Every page, and every audience we suggest, is checked against them.",
    items: [
      { title: "No words that signal who is welcome", body: "The Fair Housing Act bans ads that show a preference based on race, color, religion, sex, disability, familial status or national origin. We describe the home and the area, never the people." },
      { title: "No targeting that excludes protected groups", body: "Meta and Google already block age, gender and ZIP targeting for housing ads. HUD withdrew its 2024 digital ad guidance in 2025, but the Act itself still applies. We never suggest audiences that exclude protected groups." },
      { title: "Your brokerage named in every ad", body: "Most states require your brokerage's name in advertising, including websites and social posts. New York, Texas and Florida are examples. We add it everywhere it's required." },
      { title: "Accurate buyer-agent fee information", body: "Since August 17, 2024, offers of buyer-agent compensation can't appear on the MLS, and buyers sign a written agreement before touring. Any page about fees reflects your agreements and your state's rules." },
    ],
    note: "We're not lawyers. Your broker and state commission have the final word on advertising rules, and you approve every page before it's published.",
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "with us.",
    intro: "Your profile and reviews come first, because they're what clients check before calling.",
    steps: [
      { period: "Days 1–30", title: "Audit and profile", body: "Neighborhood rankings checked, Google Business Profile set up or fixed, brokerage disclosures confirmed." },
      { period: "Days 31–60", title: "Neighborhood pages and reviews", body: "First neighborhood guides published, review requests going out after every closing." },
      { period: "Days 61–90", title: "AI answers and reporting", body: "FAQ and schema work for AI tools, buyer and seller guides, and your first report on enquiries by source." },
    ],
  },
  plan: {
    eyebrow: "One plan",
    title: "One plan for owning",
    accent: "your market online.",
    intro: "No menu of add-ons. One plan, shaped by your audit, your farm areas and how many agents it serves.",
    name: "Neighborhood Authority Plan",
    summary: "The local search, review and AI visibility work that makes you the agent people find first in your area.",
    includes: [
      "Neighborhood and community pages, checked for Fair Housing",
      "Google Business Profile management",
      "Review requests after every closing, with replies",
      "AI answer visibility and agent schema",
      "Monthly report: enquiries, valuation requests and rankings",
    ],
    note: "We quote after your free audit, based on your areas, team size and competition. No published rate card.",
  },
  midCta: {
    title: "See which agents own your neighborhoods online.",
    body: "Our free audit shows where you rank for your farm areas and what the agents beating you are doing.",
  },
  faqIntro: "What agents, team leads and brokers ask us before they move budget away from portals.",
  faqs: [
    {
      question: "How is this different from buying Zillow or Realtor.com leads?",
      answer:
        "Portal leads are usually shared with other agents or cost a referral fee at closing. With local SEO, buyers and sellers find your own website, Google profile and reviews, so the enquiry comes to you alone and there's no fee per lead.",
    },
    {
      question: "How long does real estate SEO take to work?",
      answer:
        "Google Business Profile and review improvements can help within weeks. Neighborhood pages usually take a few months to rank, depending on how competitive your market is. We set realistic expectations during the free audit.",
    },
    {
      question: "How do you keep marketing compliant with the Fair Housing Act?",
      answer:
        "We describe homes, neighborhoods and amenities, never the kind of people who should live there. We don't suggest audience targeting that excludes protected groups, and every page includes the brokerage disclosure your state requires. You and your broker approve everything before it goes live.",
    },
    {
      question: "Can you work with an agent at a large brokerage?",
      answer:
        "Yes, as long as your brokerage allows agents to run their own website and marketing. We follow your brokerage's brand and disclosure rules. Brokerage owners can also hire us for the whole office.",
    },
    {
      question: "How does the NAR settlement affect my marketing?",
      answer:
        "Since August 2024, buyers sign a written agreement before touring, and compensation offers no longer appear on the MLS. Buyers compare agents earlier, so clear pages about your services and fees, plus strong reviews, matter more than before.",
    },
    {
      question: "Do you run Facebook or Google ads for listings?",
      answer:
        "No. We focus on organic search, AI answers, reviews and your website. These build a pipeline you own instead of paying for every click.",
    },
  ],
  guides: [guides.notShowingUp, guides.aiOverviews],
  relatedServices: ["/local-seo-services", "/reputation-management", "/web-development"],
  auditScope: ["Local SEO / Google Business Profile"],
  finalCta: {
    title: "Get a clear picture of",
    accent: "where you stand locally.",
    body: "Tell us your farm areas. We'll show you where you rank, where portals and competitors beat you and what to fix first.",
    bullets: [
      "Rankings for your neighborhoods on Google and Maps",
      "Reviews and Google Business Profile vs. top local agents",
      "A first plan for leads you don't share",
    ],
  },
  hub: {
    description: "Neighborhood SEO, Google Business Profile and AI answers that bring clients to you, not to the portals.",
    audiences: ["Real estate agents", "Team leads", "Brokerage owners"],
  },
};

export const buyerJourney: SectionHeading & { steps: { title: string; body: string }[] } = {
  eyebrow: "After the NAR settlement",
  title: "Buyers now choose an agent",
  accent: "before the first showing.",
  intro: "A written buyer agreement comes before the first tour, so the research that used to happen after a showing now happens before it. This is where clients decide.",
  steps: [
    { title: "Search the area", body: "\"Living in Maple Heights\", \"best neighborhoods near downtown\"" },
    { title: "Ask an AI tool", body: "\"Who's a good buyer's agent in Maple Heights?\"" },
    { title: "Compare agents", body: "Reviews, Google profiles and your website, side by side" },
    { title: "Read the fine print", body: "\"How is a buyer's agent paid?\", \"What does a buyer agreement say?\"" },
    { title: "Sign and tour", body: "They contact the agent who answered those questions first" },
  ],
};

export const fairHousingRedline = {
  before: "Perfect for young families! Ideal for a Christian couple.",
  after: "3 bedrooms, fenced backyard, 0.4 miles to Maple Park and the library.",
};
