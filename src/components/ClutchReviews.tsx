type ClutchReview = {
  company: string;
  reviewer: string;
  quote: string;
  href: string;
};

const CLUTCH_PROFILE_URL = "https://clutch.co/profile/rank-it-globally";

const reviews: ClutchReview[] = [
  {
    company: "Habeora AI Solutions Private Limited",
    reviewer: "CEO, Habeora AI Solutions Private Limited",
    quote:
      "Their team is responsive, cooperative, and willing to implement our requested changes.",
    href: "https://clutch.co/go-to-review/rank-it-globally/468177",
  },
  {
    company: "PRANA BEAUTY TT",
    reviewer: "Managing Director, PRANA BEAUTY TT",
    quote:
      "I was impressed by their personal attention and website development updates.",
    href: "https://clutch.co/go-to-review/rank-it-globally/466199",
  },
];

export default function ClutchReviews() {
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
          2 verified reviews
        </a>
      </header>

      <div className="clutch-review-grid">
        {reviews.map((review, index) => (
          <article
            className={`clutch-review-card rev d${index + 1}`}
            key={review.href}
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
            <div className="clutch-verified">
              <span className="clutch-verified-icon" aria-hidden="true">
                ✓
              </span>
              Verified Review
            </div>
          </article>
        ))}
      </div>

      <div className="clutch-actions rev d2">
        <a className="cta-e cta-e-lg" href="#audit">
          Get My Free Audit <span aria-hidden="true">→</span>
        </a>
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
