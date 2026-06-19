"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __rankItLenis?: Lenis;
    __rankItLenisRaf?: number;
    __rankItLenisAnchorsBound?: boolean;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis =
      window.__rankItLenis ??
      new Lenis({
        duration: 1.18,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.45,
        infinite: false,
      });

    window.__rankItLenis = lenis;

    if (!window.__rankItLenisRaf) {
      const raf = (time: number) => {
        window.__rankItLenis?.raf(time);
        window.__rankItLenisRaf = requestAnimationFrame(raf);
      };
      window.__rankItLenisRaf = requestAnimationFrame(raf);
    }

    if (!window.__rankItLenisAnchorsBound) {
      document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;

        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;

        const destination = document.querySelector(href);
        if (!destination) return;

        event.preventDefault();
        window.__rankItLenis?.scrollTo(destination as HTMLElement, {
          offset: -72,
          duration: 1.05,
        });
      });
      window.__rankItLenisAnchorsBound = true;
    }
  }, []);

  return null;
}
