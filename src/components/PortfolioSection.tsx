import portfolioProjects from "@/content/portfolioProjects.json";

export type PortfolioProject = {
  slug: string;
  name: string;
  url: string;
  screenshot: string;
  category: string;
  country: string;
  platform: string;
  location: string;
  result: string;
  highlightResult?: boolean;
};

const projects = portfolioProjects satisfies PortfolioProject[];

export default function PortfolioSection() {
  return (
    <section
      className="sec port-sec"
      id="portfolio"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="portfolio-section-glow" aria-hidden="true" />
      <div className="inner">
        <div className="sec-label rev">Portfolio</div>
        <h2 className="sec-title rev d1">
          Built for Performance.{" "}
          <span className="gtext">Designed to Convert.</span>
        </h2>
        <p className="sec-sub rev d2">
          Real websites, real results — local service sites averaging +40% more
          bookings, e-commerce stores seeing +35% more quote requests, and
          bounce rates cut in half. Every one of these is live.
        </p>

        <div className="sl-root" id="slRoot">
          <div className="sl-track" id="slTrack">
            {projects.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="sl-bar">
            <button
              className="sl-btn sl-prev"
              id="slPrev"
              type="button"
              aria-label="Previous"
            >
              <Arrow direction="previous" />
            </button>
            <div className="sl-dots" id="slDots" />
            <button
              className="sl-btn sl-next"
              id="slNext"
              type="button"
              aria-label="Next"
            >
              <Arrow direction="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      className="sl-card sl-card-scroll"
      data-href={project.url}
      data-full-src={project.screenshot}
      data-project-name={project.name}
    >
      <div className="sl-img">
        <img
          src={project.screenshot}
          alt={`${project.name} full homepage screenshot`}
          loading="lazy"
          decoding="async"
          className="sl-preview-image"
        />
        <div className="sl-badge">{project.category}</div>
        <button
          className="sl-preview-hit"
          type="button"
          aria-label={`View full-page preview of ${project.name}`}
        >
          <span className="sl-preview-hint-desktop">↕ Hover to scroll</span>
          <span className="sl-preview-hint-mobile">↕ Tap full preview</span>
        </button>
      </div>
      <div className="sl-foot">
        <div className="sl-row">
          <span className="sl-name">{project.name}</span>
          <span className="sl-flag">{project.country}</span>
        </div>
        <div className="sl-meta">
          {project.platform} · {project.location}
        </div>
        <div className={`sl-tag${project.highlightResult ? " win" : ""}`}>
          {project.result}
        </div>
        <div className="sl-foot-actions">
          <button
            className="sl-preview-button"
            type="button"
            aria-label={`View full preview of ${project.name}`}
          >
            Full preview
          </button>
          <a
            className="sl-view-site"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            View site <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Arrow({ direction }: { direction: "previous" | "next" }) {
  const points = direction === "previous" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points={points} />
    </svg>
  );
}
