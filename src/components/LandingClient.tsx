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

type CalendlyMessage = {
  event?: string;
  payload?: {
    invitee?: {
      uri?: string;
    };
  };
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
    const cleanupCalendlyCapture = bindCalendlyBookingCapture();
    const cleanupMobileMenuOutsideClick = bindMobileMenuOutsideClick();

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

    return () => {
      cleanupCalendlyCapture();
      cleanupMobileMenuOutsideClick();
    };
  }, [scripts]);

  return null;
}

function bindCalendlyBookingCapture() {
  const postedInvitees = new Set<string>();

  function onMessage(event: MessageEvent<CalendlyMessage>) {
    if (event.origin !== "https://calendly.com") return;
    if (event.data?.event !== "calendly.event_scheduled") return;

    const inviteeUri = event.data.payload?.invitee?.uri;
    if (!inviteeUri || postedInvitees.has(inviteeUri)) return;

    postedInvitees.add(inviteeUri);

    void fetch("/api/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        invitee_uri: inviteeUri,
      }),
    }).catch((error) => {
      postedInvitees.delete(inviteeUri);
      console.warn("Calendly booking capture failed", error);
    });
  }

  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}

function bindMobileMenuOutsideClick() {
  function onPointerDown(event: PointerEvent) {
    const nav = document.querySelector("nav.mobile-open");
    const target = event.target;

    if (!nav || !(target instanceof Node) || nav.contains(target)) return;

    nav.classList.remove("mobile-open");

    const toggle = nav.querySelector<HTMLButtonElement>(".mobile-menu-toggle");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  }

  document.addEventListener("pointerdown", onPointerDown);
  return () => document.removeEventListener("pointerdown", onPointerDown);
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
