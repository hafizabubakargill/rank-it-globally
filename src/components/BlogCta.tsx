import Link from "next/link";
import "./blog-cta.css";

// Call to action rendered by the blog post template after the article body.
// It lives in code, not in the Sanity content, so every post gets the same box.
export const blogCtaMarker = "Our free Growth Audit checks";

export function BlogCta() {
  return (
    <aside className="blog-cta" aria-label="Free Growth Audit">
      <p>
        Want a shortcut? Our free <Link href="/growth-audit">Growth Audit</Link> checks your site&apos;s speed,
        crawlability, AI search readiness and conversion friction, then walks you through what to fix first.
      </p>
    </aside>
  );
}
