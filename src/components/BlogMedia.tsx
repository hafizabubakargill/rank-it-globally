import { urlForImage, type MediaFileRef } from "@/sanity/client";
import { formatBytes, mediaPath, mediaUrl, siteUrl, youTubeId } from "@/sanity/lib/media";

export type VideoEmbedValue = {
  _key?: string;
  source?: "youtube" | "upload";
  youtubeUrl?: string;
  title?: string;
  description?: string;
  caption?: string;
  media?: MediaFileRef | null;
};

export type FileCardValue = {
  heading?: string;
  text?: string;
  buttonLabel?: string;
  media?: MediaFileRef | null;
};

function thumbnailUrl(media?: MediaFileRef | null) {
  return media?.thumbnail ? urlForImage(media.thumbnail).width(1280).height(720).fit("crop").auto("format").url() : undefined;
}

// Video block in a post: a privacy-friendly YouTube embed or an uploaded video
// served from /media/.
export function BlogVideo({ value }: { value: VideoEmbedValue }) {
  const id = value.source !== "upload" ? youTubeId(value.youtubeUrl) : "";
  const src = value.source === "upload" ? mediaPath(value.media?.slug, value.media?.extension) : "";
  if (!id && !src) return null;
  const title = value.title || value.media?.title || "Video";

  return (
    <figure className="blog-body-figure blog-video">
      <div className="blog-video-frame">
        {id ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video controls preload="metadata" playsInline poster={thumbnailUrl(value.media)} aria-label={title}>
            <source src={src} type={value.media?.mimeType} />
          </video>
        )}
      </div>
      {value.caption?.trim() ? <figcaption>{value.caption}</figcaption> : null}
    </figure>
  );
}

// Download card in a post: file name, type and size, and a download button.
export function BlogFileCard({ value }: { value: FileCardValue }) {
  const href = mediaPath(value.media?.slug, value.media?.extension);
  if (!href) return null;
  const meta = [value.media?.extension?.toUpperCase(), formatBytes(value.media?.size)].filter(Boolean).join(" · ");
  const text = value.text?.trim() || value.media?.description;

  return (
    <aside className="blog-file-card">
      <div className="blog-file-card-icon" aria-hidden="true">{value.media?.extension?.toUpperCase().slice(0, 4) || "FILE"}</div>
      <div className="blog-file-card-body">
        <p className="blog-file-card-title">{value.heading?.trim() || value.media?.title}</p>
        {text ? <p className="blog-file-card-text">{text}</p> : null}
        {meta ? <p className="blog-file-card-meta">{meta}</p> : null}
      </div>
      <a className="blog-file-card-button" href={`${href}?download`} download>
        {value.buttonLabel?.trim() || "Download"}
      </a>
    </aside>
  );
}

// VideoObject structured data for every video block in the post.
export function videoSchemas(body: unknown[] | undefined, postUrl: string, fallbackDate?: string, fallbackImage?: string) {
  const videos = (body || []).filter((block): block is VideoEmbedValue & { _type: string } => (block as { _type?: string })?._type === "videoEmbed");
  return videos.flatMap((video, index) => {
    const id = video.source !== "upload" ? youTubeId(video.youtubeUrl) : "";
    const contentUrl = video.source === "upload" ? mediaUrl(video.media?.slug, video.media?.extension) : "";
    if (!id && !contentUrl) return [];
    const thumbnail = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : thumbnailUrl(video.media) || fallbackImage;
    return [
      {
        "@type": "VideoObject",
        "@id": `${postUrl}#video-${video._key || index + 1}`,
        name: video.title || video.media?.title,
        description: video.description?.trim() || video.media?.description || video.title,
        thumbnailUrl: thumbnail ? [thumbnail] : undefined,
        uploadDate: video.media?.createdAt || fallbackDate,
        ...(id ? { embedUrl: `https://www.youtube.com/embed/${id}`, url: `https://www.youtube.com/watch?v=${id}` } : { contentUrl }),
        publisher: { "@type": "Organization", name: "Rank It Globally", url: siteUrl },
      },
    ];
  });
}
