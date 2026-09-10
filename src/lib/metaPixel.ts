declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Fired on click of a Calendly CTA — a proxy for intent, since at click
// time we don't yet know if the booking was actually completed.
export function trackMetaLead() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

// Fired on the /whats-next confirmation page, which Calendly redirects to
// only after a booking is actually completed — this is the real
// conversion, fired on our own domain so it shares the fbp/fbc cookies
// set when the visitor first landed from the ad (Calendly's own pixel,
// on calendly.com, would not have access to those).
export function trackMetaSchedule() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Schedule");
  }
}
