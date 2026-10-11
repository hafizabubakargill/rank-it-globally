import { guides, shopifyLaunch } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const croPage: ServiceCore = {
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
  ctaMicro: "Send us one important page. We'll score it against our conversion checklist and show you what to change first.",
  sticky: "Visitors leaving without calling?",
  proofStrip: [
    { value: "12.26%", label: "conversion rate on a Shopify launch" },
    { value: "626 orders", label: "in that launch weekend" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "People visit your site.",
    accent: "Then they leave.",
    intro: "Getting visitors is only half the job. If your pages don't convince them to take the next step, every visit you worked or paid for is wasted. These are the four problems CRO fixes.",
    points: [
      { quote: "Analytics says people visit. The phone says otherwise.", body: "Somewhere between landing and contacting you, something stops them. Without the right data, you'll never know what.", fix: "Tracking that shows exactly where visitors give up." },
      { quote: "I don't know if it's the page, the price or the form.", body: "Every change becomes a guess, and guesses rarely survive a busy month.", fix: "Heatmaps, recordings and a funnel audit replace the guesswork." },
      { quote: "Our form has eleven fields and a button that says Submit.", body: "Long forms, vague buttons and five competing links per page all add friction. Ready buyers quietly give up.", fix: "Shorter forms, clearer offers and one obvious next step." },
      { quote: "We're paying for traffic that doesn't convert.", body: "Whether it's ad spend, SEO or social posts, visitors cost money. If pages don't convert, you're paying for visits that never become customers.", fix: "More enquiries from the traffic you already pay for." },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Tracking, fixes and testing",
    accent: "in one program.",
    intro: "CRO runs as a loop: measure, fix the biggest problems, test, repeat. Every engagement includes each part of that loop.",
    items: [
      { icon: "analytics", title: "GA4 events plus call and WhatsApp tracking", body: "Forms, bookings, purchases, calls and WhatsApp clicks all counted." },
      { icon: "media", title: "Heatmaps and session recordings", body: "See how real visitors scroll, click and hesitate on key pages." },
      { icon: "strategy", title: "Funnel audit", body: "Every step from landing to enquiry measured, so we fix what matters most." },
      { icon: "content", title: "Offer and copy rewrites", body: "Headlines, offers and calls to action rewritten in your customers' own words." },
      { icon: "cro", title: "Page restructuring", body: "Sections reordered, proof placed where doubts appear, distractions removed." },
      { icon: "search", title: "A/B tests", body: "Changes tested against the current version when traffic allows." },
      { icon: "community", title: "Form and WhatsApp flow optimization", body: "Shorter forms and easy WhatsApp and booking options on mobile." },
      { icon: "profile", title: "Monthly test report", body: "What changed, what we tested, what won and how many more leads it produced." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "of CRO.",
    intro: "We never change a page before we can measure it. Tracking first, then clear wins, then structured tests.",
    steps: [
      { period: "Days 1–30", title: "Tracking and funnel audit", body: "Tracking set up or repaired, heatmaps and recordings added, and the funnel audited for the biggest leaks." },
      { period: "Days 31–60", title: "First fixes and copy changes", body: "Clear wins shipped first: rewritten headlines and offers, simpler forms, better calls to action." },
      { period: "Days 61–90", title: "A/B tests and report", body: "Tests on the changes that need proof, and a report on what worked, what didn't and what to test next." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "A 12.26% conversion rate",
    accent: "on a launch weekend.",
    intro: "Conversion is where everything comes together: the offer, the page and the path to buy. Here's a real result from one unnamed client.",
    items: [
      {
        ...shopifyLaunch,
        title: "12.26% conversion rate on a Shopify launch",
        body: [
          "During one launch weekend this client's Shopify store converted 12.26% of sessions into orders: 626 orders and $253K in sales, exactly as recorded in the Shopify dashboard.",
          // TODO(owner): describe the CRO work behind this result only if it's documented in a case study.
        ],
      },
    ],
    closing: "CRO often pairs with a rebuild or launch. See [Web Design & Development](/web-development) and [E-commerce & Shopify Development](/ecommerce-development).",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "If you have traffic,",
    accent: "you have a CRO opportunity.",
    intro: "CRO pays off fastest when visitors are already arriving. A few typical examples of who comes to us:",
    items: [
      { icon: "profile", business: "A med spa", where: "Miami, FL", situation: "Plenty of visitors from Instagram and Google, but the booking page has a long intake form and no prices.", goal: "More consultations booked online, especially on phones.", plan: "A 3-field first step, price ranges per treatment, before/after proof near the button and a WhatsApp option." },
      { icon: "shield", business: "An estate planning law firm", where: "Denver, CO", situation: "Good rankings, but the contact page asks for case details up front and visitors bail.", goal: "More consultation requests from existing traffic.", plan: "Split the form into two easy steps, add attorney photos and clear fee information, test the headline." },
      { icon: "cart", business: "An outdoor gear store", where: "Portland, OR", situation: "Healthy add-to-cart rate, but many shoppers abandon at shipping.", goal: "Recover more of the carts it's already earning.", plan: "Shipping threshold messaging on product pages, express checkout and a test on the cart layout." },
      { icon: "strategy", business: "A B2B SaaS company", where: "Seattle, WA", situation: "Demo requests stall on a pricing page full of jargon.", goal: "More qualified demo bookings without more traffic.", plan: "Clearer plan comparison, objection-handling FAQs, customer proof and an A/B test on the demo CTA." },
    ],
  },
  midCta: {
    title: "Which one page would you fix first?",
    body: "Send it to us. Our free landing page teardown scores it against our conversion checklist and shows you exactly what to change.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Conversion work for",
    accent: "leads, bookings and orders.",
    intro: "A booked consultation, a quote request and a checkout are different conversions with different obstacles. We tailor the audit and tests to yours.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "CRO grounded in data,",
    accent: "not opinions.",
    intro: "Our founder delivered 150+ client engagements as a freelance SEO before founding the agency. We bring that attention to detail to your funnel and report on leads and orders, not just clicks.",
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
  guides: [guides.notShowingUp, guides.seoCost],
  relatedServices: ["/web-development", "/ecommerce-development", "/seo-services"],
  finalCta: {
    title: "Find out why visitors",
    accent: "aren't converting.",
    body: "Tell us which page matters most. We'll score it against our conversion checklist and show you the changes most likely to bring in more leads.",
    bullets: [
      "Scored against our 4-point page checklist",
      "Top friction points, ranked by impact",
      "Copy and layout changes you can make this month",
    ],
  },
};

export const croChecklist: SectionHeading & { items: { title: string; body: string }[] } = {
  eyebrow: "The checklist we use on every page",
  title: "Four checks most pages",
  accent: "quietly fail.",
  intro: "Before we test anything, every page we touch has to pass these four. They sound simple, but most underperforming pages miss at least one.",
  items: [
    { title: "One clear offer", body: "One specific offer and one action per page, not several competing ones." },
    { title: "The customer's own language in the headline", body: "Words customers actually use for their problem, taken from reviews, calls and searches." },
    { title: "Industry-specific proof", body: "Reviews, results and credentials relevant to the reader, right where doubts come up." },
    { title: "A low-friction first step", body: "A short form, a quick call or a WhatsApp message, never a long questionnaire." },
  ],
};

export const croFunnel: SectionHeading & { steps: { label: string; width: number; note: string }[] } = {
  eyebrow: "CRO 101",
  title: "Visitors don't disappear at once.",
  accent: "They leak out step by step.",
  intro: "Every website is a funnel. People land, some engage, fewer start the form and fewer still finish it. CRO finds the step where the biggest share drops off and fixes that first, because a small lift there multiplies through everything after it.",
  steps: [
    { label: "Land on the page", width: 100, note: "Did the headline match what they searched for?" },
    { label: "Scroll and engage", width: 64, note: "Is the offer and proof clear in seconds?" },
    { label: "Start the form or tap call", width: 30, note: "Is the next step obvious and easy?" },
    { label: "Become a lead", width: 16, note: "Did the form ask too much?" },
  ],
};
