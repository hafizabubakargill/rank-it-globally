import ClutchReviews from "@/components/ClutchReviews";

type VideoTestimonial = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: VideoTestimonial[] = [
  {
    id: "1200777849",
    name: "Bob Wouterson",
    role: "Verified Client",
    initials: "BW",
  },
  {
    id: "1200777848",
    name: "Robert Mars",
    role: "Verified Client",
    initials: "RM",
  },
  {
    id: "1200777850",
    name: "Christopher Coleman",
    role: "Huntsville AI",
    initials: "CC",
  },
  {
    id: "1200806296",
    name: "James Gregware",
    role: "LuxSPEI",
    initials: "JG",
  },
  {
    id: "1203056374",
    name: "Shiloh Mielke",
    role: "Dent Hail",
    initials: "SM",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="sec sec-alt" id="testimonials">
      <div className="inner">
        <div className="sec-label rev">Client Stories</div>
        <h2 className="sec-title rev d1">
          Don&apos;t Take Our Word for It.{" "}
          <span className="gtext">Hear From Your Peers.</span>
        </h2>
        <p className="sec-sub rev d2">
          Video reviews from real business owners — click any card to watch.
        </p>

        <div className="vsl-root" id="vslRoot">
          <div className="vsl-track" id="vslTrack">
            {testimonials.map((testimonial, index) => (
              <VideoCard
                testimonial={testimonial}
                delay={index + 1}
                key={testimonial.id}
              />
            ))}
          </div>
        </div>

        <div className="vsl-bar">
          <button className="vsl-btn" id="vslPrev" aria-label="Previous">
            <SliderArrow direction="previous" />
          </button>
          <div className="vsl-dots" id="vslDots" />
          <button className="vsl-btn" id="vslNext" aria-label="Next">
            <SliderArrow direction="next" />
          </button>
        </div>

        <ClutchReviews />
      </div>
    </section>
  );
}

function VideoCard({
  testimonial,
  delay,
}: {
  testimonial: VideoTestimonial;
  delay: number;
}) {
  const playerUrl =
    `https://player.vimeo.com/video/${testimonial.id}` +
    "?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <div className={`vid-card rev d${delay}`}>
      <div className="vid-wrap">
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
        <iframe
          data-src={playerUrl}
          width="1080"
          height="1920"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title={`${testimonial.name} — ${testimonial.role}`}
          loading="lazy"
        />
      </div>
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
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SliderArrow({
  direction,
}: {
  direction: "previous" | "next";
}) {
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
