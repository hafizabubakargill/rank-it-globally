import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/website-visible-google-ai-search",
        destination: "/blog/how-to-get-into-google-ai-overviews",
        permanent: true,
      },
      {
        source: "/bellevue-social-media-marketing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ppc-management",
        destination: "/seo-services",
        statusCode: 301,
      },
      {
        source: "/social-media-marketing",
        destination: "/",
        statusCode: 301,
      },
      // Law firm industry page retired; local SEO is the closest live offer.
      {
        source: "/industries/law-firm-marketing",
        destination: "/local-seo-services",
        statusCode: 301,
      },
      {
        source: "/ui-ux-design",
        destination: "/web-development#ui-ux",
        statusCode: 301,
      },
      {
        source: "/bellevue-seo-services",
        destination: "/seo-services",
        permanent: true,
      },
      {
        source: "/free-consultation",
        destination: "/growth-audit",
        permanent: true,
      },
      {
        source: "/free-audit",
        destination: "/growth-audit",
        permanent: true,
      },
      // Pages from the previous WordPress site that Search Console still
      // reports as 404. Each goes to its closest live page.
      { source: "/home", destination: "/", statusCode: 301 },
      { source: "/start-ranking", destination: "/growth-audit", statusCode: 301 },
      { source: "/e-commerce", destination: "/ecommerce-development", statusCode: 301 },
      { source: "/custom-solutions", destination: "/web-development", statusCode: 301 },
      { source: "/creative-designing", destination: "/web-development", statusCode: 301 },
      { source: "/projects", destination: "/case-studies", statusCode: 301 },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  async headers() {
    const contentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.googletagmanager.com https://assets.calendly.com https://*.calendly.com https://player.vimeo.com https://snap.licdn.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: blob: https://assets.calendly.com https://cdn.sanity.io https://i.vimeocdn.com https://*.vimeocdn.com https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.gstatic.com https://*.ads.linkedin.com https://www.linkedin.com https://www.facebook.com https://*.facebook.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com https://*.calendly.com https://api.calendly.com https://player.vimeo.com https://*.vimeo.com https://cdn.sanity.io https://*.sanity.io wss://*.sanity.io https://*.ads.linkedin.com https://www.linkedin.com https://www.facebook.com https://*.facebook.com",
      "frame-src https://calendly.com https://*.calendly.com https://player.vimeo.com https://www.youtube-nocookie.com https://www.facebook.com",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://www.facebook.com",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; ");
    const securityHeaders = [
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];
    const documentHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate",
      },
      {
        key: "Content-Security-Policy",
        value: contentSecurityPolicy,
      },
    ];
    const documentRoutes = [
      "/",
      "/about-us",
      "/case-studies",
      "/contact-us",
      "/growth-audit",
      "/blog",
      "/blog/:slug*",
      "/privacy-policy",
      "/terms",
      "/industries",
      "/industries/:slug*",
      "/ai-seo-services",
      "/seo-services",
      "/local-seo-services",
      "/web-development",
      "/ecommerce-development",
      "/cro-strategy",
      "/reputation-management",
      "/conversion-upside",
      "/conversion-upside/whats-next",
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      ...documentRoutes.map((source) => ({ source, headers: documentHeaders })),
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
