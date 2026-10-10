import { guides, shopifyLaunch } from "./shared";
import type { ServicePageContent } from "./types";

export const ecommercePage: ServicePageContent = {
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
  heroPanel: {
    label: "Store build program",
    steps: ["Structure catalog", "Design store", "Set up checkout", "Launch"],
    outcome: "A store that turns visitors into orders from day one",
  },
  proofStrip: [
    { value: "$253K", label: "in one launch weekend" },
    { value: "626 orders", label: "in the same weekend" },
    { value: "12.26%", label: "conversion rate" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your store gets visitors.",
    accent: "It should get more orders.",
    intro:
      "Running an online store is hard enough without the store itself working against you. These are the frustrations we hear most from founders and e-commerce managers.",
    points: [
      {
        title: "\"We get traffic, but hardly anyone buys.\"",
        body: "People land on product pages and leave. Often it's slow pages, unclear shipping or returns information, weak product photos or a checkout with one step too many. Each small leak costs orders every day.",
      },
      {
        title: "\"Our theme won't let us do what we need.\"",
        body: "You want bundles, better filters, a custom product builder or a different layout, and the theme fights you at every turn. Workarounds and extra apps slow the store down further.",
      },
      {
        title: "\"Moving platforms feels too risky.\"",
        body: "You've outgrown WooCommerce or another platform, but you're worried about losing products, customer accounts, order history or the Google rankings you've built. So the move keeps getting pushed back.",
      },
      {
        title: "\"Our last launch fell flat.\"",
        body: "You built up to a launch and the sales didn't come, or the site buckled under the traffic. A launch needs a plan for the store, the offer and the tracking, not just a go-live date.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Everything a store needs",
    accent: "to sell well.",
    intro:
      "A store that converts depends on the design, the catalog structure, the checkout and the setup behind the scenes working together. Every Shopify project covers all of it.",
    items: [
      {
        icon: "media",
        title: "Store design and custom theme",
        body: "We design a store that fits your brand and build a custom Shopify theme, or adapt an existing one, around how your customers browse and buy.",
      },
      {
        icon: "strategy",
        title: "Product and collection structure",
        body: "We organize products, variants, collections and filters so shoppers find what they want quickly and search engines understand your catalog.",
      },
      {
        icon: "schema",
        title: "Apps and integrations",
        body: "We choose and connect the apps you actually need for reviews, subscriptions, email, shipping and inventory, and keep the app list lean so the store stays fast.",
      },
      {
        icon: "cart",
        title: "Checkout and conversion setup",
        body: "We set up a clear, low-friction path to purchase, with visible shipping and returns information, trust signals and a checkout that works smoothly on phones.",
      },
      {
        icon: "shield",
        title: "Migration to Shopify",
        body: "We move products, customers and orders from WooCommerce or another platform, and redirect old URLs so you keep the search traffic you've earned.",
      },
      {
        icon: "analytics",
        title: "Launch plan",
        body: "We plan the launch with you: final QA, tracking checks, load testing and a clear checklist for launch day, so the store is ready when the traffic arrives.",
      },
      {
        icon: "search",
        title: "Shopify SEO setup",
        body: "We set up clean URLs, product and collection metadata, structured data and fast page loads before launch, so your store can start ranking from the start.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "From plan to launch",
    accent: "in about 8 weeks.",
    intro:
      "A typical Shopify build follows three stages. We settle the catalog structure early because everything else, from navigation to SEO, depends on it.",
    steps: [
      {
        period: "Weeks 1–2",
        title: "Strategy and catalog structure",
        body: "We agree on goals, review your products and data, and plan the collections, filters, apps and pages the store needs.",
      },
      {
        period: "Weeks 3–6",
        title: "Design and build",
        body: "We design the key templates, build the theme, connect apps and integrations, and load or import your products.",
      },
      {
        period: "Weeks 7–8",
        title: "QA, migration and launch",
        body: "We test every template and the full checkout, complete any migration and redirects, and launch with tracking in place.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "One launch weekend,",
    accent: "$253K in sales.",
    intro:
      "This is a real Shopify dashboard from one client's launch weekend. The client is unnamed, and the numbers are exactly as Shopify recorded them.",
    items: [
      {
        ...shopifyLaunch,
        body: [
          "Over a single launch weekend, the store recorded $253K in sales from 626 orders, with a 12.26% conversion rate.",
          "A conversion rate like that means the store, the offer and the checkout were ready for the moment demand arrived, which is exactly what a launch plan is for.",
          // TODO(owner): describe the work done on this launch only if it's documented in a case study.
        ],
      },
    ],
    projectSlugs: ["spc-sports", "kennedy-cellars", "habeora"],
    closing: "Above: a few of the Shopify stores on our work wall. Want more sales from the traffic you already have? See [Conversion Rate Optimization](/cro-strategy), or our [e-commerce marketing](/industries/ecommerce-marketing) approach.",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "Stores and service brands",
    accent: "that sell online.",
    intro:
      "Most of our store work is for e-commerce and DTC brands, but practices, home services companies and startups sell products and bookings online too. Explore how we approach each industry.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "A Shopify partner focused",
    accent: "on what sells.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency, so we build stores with search and conversion in mind from the first wireframe.",
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
  guides: [guides.seoCost],
  relatedServices: ["/cro-strategy", "/web-development", "/seo-services"],
  finalCta: {
    eyebrow: "Free store review",
    title: "Find out what's stopping",
    accent: "your store from selling.",
    body: "We'll review your store's design, speed, product pages and checkout, and show you the changes most likely to increase orders.",
  },
};
