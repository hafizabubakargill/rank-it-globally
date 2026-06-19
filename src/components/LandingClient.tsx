"use client";

import { useEffect } from "react";

type LandingScript = {
  src: string | null;
  id: string | null;
  onload: string | null;
  type: string | null;
  async: boolean;
  defer: boolean;
  content: string;
};

declare global {
  interface Window {
    __rankItGloballyLandingMounted?: boolean;
  }
}

type LandingClientProps = {
  scripts: LandingScript[];
};

const exposedGlobals = [
  "toggleVid",
  "toggleFaq",
  "initVimeoHover",
  "_initCal",
  "openCalendly",
  "showInd",
  "toggleAio",
];

export default function LandingClient({ scripts }: LandingClientProps) {
  useEffect(() => {
    if (window.__rankItGloballyLandingMounted) return;
    window.__rankItGloballyLandingMounted = true;

    for (const item of scripts) {
      const script = document.createElement("script");

      if (item.id) {
        const existing = document.getElementById(item.id);
        if (existing) continue;
        script.id = item.id;
      }

      if (item.type) script.type = item.type;
      if (item.async) script.async = true;
      if (item.defer) script.defer = true;

      if (item.onload) {
        script.addEventListener("load", () => {
          try {
            window.Function(item.onload || "")();
          } catch (error) {
            console.warn("Landing script onload failed", error);
          }
        });
      }

      if (item.src) {
        script.src = item.src;
      } else {
        script.text = wrapInlineScript(item.content);
      }

      document.body.appendChild(script);
    }

    window.setTimeout(() => {
      document.dispatchEvent(
        new Event("DOMContentLoaded", { bubbles: true, cancelable: true }),
      );
    }, 0);

    return () => {};
  }, [scripts]);

  return null;
}

function wrapInlineScript(content: string) {
  const expose = exposedGlobals
    .map(
      (name) =>
        `if (typeof ${name} !== "undefined") window.${name} = ${name};`,
    )
    .join("\n");

  return `(() => {\n${content}\n${expose}\n})();`;
}
