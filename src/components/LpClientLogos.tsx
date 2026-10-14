// Client logo marquee (pure CSS animation, global .logobar-* classes).
// Used on the homepage and /conversion-upside.
const clientLogos = [
  { file: "inline-01-30150d8c89.png", alt: "Van Isle Paint" },
  { file: "inline-02-68ee6cb6e6.png", alt: "Kaplan MD" },
  { file: "inline-03-e60c81276a.png", alt: "Peppy Pet Naturals" },
  { file: "inline-04-69e40a76ab.png", alt: "Sunita Yoga" },
  { file: "inline-05-876cb8cdf4.png", alt: "Biomimic Skincare" },
  { file: "inline-06-0b26b0459b.png", alt: "Urban Water" },
  { file: "inline-07-3ed45b9871.png", alt: "GodFire" },
  { file: "inline-08-6381a9dab5.png", alt: "Squegg" },
  { file: "inline-09-0f2dbcec64.png", alt: "EZvape Logo" },
  { file: "inline-10-06c40d7b8e.png", alt: "Liquid Asset Boat Rentals" },
  { file: "inline-11-d04d58af95.png", alt: "Industrial Strength Supply" },
  { file: "inline-12-a65a85ae5f.png", alt: "Carnegie Veternary Clinic" },
  { file: "inline-13-dec9ba2157.png", alt: "Phoenix Silver Corporation" },
  { file: "inline-14-b0fb764523.png", alt: "Right Path Vision" },
  { file: "inline-15-d847068a9c.png", alt: "Customs House" },
  { file: "inline-16-26eaab6412.png", alt: "Beef Cake Swimmer" },
  { file: "inline-17-bc699a700a.png", alt: "Kaiseki Torino" },
  { file: "inline-18-31d17b02a5.png", alt: "Catherine Maley" },
];

export default function LpClientLogos({
  label = "Trusted by 150+ brands across the US, UK, UAE & Canada",
}: {
  label?: string;
}) {
  const track = [...clientLogos, ...clientLogos];

  return (
    <section className="logobar-sec lp-logobar-sec" aria-label="Client logos">
      <div className="inner">
        <p className="logobar-label">
          {label}
        </p>
      </div>
      <div className="logobar">
        <div className="logobar-track">
          {track.map((logo, index) => (
            <div className="lb-item" key={`${logo.file}-${index}`}>
              <img
                src={`/assets/inline/${logo.file}`}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
