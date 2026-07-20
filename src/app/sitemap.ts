import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { hasSanityConfig } from "@/sanity/env";

const siteUrl = "https://rankitglobally.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: siteUrl, changeFrequency: "weekly", priority: 1 },
  { url: `${siteUrl}/free-audit`, changeFrequency: "weekly", priority: 0.9 },
  {
    url: `${siteUrl}/bellevue-seo-services`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${siteUrl}/bellevue-social-media-marketing`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { url: `${siteUrl}/seo-services`, changeFrequency: "monthly", priority: 0.8 },
  {
    url: `${siteUrl}/social-media-marketing`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { url: `${siteUrl}/web-development`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/ppc-management`, changeFrequency: "monthly", priority: 0.8 },
  {
    url: `${siteUrl}/ecommerce-development`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { url: `${siteUrl}/ui-ux-design`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/cro-strategy`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/about-us`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${siteUrl}/contact-us`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
  { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.4 },
];

type SitemapPost = {
  slug: string;
  publishedAt?: string;
  _updatedAt?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes = staticRoutes.map((route) => ({
    lastModified: now,
    ...route,
  }));

  if (!hasSanityConfig) return routes;

  let posts: SitemapPost[] = [];

  try {
    posts = await client.fetch<SitemapPost[]>(
      groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt,
        _updatedAt
      }`,
      {},
      { next: { revalidate: 3600 } },
    );
  } catch (error) {
    console.warn("Unable to fetch Sanity posts for sitemap", error);
  }

  return [
    ...routes,
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt || post.publishedAt || now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
