"use client";

import { useEffect, useState } from "react";
import { trackMetaLead } from "@/lib/metaPixel";

const DISMISS_KEY = "lp-case-studies-sticky-cta-dismissed";

// Mobile-only sticky bottom bar, inspired by convertt.co's "Get Your FREE
// Audit Now!" pill. Hidden on desktop entirely via CSS. Dismissal is
// remembered for the tab session so it doesn't reappear on scroll/reload
// once someone closes it.
export default function LpStickyMobileCta({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const alreadyDismissed = window.sessionStorage.getItem(DISMISS_KEY);
    setDismissed(alreadyDismissed === "1");
  }, []);

  if (dismissed) return null;

  return (
    <div className="lp-sticky-cta">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="lp-sticky-cta-btn"
        onClick={trackMetaLead}
      >
        {label} <span className="ar">→</span>
      </a>
      <button
        type="button"
        className="lp-sticky-cta-close"
        aria-label="Hide this bar"
        onClick={() => {
          window.sessionStorage.setItem(DISMISS_KEY, "1");
          setDismissed(true);
        }}
      >
        ✕
      </button>
    </div>
  );
}
