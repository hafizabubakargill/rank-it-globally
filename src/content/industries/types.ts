// Content model for the industry pages (/industries/<slug>). They reuse the
// service-page kit, so the shared CTA, FAQ and form fields match PageCommon.
// Copy strings may contain inline links written as [label](/path).

import type { PageCommon, ProofItem, SectionHeading, ServiceIcon } from "../services/types";

export type IndustrySegment = {
  icon: ServiceIcon;
  name: string;
  examples: string;
  pain: string;
  fix: string;
};

export type IndustryRule = { title: string; body: string };

export type IndustryCore = PageCommon & {
  path: string;
  // Short label used in the breadcrumb, schema and the /industries hub.
  name: string;
  title: string;
  description: string;
  h1Lead: string;
  h1Accent: string;
  heroPromise: string;
  heroIntro: string;
  ctaMicro: string;
  // What the free audit looks at, shown as chips under the hero CTA.
  auditChips: string[];
  problem: SectionHeading & { points: { quote: string; body: string; fix: string }[] };
  segments: SectionHeading & { items: IndustrySegment[] };
  included: SectionHeading & { items: { icon: ServiceIcon; title: string; body: string }[] };
  // Only real, permissioned results. Leave undefined when there are none.
  proof?: SectionHeading & { items: ProofItem[]; closing?: string };
  rules: SectionHeading & { items: IndustryRule[]; note: string };
  timeline: SectionHeading & { steps: { period: string; title: string; body: string }[] };
  plan: SectionHeading & { name: string; summary: string; includes: string[]; note: string };
  // Card copy for the /industries hub.
  hub: { description: string; audiences: string[] };
};
