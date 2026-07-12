"use client";

import { useMemo, useState } from "react";
import type { ProjectCard } from "@/content/publicPages";

export type CaseStudyProject = ProjectCard & {
  tags: string[];
  cardSize: string;
};

const workCategories = [
  "All Work",
  "Web Portfolio",
  "SEO",
  "Social Media",
  "Ads",
  "E-Commerce",
  "Local Services",
];

export default function CaseStudyGallery({
  projects,
}: {
  projects: CaseStudyProject[];
}) {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All Work"
        ? projects
        : projects.filter((project) => project.tags.includes(activeCategory)),
    [activeCategory, projects],
  );

  return (
    <>
      <section className="case-masonry-section" aria-label="Rank It Globally work">
        <div className="case-list-head">
          <p className="marketing-eyebrow">Work wall</p>
          <h2>
            Browse projects across <span className="gtext">web, SEO, social, and ads.</span>
          </h2>
        </div>
        <div className="case-filter-section" aria-label="Case study categories">
          <div className="case-category-row case-category-row-featured">
            {workCategories.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={activeCategory === category ? "is-active" : undefined}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {filteredProjects.length ? (
          <div className="case-masonry-grid">
            {filteredProjects.map((project) => (
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
                  <h3>{project.name}</h3>
                  <p>
                    {project.platform} · {project.location}
                  </p>
                  <strong>{project.result}</strong>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="case-filter-empty" role="status">
            <strong>No projects in this category yet.</strong>
            <p>Choose another category to keep exploring our work.</p>
          </div>
        )}
      </section>
    </>
  );
}
