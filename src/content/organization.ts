export const siteUrl = "https://rankitglobally.com";
export const organizationId = `${siteUrl}/#organization`;
export const whatsappHref = "https://wa.me/17865917846";
export const whatsappLabel = "WhatsApp (786) 591-7846";

// No address or location is published anywhere on the site (owner decision).
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Rank It Globally",
  url: siteUrl,
  email: "hello@rankitglobally.com",
  logo: `${siteUrl}/assets/brand/favicon.png`,
  sameAs: [
    "https://linkedin.com/company/rankitglobally",
    "https://www.instagram.com/rankitglobally",
    "https://www.facebook.com/rankitglobally",
  ],
};
