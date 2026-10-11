"use client";

import { useEffect, useState } from "react";

export function StickyCta({ label, text, whatsappHref }: { label: string; text: string; whatsappHref: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      const audit = document.getElementById("audit");
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atForm = audit ? audit.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
      setVisible(pastHero && !atForm);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div className={visible ? "sv-sticky is-visible" : "sv-sticky"} aria-hidden={!visible}>
      <div className="sv-sticky-inner">
        <div className="sv-sticky-text">
          <strong>{text}</strong>
          <small>Free, with no obligation.</small>
        </div>
        <div className="sv-actions">
          <a className="sv-btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1}>WhatsApp</a>
          <a className="sv-btn" href="#audit" tabIndex={visible ? 0 : -1}><span className="sv-sticky-full">{label}</span><span className="sv-sticky-short">Free audit</span> <span aria-hidden="true">→</span></a>
          <button type="button" className="sv-sticky-close" aria-label="Hide this bar" onClick={() => setDismissed(true)} tabIndex={visible ? 0 : -1}>×</button>
        </div>
      </div>
    </div>
  );
}
