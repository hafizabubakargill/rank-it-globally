"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GlobalScrollControls() {
  const [visible, setVisible] = useState(false);
  const [showSticky, setShowSticky] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(28);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function syncStickyOffset() {
      const bar = document.querySelector<HTMLElement>(".sticky-bar");
      const barVisible =
        bar &&
        getComputedStyle(bar).display !== "none" &&
        bar.offsetParent !== null;
      const nextOffset = (barVisible ? bar.offsetHeight : 0) + 18;
      setBottomOffset(nextOffset);
      document.body.style.paddingBottom = barVisible ? `${bar.offsetHeight}px` : "0";
    }

    function update() {
      const currentScrollY = window.scrollY;
      const nav = document.querySelector<HTMLElement>("nav");

      if (nav) {
        const scrollingDown = currentScrollY > lastScrollY;
        const scrollingUp = currentScrollY < lastScrollY;
        if (currentScrollY <= 80 || scrollingUp) {
          nav.classList.remove("nav-hidden");
        } else if (scrollingDown) {
          nav.classList.add("nav-hidden");
        }
      }

      setVisible(currentScrollY > 400);
      lastScrollY = currentScrollY;
      syncStickyOffset();
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    syncStickyOffset();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncStickyOffset);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncStickyOffset);
      document.body.style.paddingBottom = "0";
    };
  }, [showSticky]);

  function scrollToTop() {
    if (window.__rankItLenis) {
      window.__rankItLenis.scrollTo(0, { duration: 0.95 });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {showSticky ? (
        <div className="sticky-bar" id="stickyBar">
          <div className="sticky-bar-inner">
            <div className="sticky-left">
              <div className="sticky-pulse" />
              <div className="sticky-text">
                <strong>Limited slots available this month.</strong>
                <span>
                  Get a free site audit — we&apos;ll show you exactly where
                  you&apos;re losing sales.
                </span>
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
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <button
        className={`global-scroll-top${visible ? " is-visible" : ""}`}
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        style={{ bottom: `${bottomOffset}px` }}
      >
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
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
