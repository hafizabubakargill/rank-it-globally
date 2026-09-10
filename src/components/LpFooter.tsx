import Image from "next/image";

export default function LpFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        <div className="lp-footer-brand">
          <Image
            src="/assets/brand/logo-icon.svg"
            alt="Rank It Globally"
            width={40}
            height={27}
          />
          <span>
            Rank It <strong>Globally</strong>
          </span>
        </div>
        <p className="lp-footer-copy">
          © {new Date().getFullYear()} Rank It Globally. All rights reserved.
        </p>
        <div className="lp-footer-links">
          <a href="mailto:hello@rankitglobally.com">hello@rankitglobally.com</a>
          <span aria-hidden="true">·</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
