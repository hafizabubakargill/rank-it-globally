import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="f-logo">
          Rank It <span>Globally</span>
        </div>
        <div className="f-links">
          <a href="https://wa.me/17865917846" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="mailto:hello@rankitglobally.com">
            hello@rankitglobally.com
          </a>
          <a
            href="https://linkedin.com/company/rankitglobally"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/rankitglobally"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="f-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div className="f-copy">
          © 2026 Rank It Globally. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
