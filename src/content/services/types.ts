// Content model for the service pages. Copy strings may contain inline links
// written as [label](/path); they render as links on the page and are reduced
// to plain text in JSON-LD.

export type ServiceTheme = "ai" | "seo" | "local" | "web" | "ecommerce" | "cro" | "reputation";

export type ServiceIcon =
  | "profile"
  | "citations"
  | "reviews"
  | "schema"
  | "content"
  | "ai"
  | "strategy"
  | "media"
  | "community"
  | "analytics"
  | "search"
  | "pin"
  | "mobile"
  | "shield"
  | "cart"
  | "cro";

export type SectionHeading = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
};

export type ProofStat = { value: string; label: string };

export type ProofScreenshot = { src: string; width: number; height: number };

export type ProofItem = {
  title: string;
  source: string;
  stats: ProofStat[];
  body: string[];
  // Descriptive alt text for the screenshot once it exists.
  alt: string;
  screenshot?: ProofScreenshot;
  footnote?: string;
};

export type Scenario = {
  icon: ServiceIcon;
  business: string;
  where: string;
  situation: string;
  goal: string;
  plan: string;
};

export type ComparisonRow = {
  label: string;
  rig: string;
  agency: string;
  freelancer: string;
  diy: string;
};

export type FeatureBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
};

// Fields every service page has, regardless of its layout.
export type ServiceCore = {
  slug: string;
  name: string;
  serviceType: string;
  theme: ServiceTheme;
  title: string;
  description: string;
  h1Lead: string;
  h1Accent: string;
  heroPromise: string;
  heroIntro: string;
  ctaLabel: string;
  ctaMicro: string;
  sticky: string;
  proofStrip: ProofStat[];
  problem: SectionHeading & { points: { quote: string; body: string; fix: string }[] };
  included: SectionHeading & { items: { icon: ServiceIcon; title: string; body: string }[] };
  timeline: SectionHeading & { steps: { period: string; title: string; body: string }[] };
  proof: SectionHeading & { items: ProofItem[]; closing?: string };
  scenarios: SectionHeading & { items: Scenario[] };
  midCta: { title: string; body: string };
  industries: SectionHeading;
  comparison: SectionHeading & { rows: ComparisonRow[] };
  faqIntro: string;
  faqs: { question: string; answer: string }[];
  guides: { href: string; label: string; description: string }[];
  relatedServices: string[];
  finalCta: { title: string; accent: string; body: string; bullets: string[] };
};

// Fields the shared CTA, FAQ, guides and audit-form blocks read. Service pages
// and industry pages both provide them.
export type PageCommon = Pick<
  ServiceCore,
  "slug" | "ctaLabel" | "sticky" | "midCta" | "faqIntro" | "faqs" | "guides" | "relatedServices" | "finalCta"
> & {
  // Public path when it isn't "/<slug>", e.g. "/industries/<slug>".
  path?: string;
  theme?: ServiceTheme;
  // Pre-selected "What do you want help with?" options on the audit form.
  auditScope?: string[];
};
