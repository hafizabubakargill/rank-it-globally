import type { Metadata } from "next";
import Link from "next/link";
import { publicProjects } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Case Studies | Rank It Globally",
  description:
    "Explore Rank It Globally website, SEO, e-commerce, local service, and conversion-focused project examples.",
  alternates: {
    canonical: "https://rankitglobally.com/case-studies",
  },
};

const featured = publicProjects.slice(0, 6);
const categories = Array.from(new Set(publicProjects.map((project) => project.category)));

export default function CaseStudiesPage() {
  return (
    <main className="marketing-page case-page">
      <section className="marketing-hero">
        <div className="marketing-eyebrow">Case Studies</div>
        <h1>Websites built to make the next click easier.</h1>
        <p>
          A growing library of live websites we have designed, developed, or
          optimized across e-commerce, local services, health, SaaS, nonprofits,
          and conversion-focused landing pages.
        </p>
        <div className="marketing-actions">
          <Link className="cta-e cta-e-lg" href="/free-audit">
            Audit my website <span className="ar">→</span>
          </Link>
          <Link className="marketing-link" href="/#portfolio">
            View homepage portfolio
          </Link>
        </div>
      </section>

      <section className="case-category-row" aria-label="Project categories">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className="case-feature-grid">
        {featured.map((project) => (
          <a
            className="case-feature-card"
            href={project.url}
            key={project.slug}
            target="_blank"
            rel="noreferrer"
          >
            <div className="case-feature-image">
              <img
                src={project.screenshot}
                alt={`${project.name} website preview`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="case-feature-copy">
              <span>{project.category}</span>
              <h2>{project.name}</h2>
              <p>
                {project.platform} · {project.location}
              </p>
              <strong>{project.result}</strong>
            </div>
          </a>
        ))}
      </section>

      <section className="case-list-section">
        <div className="case-list-head">
          <p className="marketing-eyebrow">Project library</p>
          <h2>More live builds and optimization work</h2>
        </div>
        <div className="case-mini-grid">
          {publicProjects.slice(6).map((project) => (
            <a
              className="case-mini-card"
              href={project.url}
              key={project.slug}
              target="_blank"
              rel="noreferrer"
            >
              <span>{project.category}</span>
              <strong>{project.name}</strong>
              <small>
                {project.platform} · {project.country}
              </small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
