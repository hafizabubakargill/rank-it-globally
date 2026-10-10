import { gscClientA, gscClientB, guides } from "./shared";
import type { ServicePageContent } from "./types";

export const aiSeoPage: ServicePageContent = {
  slug: "ai-seo-services",
  name: "AI SEO & GEO Services",
  serviceType: "Generative engine optimization (GEO) and AI search optimization",
  theme: "ai",
  title: "AI SEO & GEO Services in the USA | Rank It Globally",
  description:
    "Get your business cited by ChatGPT, Google AI Overviews, Perplexity and Gemini. GEO + SEO for US businesses. Start with a free AI visibility check.",
  h1Lead: "AI SEO & GEO",
  h1Accent: "Services",
  heroPromise: "Get recommended when customers ask AI who to hire.",
  heroIntro:
    "AI SEO and GEO (generative engine optimization) is the work of getting your business named and cited when people ask ChatGPT, Google AI Overviews, Perplexity or Gemini who to hire. We help US small and mid-size businesses become a clear, trusted source those tools quote, so more of those conversations turn into calls and leads.",
  ctaLabel: "Get My Free AI Visibility Check",
  heroPanel: {
    label: "AI visibility program",
    steps: ["Test prompts", "Fix entities", "Restructure pages", "Earn citations"],
    outcome: "Named in AI answers for the questions your customers ask",
  },
  proofStrip: [
    { value: "10.3K clicks", label: "in 90 days for one client" },
    { value: "1.61M", label: "impressions in the same period" },
    { value: "Real data", label: "Tracked in Google Search Console" },
  ],
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your customers are asking AI.",
    accent: "Is it naming you?",
    intro:
      "Buyers no longer stop at ten blue links. They ask an AI tool for a recommendation, read the answer and call whoever it names. If your business isn't in that answer, you never get the chance to compete.",
    points: [
      {
        title: "\"I asked ChatGPT for a recommendation and we weren't on the list.\"",
        body: "Customers now type full questions like \"family dentist near me that takes walk-ins\" into AI tools. When the answer names three businesses and yours isn't one of them, that lead is gone before it ever reaches your website.",
      },
      {
        title: "\"Our competitors keep getting cited instead of us.\"",
        body: "It's frustrating to see a smaller competitor quoted in a Google AI Overview when you have more experience. Usually it isn't about who is better. It's about whose information is clearer, more consistent and easier for the AI to trust.",
      },
      {
        title: "\"I have no idea what AI tools are saying about my business.\"",
        body: "Most owners have never checked. AI answers can be out of date, mix you up with a similar business or leave out the services you most want to sell. You can't fix what you haven't measured.",
      },
      {
        title: "\"Our old SEO playbook doesn't explain any of this.\"",
        body: "Rankings reports tell you where a page sits in Google. They don't tell you whether ChatGPT or Perplexity mentions you, or why. AI search needs its own testing, its own fixes and its own reporting.",
      },
    ],
  },
  included: {
    eyebrow: "What's included",
    title: "Everything AI tools need",
    accent: "to understand and cite you.",
    intro:
      "Generative engine optimization builds on solid SEO, then adds the entity, content and citation work that AI tools rely on when they choose which businesses to mention. Here's what every engagement includes.",
    items: [
      {
        icon: "ai",
        title: "AI visibility audit",
        body: "We test the real questions your customers ask across ChatGPT, Perplexity, Gemini and Google AI Overviews, and record who gets named, what's said about you and which sources the answers draw from.",
      },
      {
        icon: "profile",
        title: "Entity & brand consistency",
        body: "We make your name, address, phone and service details consistent everywhere they appear, and add Organization, LocalBusiness and Person schema so machines read the same facts your customers do.",
      },
      {
        icon: "content",
        title: "Answer-first page rewrites",
        body: "We rewrite your key service pages so the first paragraph answers the question directly, in a form an AI tool can lift and quote with your name attached.",
      },
      {
        icon: "schema",
        title: "FAQ content & structured data",
        body: "We build FAQ sections around the questions buyers actually ask and mark them up with structured data, so both search engines and AI tools can match your answers to real queries.",
      },
      {
        icon: "citations",
        title: "Citation building",
        body: "We strengthen the directories, review profiles and third-party mentions that AI tools lean on when they decide whether a business is credible enough to recommend.",
      },
      {
        icon: "analytics",
        title: "Monthly AI visibility report",
        body: "Each month you see how often you're named for your target prompts, on which platforms, and what changed. We connect that to Search Console data, calls and leads.",
      },
    ],
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days,",
    accent: "step by step.",
    intro:
      "AI visibility is built in layers. We fix the foundations first, then restructure your content, then widen the set of sources that vouch for you, measuring every step against the baseline we set in month one.",
    steps: [
      {
        period: "Days 1–30",
        title: "Audit, baseline and fixes",
        body: "We run the AI visibility audit, record a prompt baseline across all four platforms, and fix the schema and technical issues that stop machines from reading your site properly.",
      },
      {
        period: "Days 31–60",
        title: "Content and entity work",
        body: "We restructure your key pages with answer-first copy and FAQs, and clean up inconsistent business details across your website, profiles and directories.",
      },
      {
        period: "Days 61–90",
        title: "Citations and first report",
        body: "We build citations and mentions, set up ongoing monitoring, and deliver your first AI visibility report comparing results against the day-one baseline.",
      },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "Real Search Console data,",
    accent: "not mock-ups.",
    intro:
      "Here are two unnamed clients' Google Search Console reports for the same 90-day window. Notice the line Google now prints at the bottom of the report: it measures performance in generative AI features too, which is exactly what this service targets.",
    items: [
      {
        ...gscClientA,
        body: [
          "Client A's site earned 5.92K clicks from 1.17M impressions, at an average position of 7.2. That's the kind of visibility AI tools tend to draw from, because they often cite pages that already rank.",
          // TODO(owner): describe the work done for Client A if you want it shown.
        ],
      },
      {
        ...gscClientB,
        body: [
          "Client B's site earned 10.3K clicks from 1.61M impressions, at an average position of 8.1. We report from the same Search Console data you can open yourself, never from a screenshot of a rank tracker.",
          // TODO(owner): describe the work done for Client B if you want it shown.
        ],
      },
    ],
    // TODO(owner): add a real before/after ChatGPT prompt screenshot if available.
    closing: "Want to see how this connects with classic rankings? Read about our [SEO Services](/seo-services).",
  },
  industries: {
    eyebrow: "Industries we do this for",
    title: "AI visibility for",
    accent: "service businesses and stores.",
    intro:
      "The questions customers ask AI are different in every industry. We tailor the prompts we track and the pages we restructure to the way your buyers actually search.",
  },
  comparison: {
    eyebrow: "Why Rank It Globally",
    title: "How we compare",
    accent: "on AI search.",
    intro:
      "Our founder delivered 150+ client engagements as a freelance SEO before starting the agency. You get freelancer-level attention with agency-level execution, and straight talk about what AI search can and can't promise.",
    rows: [
      { label: "Tracks AI citations across 4 platforms", rig: "ChatGPT, Perplexity, Gemini and AI Overviews", agency: "Often not tracked yet", freelancer: "Varies by person", diy: "Manual spot checks" },
      { label: "Combines GEO with traditional SEO", rig: "One plan covering both", agency: "Often sold as separate packages", freelancer: "Usually one or the other", diy: "Hard to cover both" },
      { label: "Schema & entity work included", rig: "Included in every plan", agency: "Sometimes an add-on", freelancer: "Depends on skill set", diy: "Steep technical learning curve" },
      { label: "Reporting on AI mentions, not just rankings", rig: "Monthly AI visibility report", agency: "Often rankings-only reports", freelancer: "Varies", diy: "No reporting system" },
      { label: "Honest about what can't be guaranteed", rig: "No promises we can't control", agency: "Some promise guaranteed placement", freelancer: "Varies", diy: "Trial and error" },
    ],
  },
  faqIntro: "Straight answers about how AI search works and what we can realistically do for you.",
  faqs: [
    {
      question: "What is GEO and how is it different from SEO?",
      answer:
        "GEO, or generative engine optimization, aims to get your business cited inside AI-generated answers. SEO aims to rank your pages in search results. The two overlap heavily: AI tools often draw from pages that already rank well, so we treat GEO as a layer on top of strong SEO rather than a replacement for it.",
    },
    {
      question: "Do I still need regular SEO?",
      answer:
        "Yes. Strong organic rankings and clear, well-structured pages are a big part of what AI tools cite. If your site is hard to crawl or your service pages are thin, AI tools have little to work with. That's why our [SEO Services](/seo-services) and AI SEO work are planned together.",
    },
    {
      question: "How long until AI tools mention my business?",
      answer:
        "We usually measure progress over 60 to 90 days or more. The timeline depends on how competitive your market is, how much authority your site already has and how consistent your business information is today. Anyone who gives you a fixed date is guessing. We show you the baseline and track movement every month.",
    },
    {
      question: "Can you guarantee ChatGPT will recommend us?",
      answer:
        "No, and no one honestly can. AI tools decide their own answers. What we control is how clear, consistent and well-cited your business is: structured pages, accurate entity data, quotable answers and mentions on sources AI tools trust. Those are the levers that improve your chances, and we report on them openly.",
    },
    {
      question: "Which AI platforms do you track?",
      answer:
        "We track ChatGPT, Perplexity, Gemini and Google AI Overviews. For each one we test the prompts your customers are likely to use, record whether you're named, and note which sources the answer relied on. That tells us where to focus next, platform by platform.",
    },
    {
      question: "How do you measure results?",
      answer:
        "We measure your share of answers for a fixed set of target prompts, Google Search Console data (including its new generative AI reporting) and, most importantly, the leads and calls that follow. Visibility only matters if it brings in business, so every report ties back to enquiries.",
    },
  ],
  guides: [guides.aiOverviews, guides.notShowingUp],
  relatedServices: ["/seo-services", "/local-seo-services"],
  finalCta: {
    eyebrow: "Free AI visibility check",
    title: "Find out what AI tools",
    accent: "say about you today.",
    body: "We'll test the questions your customers ask, show you who gets named instead, and outline the first fixes. No cost and no obligation.",
  },
};
