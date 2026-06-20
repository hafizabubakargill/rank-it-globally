import Link from "next/link";

const homeLinks = [
  { href: "/#audit", label: "Free Audit" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#estimator", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function BlogNav() {
  return (
    <header className="blog-nav">
      <div className="blog-nav-inner">
        <Link className="blog-logo" href="/" aria-label="Rank It Globally home">
          <img src="/assets/brand/logo-icon.svg" alt="" width="38" height="24" />
          <span>
            Rank It <strong>Globally</strong>
          </span>
        </Link>
        <nav className="blog-nav-links" aria-label="Blog navigation">
          {homeLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="blog-nav-cta" href="/#audit">
          Get My Free Audit
        </Link>
      </div>
    </header>
  );
}
