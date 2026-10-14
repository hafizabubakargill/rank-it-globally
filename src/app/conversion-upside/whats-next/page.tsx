import type { Metadata } from "next";
import "@/styles/brand.css";
import ConfettiBurst from "@/components/ConfettiBurst";
import LpLogoMark from "@/components/LpLogoMark";
import TrackScheduleEvent from "@/components/TrackScheduleEvent";
import { parseCalendlyRedirect, type CalendlyRedirectParams } from "@/lib/calendlyRedirect";

export const metadata: Metadata = {
  title: "You're Booked — What's Next | Rank It Globally",
  description: "Your strategy call is confirmed.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://rankitglobally.com/conversion-upside/whats-next",
  },
};

// Labels that tend to hold long free-text get the full-width row so they
// don't get squeezed into a half-width column next to a one-word answer.
const WIDE_LABELS = new Set(["Website URL", "Message / notes"]);

export default async function WhatsNextPage({
  searchParams,
}: {
  searchParams: Promise<CalendlyRedirectParams>;
}) {
  const booking = parseCalendlyRedirect(await searchParams);

  const fields = booking
    ? [
        ...(booking.formattedStartTime ? [{ label: "When", value: booking.formattedStartTime }] : []),
        ...(booking.fullName ? [{ label: "Name", value: booking.fullName }] : []),
        ...(booking.email ? [{ label: "Email", value: booking.email }] : []),
        ...booking.answers,
      ]
    : [];

  return (
    <main className="marketing-page lp-page">
      <TrackScheduleEvent />
      <ConfettiBurst />
      <LpLogoMark />

      <section className="lp-hero-v2">
        <div className="lp-hero-stat-callout">
          <strong>Strategy call confirmed</strong>
        </div>
        <h1>
          You&apos;re <span className="gtext">booked.</span>
        </h1>
      </section>

      <section className="lp-booking-section" aria-labelledby="whats-next-booking-title">
        {fields.length > 0 ? (
          <>
            <p className="marketing-eyebrow">Your booking</p>
            <h2 id="whats-next-booking-title">
              Here&apos;s what we received.{" "}
              <span className="gtext">Let us know if anything looks off.</span>
            </h2>
            <dl className="lp-booking-summary">
              {fields.map((field) => (
                <div
                  className={`lp-booking-field${WIDE_LABELS.has(field.label) ? " lp-booking-field-wide" : ""}`}
                  key={field.label}
                >
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : (
          <>
            <p className="marketing-eyebrow">Your booking</p>
            <h2 id="whats-next-booking-title">
              Check your email.{" "}
              <span className="gtext">Your confirmation is already there.</span>
            </h2>
            <div className="lp-booking-summary lp-booking-summary-fallback">
              <p>
                We couldn&apos;t pull up your booking details on this page, but your
                call is booked — Calendly already emailed you a confirmation
                with the exact time and everything you submitted.
              </p>
              <p>
                Can&apos;t find it? Check spam, or email us at{" "}
                <a href="mailto:hello@rankitglobally.com">hello@rankitglobally.com</a>{" "}
                and we&apos;ll resend it.
              </p>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
