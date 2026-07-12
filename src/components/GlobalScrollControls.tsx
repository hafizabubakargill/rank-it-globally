"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function GlobalScrollControls() {
  const [visible, setVisible] = useState(false);
  const [showSticky, setShowSticky] = useState(true);
  const [bottomOffset, setBottomOffset] = useState(28);

  useEffect(() => {
    const supportsFinePointer =
      window.matchMedia?.("(pointer: fine)").matches ?? false;
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    if (!supportsFinePointer || prefersReducedMotion) return;

    const dot = document.getElementById("dot");
    if (!dot) return;
    const cursorDot = dot;

    const hoverSelector =
      "a,button,input,textarea,select,[role='button'],.ba-card,.mg-i,.vid-card,.pr-step,.svc,.ti,.marketing-card,.case-masonry-card,.contact-card,.audit-select-trigger,.audit-select-option";
    const darkSelector =
      ".statsx-panel,.scale-panel,.cta-sec,.vid-wrap,.vid-section,.clutch-review-card";

    function onPointerMove(event: PointerEvent) {
      cursorDot.style.left = `${event.clientX}px`;
      cursorDot.style.top = `${event.clientY}px`;
    }

    function onPointerOver(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(hoverSelector)) document.body.classList.add("hov");
      if (target.closest(darkSelector)) {
        document.body.classList.add("dark-cursor");
      }
    }

    function onPointerOut(event: PointerEvent) {
      const target = event.target;
      const related = event.relatedTarget;
      if (!(target instanceof Element)) return;

      const hoverElement = target.closest(hoverSelector);
      const darkElement = target.closest(darkSelector);

      if (hoverElement) {
        if (related instanceof Element && hoverElement.contains(related)) {
          return;
        }
        document.body.classList.remove("hov");
      }

      if (darkElement) {
        if (related instanceof Element && darkElement.contains(related)) {
          return;
        }
        document.body.classList.remove("dark-cursor");
      }
    }

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.body.classList.remove("hov", "dark-cursor");
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let resizeObserver: ResizeObserver | undefined;

    function syncStickyOffset() {
      const bar = document.querySelector<HTMLElement>(".sticky-bar");
      const barVisible =
        bar &&
        getComputedStyle(bar).display !== "none" &&
        getComputedStyle(bar).visibility !== "hidden";
      const nextOffset = barVisible
        ? Math.max(80, bar.offsetHeight + 18)
        : 28;
      setBottomOffset(nextOffset);
      document.body.style.paddingBottom = barVisible
        ? `${bar.offsetHeight}px`
        : "0";
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
    const bar = document.querySelector<HTMLElement>(".sticky-bar");
    if (bar && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(syncStickyOffset);
      resizeObserver.observe(bar);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncStickyOffset);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncStickyOffset);
      resizeObserver?.disconnect();
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
      <div id="dot" aria-hidden="true" />
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
              <Link className="cta-e" href="/free-audit">
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
