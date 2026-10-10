import { publicProjects } from "@/content/publicPages";
import { guides } from "./shared";
import type { ServicePageContent } from "./types";

export const webDesignPage: ServicePageContent = {
  slug: "web-development",
  name: "Web Design & Development",
  serviceType: "Website design and development",
  theme: "web",
  title: "Web Design & Development Company in the USA | RIG",
  description:
    "Fast, SEO-ready websites designed for your industry and built to convert visitors into calls. WordPress, Shopify or custom. Get a free website review.",
  h1Lead: "Web Design &",
  h1Accent: "Development",
  heroPromise: "A website built to rank and to convert.",
  heroIntro:
    "Our web design and development service gives US small and mid-size businesses a fast, SEO-ready website designed for their industry and written to turn visitors into calls, bookings and quote requests. We handle strategy, design, copy and the build on WordPress, Shopify or custom code, and protect your rankings at launch.",
  ctaLabel: "Get My Free Website Review",
  heroPanel: {
    label: "Website build program",
    steps: ["Plan", "Design", "Write", "Build & launch"],
    outcome: "A site that brings in calls, bookings and quote requests",
  },
  proofStrip: [
    { value: `${publicProjects.length} projects`, label: "on our Case Studies page" },
    { value: "WordPress, Shopify & custom", label: "platforms we build on" },
    { value: "+35% quote requests", label: "for a local painting company" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your website should be",
    accent: "your hardest-working salesperson.",
    intro:
      "For most customers, your website is the first real impression of your business. If it looks dated, loads slowly or makes it hard to get in touch, they go back to Google and pick someone else. Here's what we hear from owners before a rebuild.",
    points: [
      {
        title: "\"Our site looks dated, and I think it's costing us trust.\"",
        body: "Customers judge credibility in a few seconds. An old design, stock photos and inconsistent branding make a strong business look smaller than it is, especially next to a competitor with a modern site.",
      },
      {
        title: "\"It's painfully slow on phones.\"",
        body: "Most of your visitors are on mobile. Heavy pages, oversized images and bloated plugins make them wait, and many leave before the page finishes loading. Speed also affects how Google ranks you.",
      },
      {
        title: "\"It doesn't actually bring in enquiries.\"",
        body: "The site exists, but the phone rarely rings because of it. Unclear offers, buried contact details and long forms quietly turn interested visitors away.",
      },
      {
        title: "\"I'm scared a redesign will wipe out our Google rankings.\"",
        body: "It's a real risk. Redesigns that change URLs without a redirect plan can lose years of search visibility overnight. A good rebuild protects what's already working.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Strategy, design, copy and build",
    accent: "under one roof.",
    intro:
      "A website that ranks and converts needs more than nice visuals. Every project includes the planning, writing and technical work that decide whether the site brings in business after launch.",
    items: [
      {
        icon: "strategy",
        title: "Strategy and sitemap",
        body: "We map your services, customers and the searches they use into a clear sitemap, so every important page has a purpose before design starts.",
      },
      {
        icon: "content",
        title: "Conversion-focused copy",
        body: "We write the words on your key pages in your customers' language, with clear offers, proof and calls to action. You review and approve everything.",
      },
      {
        icon: "mobile",
        title: "Development on WordPress, Shopify or custom",
        body: "We build on the platform that fits your business: WordPress for flexible service sites, Shopify for stores, or custom code when you need something specific.",
      },
      {
        icon: "schema",
        title: "SEO-ready build",
        body: "Clean structure, schema markup, fast loading and strong Core Web Vitals are part of the build, so your new site is ready to rank from day one.",
      },
      {
        icon: "shield",
        title: "Launch and migration with 301 redirects",
        body: "We map every old URL to its new home and set up permanent redirects, so the rankings and links you've earned carry over to the new site.",
      },
      {
        icon: "analytics",
        title: "Tracking from launch day",
        body: "We set up GA4 with call, form and WhatsApp click tracking before launch, so you can see from the first day which pages bring in enquiries.",
      },
    ],
    // TODO(owner): add an "optional care plan" deliverable if a care plan is offered; left out until confirmed.
    features: [
      {
        id: "ui-ux",
        title: "UI/UX design",
        paragraphs: [
          "Good design isn't decoration. It makes your offer easy to understand, makes the next step obvious and makes your business look as trustworthy as it is. Our UI/UX design work starts with how your customers think and decide, then turns that into layouts and interfaces that guide them toward getting in touch.",
          "We resolve structure before visual polish: page hierarchy, navigation and content order come first, so the design supports the message rather than competing with it. Then we build a consistent visual system that works on every screen size.",
        ],
        bullets: [
          "UX research: analytics, customer language, competitor patterns and journey friction turned into design priorities",
          "Wireframes and information architecture that settle page hierarchy and navigation before visual design",
          "High-fidelity, responsive interface design with clear hierarchy and complete interaction states",
          "Clickable prototypes for key journeys, so issues surface before development",
          "Mobile-first layouts with comfortable touch targets, short forms and the right content up front",
          "Reusable design systems and components that keep the site consistent as it grows",
        ],
      },
      {
        id: "landing-pages",
        title: "Landing pages",
        paragraphs: [
          "Sometimes one focused page does more than a whole website. We design and build landing pages for a single offer, service or audience, with one clear call to action and nothing that distracts from it.",
          "Each landing page uses the same SEO-ready, fast-loading build as our full sites, plus tracking so you know exactly how many enquiries it produces. When you want to improve a page that's already live, our [Conversion Rate Optimization](/cro-strategy) service tests changes against real data.",
        ],
        bullets: [
          "One offer, one audience and one clear next step per page",
          "Headlines written in your customers' own words",
          "Industry-specific proof placed where doubts usually appear",
          "Short, mobile-friendly forms and a WhatsApp option",
          "Built and tracked so changes can be A/B tested later",
        ],
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "From kickoff to launch",
    accent: "in about 8 weeks.",
    intro:
      "A standard business website follows three stages. You see and approve the structure before design, and the design before the build, so there are no surprises at the end.",
    steps: [
      {
        period: "Weeks 1–2",
        title: "Strategy and wireframes",
        body: "We agree on goals, pages and priorities, map your existing URLs and sketch wireframes for the key pages so the structure is settled early.",
      },
      {
        period: "Weeks 3–5",
        title: "Design and copy",
        body: "We design the look and feel, write the copy for your main pages and refine both with your feedback until they're right.",
      },
      {
        period: "Weeks 6–8",
        title: "Build, QA, launch and redirects",
        body: "We build the site, test it on real devices, check speed and tracking, then launch with the redirect plan in place.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Websites we've designed",
    accent: "and built.",
    intro:
      "A selection of live projects from our Case Studies page, across home services, dental, biotech, tech and finance, built on WordPress and custom code. Each one opens the live site in a new tab.",
    items: [],
    projectSlugs: ["van-isle-paint", "wilmette-family-dental", "genesis-biolabs", "chicago-tech", "simmons-capital", "cosmic-coco"],
    closing: "Need a store rather than a service site? See [E-commerce & Shopify Development](/ecommerce-development).",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Websites designed",
    accent: "for your industry.",
    intro:
      "A law firm site needs to build trust before a consultation. A home services site needs a phone number customers can tap in seconds. We design around how buyers in your industry decide.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "A website partner that",
    accent: "thinks about results.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency, so every site we build is planned with search and conversion in mind, not bolted on afterward.",
    rows: [
      { label: "SEO built in from day one", rig: "Structure, schema and speed included", agency: "Sometimes added after launch", freelancer: "Depends on skill set", diy: "Theme defaults only" },
      { label: "Conversion copy included", rig: "Written for your key pages", agency: "Often an extra cost", freelancer: "Usually you supply copy", diy: "You write it" },
      { label: "Industry-specific design", rig: "Designed around how your buyers decide", agency: "Varies", freelancer: "Varies", diy: "Generic templates" },
      { label: "Redirect plan to protect rankings", rig: "Every old URL mapped", agency: "Varies by agency", freelancer: "Sometimes skipped", diy: "Easy to miss" },
      // TODO(owner): replace this row with "You own the site" once site ownership terms are confirmed.
      { label: "Tracking set up before launch", rig: "Calls, forms and WhatsApp clicks", agency: "Often basic analytics only", freelancer: "Varies", diy: "Hard to set up yourself" },
    ],
  },
  faqIntro: "What business owners usually ask us before starting a new website.",
  faqs: [
    {
      question: "How much does a website cost?",
      answer:
        "It depends on scope: how many pages you need, which features and integrations, and whether it's WordPress, Shopify or a custom build. Rather than guess, we start with a free website review, then give you a clear, fixed quote based on what your business actually needs. There's no cost to find out.",
    },
    {
      question: "How long does a website take?",
      answer:
        "A standard business website typically takes 6 to 8 weeks from kickoff to launch: about two weeks for strategy and wireframes, three for design and copy, and three for the build, testing and launch. Larger sites or complex integrations take longer, and fast feedback on your side keeps things moving.",
    },
    {
      question: "Which platform is best for SEO?",
      answer:
        "WordPress, Shopify and custom builds can all rank well. What matters more is how the site is built: clean structure, fast loading, good content and proper schema. We recommend a platform based on your needs, such as how you'll update content, whether you sell online and which tools you already use.",
    },
    {
      question: "Will I lose my rankings in a redesign?",
      answer:
        "Not if the migration is done properly. Before launch we list every existing URL, map each one to its new page, keep or improve the content that ranks, and set up permanent 301 redirects. After launch we monitor Search Console for errors and fix anything that slips through quickly.",
    },
    {
      question: "Do you write the content?",
      answer:
        "Yes. Conversion-focused copy for your key pages is included. We learn how you talk to customers, what makes you different and what buyers worry about, then write pages that answer those questions and lead to a clear next step. You review and approve everything before it goes live.",
    },
    {
      // TODO(owner): replace with "Do I own the website?" and answer "Yes, you own your site and content" once site ownership terms are confirmed.
      question: "Can you redesign my existing site without starting over?",
      answer:
        "Often, yes. We review your current site first. If the platform and structure are sound, we can redesign templates, rewrite key pages and fix speed and SEO issues without a full rebuild. If the foundation would hold you back, we explain why and recommend the smallest change that solves the problem.",
    },
  ],
  guides: [guides.notShowingUp],
  relatedServices: ["/ecommerce-development", "/cro-strategy", "/seo-services"],
  finalCta: {
    eyebrow: "Free website review",
    title: "Find out what your website",
    accent: "is costing you.",
    body: "We'll review your design, speed, SEO and conversion path, and show you what to keep, what to fix and whether a rebuild is worth it.",
  },
};
