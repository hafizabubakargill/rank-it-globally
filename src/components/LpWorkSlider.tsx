import { publicProjects } from "@/content/publicPages";

// LP-only presentation of the portfolio — deliberately not the shared
// CaseStudyGallery masonry grid used by /case-studies. A static grid
// catalogue of a curated set, same card design used elsewhere on the LP.
const featuredProjects = publicProjects.slice(0, 12);

export default function LpWorkSlider() {
  return (
    <section className="lp-work-slider-section" aria-label="Rank It Globally work">
      <p className="marketing-eyebrow">Proof, not promises</p>
      <h2>
        150+ builds. <span className="gtext">A few you can look at right now.</span>
      </h2>
      <div className="lp-work-grid" role="list" aria-label="Project screenshots">
        {featuredProjects.map((project) => (
          <a
            className="lp-work-card"
            href={project.url}
            key={project.slug}
            target="_blank"
            rel="noreferrer"
            role="listitem"
          >
            <div className="lp-work-card-image">
              <img
                src={project.screenshot}
                alt={`${project.name} website preview`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lp-work-card-copy">
              <span className="lp-work-card-category">{project.category}</span>
              <strong>{project.name}</strong>
              <span>{project.result}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
