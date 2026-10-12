import { publicProjects } from "@/content/publicPages";
import { guides } from "./shared";
import type { FeatureBlock, SectionHeading, ServiceCore } from "./types";

export const webDesignPage: ServiceCore = {
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
  ctaMicro: "We review your design, speed, SEO and conversion path, and tell you honestly whether you need a rebuild.",
  sticky: "Is your website costing you customers?",
  proofStrip: [
    { value: `${publicProjects.length} projects`, label: "on our Case Studies page" },
    { value: "WordPress, Shopify & custom", label: "platforms we build on" },
    { value: "+35% quote requests", label: "for a local painting company" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your website should be",
    accent: "your hardest-working salesperson.",
    intro: "For most customers your website is the first real impression of your business. If it looks dated, loads slowly or hides the phone number, they hit back and pick someone else.",
    points: [
      { quote: "Our site looks like it's from 2015.", body: "Stock photos and tired design make a strong business look small.", fix: "A modern design built around how your buyers decide." },
      { quote: "It takes forever to load on a phone.", body: "Heavy images and bloated plugins make mobile visitors wait, and leave.", fix: "Fast, lean builds that pass Core Web Vitals." },
      { quote: "It's basically an online brochure.", body: "Vague offers, buried contact details and long forms turn visitors away.", fix: "Conversion-focused copy and a clear next step on every page." },
      { quote: "I'm scared a redesign will wipe out our Google rankings.", body: "It's a real risk: redesigns that change URLs without a plan can lose years of search traffic overnight.", fix: "Every old URL mapped and 301-redirected before launch." },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Strategy, design, copy and build",
    accent: "under one roof.",
    intro: "A site that ranks and converts needs more than nice visuals. Every project includes the planning, writing and technical work that decide whether it brings in business after launch.",
    items: [
      { icon: "strategy", title: "Strategy and sitemap", body: "A sitemap where every page has a job." },
      { icon: "content", title: "Conversion-focused copy", body: "Key pages written in your customers' language. You approve everything." },
      { icon: "mobile", title: "WordPress, Shopify or custom", body: "WordPress for service sites, Shopify for stores, custom when needed." },
      { icon: "schema", title: "SEO-ready build", body: "Clean structure, schema and strong Core Web Vitals from day one." },
      { icon: "shield", title: "Launch and migration with 301 redirects", body: "Every old URL redirected so rankings carry over." },
      { icon: "analytics", title: "Tracking from launch day", body: "GA4 plus call, form and WhatsApp tracking from launch." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "From kickoff to launch",
    accent: "in about 8 weeks.",
    intro: "You approve structure before design and design before build.",
    steps: [
      { period: "Weeks 1–2", title: "Strategy and wireframes", body: "Goals, pages and priorities agreed, existing URLs mapped and wireframes sketched for key pages." },
      { period: "Weeks 3–5", title: "Design and copy", body: "The look and feel designed, copy written for your main pages and both refined with your feedback." },
      { period: "Weeks 6–8", title: "Build, QA, launch and redirects", body: "The site built, tested on real devices, checked for speed and tracking, then launched with redirects in place." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Websites we've designed",
    accent: "and built.",
    intro: "Live projects from our Case Studies page across home services, dental, biotech, tech and finance, on WordPress and custom code. Each opens the live site in a new tab.",
    items: [],
    closing: "Need a store rather than a service site? See [E-commerce & Shopify Development](/ecommerce-development).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "Businesses that have outgrown",
    accent: "their website.",
    intro: "The business has grown; the website hasn't. Typical examples:",
    items: [
      { icon: "profile", business: "An orthodontic practice", where: "San Diego, CA", situation: "A 2016 template, no online booking, identical treatment pages.", goal: "A modern site that books consultations on mobile.", plan: "Treatment-by-treatment page structure, booking built into every page and a speed-first build." },
      { icon: "pin", business: "A remodeling contractor", where: "Nashville, TN", situation: "Great photos buried in a slow gallery; a 14-field quote form.", goal: "Turn portfolio visitors into quote requests.", plan: "Project pages by service and neighborhood, a 4-field quote form and WhatsApp as a second option." },
      { icon: "strategy", business: "A financial advisory firm", where: "Boston, MA", situation: "Trusted firm, generic site; prospects can't see what's different.", goal: "Credibility at first glance and more discovery calls.", plan: "Positioning-led copy, advisor bios with credentials, clear fee explanations and a calm, premium design." },
      { icon: "mobile", business: "A SaaS startup", where: "Austin, TX", situation: "A weekend-built site; demo requests stall at pricing.", goal: "A site that explains the product and converts trials.", plan: "Message testing, product-led page design, comparison pages and a custom build with clean tracking." },
    ],
  },
  midCta: {
    title: "Not sure if you need a redesign or just a tune-up?",
    body: "Find out what to keep, what to fix and whether a rebuild is worth it.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Websites designed",
    accent: "for your industry.",
    intro: "A law firm site builds trust before a consultation. A home services site needs a phone number customers can tap in seconds. We design around how your buyers decide.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "A website partner that",
    accent: "thinks about results.",
    intro: "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency, so search and conversion are planned in from the start.",
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
  guides: [guides.notShowingUp, guides.aiOverviews],
  relatedServices: ["/ecommerce-development", "/cro-strategy", "/seo-services"],
  finalCta: {
    title: "Find out what your website",
    accent: "is costing you.",
    body: "We'll review design, speed, SEO and conversion, and tell you what to keep, fix or rebuild.",
    bullets: [
      "First-impression and mobile usability review",
      "Speed and Core Web Vitals check",
      "Keep / fix / rebuild recommendation with a rough scope",
    ],
  },
};

// TODO(owner): add an "optional care plan" deliverable if a care plan is offered; left out until confirmed.
export const webFeatures: FeatureBlock[] = [
  {
    id: "ui-ux",
    title: "UI/UX design",
    paragraphs: [
      "Good design makes your offer easy to understand and your business look as trustworthy as it is. Our UI/UX design starts with how your customers think and decide, then turns that into layouts that guide them toward getting in touch.",
      "We settle structure before visual polish: hierarchy, navigation and content order first, then a consistent visual system that works on every screen.",
    ],
    bullets: [
      "UX research: analytics, customer language and journey friction",
      "Wireframes and information architecture",
      "Responsive, high-fidelity interface design",
      "Clickable prototypes for key journeys",
      "Mobile-first layouts with short forms",
      "Reusable design systems and components",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing pages",
    paragraphs: [
      "Sometimes one focused page beats a whole website. We build landing pages for a single offer, service or audience, with one clear call to action and nothing that distracts from it.",
      "Each one uses the same fast, SEO-ready build as our full sites, with tracking. To improve a page that's already live, our [Conversion Rate Optimization](/cro-strategy) service tests changes against real data.",
    ],
    bullets: [
      "One offer, one audience, one next step",
      "Headlines in your customers' own words",
      "Industry-specific proof where doubts appear",
      "Short mobile forms plus a WhatsApp option",
    ],
  },
];

export const webAnatomy: SectionHeading & { spots: { title: string; body: string }[] } = {
  eyebrow: "The 5-second test",
  title: "Visitors decide in seconds.",
  accent: "Here's what they look for.",
  intro: "Before anyone reads a paragraph, they scan for five things. If any is missing, they hit back. Every page we design is built around passing this test.",
  spots: [
    { title: "What you do, for whom", body: "A headline that says it plainly, in the customer's words, not a slogan." },
    { title: "Why trust you", body: "Reviews, results, credentials or logos placed right next to the claim." },
    { title: "What to do next", body: "One clear action: call, book or request a quote, visible without scrolling." },
    { title: "It works on my phone", body: "Thumb-friendly buttons, readable text and tap-to-call." },
    { title: "It loads fast", body: "Pages that appear almost instantly, so nobody gives up waiting." },
  ],
};

export const webVitals: SectionHeading & { metrics: { name: string; label: string; good: string }[] } = {
  eyebrow: "Built to rank from day one",
  title: "Fast pages and safe launches",
  accent: "aren't optional.",
  intro: "Google measures real-world speed with Core Web Vitals and publishes what \"good\" looks like. We build to those targets, and we protect your existing rankings with a redirect map at launch.",
  metrics: [
    { name: "LCP", label: "Largest Contentful Paint: how fast the main content appears", good: "2.5s or less" },
    { name: "INP", label: "Interaction to Next Paint: how quickly the page responds to taps", good: "200ms or less" },
    { name: "CLS", label: "Cumulative Layout Shift: how much the page jumps while loading", good: "0.1 or less" },
  ],
};
