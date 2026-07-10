import type { Metadata } from "next";
import Link from "next/link";
import { publicProjects, type ProjectCard } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Case Studies | Rank It Globally",
  description:
    "Explore Rank It Globally website, SEO, e-commerce, local service, and conversion-focused project examples.",
  alternates: {
    canonical: "https://rankitglobally.com/case-studies",
  },
};

const workCategories = [
  "Web Portfolio",
  "SEO",
  "Social Media",
  "Ads",
  "E-Commerce",
  "Local Services",
];

function getWorkTags(project: ProjectCard) {
  const searchable = [
    project.slug,
    project.name,
    project.category,
    project.platform,
    project.result,
  ]
    .join(" ")
    .toLowerCase();
  const tags = ["Web Portfolio"];

  if (
    project.category === "Local Service" ||
    /dental|paint|cleaning|auto|forklift|salon|law|real estate|local/.test(
      searchable,
    )
  ) {
    tags.push("SEO");
  }

  if (/prana|beauty|habeora|moxe|newtiful|fortune|nail|social/.test(searchable)) {
    tags.push("Social Media");
  }

  if (/landing|lead|conversion|finance|loan|ads|ppc|shopify/.test(searchable)) {
    tags.push("Ads");
  }

  if (
    project.category === "E-Commerce" ||
    /shopify|woocommerce|store|retail|product|dtc|e-commerce/.test(searchable)
  ) {
    tags.push("E-Commerce");
  }

  if (project.category === "Local Service") {
    tags.push("Local Services");
  }

  return Array.from(new Set(tags));
}

function getCardSize(index: number) {
  if (index % 9 === 0) return "large";
  if (index % 5 === 0) return "wide";
  if (index % 4 === 0) return "tall";
  return "standard";
}

const masonryProjects = publicProjects.map((project, index) => ({
  ...project,
  tags: getWorkTags(project),
  cardSize: getCardSize(index),
}));

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

      <section
        className="case-category-row case-category-row-featured"
        aria-label="Case study categories"
      >
        {workCategories.map((category) => (
          <span key={category}>
            <strong>{category}</strong>
          </span>
        ))}
      </section>

      <section className="case-masonry-section" aria-label="Rank It Globally work">
        <div className="case-list-head">
          <p className="marketing-eyebrow">Work wall</p>
          <h2>Browse projects by website, SEO, social, ads, and conversion work.</h2>
        </div>
        <div className="case-masonry-grid">
          {masonryProjects.map((project) => (
          <a
            className="case-masonry-card"
            data-size={project.cardSize}
            href={project.url}
            key={project.slug}
            target="_blank"
            rel="noreferrer"
          >
            <div className="case-masonry-image">
              <img
                src={project.screenshot}
                alt={`${project.name} website preview`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="case-masonry-copy">
              <div className="case-masonry-tags">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h2>{project.name}</h2>
              <p>
                {project.platform} · {project.location}
              </p>
              <strong>{project.result}</strong>
            </div>
          </a>
          ))}
        </div>
      </section>
    </main>
  );
}
