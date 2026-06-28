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
  author?: BlogAuthor;
  categories?: BlogCategory[];
};

export type BlogAuthor = {
  name?: string;
  slug?: string;
  image?: SanityImageSource;
  bio?: PortableTextBlock[];
};

export type BlogCategory = {
  _id: string;
  title?: string;
  slug?: string;
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
      "mainImage": mainImage {asset},
      author->{name, "slug": slug.current, image, bio},
      categories[]->{_id, title, "slug": slug.current}
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
      "mainImage": mainImage {asset},
      author->{name, "slug": slug.current, image, bio},
      categories[]->{_id, title, "slug": slug.current},
      body,
      seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  );
}

export async function getRelatedPosts(slug: string, categorySlugs: string[]) {
  if (!hasSanityConfig) return [];

  const projection = groq`{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "mainImage": mainImage {asset},
    author->{name, "slug": slug.current, image, bio},
    categories[]->{_id, title, "slug": slug.current}
  }`;

  const categoryMatches = categorySlugs.length
    ? await client.fetch<BlogPostListItem[]>(
        groq`*[
          _type == "post" &&
          defined(slug.current) &&
          slug.current != $slug &&
          count((categories[]->slug.current)[@ in $categorySlugs]) > 0
        ] | order(publishedAt desc)[0...3] ${projection}`,
        { slug, categorySlugs },
        { next: { revalidate: 60 } },
      )
    : [];

  if (categoryMatches.length >= 3) return categoryMatches;

  const fallback = await client.fetch<BlogPostListItem[]>(
    groq`*[
      _type == "post" &&
      defined(slug.current) &&
      slug.current != $slug &&
      !(_id in $excludeIds)
    ] | order(publishedAt desc)[0...3] ${projection}`,
    {
      slug,
      excludeIds: categoryMatches.map((post) => post._id),
    },
    { next: { revalidate: 60 } },
  );

  return [...categoryMatches, ...fallback].slice(0, 3);
}
