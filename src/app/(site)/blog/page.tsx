import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, urlForImage } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Blog | Rank It Globally",
  description: "SEO, AI search, CRO, and web design insights from Rank It Globally.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <main className="blog-page">
        <div className="blog-inner blog-index-inner">
          <header className="blog-header">
            <p className="sec-label">Blog</p>
            <h1>Insights for Better Search and Conversion</h1>
            <p>
              Practical guides on AI search visibility, technical SEO, website
              performance, and conversion-focused web design.
            </p>
          </header>

          {posts.length ? (
            <div className="blog-list">
              {posts.map((post) => (
                <article className="blog-card" key={post._id}>
                  <Link className="blog-card-media" href={`/blog/${post.slug}`}>
                    {post.mainImage ? (
                      <img
                        src={urlForImage(post.mainImage)
                          .width(900)
                          .fit("max")
                          .auto("format")
                          .url()}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <span>Rank It Globally</span>
                    )}
                  </Link>
                  <div className="blog-card-copy">
                    <time>{formatDate(post.publishedAt)}</time>
                    <h2>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    {post.excerpt ? <p>{post.excerpt}</p> : null}
                    <Link
                      className="blog-read-link"
                      href={`/blog/${post.slug}`}
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <h2>No posts published yet.</h2>
              <p>
                Add posts in Sanity Studio, then this page will populate
                automatically.
              </p>
            </div>
          )}
        </div>
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
