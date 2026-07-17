import Image from "next/image";

const tools = [
  ["WordPress", "wordpress.svg"],
  ["Shopify", "shopify.svg"],
  ["WooCommerce", "woocommerce.svg"],
  ["Webflow", "webflow.svg"],
  ["Elementor", "elementor.svg"],
  ["Framer", "framer.svg"],
  ["Squarespace", "squarespace.svg"],
  ["Wix", "wix.svg"],
  ["React", "react.svg"],
  ["Next.js", "next-js.svg"],
  ["Figma", "figma.svg"],
  ["Tailwind CSS", "tailwind-css.svg"],
  ["JavaScript", "javascript.svg"],
  ["PHP", "php.svg"],
  ["Cloudflare", "cloudflare.svg"],
  ["AWS", "aws.png"],
  ["Vercel", "vercel.svg"],
  ["Google Analytics", "google-analytics.svg"],
  ["Tag Manager", "tag-manager.svg"],
  ["Search Console", "search-console.svg"],
  ["Google Ads", "google-ads.svg"],
  ["Meta Ads", "meta-ads.svg"],
  ["Hotjar", "hotjar.svg"],
  ["MS Clarity", "ms-clarity.png"],
  ["SEMrush", "semrush.svg"],
  ["Ahrefs", "ahrefs.png"],
  ["Klaviyo", "klaviyo.png"],
  ["HubSpot", "hubspot.svg"],
  ["Mailchimp", "mailchimp.svg"],
  ["Stripe", "stripe.svg"],
  ["Canva", "canva.png"],
  ["Yoast SEO", "yoast-seo.svg"],
  ["Rank Math", "rank-math.png"],
] as const;

export function TrustMarquee() {
  return (
    <section className="trust-marq-wrap service-page-trust" aria-label="Platforms and tools we work with">
      <p className="trust-marq-label">Platforms &amp; Tools We Work With</p>
      <div className="trust-marq-outer">
        <div className="trust-marq-track">
          {[0, 1].flatMap((set) =>
            tools.map(([name, file]) => (
              <div className="tm-item" key={`${set}-${file}`} aria-hidden={set === 1 ? "true" : undefined}>
                <span className="tm-logo">
                  <Image
                    src={`/assets/tool-icons-original/${file}`}
                    alt={set === 0 ? name : ""}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </span>
                <span>{name}</span>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
