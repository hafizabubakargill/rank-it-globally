import type { PortableTextBlock } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostFaqs, type BlogPostFaq } from "@/components/BlogPostFaqs";
import {
  ResponsiveBlogTable,
  type ResponsiveTableValue,
} from "@/components/ResponsiveBlogTable";
import { getPost, getRelatedPosts, urlForImage } from "@/sanity/client";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type PortableTextChild = {
  _type?: string;
  text?: string;
};

type HeadingBlock = PortableTextBlock & {
  _key?: string;
  style?: string;
  children?: PortableTextChild[];
};

type TableOfContentsItem = {
  key: string;
  id: string;
  text: string;
  level: 2 | 3;
};

type HeadingValue = {
  _key?: string;
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

  const postUrl = `https://rankitglobally.com/blog/${post.slug}`;
  const heroImageUrl = post.mainImage
    ? urlForImage(post.mainImage).width(1400).fit("max").auto("format").url()
    : undefined;

  return {
    title: post.seo?.title || `${post.title} | Rank It Globally`,
    description: post.seo?.description || post.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt || post.publishedAt,
      images: heroImageUrl ? [{ url: heroImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      images: heroImageUrl ? [heroImageUrl] : undefined,
    },
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
  const authorUrl = post.author?.url || `${postUrl}#author`;
  const heroImageUrl = post.mainImage
    ? urlForImage(post.mainImage)
        .width(1400)
        .fit("max")
        .auto("format")
        .url()
    : undefined;
  const tableOfContents = extractHeadings(post.body);
  const headingIds = new Map(
    tableOfContents.map((heading) => [heading.key, heading.id]),
  );
  const visibleFaqs = (post.faqs || []).filter(
    (faq): faq is BlogPostFaq => Boolean(faq.question?.trim() && faq.answer?.trim()),
  );
  const schemaData = {
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    url: postUrl,
    headline: post.title,
    description,
    image: heroImageUrl ? [heroImageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: post.author?.name
      ? {
          "@type": "Person",
          name: post.author.name,
          url: authorUrl,
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
        url: "https://rankitglobally.com/assets/brand/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${postUrl}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rankitglobally.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://rankitglobally.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };
  const faqSchema = visibleFaqs.length
    ? {
        "@type": "FAQPage",
        "@id": `${postUrl}#faqs`,
        mainEntity: visibleFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [schemaData, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
  };
  const shareLinks = buildShareLinks(postUrl, post.title);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="blog-page">
        <article className="blog-article-head">
          <Link className="blog-back" href="/blog">
            ← Back To Blog
          </Link>
          <header className="blog-header">
            <time>{formatDate(post.publishedAt)}</time>
            <h1>{post.title}</h1>
            {post.excerpt ? <p>{post.excerpt}</p> : null}
          </header>
          {post.mainImage ? (
            <img className="blog-hero-image" src={heroImageUrl} alt="" />
          ) : null}
        </article>

        <div className="blog-article-shell">
          <aside className="blog-toc" aria-label="Table of contents">
            <p className="blog-kicker">In This Article</p>
            {tableOfContents.length ? (
              <div className="blog-toc-list" data-lenis-prevent>
                {tableOfContents.map((heading) => (
                  <a
                    className={`blog-toc-link blog-toc-level-${heading.level}`}
                    href={`#${heading.id}`}
                    key={heading.key}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            ) : (
              <p className="blog-toc-empty">Key sections will appear here.</p>
            )}
          </aside>

          <article className="blog-article">
            {Array.isArray(post.body) ? (
              <div className="blog-body">
                <PortableText
                  value={post.body}
                  components={{
                    block: {
                      h2: ({ children, value }) => (
                        <h2 id={getHeadingId(value, headingIds)}>
                          {children}
                        </h2>
                      ),
                      h3: ({ children, value }) => (
                        <h3 id={getHeadingId(value, headingIds)}>
                          {children}
                        </h3>
                      ),
                    },
                    types: {
                      responsiveTable: ({ value }) => (
                        <ResponsiveBlogTable
                          value={value as ResponsiveTableValue}
                        />
                      ),
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
            {visibleFaqs.length ? <BlogPostFaqs faqs={visibleFaqs} /> : null}
            {post.author?.name ? (
              <section className="blog-author" id="author" aria-label="Author">
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
        </div>

        {relatedPosts.length ? (
          <section
            className="blog-inner blog-related"
            aria-label="Related articles"
          >
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

function extractHeadings(
  body?: Array<PortableTextBlock | ResponsiveTableValue>,
): TableOfContentsItem[] {
  if (!Array.isArray(body)) return [];

  const usedIds = new Map<string, number>();

  return body.flatMap((block) => {
    const heading = block as HeadingBlock;
    if (heading.style !== "h2" && heading.style !== "h3") return [];

    const text = getBlockText(heading.children);
    if (!text) return [];

    const baseId = slugify(text);
    const count = usedIds.get(baseId) || 0;
    usedIds.set(baseId, count + 1);

    return [
      {
        key: heading._key || `${baseId}-${count}`,
        id: count ? `${baseId}-${count + 1}` : baseId,
        text,
        level: heading.style === "h2" ? 2 : 3,
      },
    ];
  });
}

function getHeadingId(
  value: HeadingValue | undefined,
  headingIds: Map<string, string>,
) {
  return value?._key ? headingIds.get(value._key) : undefined;
}

function getBlockText(children?: PortableTextChild[]) {
  if (!Array.isArray(children)) return "";
  return children
    .filter((child) => child._type === "span" && typeof child.text === "string")
    .map((child) => child.text)
    .join("")
    .trim();
}

function slugify(value: string) {
  return (
    value
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
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
