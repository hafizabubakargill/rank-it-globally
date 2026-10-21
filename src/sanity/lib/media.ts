// Public URLs for files in the Studio's Media library. Files are served from
// rankitglobally.com/media/<slug>.<ext> (src/app/media/[file]/route.ts), so
// links in posts point at our own domain rather than Sanity's CDN.

export const siteUrl = "https://rankitglobally.com";

// Sanity file asset ids look like "file-<hash>-pdf"; the last part is the
// file extension.
export function extensionFromAssetRef(ref?: string) {
  const match = ref?.match(/^file-[^-]+-([a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "";
}

export function mediaPath(slug?: string, extension?: string) {
  if (!slug) return "";
  return `/media/${slug}${extension ? `.${extension}` : ""}`;
}

export function mediaUrl(slug?: string, extension?: string) {
  const path = mediaPath(slug, extension);
  return path ? `${siteUrl}${path}` : "";
}

export function formatBytes(bytes?: number) {
  if (!bytes) return "";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// YouTube watch, short, embed and youtu.be links → video id.
export function youTubeId(url?: string) {
  const match = url?.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i);
  return match ? match[1] : "";
}
