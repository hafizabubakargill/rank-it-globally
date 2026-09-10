import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/conversion-upside"],
    },
    sitemap: "https://rankitglobally.com/sitemap.xml",
  };
}
