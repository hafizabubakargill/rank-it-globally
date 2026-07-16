export type ServicePageIcon =
  | "profile"
  | "citations"
  | "reviews"
  | "schema"
  | "content"
  | "ai"
  | "strategy"
  | "media"
  | "community"
  | "ads"
  | "analytics"
  | "search";

export type ServicePageCard = {
  icon: ServicePageIcon;
  title: string;
  body: string;
  tags: string[];
};

export type ServicePageConfig = {
  slug: string;
  title: string;
  description: string;
  shortName: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroBody: string;
  heroLabel: string;
  heroSteps: string[];
  heroOutcome: string;
  theme: "seo" | "social" | "web" | "design" | "cro";
  servicesEyebrow: string;
  servicesTitle: string;
  servicesAccent: string;
  servicesBody: string;
  services: ServicePageCard[];
  insightEyebrow: string;
  insightTitle: string;
  insightAccent: string;
  insightBody: string;
  insights: { kicker: string; title: string; body: string }[];
  workflowEyebrow: string;
  workflowTitle: string;
  workflowAccent: string;
  workflowBody: string;
  workflow: { title: string; body: string }[];
  comparisonEyebrow: string;
  comparisonTitle: string;
  comparisonAccent: string;
  comparisonBody: string;
  comparisons: { kicker: string; title: string; body: string }[];
  ecosystemEyebrow: string;
  ecosystemTitle: string;
  ecosystemAccent: string;
  ecosystemBody: string;
  ecosystem: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string; description: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaAccent: string;
  ctaBody: string;
};

const sharedRelated = [
  { href: "/case-studies", label: "Case studies", description: "See how strategy, design, development, and campaigns connect in real work." },
  { href: "/free-audit", label: "Free website audit", description: "Find the most important visibility and conversion gaps before choosing a scope." },
];

export const servicePages: Record<string, ServicePageConfig> = {
  seo: {
    slug: "seo-services",
    title: "SEO Services | Rank It Globally — Get Found on Google & AI Search",
    description: "Technical SEO, content strategy, authority building, local visibility, and AI search optimization focused on qualified growth.",
    shortName: "SEO Services",
    eyebrow: "SEO services",
    heroLead: "SEO that drives revenue,",
    heroAccent: "not just rankings.",
    heroBody: "A connected search system for technical clarity, useful content, credible authority, and conversion paths that turn discovery into business.",
    heroLabel: "Search visibility operating system",
    heroSteps: ["Crawl", "Understand", "Trust", "Convert"],
    heroOutcome: "Google + AI search visibility",
    theme: "seo",
    servicesEyebrow: "Full-funnel search delivery",
    servicesTitle: "Every search signal working",
    servicesAccent: "toward the same commercial goal.",
    servicesBody: "We address the technical, content, authority, and measurement layers together so improvements compound instead of competing for attention.",
    services: [
      { icon: "schema", title: "Technical SEO", body: "Crawlability, rendering, indexation, architecture, schema, and Core Web Vitals prioritized by business impact.", tags: ["Crawling", "Indexation", "Schema", "Page speed"] },
      { icon: "search", title: "On-page optimization", body: "Search intent, titles, headings, copy, internal links, and page structure aligned around the job of each URL.", tags: ["Search intent", "Metadata", "Internal links", "Content refresh"] },
      { icon: "reviews", title: "Link building and digital PR", body: "Editorial authority built through useful assets, relevant outreach, partnerships, and credible references.", tags: ["Authority", "Outreach", "Digital PR", "Link gaps"] },
      { icon: "ai", title: "AI search optimization", body: "Entity clarity, answer-first content, structured evidence, and source consistency for AI-assisted discovery.", tags: ["AEO", "GEO", "Entities", "Citations"] },
      { icon: "content", title: "Content strategy and production", body: "Service pages, expert resources, comparisons, and supporting content mapped to real customer questions.", tags: ["Topic maps", "Briefs", "Service pages", "Expert content"] },
      { icon: "analytics", title: "Reporting and analytics", body: "Clear reporting on visibility, qualified traffic, conversion paths, and the next decisions worth making.", tags: ["Search Console", "GA4", "Conversions", "Priorities"] },
    ],
    insightEyebrow: "Organic search economics",
    insightTitle: "Build an asset that keeps",
    insightAccent: "earning attention after launch.",
    insightBody: "Paid channels rent visibility. Search compounds when the site becomes easier to understand, more useful, and more trustworthy over time.",
    insights: [
      { kicker: "Foundation", title: "Remove technical drag", body: "Fix the issues that prevent strong pages from being discovered, interpreted, or experienced properly." },
      { kicker: "Demand capture", title: "Match how buyers search", body: "Build the right page for the right question, stage of research, and next action." },
      { kicker: "Compounding value", title: "Strengthen winners", body: "Refresh useful pages, expand topical coverage, and reinforce the authority already earning traction." },
    ],
    workflowEyebrow: "How the engagement moves",
    workflowTitle: "A search program with",
    workflowAccent: "clear operating stages.",
    workflowBody: "Each stage creates evidence for the next, so priorities evolve with real search and conversion data.",
    workflow: [
      { title: "Audit", body: "Assess technical health, content, authority, competitors, and conversion paths." },
      { title: "Prioritize", body: "Rank opportunities by impact, effort, confidence, and commercial relevance." },
      { title: "Implement", body: "Improve the site foundation and highest-value existing pages first." },
      { title: "Expand", body: "Create useful coverage and earn authority around priority topics." },
      { title: "Compound", body: "Measure, refresh, consolidate, and scale what is proving valuable." },
    ],
    comparisonEyebrow: "SEO and paid media",
    comparisonTitle: "Use each channel for",
    comparisonAccent: "what it does best.",
    comparisonBody: "Search and paid campaigns are strongest when they share landing pages, audience learning, and conversion evidence.",
    comparisons: [
      { kicker: "SEO", title: "Capture durable demand", body: "Earn visibility across research and buying journeys with assets that continue working between campaigns." },
      { kicker: "Paid search", title: "Accelerate learning", body: "Reach priority demand quickly, test offers, and collect message and conversion evidence." },
      { kicker: "Connected system", title: "Share the intelligence", body: "Use paid insights to improve organic pages and organic demand data to sharpen paid campaigns." },
    ],
    ecosystemEyebrow: "Measurement ecosystem",
    ecosystemTitle: "The tools support the work,",
    ecosystemAccent: "they do not replace judgment.",
    ecosystemBody: "We combine first-party analytics, search data, crawling, performance testing, and human review.",
    ecosystem: ["Google Search Console", "Google Analytics 4", "PageSpeed Insights", "DataForSEO", "Sanity", "Structured data", "Conversion tracking", "Manual QA"],
    faqs: [
      { question: "How long does SEO take to work?", answer: "Technical and on-page improvements can create early movement, while competitive content and authority usually take longer. Timing depends on the starting point, market, implementation pace, and strength of existing signals." },
      { question: "Do you guarantee first-page rankings?", answer: "No credible SEO partner can control search engines or guarantee a specific position. We commit to a clear strategy, sound implementation, transparent reporting, and decisions grounded in evidence." },
      { question: "Is AI search optimization different from SEO?", answer: "It adds emphasis on entity clarity, structured answers, source consistency, and credible evidence, but it still depends on strong technical SEO, useful content, and authority." },
      { question: "Can you work with our existing website?", answer: "Yes. We first assess whether the current platform and structure can support the strategy. We recommend a rebuild only when the existing foundation would make progress unnecessarily slow or fragile." },
      { question: "What does SEO reporting include?", answer: "Reporting should connect visibility and traffic to qualified actions, explain what changed, identify constraints, and make the next priorities easy to understand." },
      { question: "Do you create SEO content?", answer: "Yes. Content work can include service pages, briefs, expert articles, comparisons, FAQs, local resources, and updates to existing pages." },
    ],
    related: [
      { href: "/web-development", label: "Web development", description: "Improve the technical and conversion foundation that search relies on." },
      { href: "/cro-strategy", label: "CRO strategy", description: "Turn more qualified organic visits into enquiries and sales." },
      ...sharedRelated,
    ],
    ctaEyebrow: "Start with search clarity",
    ctaTitle: "See what is limiting your",
    ctaAccent: "visibility and conversions.",
    ctaBody: "Request a free audit and we will identify the technical, content, authority, and journey gaps worth addressing first.",
  },
  social: {
    slug: "social-media-marketing",
    title: "Social Media Marketing Services | Rank It Globally — Strategy, Content & Paid Ads",
    description: "Social strategy, content production, community management, and paid campaigns connected to landing pages and measurable growth.",
    shortName: "Social Media Marketing",
    eyebrow: "Social media marketing",
    heroLead: "Build pipeline,",
    heroAccent: "not just followers.",
    heroBody: "Strategy, content, community, paid campaigns, and reporting built around a clear audience journey from first impression to qualified action.",
    heroLabel: "Content-to-campaign system",
    heroSteps: ["Listen", "Create", "Distribute", "Learn"],
    heroOutcome: "Demand + campaign intelligence",
    theme: "social",
    servicesEyebrow: "Connected social delivery",
    servicesTitle: "One message system,",
    servicesAccent: "adapted to each channel.",
    servicesBody: "Every asset has a job: teach, build trust, create demand, support an offer, or help an audience take the next step.",
    services: [
      { icon: "strategy", title: "Content strategy and calendar", body: "Audience, positioning, content pillars, channel roles, and a practical production rhythm.", tags: ["Audience", "Positioning", "Content pillars", "Calendar"] },
      { icon: "media", title: "Creative and ad design", body: "Platform-aware concepts, copy, graphics, and short-form video direction designed for testing and reuse.", tags: ["Concepts", "Copy", "Graphics", "Short-form"] },
      { icon: "ads", title: "Meta Ads", body: "Campaign structure, creative testing, audience strategy, landing-page alignment, and optimization.", tags: ["Facebook", "Instagram", "Retargeting", "Creative tests"] },
      { icon: "community", title: "LinkedIn marketing and ads", body: "Expertise-led content and paid distribution for B2B discovery, credibility, and pipeline support.", tags: ["B2B", "Thought leadership", "Lead generation", "Distribution"] },
      { icon: "community", title: "Community management", body: "Publishing, response guidance, listening, and escalation workflows that protect the brand voice.", tags: ["Publishing", "Responses", "Listening", "Brand voice"] },
      { icon: "analytics", title: "Analytics and reporting", body: "Reporting focused on creative learning, audience signals, qualified actions, and next-cycle decisions.", tags: ["Attribution", "Lead quality", "Creative insights", "Next actions"] },
    ],
    insightEyebrow: "Content with a job",
    insightTitle: "Build proof, authority, education,",
    insightAccent: "and offers in balance.",
    insightBody: "A healthy content system earns attention without asking for a sale in every post.",
    insights: [
      { kicker: "Proof", title: "Show the work and outcomes", body: "Customer evidence, process, behind-the-scenes detail, and tangible examples make claims easier to trust." },
      { kicker: "Authority", title: "Teach from real expertise", body: "Useful points of view and practical guidance help the right audience understand why the brand is credible." },
      { kicker: "Offer", title: "Make the next step clear", body: "Strong campaign moments connect a relevant message to an appropriate landing page and action." },
    ],
    workflowEyebrow: "Campaign operating rhythm",
    workflowTitle: "Plan, produce, publish, optimize,",
    workflowAccent: "then learn forward.",
    workflowBody: "Organic and paid social share one learning loop instead of becoming separate content factories.",
    workflow: [
      { title: "Plan", body: "Define audience, offer, content pillars, channels, and intended actions." },
      { title: "Produce", body: "Create coordinated copy, graphics, video direction, and variations." },
      { title: "Publish", body: "Distribute with a deliberate rhythm and connected landing journeys." },
      { title: "Optimize", body: "Test hooks, formats, audiences, placements, and conversion paths." },
      { title: "Report", body: "Turn performance into practical creative and campaign decisions." },
    ],
    comparisonEyebrow: "Organic and paid social",
    comparisonTitle: "Build familiarity and accelerate",
    comparisonAccent: "the strongest messages.",
    comparisonBody: "The right balance depends on the audience, available creative, sales cycle, and how quickly the business needs reliable learning.",
    comparisons: [
      { kicker: "Organic", title: "Earn familiarity over time", body: "Brand voice, expertise, community, customer stories, and consistent useful publishing." },
      { kicker: "Paid", title: "Test and distribute deliberately", body: "Audience structure, creative variations, offers, retargeting, and landing-page optimization." },
      { kicker: "Integrated", title: "Let each side teach the other", body: "Organic response informs paid creative; campaign learning improves content and offers." },
    ],
    ecosystemEyebrow: "Channel ecosystem",
    ecosystemTitle: "Choose platforms by audience fit,",
    ecosystemAccent: "not by noise.",
    ecosystemBody: "The mix is selected around buyer behavior, creative capacity, and the kind of action the business needs.",
    ecosystem: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube", "Meta Ads", "TikTok Ads", "Landing pages"],
    faqs: [
      { question: "Which social platform is best for our business?", answer: "The best platform depends on audience, offer, sales cycle, available creative, and campaign goal. We prioritize the channels with the strongest fit rather than spreading effort across every network." },
      { question: "Do we need to post every day?", answer: "No. A consistent, useful rhythm is more valuable than posting frequently without a clear purpose. Production should match the quality the brand can sustain." },
      { question: "Can you manage Meta and TikTok ads?", answer: "Yes. Paid campaign work can include strategy, setup, creative testing, audience structure, landing-page alignment, measurement, and optimization." },
      { question: "What is included in social media management?", answer: "Scope can include strategy, content planning, copy, creative direction, publishing, community workflows, paid campaigns, and reporting." },
      { question: "How do you measure social media performance?", answer: "We interpret reach and engagement in context, then connect them to traffic, enquiries, sales, lead quality, creative performance, and next decisions." },
      { question: "Can social media support SEO?", answer: "Yes. Social content creates demand, distributes expertise, reveals audience questions, and supplies ideas that can become useful search and website assets." },
    ],
    related: [
      { href: "/seo-services", label: "SEO services", description: "Capture the search demand that strong social campaigns help create." },
      { href: "/cro-strategy", label: "CRO strategy", description: "Improve the landing experience after a social click." },
      ...sharedRelated,
    ],
    ctaEyebrow: "Build a clearer campaign system",
    ctaTitle: "Find the gaps between attention",
    ctaAccent: "and conversion.",
    ctaBody: "Request a free audit and we will review the message, campaign journey, website experience, and measurement opportunities worth prioritizing.",
  },
  web: {
    slug: "web-development",
    title: "Web Development Services | Rank It Globally — Fast, Clean, Built to Convert",
    description: "Fast, accessible, search-ready websites and e-commerce experiences engineered around clear customer journeys and measurable conversion.",
    shortName: "Web Development",
    eyebrow: "Web development",
    heroLead: "Built to perform,",
    heroAccent: "not just look good.",
    heroBody: "Clean engineering, responsive interfaces, search-ready structure, and conversion paths designed to hold up after launch.",
    heroLabel: "Performance-ready website system",
    heroSteps: ["Structure", "Build", "Test", "Improve"],
    heroOutcome: "Fast + accessible + conversion-ready",
    theme: "web",
    servicesEyebrow: "Development capabilities",
    servicesTitle: "The right build for",
    servicesAccent: "the business behind it.",
    servicesBody: "Platform and architecture decisions follow the content, commerce, integration, ownership, and performance requirements of the project.",
    services: [
      { icon: "content", title: "Brand websites", body: "Flexible marketing sites that communicate the offer clearly and make future content easier to manage.", tags: ["Next.js", "CMS", "Responsive", "SEO-ready"] },
      { icon: "media", title: "E-commerce stores", body: "Product discovery, merchandising, checkout, and post-purchase foundations built around real buying behavior.", tags: ["Shopify", "WooCommerce", "Catalog UX", "Checkout"] },
      { icon: "ads", title: "Landing pages", body: "Focused campaign pages with clear hierarchy, persuasive proof, responsive forms, and reliable tracking.", tags: ["Campaigns", "Lead capture", "A/B ready", "Analytics"] },
      { icon: "schema", title: "Custom and headless builds", body: "Purpose-built experiences and integrations when templates cannot support the required workflow or performance.", tags: ["APIs", "Headless", "Integrations", "Custom logic"] },
      { icon: "strategy", title: "Redesigns and migrations", body: "Careful modernization that protects valuable content, URLs, data, analytics, and search equity.", tags: ["Content mapping", "Redirects", "QA", "Launch plan"] },
      { icon: "analytics", title: "Speed optimization", body: "Performance work across images, fonts, scripts, rendering, caching, and hosting behavior.", tags: ["Core Web Vitals", "Images", "Scripts", "Caching"] },
    ],
    insightEyebrow: "Baked into the build",
    insightTitle: "Quality is a set of",
    insightAccent: "decisions made early.",
    insightBody: "Accessibility, responsive behavior, search foundations, analytics, and maintainability should not arrive as launch-week patches.",
    insights: [
      { kicker: "Performance", title: "Load the important experience first", body: "Asset strategy, rendering choices, and sensible dependencies keep the interface responsive." },
      { kicker: "Clarity", title: "Make every page easy to scan", body: "Semantic structure and deliberate hierarchy help people and search systems understand the content." },
      { kicker: "Ownership", title: "Leave a system teams can run", body: "Practical content models and documentation reduce dependence on developers for routine updates." },
    ],
    workflowEyebrow: "Development process",
    workflowTitle: "Reduce surprises with",
    workflowAccent: "visible build stages.",
    workflowBody: "Content, design, engineering, and QA move together so problems surface before launch.",
    workflow: [
      { title: "Discover", body: "Clarify users, content, integrations, technical constraints, and success criteria." },
      { title: "Architect", body: "Define routes, content models, components, data flows, and platform decisions." },
      { title: "Build", body: "Develop responsive components and integrations with frequent review points." },
      { title: "Validate", body: "Test accessibility, devices, browsers, forms, analytics, SEO, and performance." },
      { title: "Launch", body: "Deploy with monitoring, redirects, documentation, and a post-launch improvement list." },
    ],
    comparisonEyebrow: "Engagement models",
    comparisonTitle: "Choose the build path that",
    comparisonAccent: "matches the risk.",
    comparisonBody: "A landing page, redesign, and custom product should not be forced through the same delivery model.",
    comparisons: [
      { kicker: "Focused", title: "Landing page or campaign build", body: "A tight scope for one offer, audience, conversion action, and measurement plan." },
      { kicker: "Growth", title: "Marketing site or store", body: "A reusable component and content system designed for ongoing campaigns and organic growth." },
      { kicker: "Custom", title: "Integrated product experience", body: "A tailored architecture for unique data, workflows, permissions, or third-party systems." },
    ],
    ecosystemEyebrow: "Technology ecosystem",
    ecosystemTitle: "Use proven tools,",
    ecosystemAccent: "with a reason for each one.",
    ecosystemBody: "We stay in sympathy with the platform already working for the business and add complexity only when it solves a real problem.",
    ecosystem: ["Next.js", "React", "Sanity", "Shopify", "WooCommerce", "Node.js", "REST APIs", "Analytics"],
    faqs: [
      { question: "How long does a website build take?", answer: "Timing depends on scope, content readiness, integrations, feedback cycles, and complexity. We define milestones before development begins so the delivery path is visible." },
      { question: "Will the website be mobile friendly?", answer: "Yes. Responsive behavior is designed and tested as part of the core experience, not added after the desktop version is finished." },
      { question: "Can we update the website ourselves?", answer: "When content ownership is a requirement, we create practical CMS fields and reusable structures so routine updates do not require code changes." },
      { question: "Do you handle hosting and deployment?", answer: "Yes. We can recommend and configure an appropriate deployment setup, connect domains, and document the environment for ongoing ownership." },
      { question: "Can you improve our existing website instead of rebuilding?", answer: "Yes. We first assess whether the existing platform and code can support the required improvements. A rebuild is recommended only when it is the clearer long-term choice." },
      { question: "Is SEO included in web development?", answer: "Technical and on-page foundations such as semantic structure, metadata support, crawlability, redirects, schema opportunities, and performance are part of a responsible build." },
    ],
    related: [
      { href: "/ui-ux-design", label: "UI/UX design", description: "Define the interface and customer journey before engineering begins." },
      { href: "/seo-services", label: "SEO services", description: "Build and grow the organic visibility the site is prepared to support." },
      ...sharedRelated,
    ],
    ctaEyebrow: "Build on a stronger foundation",
    ctaTitle: "Find the technical and journey gaps",
    ctaAccent: "holding the website back.",
    ctaBody: "Request a free audit and we will review performance, structure, SEO foundations, and conversion friction before recommending the next build step.",
  },
  design: {
    slug: "ui-ux-design",
    title: "UI/UX Design Services | Rank It Globally — Design That Converts, Not Just Impresses",
    description: "Research-led UI/UX design, wireframes, prototypes, interface systems, and mobile-first experiences built around clarity and conversion.",
    shortName: "UI/UX Design",
    eyebrow: "UI/UX design",
    heroLead: "Design that converts,",
    heroAccent: "not just impresses.",
    heroBody: "Research, information architecture, interface design, and prototyping that make complex journeys feel clear, credible, and easy to act on.",
    heroLabel: "Evidence-led interface system",
    heroSteps: ["Research", "Structure", "Design", "Validate"],
    heroOutcome: "Clarity + confidence + action",
    theme: "design",
    servicesEyebrow: "Design capabilities",
    servicesTitle: "From user evidence to",
    servicesAccent: "production-ready decisions.",
    servicesBody: "The work moves from understanding the problem to defining a coherent system your team and developers can use.",
    services: [
      { icon: "search", title: "UX research", body: "Audience, analytics, customer language, competitor patterns, and journey friction translated into design priorities.", tags: ["Interviews", "Analytics", "Journey review", "Insights"] },
      { icon: "strategy", title: "Wireframing and IA", body: "Page hierarchy, navigation, content sequence, and interaction logic resolved before visual polish.", tags: ["Sitemaps", "Flows", "Wireframes", "Content hierarchy"] },
      { icon: "media", title: "High-fidelity UI", body: "Responsive interface design with strong hierarchy, purposeful visual language, and complete interaction states.", tags: ["Responsive UI", "States", "Components", "Visual direction"] },
      { icon: "community", title: "Interactive prototyping", body: "Clickable flows that make behavior tangible and expose usability issues before development.", tags: ["Clickable flows", "Motion", "Testing", "Handoff"] },
      { icon: "profile", title: "Mobile-first design", body: "Touch targets, density, navigation, forms, and content priorities designed for smaller screens from the start.", tags: ["Touch UX", "Responsive", "Forms", "Accessibility"] },
      { icon: "schema", title: "Design systems", body: "Reusable components, tokens, patterns, and documentation that make consistency easier to maintain.", tags: ["Tokens", "Components", "Patterns", "Governance"] },
    ],
    insightEyebrow: "Design with evidence",
    insightTitle: "Replace subjective debate with",
    insightAccent: "clear decision criteria.",
    insightBody: "Good design is not decoration. It makes the offer understandable, the next action obvious, and the experience dependable across devices.",
    insights: [
      { kicker: "Comprehension", title: "Reduce the work of understanding", body: "Hierarchy, language, and layout help users recognize what matters without decoding the interface." },
      { kicker: "Confidence", title: "Make trust visible", body: "Proof, consistency, complete states, and predictable behavior make the experience feel considered." },
      { kicker: "Action", title: "Remove avoidable friction", body: "Clear paths, sensible forms, and responsive controls help intent turn into completion." },
    ],
    workflowEyebrow: "Design process",
    workflowTitle: "Move from uncertainty to",
    workflowAccent: "a validated interface system.",
    workflowBody: "Each phase narrows risk before expensive implementation decisions become difficult to change.",
    workflow: [
      { title: "Discover", body: "Understand users, business goals, current evidence, and technical constraints." },
      { title: "Define", body: "Frame journeys, content priorities, navigation, and success criteria." },
      { title: "Explore", body: "Develop wireframes and compare credible structural directions." },
      { title: "Design", body: "Create the responsive visual system, components, and interaction states." },
      { title: "Validate", body: "Prototype, review, test, refine, and prepare a clear development handoff." },
    ],
    comparisonEyebrow: "Outputs and outcomes",
    comparisonTitle: "Do not stop at",
    comparisonAccent: "beautiful screens.",
    comparisonBody: "The design package should reduce implementation ambiguity and improve the real experience after launch.",
    comparisons: [
      { kicker: "Interface", title: "A coherent visual language", body: "Typography, color, spacing, components, states, and responsive rules that work as a system." },
      { kicker: "Experience", title: "A clearer customer journey", body: "Information and interactions arranged around user questions, intent, confidence, and action." },
      { kicker: "Delivery", title: "A practical build handoff", body: "Specifications, prototypes, assets, behavior notes, and decisions developers can implement reliably." },
    ],
    ecosystemEyebrow: "Design toolkit",
    ecosystemTitle: "Collaborative tools for",
    ecosystemAccent: "visible decisions.",
    ecosystemBody: "Tools help teams inspect and discuss the same source of truth throughout discovery, design, and implementation.",
    ecosystem: ["Figma", "FigJam", "Prototypes", "Design tokens", "Accessibility review", "Responsive specs", "Content models", "Developer handoff"],
    faqs: [
      { question: "What is the difference between UI and UX?", answer: "UX focuses on how the experience is structured and works; UI focuses on how the interface communicates visually and responds. Strong product design treats them as connected disciplines." },
      { question: "Do you redesign existing websites and products?", answer: "Yes. We assess the current experience, evidence, technical constraints, and content before deciding what should be retained, improved, or rebuilt." },
      { question: "Will you create a clickable prototype?", answer: "When interaction or stakeholder alignment would benefit from it, we create prototypes for key journeys and states before development." },
      { question: "Is mobile design included?", answer: "Yes. Responsive and touch behavior are part of the core design work, with mobile priorities considered from the beginning." },
      { question: "Can your team also build the design?", answer: "Yes. Our web development work can take the approved design into a production implementation, keeping design intent and engineering decisions connected." },
      { question: "How do you measure whether a design is better?", answer: "Success criteria can include comprehension, completion, conversion, errors, engagement with key content, qualitative feedback, and operational ease." },
    ],
    related: [
      { href: "/web-development", label: "Web development", description: "Turn the approved interface system into a fast, dependable implementation." },
      { href: "/cro-strategy", label: "CRO strategy", description: "Use behavioral evidence to improve the highest-value journeys." },
      ...sharedRelated,
    ],
    ctaEyebrow: "Start with experience clarity",
    ctaTitle: "Find where the interface is creating",
    ctaAccent: "confusion or hesitation.",
    ctaBody: "Request a free audit and we will review hierarchy, usability, mobile behavior, trust, and conversion friction before recommending the right design scope.",
  },
  cro: {
    slug: "cro-strategy",
    title: "CRO Strategy & Conversion Rate Optimization | Rank It Globally — More Leads From the Same Traffic",
    description: "Conversion rate optimization strategy using audits, behavioral evidence, funnel analysis, testing, and landing-page improvements.",
    shortName: "CRO Strategy",
    eyebrow: "Conversion rate optimization",
    heroLead: "More leads from",
    heroAccent: "the same traffic.",
    heroBody: "A disciplined conversion system for finding friction, prioritizing opportunities, improving key journeys, and learning from real customer behavior.",
    heroLabel: "Conversion improvement loop",
    heroSteps: ["Observe", "Prioritize", "Test", "Learn"],
    heroOutcome: "More qualified actions per visit",
    theme: "cro",
    servicesEyebrow: "CRO toolkit",
    servicesTitle: "Find the leak, understand it,",
    servicesAccent: "then improve the journey.",
    servicesBody: "We combine quantitative signals, qualitative review, and controlled implementation so conversion work is more than a list of opinions.",
    services: [
      { icon: "search", title: "Conversion audits and heatmaps", body: "Journey review, analytics, recordings, click behavior, and heuristic analysis focused on high-value friction.", tags: ["Analytics", "Heatmaps", "Recordings", "Heuristics"] },
      { icon: "strategy", title: "A/B testing", body: "Clear hypotheses, controlled variations, measurement plans, and interpretation appropriate to traffic volume.", tags: ["Hypotheses", "Variants", "QA", "Analysis"] },
      { icon: "analytics", title: "Funnel optimization", body: "Step-by-step review of where qualified users hesitate, abandon, or take a lower-value path.", tags: ["Funnels", "Drop-off", "Segmentation", "Journeys"] },
      { icon: "media", title: "Landing-page optimization", body: "Message match, hierarchy, proof, calls to action, forms, and responsive behavior aligned to campaign intent.", tags: ["Message match", "Proof", "CTA", "Mobile"] },
      { icon: "profile", title: "Checkout and form optimization", body: "Field strategy, errors, reassurance, payment or enquiry friction, and completion behavior.", tags: ["Forms", "Checkout", "Errors", "Trust"] },
      { icon: "schema", title: "Attribution and measurement", body: "Events, conversion definitions, source context, and reporting that make experiment decisions dependable.", tags: ["Events", "Tracking", "Attribution", "Reporting"] },
    ],
    insightEyebrow: "Common revenue leaks",
    insightTitle: "Traffic cannot fix a journey that",
    insightAccent: "loses intent on arrival.",
    insightBody: "The first opportunity is often not more acquisition. It is reducing the friction already affecting qualified visitors.",
    insights: [
      { kicker: "Speed and mobile", title: "The page feels difficult before it is read", body: "Slow loading, unstable layouts, dense content, and weak touch behavior create early abandonment." },
      { kicker: "Message and proof", title: "The offer does not earn confidence", body: "Unclear value, generic claims, missing evidence, and poor hierarchy leave the buyer uncertain." },
      { kicker: "Action and completion", title: "The next step asks too much", body: "Complex forms, hidden costs, weak reassurance, and broken states interrupt high-intent journeys." },
    ],
    workflowEyebrow: "CRO engagement",
    workflowTitle: "A continuous improvement loop,",
    workflowAccent: "not a one-time redesign.",
    workflowBody: "The strongest programs preserve what is working, investigate constraints, and learn through measured changes.",
    workflow: [
      { title: "Measure", body: "Define valuable actions and confirm the data needed to understand the journey." },
      { title: "Diagnose", body: "Combine behavioral evidence, analytics, and expert review to locate friction." },
      { title: "Prioritize", body: "Score opportunities by potential impact, evidence strength, effort, and risk." },
      { title: "Improve", body: "Implement a focused change or controlled experiment with complete QA." },
      { title: "Learn", body: "Interpret the result, document insight, and choose the next strongest question." },
    ],
    comparisonEyebrow: "Traffic and conversion",
    comparisonTitle: "Acquisition fills the journey,",
    comparisonAccent: "CRO improves what happens inside it.",
    comparisonBody: "The most efficient growth plan considers both the cost of getting attention and the experience that receives it.",
    comparisons: [
      { kicker: "Acquisition", title: "Bring qualified visitors in", body: "SEO, social, paid search, referrals, and campaigns create opportunities for the site to perform." },
      { kicker: "Conversion", title: "Help more visitors complete", body: "Clear value, credible proof, useful structure, low-friction actions, and dependable interactions." },
      { kicker: "Connected growth", title: "Improve the whole equation", body: "Use conversion evidence to refine campaigns and acquisition insights to sharpen landing journeys." },
    ],
    ecosystemEyebrow: "Evidence stack",
    ecosystemTitle: "See behavior from",
    ecosystemAccent: "more than one angle.",
    ecosystemBody: "No single tool explains why people convert. We combine data sources with careful observation and business context.",
    ecosystem: ["Google Analytics 4", "Microsoft Clarity", "Heatmaps", "Session recordings", "Form analytics", "A/B testing", "User feedback", "Manual QA"],
    faqs: [
      { question: "What is conversion rate optimization?", answer: "CRO is the practice of improving the percentage and quality of visitors who complete valuable actions by studying behavior, reducing friction, and measuring changes." },
      { question: "Do we need a lot of traffic for CRO?", answer: "High traffic helps formal A/B testing, but lower-traffic sites can still benefit from analytics, recordings, usability review, message improvements, and carefully prioritized changes." },
      { question: "What counts as a conversion?", answer: "A conversion can be a purchase, qualified enquiry, booked call, completed application, account creation, or another action tied to business value." },
      { question: "Will CRO require a full redesign?", answer: "Not usually. We preserve what is working and recommend the smallest responsible change that can address the strongest evidence." },
      { question: "How long does a CRO engagement take?", answer: "The timing depends on traffic, tracking quality, implementation complexity, and how quickly useful evidence accumulates. CRO works best as an ongoing learning process." },
      { question: "Can you improve forms and checkout flows?", answer: "Yes. We review field strategy, errors, reassurance, mobile behavior, step sequence, payment or enquiry friction, and completion tracking." },
    ],
    related: [
      { href: "/ui-ux-design", label: "UI/UX design", description: "Turn conversion evidence into a clearer interface and journey." },
      { href: "/web-development", label: "Web development", description: "Implement performance and conversion improvements reliably." },
      ...sharedRelated,
    ],
    ctaEyebrow: "Start with conversion clarity",
    ctaTitle: "Find where qualified traffic is",
    ctaAccent: "losing momentum.",
    ctaBody: "Request a free audit and we will review speed, hierarchy, proof, calls to action, forms, and measurement to identify the strongest next opportunity.",
  },
};
