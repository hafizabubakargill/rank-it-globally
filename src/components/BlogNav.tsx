"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const homeLinks = [
  { href: "/#audit", label: "Free Audit" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#estimator", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function BlogNav() {
  const [hidden, setHidden] = useState(false);
  const [showSticky, setShowSticky] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function onScroll() {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = showSticky ? "60px" : "0";
    return () => {
      document.body.style.paddingBottom = "0";
    };
  }, [showSticky]);

  return (
    <>
      <nav className={hidden ? "nav-hidden" : ""}>
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
        </div>
      </nav>

      {showSticky ? (
        <div className="sticky-bar">
          <div className="sticky-bar-inner">
            <div className="sticky-left">
              <div className="sticky-pulse" />
              <div className="sticky-text">
                <strong>Want your free website audit?</strong>
                <span>PageSpeed, SEO, AI visibility, and conversion checks.</span>
              </div>
            </div>
            <div className="sticky-right">
              <Link className="cta-e" href="/#audit">
                Get My Free Audit <span className="ar">→</span>
              </Link>
              <button
                className="sticky-dismiss"
                type="button"
                aria-label="Dismiss"
                onClick={() => setShowSticky(false)}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
