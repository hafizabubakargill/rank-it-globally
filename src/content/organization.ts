export const siteUrl = "https://rankitglobally.com";
export const organizationId = `${siteUrl}/#organization`;
export const whatsappHref = "https://wa.me/17865917846";
export const whatsappLabel = "WhatsApp (786) 591-7846";

// City-level address from the owner's industry-page brief (Brooklyn, NY).
// Used by the industry pages' ProfessionalService schema. No street address
// is published.
export const organizationAddress = {
  "@type": "PostalAddress",
  addressLocality: "Brooklyn",
  addressRegion: "NY",
  addressCountry: "US",
};

// TODO(owner): confirm the single business address to show site-wide before
// adding `address` here. The homepage lists New York, London, Toronto and
// Sydney while other profiles say Brooklyn.
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
