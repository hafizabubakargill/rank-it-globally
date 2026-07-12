import type { Metadata } from "next";
import Link from "next/link";
import { AboutGrowthGraphic, MarketingIcon } from "@/components/MarketingVisuals";
import { agencyValues, processSteps, proofStats } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "About Us | Rank It Globally",
  description:
    "Meet Rank It Globally, the AI SEO and web design agency building fast, conversion-focused websites that help businesses get found.",
  alternates: {
    canonical: "https://rankitglobally.com/about-us",
  },
};

const valueIcons = ["search", "conversion", "performance"] as const;
const processIcons = ["audit", "strategy", "launch", "growth"] as const;

export default function AboutUsPage() {
  return (
    <main className="marketing-page">
      <section className="marketing-hero">
        <div className="marketing-eyebrow">About Rank It Globally</div>
        <h1>
          We build websites that get found, trusted, and{" "}
          <span className="gtext">chosen.</span>
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

      <section className="marketing-split about-belief-section">
        <div className="about-belief-copy">
          <p className="marketing-eyebrow">What we believe</p>
          <h2>
            A better website should make <span className="gtext">growth easier to understand.</span>
          </h2>
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
        </div>
        <AboutGrowthGraphic />
      </section>

      <section className="marketing-card-grid">
        {agencyValues.map((value, index) => (
          <article className="marketing-card" key={value.title}>
            <span className="marketing-card-icon" aria-hidden="true">
              <MarketingIcon name={valueIcons[index]} />
            </span>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </article>
        ))}
      </section>

      <section className="marketing-process">
        <div>
          <p className="marketing-eyebrow">How we work</p>
          <h2>
            Strategy first. Design second. <span className="gtext">Revenue always in view.</span>
          </h2>
        </div>
        <ol>
          {processSteps.map((step, index) => (
            <li key={step}>
              <span className="marketing-process-icon" aria-hidden="true">
                <MarketingIcon name={processIcons[index]} />
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
