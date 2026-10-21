import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { hasSanityConfig } from "@/sanity/env";

type MediaRecord = {
  url?: string;
  mimeType?: string;
  originalFilename?: string;
  extension?: string;
  noIndex?: boolean;
};

const passThroughHeaders = ["content-type", "content-length", "content-range", "accept-ranges", "etag", "last-modified"];

// Serves Media library files at rankitglobally.com/media/<slug>.<ext>. The
// file is streamed from Sanity's CDN so the link stays on our domain (good for
// trust and for Google crediting the site). Range requests are passed through
// so videos can seek.
async function serve(request: Request, params: Promise<{ file: string }>, method: "GET" | "HEAD") {
  const { file } = await params;
  const slug = decodeURIComponent(file).replace(/\.[a-z0-9]{1,5}$/i, "");
  if (!hasSanityConfig || !/^[\w-]+$/.test(slug)) return notFound();

  const media = await client.fetch<MediaRecord | null>(
    groq`*[_type == "mediaFile" && slug.current == $slug][0]{
      "url": file.asset->url,
      "mimeType": file.asset->mimeType,
      "originalFilename": file.asset->originalFilename,
      "extension": file.asset->extension,
      noIndex
    }`,
    { slug },
    { next: { revalidate: 60 } },
  );
  if (!media?.url) return notFound();

  const range = request.headers.get("range");
  const upstream = await fetch(media.url, { method, headers: range ? { range } : undefined, cache: "no-store" });
  if (!upstream.ok && upstream.status !== 206) return notFound();

  const headers = new Headers();
  for (const name of passThroughHeaders) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  if (media.mimeType) headers.set("content-type", media.mimeType);
  const download = new URL(request.url).searchParams.has("download");
  const filename = `${slug}${media.extension ? `.${media.extension}` : ""}`;
  headers.set("content-disposition", `${download ? "attachment" : "inline"}; filename="${filename}"`);
  headers.set("cache-control", "public, max-age=3600, stale-while-revalidate=86400");
  if (media.noIndex) headers.set("x-robots-tag", "noindex");

  return new Response(method === "HEAD" ? null : upstream.body, { status: upstream.status, headers });
}

function notFound() {
  return new Response("File not found.", { status: 404, headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex" } });
}

export async function GET(request: Request, { params }: { params: Promise<{ file: string }> }) {
  return serve(request, params, "GET");
}

export async function HEAD(request: Request, { params }: { params: Promise<{ file: string }> }) {
  return serve(request, params, "HEAD");
}
