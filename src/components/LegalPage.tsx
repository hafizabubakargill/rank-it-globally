import Link from "next/link";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <main className="legal-page">
        <article className="legal-inner">
          <Link className="blog-back" href="/">
            ← Back To Home
          </Link>
          <header className="legal-header">
            <p className="sec-label">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <time>Last updated: {updated}</time>
          </header>

          <div className="legal-card">
            {sections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
