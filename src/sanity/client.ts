import { createClient, groq } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";
import { apiVersion, dataset, hasSanityConfig, projectId } from "./env";

export const client = createClient({
  projectId: projectId || "yourprojectid",
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export type BlogPostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImageSource;
};

export type BlogPost = BlogPostListItem & {
  body?: PortableTextBlock[];
  seo?: {
    title?: string;
    description?: string;
  };
};

export async function getPosts() {
  if (!hasSanityConfig) return [];

  return client.fetch<BlogPostListItem[]>(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage
    }`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getPost(slug: string) {
  if (!hasSanityConfig) return null;

  return client.fetch<BlogPost | null>(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      mainImage,
      body,
      seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  );
}
