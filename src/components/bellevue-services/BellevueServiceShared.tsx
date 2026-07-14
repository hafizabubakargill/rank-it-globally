import Link from "next/link";

export function EastsideSectionHeading({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="eastside-section-heading">
      <p className="marketing-eyebrow">{eyebrow}</p>
      <h2>
        {title} <span className="gtext">{accent}</span>
      </h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export function EastsideFinalCta({
  eyebrow,
  title,
  accent,
  body,
  secondaryHref = "/case-studies",
  secondaryLabel = "View case studies",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="eastside-final-cta">
      <div className="eastside-cta-map" aria-hidden="true">
        <span className="eastside-cta-route eastside-cta-route-one" />
        <span className="eastside-cta-route eastside-cta-route-two" />
        <span className="eastside-cta-pin eastside-cta-pin-one" />
        <span className="eastside-cta-pin eastside-cta-pin-two" />
        <span className="eastside-cta-pin eastside-cta-pin-three" />
      </div>
      <p className="marketing-eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      <p>{body}</p>
      <div className="marketing-actions">
        <Link className="cta-e cta-e-lg" href="/free-audit">
          Get My Free Audit <span className="ar">→</span>
        </Link>
        <Link className="marketing-link" href={secondaryHref}>
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}

export function EastsideIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    profile: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 8h8M8 12h5M8 16h7" />
      </>
    ),
    citations: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="7" cy="6" r="2" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="10" cy="18" r="2" />
      </>
    ),
    reviews: (
      <>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </>
    ),
    schema: (
      <>
        <path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18" />
      </>
    ),
    content: (
      <>
        <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="5" />
        <path d="m9.5 12 1.6 1.6 3.4-3.7" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 5-5M17 4h3v3" />
      </>
    ),
    media: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="9" cy="10" r="2" />
        <path d="m4 17 5-4 3 2 4-4 5 4" />
      </>
    ),
    community: (
      <>
        <path d="M20 11a8 8 0 0 1-8 8 8.6 8.6 0 0 1-3.5-.8L4 20l1.3-4A8 8 0 1 1 20 11Z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </>
    ),
    ads: (
      <>
        <path d="m4 13 12-6v10L4 13ZM16 10l4-1v6l-4-1M6 14l1 5h4l-2-4" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.search}
    </svg>
  );
}
