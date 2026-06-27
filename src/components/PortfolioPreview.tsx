"use client";

import { useEffect, useRef, useState } from "react";

type PreviewState = {
  href: string;
  name: string;
  src: string;
};

const PREVIEW_TRIGGER = ".sl-preview-button, .sl-preview-hit";

export default function PortfolioPreview() {
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function loadFullScreenshot(card: HTMLElement) {
      if (card.dataset.previewLoaded === "true") return;

      const image = card.querySelector<HTMLImageElement>(".sl-preview-image");
      const fullSrc = card.dataset.fullSrc;
      if (!image || !fullSrc) return;

      card.dataset.previewLoaded = "loading";
      card.classList.add("sl-preview-loading");

      const finish = () => {
        const frame = card.querySelector<HTMLElement>(".sl-img");
        if (!frame) return;

        const distance = Math.max(0, image.scrollHeight - frame.clientHeight);
        const duration = Math.min(28, Math.max(12, distance / 180));
        card.style.setProperty("--scroll-y", `${distance}px`);
        card.style.setProperty("--scroll-duration", `${duration}s`);
        card.dataset.previewLoaded = "true";
        card.classList.remove("sl-preview-loading");
        card.classList.add("sl-preview-ready");
      };

      image.addEventListener("load", finish, { once: true });
      image.src = fullSrc;
      if (image.complete) finish();
    }

    function onPointerOver(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".sl-card-scroll");
      if (card) loadFullScreenshot(card);
    }

    function onFocusIn(event: FocusEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".sl-card-scroll");
      if (card) loadFullScreenshot(card);
    }

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

    document.addEventListener("pointerover", onPointerOver, {
      capture: true,
      passive: true,
    });
    document.addEventListener("focusin", onFocusIn, true);
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("click", onClick, true);
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
