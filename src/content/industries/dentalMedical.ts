import { guides, scottsdalePractice } from "../services/shared";
import type { SectionHeading } from "../services/types";
import type { IndustryCore } from "./types";

export const dentalMedicalPage: IndustryCore = {
  slug: "dental-medical-marketing",
  path: "/industries/dental-medical-marketing",
  name: "Dental & Medical Marketing",
  title: "Dental & Medical Practice Marketing | Local SEO & AI Search",
  description:
    "Marketing for independent dentists, orthodontists and medical practices: win local search and AI answers against DSO-backed chains, with HIPAA-aware reviews.",
  h1Lead: "Dental & Medical Marketing",
  h1Accent: "for independent practices.",
  heroPromise: "Compete with the chains on trust, not ad budget.",
  heroIntro:
    "You own the practice, and you're up against groups with central marketing teams. We help independent dentists, orthodontists and medical practices show up on Google Maps and in AI answers when patients look for a provider, with every review and page handled in a HIPAA-aware way.",
  ctaLabel: "Get My Free Practice Audit",
  ctaMicro: "We compare your visibility, reviews and booking path with the practices patients choose instead of you.",
  sticky: "Is the group practice down the road outranking you?",
  auditChips: ["Map Pack rankings", "AI answers", "Reviews & replies", "Booking path"],
  problem: {
    eyebrow: "Sound familiar?",
    title: "You're competing with",
    accent: "a corporate marketing department.",
    intro: "Independent practices still deliver the care patients remember. But the way patients find a provider has changed, and consolidation has changed who you're up against.",
    points: [
      {
        quote: "A DSO bought the practice down the street, and now they're everywhere.",
        body: "About 1 in 7 US dentists was affiliated with a dental service organization in 2023, and more than 1 in 4 dentists within ten years of graduating were in 2024 (ADA Health Policy Institute). Private equity has moved into medical specialties too. Groups pool marketing budgets that one practice can't match.",
        fix: "Local visibility that rewards relevance and reviews, not spend.",
      },
      {
        quote: "Patients ask ChatGPT for a dentist before they ever call us.",
        body: "People now ask AI assistants and Google's AI Overviews \"Is there a good family dentist near me taking new patients?\" The answer draws on reviews, profiles and clear pages about your services and insurance.",
        fix: "Practice facts, services and FAQs that AI tools can read and repeat.",
      },
      {
        quote: "We can't even reply to reviews properly.",
        body: "A reply that confirms someone is your patient can break HIPAA, and HHS has fined dental practices for exactly that. So many practices stop replying at all, which looks like no one is listening.",
        fix: "Replies written to be helpful without revealing patient information.",
      },
      {
        quote: "New patients want to book online, and our site makes them call.",
        body: "Patients compare practices on their phone, often after hours. If your insurance list, hours and booking button are hard to find, they choose the practice where it takes two taps.",
        fix: "A mobile booking path with insurance, hours and new-patient info up front.",
      },
    ],
  },
  segments: {
    eyebrow: "By specialty",
    title: "Each kind of practice",
    accent: "loses patients differently.",
    intro: "A pediatric dentist and a dermatologist share one thing: patients judge them online before they call. What they search for, and what makes them choose, is different.",
    items: [
      { icon: "profile", name: "General & family dentistry", examples: "Cleanings, fillings, emergency visits", pain: "Patients search by insurance: \"dentist near me that takes my plan.\" Most practice sites hide the insurance list on a PDF or don't have one.", fix: "Insurance and new-patient pages Google and AI tools can actually read." },
      { icon: "community", name: "Orthodontics", examples: "Braces, clear aligners, consultations", pain: "Parents and adults compare options for weeks, and mail-order aligner brands crowd the search results.", fix: "Treatment-option content that answers the questions before the consult." },
      { icon: "shield", name: "Implants & cosmetic dentistry", examples: "Implants, veneers, whitening", pain: "High-value cases come from patients who research hard. Superlatives like \"best implant dentist\" can break state board advertising rules.", fix: "Credential-led pages that build trust within your board's rules." },
      { icon: "reviews", name: "Pediatric dentistry", examples: "First visits, sealants, special needs care", pain: "Parents choose on reviews and how calm the office feels. A few old reviews and stock photos won't convince them.", fix: "Steady recent reviews and real photos of your office and team." },
      { icon: "pin", name: "Independent primary care", examples: "Family medicine, direct primary care, urgent care", pain: "Hospital systems dominate \"doctor near me\" searches, and their brands are better known than yours.", fix: "Location pages and a Google profile that win nearby searches." },
      { icon: "analytics", name: "Specialty practices", examples: "Dermatology, physical therapy, podiatry", pain: "Referrals used to fill the schedule. Now more patients search by condition, then pick whoever explains it clearly.", fix: "Condition and treatment pages written for patients, reviewed by you." },
    ],
  },
  included: {
    eyebrow: "What we do",
    title: "Everything between a patient's first search",
    accent: "and a booked appointment.",
    intro: "We focus on organic search, AI answers, reviews and your website. We don't run paid ads.",
    items: [
      { icon: "pin", title: "Google Business Profile and Maps", body: "Categories, services, hours, insurance attributes and photos for every location. See [Local SEO & Google Business Profile](/local-seo-services)." },
      { icon: "ai", title: "AI answer visibility", body: "Structured FAQs, schema and consistent practice facts so AI assistants can recommend you. See [AI SEO & GEO](/ai-seo-services)." },
      { icon: "reviews", title: "HIPAA-aware review system", body: "Policy-safe review requests and replies that never confirm who is a patient. See [Review & Reputation Management](/reputation-management)." },
      { icon: "content", title: "Service and condition pages", body: "Plain-English pages about what you treat, written by us and approved by you before anything goes live." },
      { icon: "mobile", title: "Booking-ready website", body: "Fast mobile pages with insurance, hours and online booking easy to find. See [Web Design & Development](/web-development)." },
      { icon: "analytics", title: "Privacy-safe tracking", body: "Calls and booking requests measured without sending patient information to ad platforms." },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "What a trusted local practice",
    accent: "looks like on Google.",
    intro: "A real Google Business Profile from our client work. The practice is unnamed until we have written permission to share it.",
    items: [
      {
        ...scottsdalePractice,
        body: [
          "This naturopathic practice in Scottsdale, Arizona holds a 4.8-star average from 36 Google reviews. For a specialty practice, a strong rating from real patients matters more than raw volume.",
        ],
      },
    ],
    closing: "Reviews are one part of local visibility. See [Local SEO & Google Business Profile](/local-seo-services).",
  },
  rules: {
    eyebrow: "Compliance built in",
    title: "Healthcare marketing",
    accent: "without the compliance scares.",
    intro: "Healthcare has more advertising rules than almost any other industry. These are the ones we plan around from day one.",
    items: [
      { title: "No patient information in marketing", body: "HIPAA requires written patient authorization before using health information in marketing. Review replies never confirm someone is a patient." },
      { title: "No trackers on patient forms", body: "Ad-platform pixels on booking and intake pages can share health data. The FTC acted against GoodRx and BetterHelp over this in 2023. We keep them off." },
      { title: "Claims your board allows", body: "Many state dental and medical boards restrict words like \"best\" or \"#1\" and limit who can call themselves a specialist. We write within your state's rules." },
      { title: "Honest reviews and testimonials", body: "The FTC's Endorsement Guides and its rule on fake reviews apply to practices too. We never buy, write or filter reviews, and testimonials need patient consent." },
    ],
    note: "Copy is about your practice and how to book, never about clinical outcomes. Final responsibility for legal and clinical compliance stays with the practice, and you approve every page before it goes live.",
  },
  timeline: {
    eyebrow: "How it works",
    title: "Your first 90 days",
    accent: "with us.",
    intro: "Patient-facing basics come first, so the visibility we build turns into booked visits.",
    steps: [
      { period: "Days 1–30", title: "Audit and quick fixes", body: "Google profiles corrected, insurance and hours updated, privacy-safe tracking in place." },
      { period: "Days 31–60", title: "Pages and reviews", body: "Service and new-patient pages published, HIPAA-aware review requests and replies switched on." },
      { period: "Days 61–90", title: "AI answers and reporting", body: "FAQ and schema improvements for AI tools, and your first report on calls and booking requests." },
    ],
  },
  plan: {
    eyebrow: "One plan",
    title: "One plan built for",
    accent: "independent practices.",
    intro: "No bundle of add-ons. One plan, shaped by your audit, your locations and the services you want to grow.",
    name: "Independent Practice Growth Plan",
    summary: "The local search, AI visibility and review work that helps patients choose you, run with your approval at every step.",
    includes: [
      "Google Business Profile management for each location",
      "Service, insurance and new-patient pages, approved by you",
      "HIPAA-aware review requests and replies",
      "AI answer visibility and medical schema",
      "Monthly report: calls, booking requests and rankings",
    ],
    note: "We quote after your free audit, based on your locations, specialties and competition. No published rate card.",
  },
  midCta: {
    title: "See which practices patients pick instead of you.",
    body: "Our free audit compares your Maps visibility, reviews and booking path with the top practices near you.",
  },
  faqIntro: "What practice owners ask us about patient marketing, privacy and competing with larger groups.",
  faqs: [
    {
      question: "Can an independent practice really compete with a DSO or hospital system?",
      answer:
        "Yes. Google's local results weigh relevance, distance and prominence, which includes reviews. Budget alone doesn't buy the Map Pack. A practice with a complete profile, steady recent reviews and clear service pages can outrank a bigger group nearby.",
    },
    {
      question: "How do you handle HIPAA in reviews and marketing?",
      answer:
        "We never use patient health information in marketing without written authorization. Review replies thank people or address concerns without confirming they're a patient, and we keep ad-platform trackers off booking and intake pages. You approve sensitive replies before they're posted.",
    },
    {
      question: "Do you write content about treatments?",
      answer:
        "Yes, in plain English and about your practice: what you offer, who it's for and how to book. We don't make claims about clinical outcomes, and a clinician at your practice approves every page before it goes live.",
    },
    {
      question: "Do you work with practices that are part of a DSO?",
      answer:
        "We work with practice owners who make their own marketing decisions. If your marketing is run centrally by a DSO or hospital system, it's usually not something you can hire us for directly.",
    },
    {
      question: "How do patients find practices through AI tools?",
      answer:
        "Patients ask ChatGPT, Google's AI Overviews and similar tools for a provider. These tools draw on reviews, Google profiles and clear pages about your services, insurance and hours. We make those consistent and easy to quote. See our [AI SEO & GEO](/ai-seo-services) page.",
    },
    {
      question: "Do you run Google or Meta ads for practices?",
      answer:
        "No. We focus on organic search, AI answers, reviews and your website. Those keep bringing patients without paying per click, and they make any ads you run elsewhere work better.",
    },
  ],
  guides: [guides.aiOverviews, guides.notShowingUp],
  relatedServices: ["/local-seo-services", "/reputation-management", "/ai-seo-services"],
  auditScope: ["Local SEO / Google Business Profile"],
  finalCta: {
    title: "Find out what patients see",
    accent: "before they call.",
    body: "Tell us about your practice and locations. We'll show you how you appear on Maps and in AI answers, and what to fix first.",
    bullets: [
      "Maps visibility for your key services vs. nearby practices",
      "Review volume, recency and reply check",
      "Booking path and insurance information review",
    ],
  },
  hub: {
    description: "Maps visibility, AI answers and HIPAA-aware reviews for independent dental and medical practices.",
    audiences: ["Dentists", "Orthodontists", "Independent medical practices", "Specialty practices"],
  },
};

export const practiceMatchup: SectionHeading & { rows: { them: string; you: string }[] } = {
  eyebrow: "Independent vs. group",
  title: "They have the budget.",
  accent: "You have what patients choose on.",
  intro: "Consolidated groups win on spend. Patients still choose on trust, convenience and reviews, and that's where an independent practice can win.",
  rows: [
    { them: "Central marketing team and pooled ad budget", you: "A doctor patients know by name" },
    { them: "One brand message across dozens of offices", you: "Reviews that mention your team personally" },
    { them: "Call centers and generic booking", you: "Local photos, real staff and a direct line" },
    { them: "Location pages from a template", you: "Pages that answer your community's questions" },
  ],
};
