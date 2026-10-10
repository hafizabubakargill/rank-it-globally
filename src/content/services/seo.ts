import { gscClientA, gscClientB, guides } from "./shared";
import type { ServicePageContent } from "./types";

export const seoPage: ServicePageContent = {
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
  heroPanel: {
    label: "Search growth program",
    steps: ["Fix the site", "Match intent", "Build authority", "Track leads"],
    outcome: "More calls and booked jobs from organic search",
  },
  proofStrip: [
    { value: "5.92K clicks", label: "in 90 days for Client A" },
    { value: "10.3K clicks", label: "in 90 days for Client B" },
    { value: "Real data", label: "From Google Search Console" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "You know SEO matters.",
    accent: "It just isn't paying off.",
    intro:
      "Most business owners who come to us aren't new to SEO. They've tried it, paid for it or done it themselves, and they're still not getting the calls they expected. These are the four problems we hear most.",
    points: [
      {
        title: "\"We're stuck on page two for the searches that matter.\"",
        body: "You show up for your business name and a few odd phrases, but not for the services people actually search for in your area. Page two might as well be invisible, because very few people ever click that far.",
      },
      {
        title: "\"We get traffic, but the phone doesn't ring.\"",
        body: "Visitors arrive and leave without calling, booking or filling in a form. Often the traffic is for the wrong searches, or the pages don't make the next step obvious. Either way, traffic alone doesn't pay the bills.",
      },
      {
        title: "\"Our last agency sent rankings reports, not leads.\"",
        body: "Monthly PDFs full of keyword positions look busy, but they don't tell you how many customers came from Google. If no one can connect the work to enquiries, you can't tell whether it's worth paying for.",
      },
      {
        title: "\"I don't know what's actually broken.\"",
        body: "Slow pages, indexing errors, duplicate content and missing schema are invisible from the outside. Without a proper audit, you end up guessing, and guessing is an expensive way to do SEO.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Technical, content and links",
    accent: "in one plan.",
    intro:
      "Rankings come from several things working together: a site Google can crawl, pages that match what people search for, and enough authority to beat competitors. Every SEO plan covers all of it, with tracking so you can see the results in leads.",
    items: [
      {
        icon: "schema",
        title: "Technical audit and fixes",
        body: "We find and fix the problems that hold rankings back, including page speed, indexing errors, crawl issues and missing or broken schema markup.",
      },
      {
        icon: "strategy",
        title: "Keyword and page strategy",
        body: "We map the searches your customers use to the pages that should rank for them, so every important service has a page built to win it.",
      },
      {
        icon: "search",
        title: "On-page optimization",
        body: "We improve titles, headings, copy and page structure so each page clearly answers the search it targets and gives visitors a reason to get in touch.",
      },
      {
        icon: "content",
        title: "Ongoing content production",
        // TODO(owner): number of articles per month included in SEO plans.
        body: "We plan and write service pages, location pages and helpful articles that answer real customer questions and build topical authority over time.",
      },
      {
        icon: "citations",
        title: "Internal linking",
        body: "We connect related pages so authority flows to the pages that matter most and visitors can easily find the next thing they need.",
      },
      {
        icon: "reviews",
        title: "Link building and digital PR",
        body: "We earn links and mentions from relevant, credible websites through outreach, partnerships and useful content, never through link schemes.",
      },
      {
        icon: "analytics",
        title: "Tracking and monthly reporting",
        body: "We set up GA4 plus call and WhatsApp click tracking, then send a monthly report showing rankings, traffic, leads and the work we completed.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of SEO with us.",
    intro:
      "We start by measuring where you are and fixing what's broken, because new content won't rank on a site Google struggles to read. Then we build momentum month by month and review results against the baseline.",
    steps: [
      {
        period: "Days 1–30",
        title: "Audit, tracking and technical fixes",
        body: "We audit your site and competitors, set up call, form and WhatsApp tracking, and fix the technical issues with the biggest impact first.",
      },
      {
        period: "Days 31–60",
        title: "On-page work and first content",
        body: "We optimize your most important service pages and publish the first new content based on the keyword and page strategy.",
      },
      {
        period: "Days 61–90",
        title: "Links, cadence and first review",
        body: "We start link building, settle into a steady content cadence and walk you through a first results review: what moved, what didn't and what's next.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Two clients, side by side,",
    accent: "straight from Search Console.",
    intro:
      "These are real Google Search Console numbers for two unnamed clients over the same 90-day window, July 5 to October 3, 2026. No mock-ups, no projections: just the clicks and impressions Google recorded.",
    items: [
      {
        ...gscClientA,
        body: [
          "Client A earned 5.92K clicks from 1.17M impressions with an average position of 7.2, meaning many of its pages sit on the first page of Google.",
          // TODO(owner): describe the work done for Client A if you want it shown.
        ],
      },
      {
        ...gscClientB,
        body: [
          "Client B earned 10.3K clicks from 1.61M impressions with an average position of 8.1. We use the same Search Console data in our monthly reports, so you always see Google's own numbers.",
          // TODO(owner): describe the work done for Client B if you want it shown.
        ],
      },
    ],
    closing: "Both reports also track performance in Google's generative AI features, which our [AI SEO & GEO Services](/ai-seo-services) focus on.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "SEO for the businesses",
    accent: "we know well.",
    intro:
      "A law firm, a dental practice and a roofing company need very different keywords, pages and trust signals. We shape the plan around how customers in your industry search and decide.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "What makes our SEO",
    accent: "different.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency. We kept what clients valued most, direct access and honest reporting, and added an agency's ability to execute.",
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
    eyebrow: "Free Growth Audit",
    title: "See what's holding",
    accent: "your rankings back.",
    body: "We'll review your website, Google visibility and AI search presence, then walk you through the fixes that matter most. Free, with no obligation.",
  },
};
