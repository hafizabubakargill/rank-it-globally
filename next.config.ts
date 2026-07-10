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
        source: "/free-consultation",
        destination: "/free-audit",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
  async headers() {
    const documentHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate",
      },
    ];

    return [
      {
        source: "/",
        headers: documentHeaders,
      },
      {
        source: "/about-us",
        headers: documentHeaders,
      },
      {
        source: "/case-studies",
        headers: documentHeaders,
      },
      {
        source: "/contact-us",
        headers: documentHeaders,
      },
      {
        source: "/free-audit",
        headers: documentHeaders,
      },
      {
        source: "/blog",
        headers: documentHeaders,
      },
      {
        source: "/blog/:slug*",
        headers: documentHeaders,
      },
      {
        source: "/privacy-policy",
        headers: documentHeaders,
      },
      {
        source: "/terms",
        headers: documentHeaders,
      },
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
