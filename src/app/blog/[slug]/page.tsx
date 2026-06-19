import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPost } from "@/sanity/client";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Rank It Globally",
    };
  }

  return {
    title: post.seo?.title || `${post.title} | Rank It Globally`,
    description: post.seo?.description || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main className="blog-page">
      <article className="blog-inner blog-article">
        <Link className="blog-back" href="/blog">
          Blog
        </Link>
        <header className="blog-header">
          <time>{formatDate(post.publishedAt)}</time>
          <h1>{post.title}</h1>
          {post.excerpt ? <p>{post.excerpt}</p> : null}
        </header>
        {Array.isArray(post.body) ? (
          <div className="blog-body">
            <PortableText value={post.body} />
          </div>
        ) : null}
      </article>
    </main>
  );
}

function formatDate(value?: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
