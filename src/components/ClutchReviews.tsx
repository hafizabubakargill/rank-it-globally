"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type ClutchReview = {
  company: string;
  reviewer: string;
  quote: string;
  href: string;
  verified: boolean;
};

const CLUTCH_PROFILE_URL = "https://clutch.co/profile/rank-it-globally";

const reviews: ClutchReview[] = [
  {
    company: "Commercial & Residential Cleaning Company",
    reviewer: "Owner, Commercial & Residential Cleaning Company",
    quote:
      "We found working with them very easy, and they were professional.",
    href: "https://clutch.co/go-to-review/rank-it-globally/468937",
    verified: true,
  },
  {
    company: "Habeora AI Solutions Private Limited",
    reviewer: "CEO, Habeora AI Solutions Private Limited",
    quote:
      "Their team is responsive, cooperative, and willing to implement our requested changes.",
    href: "https://clutch.co/go-to-review/rank-it-globally/468177",
    verified: true,
  },
  {
    company: "PRANA BEAUTY TT",
    reviewer: "Managing Director, PRANA BEAUTY TT",
    quote:
      "I was impressed by their personal attention and website development updates.",
    href: "https://clutch.co/go-to-review/rank-it-globally/466199",
    verified: true,
  },
];

export default function ClutchReviews() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const showReview = useCallback((index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const nextIndex = (index + reviews.length) % reviews.length;
    const card = slider.children.item(nextIndex);
    if (!(card instanceof HTMLElement)) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 700px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreferences = () => {
      setIsMobile(mobileQuery.matches);
      setReduceMotion(motionQuery.matches);
    };

    updatePreferences();
    mobileQuery.addEventListener("change", updatePreferences);
    motionQuery.addEventListener("change", updatePreferences);

    return () => {
      mobileQuery.removeEventListener("change", updatePreferences);
      motionQuery.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      showReview(activeIndex + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isMobile, isPaused, reduceMotion, showReview]);

  const handleScroll = () => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const cards = Array.from(slider.children).filter(
        (card): card is HTMLElement => card instanceof HTMLElement,
      );
      const nearestIndex = cards.reduce((nearest, card, index) => {
        const nearestDistance = Math.abs(
          cards[nearest].offsetLeft - slider.scrollLeft,
        );
        const currentDistance = Math.abs(card.offsetLeft - slider.scrollLeft);
        return currentDistance < nearestDistance ? index : nearest;
      }, 0);

      setActiveIndex(nearestIndex);
    });
  };

  const resumeAfterInteraction = () => {
    window.setTimeout(() => setIsPaused(false), 1200);
  };

  return (
    <div className="clutch-reviews" aria-labelledby="clutchReviewsTitle">
      <header className="clutch-reviews-head rev">
        <a
          className="clutch-logo-link"
          href={CLUTCH_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="clutchReviewsTitle"
          aria-label="View Rank It Globally on Clutch"
        >
          <img
            className="clutch-logo"
            src="/assets/clutch-logo.svg"
            alt="Clutch"
            width="211"
            height="60"
          />
        </a>
        <div className="clutch-rating-summary">
          <strong>5.0/5.0</strong>
          <Stars />
        </div>
        <a
          className="clutch-review-count"
          href={`${CLUTCH_PROFILE_URL}#reviews`}
          target="_blank"
          rel="noopener noreferrer"
        >
          3 Clutch reviews
        </a>
      </header>

      <div
        className="clutch-review-grid"
        ref={sliderRef}
        role="list"
        aria-label="Rank It Globally reviews on Clutch"
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={resumeAfterInteraction}
        onPointerCancel={resumeAfterInteraction}
      >
        {reviews.map((review, index) => (
          <article
            className={`clutch-review-card rev d${index + 1}`}
            key={review.href}
            role="listitem"
          >
            <div className="clutch-card-rating">
              <strong>5.0</strong>
              <Stars />
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <a
              className="clutch-reviewer"
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the verified Clutch review from ${review.company}`}
            >
              {review.reviewer}
            </a>
            {review.verified ? (
              <div className="clutch-verified">
                <span className="clutch-verified-icon" aria-hidden="true">
                  ✓
                </span>
                Verified Review
              </div>
            ) : (
              <div className="clutch-verified">
                <span className="clutch-review-source-mark" aria-hidden="true" />
                Review on Clutch
              </div>
            )}
          </article>
        ))}
      </div>

      <div
        className="clutch-slider-controls"
        aria-label="Clutch review slider controls"
      >
        <button
          className="vsl-btn"
          type="button"
          aria-label="Previous Clutch review"
          onClick={() => showReview(activeIndex - 1)}
        >
          <SliderArrow direction="previous" />
        </button>
        <div className="vsl-dots">
          {reviews.map((review, index) => (
            <button
              className={`vsl-dot${activeIndex === index ? " on" : ""}`}
              type="button"
              aria-label={`Show Clutch review ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => showReview(index)}
              key={review.href}
            />
          ))}
        </div>
        <button
          className="vsl-btn"
          type="button"
          aria-label="Next Clutch review"
          onClick={() => showReview(activeIndex + 1)}
        >
          <SliderArrow direction="next" />
        </button>
      </div>
      <div className="clutch-actions rev d2">
        <Link className="cta-e cta-e-lg" href="/free-audit">
          Get My Free Audit <span aria-hidden="true">→</span>
        </Link>
        <a
          className="clutch-review-link"
          href="https://review.clutch.co/review?provider_id=2645951"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worked With Us? Leave a Review on Clutch{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <span className="clutch-stars" aria-label="5 out of 5 stars">
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

function SliderArrow({
  direction,
}: {
  direction: "previous" | "next";
}) {
  const points =
    direction === "previous" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";

  return (
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
      <polyline points={points} />
    </svg>
  );
}
