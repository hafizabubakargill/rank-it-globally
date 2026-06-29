"use client";

import Script from "next/script";

declare global {
  interface Window {
    CLUTCHCO?: {
      Init: () => void;
    };
  }
}

export default function ClutchReviews() {
  return (
    <section className="sec clutch-reviews" aria-labelledby="clutchReviewsTitle">
      <div className="inner clutch-reviews-inner">
        <div className="clutch-reviews-copy">
          <div className="sec-label rev">Independent Reviews</div>
          <h2 className="sec-title rev d1" id="clutchReviewsTitle">
            Verified on Clutch.{" "}
            <span className="gtext">Trusted by Real Clients.</span>
          </h2>
          <p className="sec-sub rev d2">
            Read independently verified feedback from businesses we have worked
            with. New reviews appear here automatically after Clutch completes
            its review process.
          </p>
        </div>

        <div className="clutch-widget-shell rev d2">
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="8"
            data-height="300"
            data-nofollow="false"
            data-expandifr="true"
            data-scale="100"
            data-reviews="466199"
            data-clutchcompany-id="2645951"
          />
          <noscript>
            <a
              href="https://clutch.co/profile/rank-it-globally"
              target="_blank"
              rel="noreferrer"
            >
              Read Rank It Globally reviews on Clutch
            </a>
          </noscript>
        </div>
      </div>

      <Script
        id="clutch-widget-script"
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="lazyOnload"
        onLoad={initializeClutch}
        onReady={initializeClutch}
      />
    </section>
  );
}

function initializeClutch() {
  window.CLUTCHCO?.Init();
}
