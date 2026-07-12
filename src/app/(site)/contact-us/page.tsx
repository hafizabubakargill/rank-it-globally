import type { Metadata } from "next";
import Link from "next/link";
import { MarketingIcon } from "@/components/MarketingVisuals";
import { calendlyUrl, emailAddress, whatsappUrl } from "@/content/publicPages";

export const metadata: Metadata = {
  title: "Contact Us | Rank It Globally",
  description:
    "Contact Rank It Globally for AI SEO, website design, conversion optimization, and free website audit questions.",
  alternates: {
    canonical: "https://rankitglobally.com/contact-us",
  },
};

const contactOptions = [
  {
    icon: "email",
    label: "Email",
    title: emailAddress,
    body: "Project questions, audit follow-ups, and proposals.",
    action: "Send an email",
    href: `mailto:${emailAddress}`,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    title: "Message us directly",
    body: "Get a faster answer or share your website link with us.",
    action: "Open WhatsApp",
    href: whatsappUrl,
  },
  {
    icon: "calendar",
    label: "Calendar",
    title: "Book a free consultation",
    body: "Choose a time to discuss your website and the clearest next step.",
    action: "Choose a time",
    href: calendlyUrl,
  },
];

export default function ContactUsPage() {
  return (
    <main className="marketing-page">
      <section className="marketing-hero compact">
        <div className="marketing-eyebrow">Contact Us</div>
        <h1>
          Tell us what you want the website to{" "}
          <span className="gtext">do.</span>
        </h1>
        <p>
          Send a website, a problem, or a goal. We will point you toward the
          clearest next move: audit, rebuild, SEO, ads, CRO, or a simple fix.
        </p>
        <div className="marketing-actions">
          <Link className="cta-e cta-e-lg" href="/free-audit">
            Start with a free audit <span className="ar">→</span>
          </Link>
          <Link
            className="marketing-link"
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </Link>
        </div>
      </section>

      <section className="marketing-card-grid contact-grid">
        {contactOptions.map((option) => (
          <a
            className="marketing-card contact-card"
            href={option.href}
            key={option.label}
            target={option.href.startsWith("http") ? "_blank" : undefined}
            rel={option.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <div className="contact-card-head">
              <span className="contact-icon" aria-hidden="true">
                <MarketingIcon name={option.icon as "email" | "whatsapp" | "calendar"} />
              </span>
              <span>{option.label}</span>
            </div>
            <h3>{option.title}</h3>
            <p>{option.body}</p>
            <strong className="contact-card-action">
              {option.action} <span aria-hidden="true">→</span>
            </strong>
          </a>
        ))}
      </section>

      <section className="marketing-split">
        <div>
          <p className="marketing-eyebrow">Before you reach out</p>
          <h2>
            A website URL is <span className="gtext">enough to start.</span>
          </h2>
        </div>
        <div className="marketing-copy">
          <p>
            You do not need a perfect brief. If you know the website, the offer,
            and what is not working, we can diagnose the first set of priorities.
          </p>
          <p>
            For fastest help, include your website URL, target city or market,
            service/product focus, and whether you care most about SEO, leads,
            speed, design, or paid traffic.
          </p>
        </div>
      </section>
    </main>
  );
}
