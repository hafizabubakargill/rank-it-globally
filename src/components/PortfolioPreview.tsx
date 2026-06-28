"use client";

import { useEffect, useRef, useState } from "react";

type PreviewState = {
  href: string;
  name: string;
  src: string;
};

const PREVIEW_TRIGGER = ".sl-preview-button, .sl-preview-hit";
const SCROLL_SPEED_PX_PER_SECOND = 180;

export default function PortfolioPreview() {
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".sl-card-scroll"),
    );
    const animations = new Map<HTMLElement, Animation>();
    const distances = new Map<HTMLElement, number>();
    const cleanups: Array<() => void> = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function getCurrentTranslateY(image: HTMLImageElement) {
      const transform = getComputedStyle(image).transform;
      if (!transform || transform === "none") return 0;
      return new DOMMatrixReadOnly(transform).m42;
    }

    function measureCard(card: HTMLElement) {
      const frame = card.querySelector<HTMLElement>(".sl-img");
      const image = card.querySelector<HTMLImageElement>(".sl-preview-image");
      if (!frame || !image) return;

      const distance = Math.max(0, image.scrollHeight - frame.clientHeight);
      distances.set(card, distance);
      card.dataset.previewLoaded = "true";
      card.classList.add("sl-preview-ready");
    }

    function animateCard(card: HTMLElement, toBottom: boolean) {
      if (reducedMotion.matches) return;

      const image = card.querySelector<HTMLImageElement>(".sl-preview-image");
      const distance = distances.get(card) || 0;
      if (!image || distance <= 0) return;

      const currentY = getCurrentTranslateY(image);
      const targetY = toBottom ? -distance : 0;
      const remainingDistance = Math.abs(targetY - currentY);
      const activeAnimation = animations.get(card);
      activeAnimation?.cancel();

      if (remainingDistance < 1) {
        image.style.transform = `translateY(${targetY}px)`;
        animations.delete(card);
        return;
      }

      const animation = image.animate(
        [
          { transform: `translateY(${currentY}px)` },
          { transform: `translateY(${targetY}px)` },
        ],
        {
          duration:
            (remainingDistance / SCROLL_SPEED_PX_PER_SECOND) * 1000,
          easing: "linear",
          fill: "forwards",
        },
      );
      animations.set(card, animation);
      animation.onfinish = () => {
        image.style.transform = `translateY(${targetY}px)`;
        animation.cancel();
        if (animations.get(card) === animation) animations.delete(card);
      };
    }

    cards.forEach((card) => {
      const image = card.querySelector<HTMLImageElement>(".sl-preview-image");
      const frame = card.querySelector<HTMLElement>(".sl-img");
      if (!image || !frame) return;

      const onLoad = () => measureCard(card);
      const onPointerEnter = (event: PointerEvent) => {
        if (event.pointerType !== "touch") animateCard(card, true);
      };
      const onPointerLeave = (event: PointerEvent) => {
        if (event.pointerType !== "touch") animateCard(card, false);
      };
      const onFocusIn = () => animateCard(card, true);
      const onFocusOut = (event: FocusEvent) => {
        if (!card.contains(event.relatedTarget as Node | null)) {
          animateCard(card, false);
        }
      };

      image.addEventListener("load", onLoad);
      card.addEventListener("pointerenter", onPointerEnter);
      card.addEventListener("pointerleave", onPointerLeave);
      card.addEventListener("focusin", onFocusIn);
      card.addEventListener("focusout", onFocusOut);
      if (image.complete) measureCard(card);

      const observer = new ResizeObserver(() => measureCard(card));
      observer.observe(frame);
      observer.observe(image);
      cleanups.push(() => {
        image.removeEventListener("load", onLoad);
        card.removeEventListener("pointerenter", onPointerEnter);
        card.removeEventListener("pointerleave", onPointerLeave);
        card.removeEventListener("focusin", onFocusIn);
        card.removeEventListener("focusout", onFocusOut);
        observer.disconnect();
      });
    });

    const onReducedMotionChange = () => {
      if (!reducedMotion.matches) return;
      animations.forEach((animation, card) => {
        animation.cancel();
        const image =
          card.querySelector<HTMLImageElement>(".sl-preview-image");
        if (image) image.style.transform = "translateY(0)";
      });
      animations.clear();
    };
    reducedMotion.addEventListener("change", onReducedMotionChange);

    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest<HTMLElement>(PREVIEW_TRIGGER);
      if (!trigger) return;

      const card = trigger.closest<HTMLElement>(".sl-card-scroll");
      if (!card) return;

      const src = card.dataset.fullSrc;
      const href = card.dataset.href;
      if (!src || !href) return;

      event.preventDefault();
      event.stopPropagation();
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setPreview({
        href,
        name: card.dataset.projectName || "Portfolio project",
        src,
      });
    }

    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      animations.forEach((animation) => animation.cancel());
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    if (!preview) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__rankItLenis?.stop();
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.__rankItLenis?.start();
      previousFocusRef.current?.focus();
    };
  }, [preview]);

  if (!preview) {
    return <span data-portfolio-preview-controller hidden />;
  }

  return (
    <div
      className="portfolio-preview-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolioPreviewTitle"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setPreview(null);
      }}
    >
      <div className="portfolio-preview-dialog">
        <header className="portfolio-preview-header">
          <div>
            <span>Full-page preview</span>
            <h2 id="portfolioPreviewTitle">{preview.name}</h2>
          </div>
          <div className="portfolio-preview-actions">
            <a href={preview.href} target="_blank" rel="noopener noreferrer">
              View site <span aria-hidden="true">→</span>
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close portfolio preview"
              onClick={() => setPreview(null)}
            >
              ×
            </button>
          </div>
        </header>
        <div className="portfolio-preview-scroll" data-lenis-prevent>
          <img src={preview.src} alt={`${preview.name} full homepage preview`} />
        </div>
      </div>
    </div>
  );
}
