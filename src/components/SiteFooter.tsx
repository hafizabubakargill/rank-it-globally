import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact-us", label: "Contact Us" },
];

const growthLinks = [
  { href: "/free-audit", label: "Free Audit" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#estimator", label: "Pricing" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  {
    href: "https://wa.me/17865917846",
    label: "WhatsApp",
    className: "footer-whatsapp",
    icon: "whatsapp",
  },
  {
    href: "https://linkedin.com/company/rankitglobally",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.instagram.com/rankitglobally",
    label: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.facebook.com/rankitglobally",
    label: "Facebook",
    icon: "facebook",
  },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2.2c-5.35 0-9.7 4.25-9.7 9.49 0 1.84.54 3.58 1.48 5.03L2.3 21.8l5.25-1.46a9.86 9.86 0 0 0 4.49 1.1c5.35 0 9.7-4.25 9.7-9.5s-4.35-9.74-9.7-9.74Zm0 17.6a8.12 8.12 0 0 1-4.12-1.13l-.3-.18-3.12.87.9-3.02-.2-.31a7.76 7.76 0 0 1-1.2-4.09c0-4.35 3.6-7.89 8.04-7.89s8.05 3.54 8.05 7.9c0 4.34-3.61 7.85-8.05 7.85Zm4.4-5.91c-.24-.12-1.42-.69-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.63-1.2-1.41-1.34-1.65-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.75-.19-.46-.39-.39-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.3.98 2.46.12.16 1.69 2.54 4.1 3.56.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.1 3H4.9A1.9 1.9 0 0 0 3 4.9v14.2A1.9 1.9 0 0 0 4.9 21h14.2a1.9 1.9 0 0 0 1.9-1.9V4.9A1.9 1.9 0 0 0 19.1 3ZM8.36 17.7H5.82V9.54h2.54v8.16ZM7.08 8.43a1.47 1.47 0 1 1 0-2.94 1.47 1.47 0 0 1 0 2.94Zm10.64 9.27h-2.54v-3.96c0-.95-.02-2.17-1.32-2.17-1.32 0-1.52 1.03-1.52 2.1v4.03H9.8V9.54h2.44v1.11h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.89v4.48Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M17 7.3h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.4h2.5V4.5a31.6 31.6 0 0 0-3.64-.2c-3.6 0-6.06 2.2-6.06 6.18v3.43H3v4.35h4V24h4.86v-5.74h3.83l.61-4.35h-4.44v-3c0-1.25.35-2.51 2.34-2.51Z" />
    </svg>
  );
}

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const headingId = `footer-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="footer-column" role="navigation" aria-labelledby={headingId}>
      <h2 className="footer-heading" id={headingId}>
        {title}
      </h2>
      <ul className="footer-nav-list">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="footer-link" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="footer-brand-lockup" href="/" aria-label="Rank It Globally home">
            <Image
              src="/assets/brand/logo-icon.svg"
              alt=""
              width={54}
              height={36}
              className="footer-logo-mark"
            />
            <span>
              Rank It <strong>Globally</strong>
            </span>
          </Link>
          <p>
            Websites, SEO, and growth systems built for AI search, Google, and
            conversion-focused customer journeys.
          </p>
          <a className="footer-email" href="mailto:hello@rankitglobally.com">
            <span className="footer-email-icon footer-social-icon-email">
              <SocialIcon name="email" />
            </span>
            hello@rankitglobally.com
          </a>
        </div>

        <FooterNav title="Company" links={companyLinks} />
        <FooterNav title="Growth" links={growthLinks} />
        <FooterNav title="Resources" links={resourceLinks} />

        <div className="footer-column footer-contact-column">
          <h2 className="footer-heading">Connect</h2>
          <ul className="footer-nav-list">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`footer-link footer-social-link ${link.className || ""}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`footer-social-icon footer-social-icon-${link.icon}`}>
                    <SocialIcon name={link.icon} />
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Rank It Globally. All rights reserved.</p>
          <div className="footer-legal-links">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
