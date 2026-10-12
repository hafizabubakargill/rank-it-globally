import { gscClientA, gscClientB, guides } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const seoPage: ServiceCore = {
  slug: "seo-services",
  name: "SEO Services",
  serviceType: "Search engine optimization",
  theme: "seo",
  title: "SEO Services in the USA | Rank It Globally",
  description:
    "Technical, on-page and content SEO for US small businesses, measured in calls and booked jobs, not vanity traffic. Free Growth Audit.",
  h1Lead: "SEO",
  h1Accent: "Services",
  heroPromise: "More calls from Google, tracked to the lead.",
  heroIntro:
    "Our SEO services help US small and mid-size businesses rank higher on Google for the searches that bring in paying customers. We fix the technical problems holding your site back, improve your pages and content, and build authority, then track every call, form and WhatsApp message so you can see what SEO actually earns.",
  ctaLabel: "Get My Free Growth Audit",
  ctaMicro: "A real person reviews your site, rankings and AI visibility, then walks you through the fixes on a call.",
  sticky: "Stuck on page two of Google?",
  proofStrip: [
    { value: "5.92K clicks", label: "in 90 days for Client A" },
    { value: "10.3K clicks", label: "in 90 days for Client B" },
    { value: "Real data", label: "From Google Search Console" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "You've tried SEO.",
    accent: "The phone still isn't ringing.",
    intro: "Most owners who call us have tried SEO already. These are the four stories we hear most.",
    points: [
      {
        quote: "We're stuck on page two for the searches that actually matter.",
        body: "You rank for your name, not \"emergency plumber near me\". Page two is invisible.",
        fix: "We map every money keyword to the page that should win it.",
      },
      {
        quote: "We get traffic. We don't get leads.",
        body: "Visitors arrive and leave. Often they came for the wrong search, or the page buries the phone number under three scrolls of fluff.",
        fix: "We target buyer-intent searches and make the next step obvious.",
      },
      {
        quote: "Our last agency sent rankings PDFs, not customers.",
        body: "Green arrows look busy but don't show how many jobs came from Google.",
        fix: "Every report ties back to calls, forms and booked jobs.",
      },
      {
        quote: "Honestly? I don't know what's broken.",
        body: "Slow pages, indexing errors and missing schema are invisible from outside.",
        fix: "A technical audit shows exactly what's holding you back, in plain English.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Technical, content and links",
    accent: "in one plan.",
    intro: "Rankings come from three things working together: a site Google can crawl, pages that match what people search, and enough authority to beat competitors. Every plan covers all three, with tracking so you see results in leads.",
    items: [
      { icon: "schema", title: "Technical audit and fixes", body: "Speed, Core Web Vitals, indexing, crawl and schema issues fixed by impact." },
      { icon: "strategy", title: "Keyword and page strategy", body: "Customer searches mapped to the pages that should win them." },
      { icon: "search", title: "On-page optimization", body: "Titles, headings and copy tuned to search intent and built to drive calls." },
      // TODO(owner): number of articles per month included in SEO plans.
      { icon: "content", title: "Ongoing content production", body: "Service, location and helpful pages that answer real customer questions." },
      { icon: "citations", title: "Internal linking", body: "Authority routed to the pages that make money." },
      { icon: "reviews", title: "Link building and digital PR", body: "Links earned from relevant, credible sites. Never link schemes." },
      { icon: "analytics", title: "Tracking and monthly reporting", body: "GA4, call and WhatsApp tracking, plus a monthly report on leads and work done." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of SEO with us.",
    intro: "Foundation first, then momentum month by month.",
    steps: [
      { period: "Days 1–30", title: "Audit, tracking and fixes", body: "Site and competitor audit, call, form and WhatsApp tracking, and the highest-impact technical fixes." },
      { period: "Days 31–60", title: "On-page work and first content", body: "Your most important service pages optimized and the first new content published from the keyword map." },
      { period: "Days 61–90", title: "Links and first review", body: "Link building starts, content settles into a steady cadence, and we walk you through what moved and what's next." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Two clients, side by side,",
    accent: "straight from Search Console.",
    intro: "Real Google Search Console numbers for two unnamed clients over the same 90 days, July 5 to October 3, 2026. No projections, no mock-ups.",
    items: [
      {
        ...gscClientA,
        body: [
          "5.92K clicks from 1.17M impressions with an average position of 7.2, meaning many of its pages sit on page one.",
          // TODO(owner): describe the work done for Client A if you want it shown.
        ],
      },
      {
        ...gscClientB,
        body: [
          "10.3K clicks from 1.61M impressions with an average position of 8.1. Our monthly reports use the same Search Console data, so you always see Google's own numbers.",
          // TODO(owner): describe the work done for Client B if you want it shown.
        ],
      },
    ],
    closing: "Both reports also track Google's generative AI features, the focus of our [AI SEO & GEO Services](/ai-seo-services).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "Real businesses,",
    accent: "real search problems.",
    intro: "If customers search Google before calling you, SEO should be a top lead source. Typical examples:",
    items: [
      {
        icon: "pin",
        business: "An HVAC company",
        where: "Atlanta metro, 12 trucks",
        situation: "Pays for marketplace leads; ranks on page two for \"AC repair near me\".",
        goal: "Own the searches that bring summer repair calls.",
        plan: "Service and city page structure, a speed overhaul and call tracking so every booked job is counted.",
      },
      {
        icon: "shield",
        business: "A family law firm",
        where: "Charlotte, NC",
        situation: "Lots of blog posts, few consultations, thin practice-area pages.",
        goal: "More qualified consultation requests for divorce and custody cases.",
        plan: "Consolidate overlapping content, rebuild practice-area pages around client questions and add attorney trust signals.",
      },
      {
        icon: "profile",
        business: "A med spa",
        where: "Scottsdale, AZ",
        situation: "Pretty page-builder site; treatment pages are slow and poorly indexed.",
        goal: "Rank for treatment searches like \"Botox near me\" and fill the booking calendar.",
        plan: "Technical fixes, one optimized page per treatment and FAQ content written within medical advertising rules.",
      },
      {
        icon: "strategy",
        business: "A B2B manufacturer",
        where: "Ohio, ships nationwide",
        situation: "Engineers search by part and spec; the site only ranks for its name.",
        goal: "Show up for product and specification searches that lead to RFQs.",
        plan: "Product category architecture, spec-rich pages with schema and links from industry associations.",
      },
    ],
  },
  midCta: {
    title: "Want to know exactly why you're not ranking?",
    body: "Speed, indexing, on-page SEO and AI readiness, reviewed by a real person.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "SEO for the businesses",
    accent: "we know well.",
    intro: "A law firm, a dental practice and a roofer need different keywords, pages and trust signals. We shape the plan around how your customers search and decide.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "What makes our SEO",
    accent: "different.",
    intro: "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency: direct access and honest reporting, with an agency's ability to execute.",
    rows: [
      { label: "Reporting tied to calls and leads", rig: "Calls, forms and WhatsApp tracked", agency: "Often rankings-only reports", freelancer: "Varies", diy: "Hard to set up yourself" },
      { label: "Technical + content + links in one plan", rig: "All three included", agency: "Often split into add-ons", freelancer: "Usually strongest in one area", diy: "Time-consuming to cover all three" },
      { label: "AI search (GEO) included in strategy", rig: "Built into the plan", agency: "Often a separate package", freelancer: "Varies", diy: "Still a moving target" },
      { label: "Direct access to the person doing the work", rig: "Yes, no account-manager layer", agency: "Usually through an account manager", freelancer: "Yes", diy: "You are the person" },
      { label: "Transparent monthly reporting", rig: "Work completed plus results", agency: "Varies by agency", freelancer: "Varies", diy: "Up to you" },
    ],
  },
  faqIntro: "Honest answers to the questions business owners ask us before they start SEO.",
  faqs: [
    {
      question: "How long does SEO take to work?",
      answer:
        "Most businesses see meaningful movement in three to six months. Technical fixes and on-page improvements can help sooner, while competitive keywords and markets take longer. The timeline depends on your starting point, your competitors and how quickly changes can go live. We show progress monthly so you're never left wondering.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "It depends on how competitive your market is and how much work your site needs. A local business in a smaller city needs a very different plan from a multi-location company in a major metro. Our guide on [how much SEO actually costs](/blog/how-much-does-seo-cost) explains the factors, and your free Growth Audit gives you a clear scope.",
    },
    {
      // TODO(owner): replace this question with "Do you require a long-term contract?" once contract terms are confirmed. The homepage FAQ already says monthly SEO runs month to month with 30 days' notice.
      question: "What do you need from me to get started?",
      answer:
        "Access to your website, Google Search Console and Google Analytics if you have them, plus a short call about your services, ideal customers and service area. If you don't have tracking set up yet, we handle that in the first month. After that, we just need quick approvals on content and a monthly check-in.",
    },
    {
      question: "What do you report on?",
      answer:
        "Every month you get rankings for your target searches, organic traffic, leads and calls from organic search, conversions, and a plain-English list of the work we completed. We focus on enquiries because that's what tells you whether SEO is worth it. Rankings and traffic are there to explain why the lead numbers moved.",
    },
    {
      question: "Do you work with my industry?",
      answer:
        "We work with US service businesses and online stores, especially [law firms](/industries/law-firm-marketing), [dental and medical practices](/industries/dental-medical-marketing), [home services](/industries/home-services-marketing), [real estate](/industries/real-estate-marketing), [e-commerce](/industries/ecommerce-marketing) and [tech startups](/industries/tech-startup-marketing). If your business is outside these industries, the free audit will show honestly whether we're the right fit before you commit to anything.",
    },
    {
      question: "What's the difference between SEO and AI SEO?",
      answer:
        "SEO focuses on ranking your pages in Google's search results. AI SEO, also called GEO, focuses on getting your business named in AI answers from tools like ChatGPT and Google AI Overviews. They overlap, and our SEO plans account for both. Learn more on our [AI SEO & GEO Services](/ai-seo-services) page.",
    },
  ],
  guides: [guides.seoCost, guides.notShowingUp, guides.aiOverviews],
  relatedServices: ["/ai-seo-services", "/local-seo-services", "/cro-strategy"],
  finalCta: {
    title: "See what's holding",
    accent: "your rankings back.",
    body: "We'll review your site, Google visibility and AI presence, then walk you through the key fixes.",
    bullets: [
      "Speed, indexing and technical health check",
      "Your money keywords vs. the competitors outranking you",
      "AI search readiness and a prioritized fix list",
    ],
  },
};

// Page-specific sections.
export const seoFunnel: SectionHeading & { stages: { value: string; label: string; note: string }[] } = {
  eyebrow: "How SEO turns into revenue",
  title: "Impressions are nice.",
  accent: "Calls pay the bills.",
  intro: "Search works like a funnel: people see you, some click, some get in touch. Here it is with Client B's real Search Console numbers, plus the step most agencies never measure.",
  stages: [
    { value: "1.61M", label: "Impressions", note: "Times Client B appeared in Google results in 90 days" },
    { value: "10.3K", label: "Clicks", note: "People who chose Client B's result and visited" },
    { value: "Tracked", label: "Calls, forms & WhatsApp", note: "The step we measure for every client, because it's the one that pays" },
  ],
};

export const seoPipeline: SectionHeading & { stages: { title: string; question: string; breaks: string }[] } = {
  eyebrow: "SEO 101, in 60 seconds",
  title: "Before Google ranks you,",
  accent: "three things must happen.",
  intro: "Ranking isn't magic. Google has to find your pages, understand what they're about and trust them more than the alternatives. When rankings stall, one of these is usually broken.",
  stages: [
    { title: "Crawl", question: "Can Google find and load your pages?", breaks: "Slow hosting, blocked pages, broken links, missing sitemap" },
    { title: "Understand", question: "Is it clear what each page is about?", breaks: "Vague headings, duplicate pages, no schema, thin service copy" },
    { title: "Trust", question: "Why rank you over a competitor?", breaks: "Few quality links, no reviews, no expertise signals" },
  ],
};
