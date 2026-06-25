"use client";

import Link from "next/link";
import { useState } from "react";

const homeLinks = [
  { href: "/#audit", label: "Free Audit" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#estimator", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function BlogNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={mobileOpen ? "mobile-open" : ""}>
      <div className="nav-inner">
        <Link className="n-logo" href="/" aria-label="Rank It Globally home">
          <img
            className="n-logo-img"
            src="/assets/brand/logo-icon.svg"
            alt=""
            width="72"
            height="30"
          />
          <span className="n-logo-t">
            Rank It <span>Globally</span>
          </span>
        </Link>
        <div className="nv" aria-label="Blog navigation">
          {homeLinks.map((link) => (
            <Link className="nk" key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="cta-e" href="/#audit">
            Get My Free Audit <span className="ar">→</span>
          </Link>
        </div>
        <div className="mobile-nav-actions">
          <Link
            className="mobile-nav-cta"
            href="/#audit"
            onClick={() => setMobileOpen(false)}
          >
            Free Audit
          </Link>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="blogMobileMenuPanel"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="mobile-menu-panel" id="blogMobileMenuPanel">
        {homeLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="cta-e"
          href="/#audit"
          onClick={() => setMobileOpen(false)}
        >
          Get My Free Audit <span className="ar">→</span>
        </Link>
      </div>
    </nav>
  );
}
