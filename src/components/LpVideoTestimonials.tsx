"use client";

import { useRef, useState } from "react";

type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

// Client video testimonials, self-contained React (click to play, scroll
// buttons). Used on the homepage and /conversion-upside.
const testimonials: VideoTestimonial[] = [
  { id: "1200777849", name: "Bob Wouterson", role: "Verified Client", initials: "BW" },
  { id: "1200777848", name: "Robert Mars", role: "Verified Client", initials: "RM" },
  { id: "1200777850", name: "Christopher Coleman", role: "Huntsville AI", initials: "CC" },
  { id: "1200806296", name: "James Gregware", role: "LuxSPEI", initials: "JG" },
  { id: "1203056374", name: "Shiloh Mielke", role: "Dent Hail", initials: "SM" },
];

export default function LpVideoTestimonials({ showHeading = true }: { showHeading?: boolean }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  // The scroll container is .vsl-root (overflow-x: auto in CSS), not
  // .vsl-track — scrolling the track itself was a no-op, which is why the
  // prev/next arrows silently did nothing on mobile.
  const rootRef = useRef<HTMLDivElement | null>(null);

  function scrollByCard(direction: 1 | -1) {
    const root = rootRef.current;
    if (!root) return;
    const card = root.querySelector<HTMLElement>(".vid-card");
    const step = (card?.offsetWidth ?? 280) + 20;
    root.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <div className="lp-video-testimonials">
      {showHeading ? (
        <>
          <p className="marketing-eyebrow">Client stories</p>
          <h2>
            Don&apos;t take our word for it.{" "}
            <span className="gtext">Hear from your peers.</span>
          </h2>
        </>
      ) : null}
      <div className="vsl-root" ref={rootRef}>
        <div className="vsl-track">
          {testimonials.map((testimonial) => (
            <VideoCard
              testimonial={testimonial}
              isPlaying={playingId === testimonial.id}
              onPlay={() => setPlayingId(testimonial.id)}
              key={testimonial.id}
            />
          ))}
        </div>
      </div>
      <div className="vsl-bar">
        <button
          className="vsl-btn"
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          <SliderArrow direction="previous" />
        </button>
        <button
          className="vsl-btn"
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          <SliderArrow direction="next" />
        </button>
      </div>
    </div>
  );
}

function VideoCard({
  testimonial,
  isPlaying,
  onPlay,
}: {
  testimonial: VideoTestimonial;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const playerUrl =
    `https://player.vimeo.com/video/${testimonial.id}` +
    "?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1";

  return (
    <div className="vid-card">
      <button
        type="button"
        className={`vid-wrap${isPlaying ? " is-loaded" : ""}`}
        onClick={onPlay}
        aria-label={`Play ${testimonial.name} video testimonial`}
      >
        <div className="vid-badge">
          <StarIcon /> Client Review
        </div>
        <img
          className="vid-thumb"
          src={`/assets/vimeo/${testimonial.id}.jpg`}
          alt={`${testimonial.name} video testimonial thumbnail`}
          loading="lazy"
          decoding="async"
        />
        {isPlaying ? (
          <iframe
            src={playerUrl}
            width="1080"
            height="1920"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`${testimonial.name} — ${testimonial.role}`}
          />
        ) : null}
      </button>
      <div className="vid-foot">
        <div className="vid-auth">
          <div className="vid-av-in">{testimonial.initials}</div>
          <div>
            <div className="vid-nm">{testimonial.name}</div>
            <div className="vid-rl">{testimonial.role}</div>
          </div>
        </div>
        <div className="vid-stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <div className="vs" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SliderArrow({ direction }: { direction: "previous" | "next" }) {
  const points = direction === "previous" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";

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
