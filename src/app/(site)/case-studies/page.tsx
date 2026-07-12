import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import { publicProjects, type ProjectCard } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Case Studies | Rank It Globally",
  description:
    "Explore Rank It Globally website, SEO, e-commerce, local service, and conversion-focused project examples.",
  alternates: {
    canonical: "https://rankitglobally.com/case-studies",
  },
};

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
        <h1>
          Websites built to make the{" "}
          <span className="gtext">next click easier.</span>
        </h1>
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
            See the work in action
          </Link>
        </div>
      </section>

      <CaseStudyGallery projects={masonryProjects} />
    </main>
  );
}
