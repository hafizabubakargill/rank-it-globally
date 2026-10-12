import { guides, shopifyLaunch } from "./shared";
import type { SectionHeading, ServiceCore } from "./types";

export const ecommercePage: ServiceCore = {
  slug: "ecommerce-development",
  name: "E-commerce & Shopify Development",
  serviceType: "Shopify and e-commerce website development",
  theme: "ecommerce",
  title: "Shopify & E-commerce Development Agency (USA)",
  description:
    "Shopify stores designed to sell: custom themes, migrations, apps and launch plans. One client launch weekend did $253K. Book a free store review.",
  h1Lead: "E-commerce & Shopify",
  h1Accent: "Development",
  heroPromise: "Stores built to sell from launch day.",
  heroIntro:
    "Our e-commerce and Shopify development service designs, builds and launches online stores for US brands that want more orders, not just a nicer theme. We handle store design, catalog structure, apps, checkout setup, migrations and Shopify SEO, with a launch plan that helps your store sell from its first weekend.",
  ctaLabel: "Get My Free Store Review",
  ctaMicro: "We review your product pages, speed, app stack and checkout, and point out the leaks costing you orders.",
  sticky: "Traffic but not enough orders?",
  proofStrip: [
    { value: "$253K", label: "in one launch weekend" },
    { value: "626 orders", label: "in the same weekend" },
    { value: "12.26%", label: "conversion rate" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your store gets visitors.",
    accent: "It should get more orders.",
    intro: "Running an online store is hard enough without the store working against you. These are the frustrations we hear most from founders and e-commerce managers.",
    points: [
      { quote: "People add to cart, then vanish.", body: "Surprise shipping costs, a clunky mobile checkout or missing trust signals send ready buyers away at the last step.", fix: "Clear pricing, fewer steps and checkout trust built in." },
      { quote: "Our theme fights us on everything.", body: "Bundles, better filters, a product builder: the theme can't do it, so you stack apps that slow the store down.", fix: "A custom theme built around how your customers shop." },
      { quote: "We've outgrown WooCommerce but moving terrifies us.", body: "Products, customer accounts, order history and years of Google rankings all feel at risk.", fix: "A tested migration with every URL redirected." },
      { quote: "Our last launch fell flat.", body: "You built up to launch day and sales didn't come, or the site buckled under the traffic.", fix: "A launch plan for the store, the offer and the tracking." },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Everything a store needs",
    accent: "to sell well.",
    intro: "A store that converts depends on design, catalog structure, checkout and the setup behind the scenes working together. Every Shopify project covers all of it.",
    items: [
      { icon: "media", title: "Store design and custom theme", body: "A store that fits your brand, with a custom Shopify theme (or an adapted one) built around how customers browse and buy." },
      { icon: "strategy", title: "Product and collection structure", body: "Products, variants, collections and filters organized so shoppers find things fast and Google understands your catalog." },
      { icon: "schema", title: "Apps and integrations", body: "Only the apps you need for reviews, subscriptions, email, shipping and inventory, so the store stays fast." },
      { icon: "cart", title: "Checkout and conversion setup", body: "A low-friction path to purchase: visible shipping and returns, trust signals and a checkout that works on phones." },
      { icon: "shield", title: "Migration to Shopify", body: "Products, customers and orders moved from WooCommerce or another platform, with old URLs redirected." },
      { icon: "analytics", title: "Launch plan", body: "Final QA, tracking checks, load testing and a launch-day checklist, so the store is ready when traffic arrives." },
      { icon: "search", title: "Shopify SEO setup", body: "Clean URLs, product and collection metadata, structured data and fast pages before launch." },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "From plan to launch",
    accent: "in about 8 weeks.",
    intro: "We settle the catalog structure early, because navigation, filters and SEO all depend on it.",
    steps: [
      { period: "Weeks 1–2", title: "Strategy and catalog structure", body: "Goals agreed, products and data reviewed, and collections, filters, apps and pages planned." },
      { period: "Weeks 3–6", title: "Design and build", body: "Key templates designed, theme built, apps connected and products loaded or imported." },
      { period: "Weeks 7–8", title: "QA, migration and launch", body: "Every template and the full checkout tested, migration and redirects completed, launch with tracking live." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "One launch weekend,",
    accent: "$253K in sales.",
    intro: "Real numbers from one client's Shopify dashboard over a single launch weekend. The client is unnamed; the numbers are exactly as Shopify recorded them.",
    items: [
      {
        ...shopifyLaunch,
        body: [
          "$253K in sales from 626 orders at a 12.26% conversion rate: the store, the offer and the checkout were ready the moment demand arrived.",
          // TODO(owner): describe the work done on this launch only if it's documented in a case study.
        ],
      },
    ],
    closing: "More of the Shopify stores we've built are above. To lift sales from existing traffic, see [Conversion Rate Optimization](/cro-strategy) or our [e-commerce marketing](/industries/ecommerce-marketing) approach.",
  },
  scenarios: {
    eyebrow: "Who this is for",
    title: "Brands that are ready",
    accent: "to sell more online.",
    intro: "From first launch to replatforming, these are typical examples of who comes to us for Shopify work:",
    items: [
      { icon: "media", business: "A DTC skincare brand", where: "Los Angeles, CA", situation: "Instagram drives traffic, but product pages don't explain ingredients or results and mobile conversion lags.", goal: "Turn social traffic into orders and repeat customers.", plan: "Product page redesign with routine bundles, ingredient explainers, reviews up front and a faster theme." },
      { icon: "shield", business: "A supplement company", where: "Utah, 1,200 SKUs on WooCommerce", situation: "Plugins conflict after every update and checkout errors spike during sales.", goal: "Move to Shopify without losing customers, subscriptions or rankings.", plan: "Data audit, staged migration of products, customers and orders, subscription app setup and a full redirect map." },
      { icon: "cart", business: "A streetwear label", where: "New York, NY", situation: "Limited drops sell out on social but the site slows to a crawl at launch time.", goal: "Smooth, high-converting drop days.", plan: "Lean custom theme, launch-day load testing, countdown and waitlist pages, and real-time tracking." },
      { icon: "strategy", business: "An industrial parts supplier", where: "Texas, B2B and B2C", situation: "Buyers can't find parts by spec, and wholesale customers still email orders.", goal: "Self-serve ordering for both retail and wholesale buyers.", plan: "Spec-based filters, B2B pricing setup, quick-order forms and product schema for part searches." },
    ],
  },
  midCta: {
    title: "Find the leaks costing you orders.",
    body: "Our free store review checks product pages, speed, app bloat and checkout, then shows you the fixes most likely to lift sales.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Stores and service brands",
    accent: "that sell online.",
    intro: "Most of our store work is for e-commerce and DTC brands, but practices, home services companies and startups sell online too.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "A Shopify partner focused",
    accent: "on what sells.",
    intro: "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency, so we build stores with search and conversion in mind from the first wireframe.",
    rows: [
      { label: "Conversion-focused store design", rig: "Designed around how shoppers buy", agency: "Often theme-first", freelancer: "Varies", diy: "Theme defaults" },
      { label: "Launch plan included", rig: "QA, tracking and launch checklist", agency: "Sometimes extra", freelancer: "Rarely", diy: "Learn as you go" },
      { label: "SEO set up before launch", rig: "Included", agency: "Often added later", freelancer: "Depends on skill set", diy: "Basic settings only" },
      { label: "Safe migrations with redirects", rig: "Products, customers, orders and URLs", agency: "Varies by agency", freelancer: "Varies", diy: "High risk" },
      { label: "Real launch results to show", rig: "$253K launch weekend", agency: "Varies", freelancer: "Varies", diy: "Not applicable" },
    ],
  },
  faqIntro: "What store owners usually ask before a Shopify build or migration.",
  faqs: [
    {
      question: "How much does a Shopify store cost?",
      answer:
        "It depends on scope: the number of products and templates, whether you need a custom theme, the apps and integrations involved and whether there's a migration. We start with a free store review, then give you a clear quote based on what your store actually needs, so you're not paying for features you won't use.",
    },
    {
      question: "How long does a build take?",
      answer:
        "A typical Shopify build takes 6 to 8 weeks: about two weeks for strategy and catalog structure, four for design and build, and two for testing, migration and launch. Large catalogs, complex integrations or custom features can add time. Having product data and content ready early keeps the project on schedule.",
    },
    {
      question: "Can you migrate us from WooCommerce or another platform?",
      answer:
        "Yes. We migrate products, customers and order history from WooCommerce and other platforms, then map and redirect your old URLs so search traffic and links carry over. We test everything in a staging store first and only switch over once the data and redirects have been checked.",
    },
    {
      question: "Can we use our own design?",
      answer:
        "Yes. If you already have a design from your team or another designer, we can build it as a custom Shopify theme. If not, we design the store for you. Either way, we review the design for mobile usability, speed and conversion before we build, and suggest changes where they'll help sales.",
    },
    {
      question: "Do you handle SEO after launch?",
      answer:
        "Every store we build launches with Shopify SEO set up. For ongoing growth, such as content, link building and technical improvements over time, our [SEO Services](/seo-services) pick up where the build leaves off, with monthly reporting tied to traffic, orders and revenue rather than rankings alone.",
    },
    {
      // TODO(owner): replace with "Do you offer ongoing support?" once ongoing support terms are confirmed.
      question: "What do you need from us to start?",
      answer:
        "Your product data (or access to your current store), brand assets like your logo and photos, any design references you like, and a short call about your customers, most popular products and goals. If you're migrating, we'll also need admin access to the old platform so we can plan the move.",
    },
  ],
  guides: [guides.seoCost, guides.notShowingUp],
  relatedServices: ["/cro-strategy", "/web-development", "/seo-services"],
  finalCta: {
    title: "Find out what's stopping",
    accent: "your store from selling.",
    body: "Share your store. We'll review design, speed, product pages and checkout, and show you the changes most likely to increase orders.",
    bullets: [
      "Product page and mobile checkout teardown",
      "Speed and app-bloat check",
      "Migration or rebuild recommendation if you need one",
    ],
  },
};

export const ecomLeaks: SectionHeading & { steps: { stage: string; leak: string; fix: string }[] } = {
  eyebrow: "Where stores leak sales",
  title: "Every step is a chance",
  accent: "to lose the order.",
  intro: "Shoppers don't leave all at once. They drop off a few at a time at each step between landing and paying. Plug the leaks and the same traffic produces more orders.",
  steps: [
    { stage: "Product page", leak: "Unclear sizing, weak photos, no reviews in sight", fix: "Answer every buying question above the fold" },
    { stage: "Cart", leak: "Shipping cost appears out of nowhere", fix: "Show shipping and returns before the cart" },
    { stage: "Checkout", leak: "Forced account creation, slow mobile forms", fix: "Guest checkout and express wallets" },
    { stage: "After purchase", leak: "No follow-up, no reason to come back", fix: "Post-purchase emails and easy reorders" },
  ],
};

export const ecomMigration: SectionHeading & { items: string[] } = {
  eyebrow: "Replatforming without the panic",
  title: "Moving to Shopify,",
  accent: "nothing left behind.",
  intro: "A migration fails when something gets forgotten: a customer list, an old URL, a product variant. We move everything in a staging store first and check it before the switch.",
  items: ["Products & variants", "Customers & accounts", "Order history", "Reviews", "Blog content", "Every old URL → 301"],
};

export const ecomLaunch: { title: string; items: { when: string; task: string }[] } = {
  title: "Launch-day checklist",
  items: [
    { when: "T-14 days", task: "Full QA on every template and device" },
    { when: "T-7 days", task: "Tracking, pixels and checkout tested end to end" },
    { when: "T-3 days", task: "Load test for expected traffic" },
    { when: "Launch", task: "Live monitoring, redirects verified, fixes on standby" },
  ],
};
