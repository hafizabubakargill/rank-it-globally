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

export type ProofScreenshot = {
  src: string;
  width: number;
  height: number;
};

export type ProofItem = {
  title: string;
  source: string;
  stats: ProofStat[];
  body: string[];
  // Descriptive alt text for the screenshot, also used for the placeholder
  // while the real screenshot is missing.
  alt: string;
  screenshot?: ProofScreenshot;
  footnote?: string;
};

export type ServiceFeatureBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
};

export type ComparisonRow = {
  label: string;
  rig: string;
  agency: string;
  freelancer: string;
  diy: string;
};

export type ServicePageContent = {
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
  heroPanel: { label: string; steps: string[]; outcome: string };
  proofStrip: ProofStat[];
  problem: SectionHeading & { points: { title: string; body: string }[] };
  included: SectionHeading & {
    items: { icon: ServiceIcon; title: string; body: string }[];
    features?: ServiceFeatureBlock[];
  };
  timeline: SectionHeading & { steps: { period: string; title: string; body: string }[] };
  proof: SectionHeading & {
    items: ProofItem[];
    projectSlugs?: string[];
    checklist?: { title: string; intro: string; items: { title: string; body: string }[] };
    closing?: string;
  };
  industries: SectionHeading;
  comparison: SectionHeading & { rows: ComparisonRow[] };
  faqIntro: string;
  faqs: { question: string; answer: string }[];
  guides: { href: string; label: string; description: string }[];
  relatedServices: string[];
  finalCta: { eyebrow: string; title: string; accent: string; body: string };
};
