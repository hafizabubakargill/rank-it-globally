import type { Metadata } from "next";
import Image from "next/image";
import LpLogoMark from "@/components/LpLogoMark";
import LpWorkSlider from "@/components/LpWorkSlider";
import LpVideoTestimonials from "@/components/LpVideoTestimonials";
import LpClientLogos from "@/components/LpClientLogos";
import LpStickyMobileCta from "@/components/LpStickyMobileCta";
import TrackedCalendlyLink from "@/components/TrackedCalendlyLink";
import ClutchReviews from "@/components/ClutchReviews";
import { BellevueServiceFaqs } from "@/components/bellevue-services/BellevueServiceFaqs";
import { agencyValues, publicProjects, conversionUpsideCalendlyUrl } from "@/content/publicPages";
import { lpCaseStudies } from "@/content/lpCaseStudies";

export const metadata: Metadata = {
  title: "See Your Conversion Rate Upside | Rank It Globally",
  description:
    "Real before/after conversion, AOV, and revenue-per-visitor lifts from three product page rebuilds. See what a conversion rate optimization rebuild could do for your ecommerce store.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://rankitglobally.com/conversion-upside",
  },
};

const caseRowCtaLabels: Record<string, string> = {
  "louvered-pergola": "See what we'd rebuild for an outdoor brand",
  "forever-highchair": "See what we'd rebuild for a baby gear brand",
  "heavyweight-hoodie": "See what we'd rebuild for an apparel brand",
};

const heroBullets = [
  "Backed by 150+ website and store builds, not a generic playbook",
  "Every change mapped to where your specific visitors were dropping off",
  "The same before-and-after numbers you'll see below, every time",
];

// Doubled for a seamless loop, same crop technique as the work grid below
// (source screenshots are full-page captures, so object-fit: cover is
// required, not optional).
const heroMarqueeProjects = publicProjects.slice(0, 9);
const heroMarqueeTrack = [...heroMarqueeProjects, ...heroMarqueeProjects];

// Averages across the three real rebuilds in lpCaseStudies.ts
// (+50/+84/+47 conversion, +27/+26/+26 AOV, +91/+80/+85 RPV) — used in the
// Difference section's "us" stat panel. The pasted before/after screenshot
// referenced in chat still isn't accessible as a file on this machine, so
// this real, computed data stands in for it — happy to swap in the actual
// image the moment it's sent as a file.
const aggregateLifts = [
  { label: "Conversion rate", value: "+60%" },
  { label: "Average order value", value: "+26%" },
  { label: "Revenue per visitor", value: "+85%" },
];

const differencePairs = [
  {
    problem: "Guessing what's actually costing you sales",
    fix: "Your actual page, traffic, and drop-off points — not a generic brief",
  },
  {
    problem: "A theme that looks like every other store in your niche",
    fix: "Structure, copy, trust, and pricing clarity built for your product",
  },
  {
    problem: "Checkout and mobile friction nobody's ever measured",
    fix: "Mobile friction found and fixed, not assumed away",
  },
  {
    problem: "\"It looks better\" as the only proof it worked",
    fix: "Conversion rate, AOV, and revenue per visitor vs. your baseline",
  },
];

const faqs = [
  {
    question: "How fast can you turn around a product page redesign?",
    answer:
      "Most single product-page rebuilds are scoped, designed, and launched in 1 to 2 weeks. On the call, we'll give you a real timeline based on your platform and how many pages are in scope.",
  },
  {
    question: "Will a redesign hurt my SEO or existing traffic?",
    answer:
      "No — a conversion-focused rebuild keeps your existing URLs, content structure, and rankings intact. We're changing how the page converts the traffic you already have, not starting your SEO over.",
  },
  {
    question: "Do you work with Shopify, WooCommerce, or other platforms?",
    answer:
      "Yes. Most of our product page conversion rate optimization work is on Shopify, with WooCommerce and custom storefronts as well. Tell us your platform on the call and we'll confirm scope on the spot.",
  },
  {
    question: "What happens on the free strategy call?",
    answer:
      "We look at your actual product page and traffic together, point out the highest-impact conversion issues, and tell you plainly whether a rebuild is worth it for your numbers. No pitch deck, no pressure.",
  },
  {
    question: "How is this different from just switching themes?",
    answer:
      "A theme swap changes how the page looks. We rebuild the structure, copy, trust signals, and pricing clarity around why visitors on your specific product page aren't converting — that's the part a template can't do for you.",
  },
  {
    question: "What kind of results are realistic?",
    answer:
      "Our three most recent product page rebuilds saw 47% to 84% higher conversion rates and 80% to 91% higher revenue per visitor. Your baseline and traffic quality will shape your own numbers — we'll walk through what's realistic for your store on the call.",
  },
];

export default function CaseStudiesLandingPage() {
  return (
    <main className="marketing-page lp-page">
      <LpStickyMobileCta href={conversionUpsideCalendlyUrl} label="Get Your Free Strategy Call" />

      <LpLogoMark />

      <section className="lp-hero-v2">
        <div className="lp-hero-stat-callout">
          Up to <strong>91% more revenue per visitor</strong>, same traffic
        </div>
        <h1>
          Your traffic isn&apos;t the problem.
          <br />
          <span className="gtext">Your product page is.</span>
        </h1>
        <p className="lp-hero-sub">
          We rebuilt three ecommerce product pages end to end — structure,
          copy, trust, and pricing clarity — without touching traffic, price,
          or the product itself. Here is exactly what changed and what it
          did to the numbers.
        </p>
        <ul className="lp-hero-bullets">
          {heroBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <TrackedCalendlyLink className="cta-e cta-e-lg" href={conversionUpsideCalendlyUrl}>
          Book Your Free Strategy Call <span className="ar">→</span>
        </TrackedCalendlyLink>
      </section>

      <div className="lp-hero-marquee" aria-hidden="true">
        <div className="lp-hero-marquee-track">
          {heroMarqueeTrack.map((project, index) => (
            <div className="lp-hero-marquee-tile" key={`${project.slug}-${index}`}>
              <img src={project.screenshot} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>

      <section className="lp-authority-section" aria-labelledby="lp-authority-title">
        <p className="marketing-eyebrow">Why brands trust us</p>
        <h2 id="lp-authority-title">
          150+ ecommerce and marketing builds.{" "}
          <span className="gtext">One conversion-first approach.</span>
        </h2>
        <div className="lp-authority-grid">
          {agencyValues.map((value) => (
            <div className="lp-authority-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="lp-lead-section lp-accent-soft"
        aria-labelledby="lp-lead-title"
      >
        <p className="marketing-eyebrow">Get your breakdown</p>
        <h2 id="lp-lead-title">
          Tell us about your product page.{" "}
          <span className="gtext">We&apos;ll tell you what we&apos;d fix first.</span>
        </h2>
        <p>
          No pitch deck. No retainer talk. Just a straight read on where your
          product page is leaving revenue on the table.
        </p>
        <TrackedCalendlyLink className="cta-e cta-e-lg" href={conversionUpsideCalendlyUrl}>
          Book Your Free Strategy Call <span className="ar">→</span>
        </TrackedCalendlyLink>
      </section>

      <LpClientLogos />

      <section className="lp-cases-section" aria-labelledby="lp-cases-title">
        <p className="marketing-eyebrow">The three rebuilds</p>
        <h2 id="lp-cases-title">
          Same product, same traffic —{" "}
          <span className="gtext">a different result.</span>
        </h2>
        <div className="lp-cases-stack">
          {lpCaseStudies.map((study, index) => (
            <article className="lp-case-row" key={study.slug}>
              <div className="lp-case-row-image">
                <Image
                  src={study.image}
                  alt={study.imageAlt}
                  width={1254}
                  height={1254}
                  sizes="(max-width: 900px) 92vw, 480px"
                  priority={index === 0}
                />
              </div>
              <div className="lp-case-row-copy">
                <p className="lp-case-category">{study.category}</p>
                <h3>{study.productName}</h3>
                <p className="lp-case-summary">{study.summary}</p>
                <div className="lp-case-lifts">
                  <span className="lp-case-lift-chip">
                    {study.conversionLift} <small>Conversion</small>
                  </span>
                  <span className="lp-case-lift-chip">
                    {study.aovLift} <small>AOV</small>
                  </span>
                  <span className="lp-case-lift-chip">
                    {study.rpvLift} <small>RPV</small>
                  </span>
                </div>
                <TrackedCalendlyLink
                  className="cta-e cta-e-lg lp-case-row-cta"
                  href={conversionUpsideCalendlyUrl}
                >
                  {caseRowCtaLabels[study.slug]} <span className="ar">→</span>
                </TrackedCalendlyLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-social-proof-section">
        <LpVideoTestimonials />
      </section>

      <section className="lp-difference-section" aria-labelledby="lp-difference-title">
        <p className="marketing-eyebrow">The difference</p>
        <h2 id="lp-difference-title">
          Most redesigns change how it looks.{" "}
          <span className="gtext">We change how it performs.</span>
        </h2>
        <div className="lp-difference-grid">
          <div className="lp-difference-col lp-difference-them">
            <span className="lp-difference-col-label">Most agencies</span>
            <ul>
              {differencePairs.map((pair) => (
                <li key={pair.problem}>{pair.problem}</li>
              ))}
            </ul>
            <svg
              className="lp-difference-spark"
              viewBox="0 0 200 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polyline
                points="0,40 25,42 50,30 75,45 100,38 125,48 150,35 175,44 200,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="lp-difference-col lp-difference-us">
            <span className="lp-difference-col-label">Rank It Globally</span>
            <ul>
              {differencePairs.map((pair) => (
                <li key={pair.fix}>{pair.fix}</li>
              ))}
            </ul>
            <div className="lp-difference-stats">
              {aggregateLifts.map((stat) => (
                <div className="lp-difference-stat" key={stat.label}>
                  <span>{stat.value}</span>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
            <p className="lp-difference-note">
              Average lift across the three real rebuilds above — same
              product, same traffic, only the page changed.
            </p>
          </div>
        </div>
      </section>

      {/* "How it actually happens" section hidden pending a Figma-based
          redesign (blocked on Figma file access as of now) — LpTurtleApproach
          and its steps data are still in the codebase, just unused here. */}

      <LpWorkSlider />

      <section className="lp-social-proof-section">
        <ClutchReviews
          ctaHref={conversionUpsideCalendlyUrl}
          ctaLabel="Book Your Free Strategy Call"
        />
      </section>

      <section className="lp-faq-section" aria-labelledby="lp-faq-title">
        <p className="marketing-eyebrow">Questions</p>
        <h2 id="lp-faq-title">
          Before you book, <span className="gtext">here&apos;s what people ask.</span>
        </h2>
        <BellevueServiceFaqs items={faqs} idPrefix="lp-case-studies" />
      </section>

      <section className="lp-final-cta" aria-labelledby="lp-final-cta-title">
        <div className="lp-final-cta-copy">
          <p className="marketing-eyebrow">Not ready for a full audit?</p>
          <h2 id="lp-final-cta-title">
            One optimized product page.{" "}
            <span className="gtext">That&apos;s all it takes.</span>
          </h2>
        </div>
        <div className="lp-final-cta-card">
          <span className="lp-final-cta-badge">Available now</span>
          <div className="lp-final-cta-avatars">
            <span className="lp-final-cta-avatar">AB</span>
            <span className="lp-final-cta-avatar">HS</span>
            <span className="lp-final-cta-avatar">You</span>
          </div>
          <h3>Quick 15-min call</h3>
          <p>Pick a time, we&apos;ll do the rest.</p>
          <TrackedCalendlyLink className="cta-e cta-e-lg" href={conversionUpsideCalendlyUrl}>
            Book Your Free Strategy Call <span className="ar">→</span>
          </TrackedCalendlyLink>
        </div>
      </section>
    </main>
  );
}
