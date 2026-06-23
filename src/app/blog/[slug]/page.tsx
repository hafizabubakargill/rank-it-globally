import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import BlogNav from "@/components/BlogNav";
import { getPost, getRelatedPosts, urlForImage } from "@/sanity/client";

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

  const categorySlugs = (post.categories || [])
    .map((category) => category.slug)
    .filter((value): value is string => Boolean(value));
  const relatedPosts = await getRelatedPosts(post.slug, categorySlugs);
  const postUrl = `https://rankitglobally.com/blog/${post.slug}`;
  const description = post.seo?.description || post.excerpt;
  const heroImageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1400).height(820).fit("crop").auto("format").url()
    : undefined;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: heroImageUrl ? [heroImageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: post.author?.name
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : {
          "@type": "Organization",
          name: "Rank It Globally",
        },
    publisher: {
      "@type": "Organization",
      name: "Rank It Globally",
      logo: {
        "@type": "ImageObject",
        url: "https://rankitglobally.com/assets/brand/logo-icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
  const shareLinks = buildShareLinks(postUrl, post.title);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BlogNav />
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
          {post.mainImage ? (
            <img
              className="blog-hero-image"
              src={heroImageUrl}
              alt=""
            />
          ) : null}
          {Array.isArray(post.body) ? (
            <div className="blog-body">
              <PortableText
                value={post.body}
                components={{
                  types: {
                    image: ({ value }) =>
                      value ? (
                        <img
                          className="blog-body-image"
                          src={urlForImage(value)
                            .width(1200)
                            .fit("max")
                            .auto("format")
                            .url()}
                          alt=""
                          loading="lazy"
                        />
                      ) : null,
                  },
                }}
              />
            </div>
          ) : null}
          {post.author?.name ? (
            <section className="blog-author" aria-label="Author">
              {post.author.image ? (
                <img
                  src={urlForImage(post.author.image)
                    .width(180)
                    .height(180)
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <div className="blog-author-fallback">
                  {post.author.name.slice(0, 1)}
                </div>
              )}
              <div>
                <p className="blog-kicker">Written by</p>
                <h2>{post.author.name}</h2>
                {Array.isArray(post.author.bio) ? (
                  <div className="blog-author-bio">
                    <PortableText value={post.author.bio} />
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}
          <section className="blog-share" aria-label="Share this article">
            <div>
              <p className="blog-kicker">Share</p>
              <h2>Send this to someone improving their website</h2>
            </div>
            <div className="blog-share-links">
              {shareLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </article>
        {relatedPosts.length ? (
          <section className="blog-inner blog-related" aria-label="Related articles">
            <div className="blog-related-head">
              <p className="blog-kicker">Keep Reading</p>
              <h2>Related Articles</h2>
            </div>
            <div className="blog-related-grid">
              {relatedPosts.map((relatedPost) => (
                <Link
                  className="blog-related-card"
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug}`}
                >
                  {relatedPost.mainImage ? (
                    <img
                      src={urlForImage(relatedPost.mainImage)
                        .width(520)
                        .height(320)
                        .fit("crop")
                        .auto("format")
                        .url()}
                      alt=""
                      loading="lazy"
                    />
                  ) : null}
                  <div>
                    <time>{formatDate(relatedPost.publishedAt)}</time>
                    <h3>{relatedPost.title}</h3>
                    {relatedPost.excerpt ? <p>{relatedPost.excerpt}</p> : null}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
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

function buildShareLinks(postUrl: string, title: string) {
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(title);

  return [
    {
      label: "X",
      ariaLabel: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      external: true,
    },
    {
      label: "in",
      ariaLabel: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      external: true,
    },
    {
      label: "f",
      ariaLabel: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      external: true,
    },
    {
      label: "@",
      ariaLabel: "Share by email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      external: false,
    },
  ];
}
