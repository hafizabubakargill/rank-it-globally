import type { Metadata } from "next";
import Link from "next/link";
import { agencyValues, processSteps, proofStats } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "About Us | Rank It Globally",
  description:
    "Meet Rank It Globally, the AI SEO and web design agency building fast, conversion-focused websites that help businesses get found.",
  alternates: {
    canonical: "https://rankitglobally.com/about-us",
  },
};

const aboutFaqs = [
  {
    question: "Do you only build websites, or do you also help with SEO?",
    answer:
      "We do both. The website is built with technical SEO, AI-search structure, speed, and conversion flow in mind so design and rankings support the same business goal.",
  },
  {
    question: "Can you improve an existing website instead of rebuilding it?",
    answer:
      "Yes. We start with an audit to see whether a focused optimization pass, landing page refresh, or full redesign will create the biggest improvement.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with local service businesses, e-commerce brands, clinics, SaaS and tech teams, law firms, real estate teams, and growth-focused small businesses.",
  },
  {
    question: "What makes Rank It Globally different?",
    answer:
      "We combine UI/UX, SEO, AI-search readiness, and conversion strategy in one build. The goal is not just a prettier website, but a clearer path to more qualified leads.",
  },
  {
    question: "What happens after I request a free audit?",
    answer:
      "We review the website, check the biggest visibility and conversion issues, email the audit summary, and invite you to book a call to walk through practical next steps.",
  },
];

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AboutUsPage() {
  return (
    <main className="marketing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />
      <section className="marketing-hero">
        <div className="marketing-eyebrow">About Rank It Globally</div>
        <h1>
          We build websites that get found, trusted, and chosen.
        </h1>
        <p>
          Rank It Globally combines AI search optimization, technical SEO,
          conversion-focused design, and clean development so your website
          becomes a real growth channel instead of a digital brochure.
        </p>
        <div className="marketing-actions">
          <Link className="cta-e cta-e-lg" href="/free-audit">
            Get My Free Audit <span className="ar">→</span>
          </Link>
          <Link className="marketing-link" href="/case-studies">
            View case studies
          </Link>
        </div>
      </section>

      <section className="marketing-stats" aria-label="Rank It Globally proof">
        {proofStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="marketing-split">
        <div>
          <p className="marketing-eyebrow">What we believe</p>
          <h2>A better website should make growth easier to understand.</h2>
        </div>
        <div className="marketing-copy">
          <p>
            We work with service businesses, e-commerce brands, clinics,
            agencies, and local companies that need more than a good-looking
            site. They need pages that load fast, explain clearly, rank
            properly, and turn the right visitors into leads.
          </p>
          <p>
            Our approach is simple: make the business easier for search engines
            and AI systems to understand, then make the offer easier for humans
            to trust.
          </p>
        </div>
      </section>

      <section className="marketing-card-grid">
        {agencyValues.map((value) => (
          <article className="marketing-card" key={value.title}>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
          </article>
        ))}
      </section>

      <section className="marketing-process">
        <div>
          <p className="marketing-eyebrow">How we work</p>
          <h2>Strategy first. Design second. Revenue always in view.</h2>
        </div>
        <ol>
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="about-faq-section" id="faq">
        <div className="case-list-head">
          <p className="marketing-eyebrow">FAQs</p>
          <h2>Common questions before working with us</h2>
        </div>
        <div className="about-faq-grid">
          {aboutFaqs.map((faq) => (
            <article className="about-faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
