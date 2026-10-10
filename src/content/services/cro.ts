import { guides, shopifyLaunch } from "./shared";
import type { ServicePageContent } from "./types";

export const croPage: ServicePageContent = {
  slug: "cro-strategy",
  name: "Conversion Rate Optimization (CRO)",
  serviceType: "Conversion rate optimization",
  theme: "cro",
  title: "CRO Services: Turn Website Traffic Into Booked Calls",
  description:
    "Conversion rate optimization for service businesses and stores: tracking, heatmaps, funnel audits, copy and A/B tests that turn visitors into leads.",
  h1Lead: "Conversion Rate Optimization",
  h1Accent: "(CRO) Services",
  heroPromise: "More leads from the traffic you already have.",
  heroIntro:
    "Conversion rate optimization (CRO) helps US service businesses and online stores turn more of their existing website visitors into calls, booked appointments, leads and orders. We track where visitors drop off, find out why, then rewrite, restructure and test your key pages so the same traffic produces more business.",
  ctaLabel: "Get My Free Landing Page Teardown",
  heroPanel: {
    label: "Conversion program",
    steps: ["Track", "Find leaks", "Fix", "Test"],
    outcome: "More calls, bookings and orders from the same traffic",
  },
  proofStrip: [
    { value: "12.26%", label: "conversion rate on a Shopify launch" },
    { value: "626 orders", label: "in that launch weekend" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "People visit your site.",
    accent: "Then they leave.",
    intro:
      "Getting visitors is only half the job. If your pages don't convince them to take the next step, every visitor you paid or worked for is wasted. These are the four problems CRO fixes.",
    points: [
      {
        title: "\"Visitors leave without calling or booking.\"",
        body: "Your analytics show people arriving, but the phone stays quiet and the booking calendar stays empty. Somewhere between landing and contacting you, something stops them.",
      },
      {
        title: "\"I have no idea where people drop off.\"",
        body: "Is it the homepage, the service page, the pricing section or the form? Without proper tracking, heatmaps and recordings, every change is a guess.",
      },
      {
        title: "\"Our forms are long and our calls to action are vague.\"",
        body: "Ten-field forms, \"Submit\" buttons and five competing links per page all add friction. Small hurdles add up, and visitors who were ready to talk quietly give up.",
      },
      {
        title: "\"We pay for traffic that doesn't convert.\"",
        body: "Whether it's ad spend, SEO or social posts, getting people to your site costs money. If the pages don't convert, you're paying for visits that never become customers.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Tracking, fixes and testing",
    accent: "in one program.",
    intro:
      "CRO runs as a loop: measure what's happening, fix the biggest problems, test the changes and repeat. Every CRO engagement includes each part of that loop.",
    items: [
      {
        icon: "analytics",
        title: "GA4 events plus call and WhatsApp tracking",
        body: "We set up GA4 events for forms, bookings and purchases, plus call and WhatsApp click tracking, so every important action is counted.",
      },
      {
        icon: "media",
        title: "Heatmaps and session recordings",
        body: "We watch how real visitors scroll, click and hesitate on your key pages to see where attention goes and where it drops away.",
      },
      {
        icon: "strategy",
        title: "Funnel audit",
        body: "We map each step from landing to enquiry or purchase and measure where visitors drop off, so we know which fixes will matter most.",
      },
      {
        icon: "content",
        title: "Offer and copy rewrites",
        body: "We rewrite headlines, offers and calls to action in your customers' own language, so the value of contacting you is obvious at a glance.",
      },
      {
        icon: "cro",
        title: "Page restructuring",
        body: "We reorder sections, surface proof where doubts appear and remove distractions, so each page leads toward one clear next step.",
      },
      {
        icon: "search",
        title: "A/B tests",
        body: "When traffic allows, we test changes against the current version, so decisions are based on results rather than opinions.",
      },
      {
        icon: "community",
        title: "Form and WhatsApp flow optimization",
        body: "We shorten forms, clarify buttons and make WhatsApp and booking options easy to reach on mobile, cutting the friction at the final step.",
      },
      {
        icon: "profile",
        title: "Monthly test report",
        body: "Each month you see what we changed, what we tested, what won and how many more leads or orders it produced.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of CRO.",
    intro:
      "We never change pages before we can measure them. Tracking comes first, then the most obvious fixes, then structured tests on the changes that need proof.",
    steps: [
      {
        period: "Days 1–30",
        title: "Tracking and funnel audit",
        body: "We set up or repair tracking, add heatmaps and recordings, and audit your funnel to find the biggest leaks.",
      },
      {
        period: "Days 31–60",
        title: "First fixes and copy changes",
        body: "We ship the clear wins first: rewritten headlines and offers, simpler forms, better calls to action and restructured key pages.",
      },
      {
        period: "Days 61–90",
        title: "A/B tests and report",
        body: "We run A/B tests on the changes that need proof and deliver a report on what worked, what didn't and what to test next.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "A 12.26% conversion rate",
    accent: "on a launch weekend.",
    intro:
      "Conversion is where everything comes together: the offer, the page and the path to buy. Here's a real result from one unnamed client, alongside the checklist we apply to every page we work on.",
    items: [
      {
        ...shopifyLaunch,
        title: "12.26% conversion rate on a Shopify launch",
        body: [
          "During one launch weekend, this client's Shopify store converted 12.26% of sessions into orders, producing 626 orders and $253K in sales.",
          "The numbers are exactly as recorded in the Shopify dashboard, with no projections or rounding up.",
          // TODO(owner): describe the CRO work behind this result only if it's documented in a case study.
        ],
      },
    ],
    checklist: {
      title: "The checklist we use on every page",
      intro: "Before we test anything, every page we touch has to pass four basic checks. They sound simple, but most underperforming pages fail at least one.",
      items: [
        { title: "One clear offer", body: "Each page makes one specific offer and asks for one action, instead of several competing ones." },
        { title: "The customer's own language in the headline", body: "Headlines use the words customers actually use to describe their problem, taken from reviews, calls and searches." },
        { title: "Industry-specific proof", body: "Reviews, results and credentials relevant to the reader's industry appear right where doubts usually come up." },
        { title: "A low-friction first step", body: "The first step is easy: a short form, a quick call or a WhatsApp message, never a long questionnaire." },
      ],
    },
    closing: "CRO is often paired with a rebuild or a store launch. See [Web Design & Development](/web-development) and [E-commerce & Shopify Development](/ecommerce-development).",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Conversion work for",
    accent: "leads, bookings and orders.",
    intro:
      "A booked consultation, a quote request and a checkout are different conversions with different obstacles. We tailor the audit and the tests to what a conversion means in your industry.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "CRO grounded in data,",
    accent: "not opinions.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before founding the agency. We bring that attention to detail to your funnel, and we report on leads and orders, not just clicks.",
    rows: [
      { label: "Tracking set up before changes", rig: "Always first", agency: "Varies", freelancer: "Sometimes skipped", diy: "Often missing" },
      { label: "Fixes based on data, not opinions", rig: "Heatmaps, recordings and funnel data", agency: "Varies by agency", freelancer: "Varies", diy: "Gut feeling" },
      { label: "Copy + design + testing in one", rig: "All included", agency: "Often split across teams", freelancer: "Usually one skill", diy: "Hard to do all three" },
      { label: "Works with your SEO", rig: "Planned alongside SEO", agency: "Often separate teams", freelancer: "Varies", diy: "Easy to undo SEO by accident" },
      { label: "Clear monthly test reporting", rig: "Changes, tests and results", agency: "Varies", freelancer: "Varies", diy: "No reporting system" },
    ],
  },
  faqIntro: "Common questions about conversion rate optimization and how it works with your other marketing.",
  faqs: [
    {
      question: "How much traffic do I need for CRO?",
      answer:
        "A/B testing needs enough visitors and conversions to give reliable results, so low-traffic sites can't test everything. That doesn't mean CRO won't help. For smaller sites we start with audit-driven fixes based on tracking, heatmaps, recordings and proven conversion principles, then test once volume allows.",
    },
    {
      question: "How fast will I see results?",
      answer:
        "Clear fixes, like a better headline, a shorter form or a more visible phone number, can lift results within weeks. Proper A/B tests take longer because they need enough visitors to reach a reliable answer. We share what we've changed and what moved every month, so you can see progress as it happens.",
    },
    {
      question: "What's a good conversion rate?",
      answer:
        "It varies widely by industry, traffic source, price point and what counts as a conversion. A booked consultation and an online purchase aren't comparable. Rather than chase an industry average, we benchmark against your own numbers and aim to beat them month after month, because that's what affects your revenue.",
    },
    {
      question: "Do you redesign the whole site?",
      answer:
        "Usually not. CRO gets results through targeted changes to the pages that matter most, so we can measure what each change does. If the audit shows your site's foundation is holding everything back, we'll say so and explain what a rebuild through our [Web Design & Development](/web-development) service would involve.",
    },
    {
      question: "Which tools do you use?",
      // TODO(owner): name the specific heatmap/recording and testing tools the agency uses (the old CRO page listed Microsoft Clarity; Hotjar appears in the site's tool logos).
      answer:
        "We use Google Analytics 4 for events and conversions, a heatmap and session-recording tool to see how visitors behave, and an A/B testing tool when traffic supports testing. We choose the specific tools based on your platform, traffic and budget, and set them up so you keep access to the data.",
    },
    {
      question: "How does CRO work with SEO?",
      answer:
        "They solve two halves of the same problem. SEO brings the right visitors to your site, and CRO turns more of them into leads and customers. We plan them together so changes for conversion don't hurt rankings and new SEO pages are built to convert. See our [SEO Services](/seo-services).",
    },
  ],
  guides: [guides.notShowingUp],
  relatedServices: ["/web-development", "/ecommerce-development", "/seo-services"],
  finalCta: {
    eyebrow: "Free landing page teardown",
    title: "Find out why visitors",
    accent: "aren't converting.",
    body: "Send us one important page. We'll review it against our conversion checklist and show you the changes most likely to bring in more leads.",
  },
};
