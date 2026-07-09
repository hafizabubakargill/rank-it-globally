import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <h1>This page has moved or no longer exists.</h1>
        <p>
          The link may be from an older version of our website. You can return
          home, explore the blog, or request a free website audit.
        </p>
        <div className="not-found-actions">
          <Link className="not-found-primary" href="/">
            Back to homepage
          </Link>
          <Link href="/blog">Browse the blog</Link>
          <Link href="/free-audit">Get a free audit</Link>
        </div>
      </div>
    </main>
  );
}
