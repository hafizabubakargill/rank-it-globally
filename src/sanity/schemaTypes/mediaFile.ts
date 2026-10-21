import { FolderIcon } from "@sanity/icons/Folder";
import { defineField, defineType } from "sanity";
import { MediaUrlInput } from "../components/MediaUrlInput";
import { formatBytes } from "../lib/media";

// Media library: PDFs, documents, spreadsheets, videos and other files that
// posts can link to or embed. Each file gets a public link on our own domain,
// rankitglobally.com/media/<slug>.<ext>, served by src/app/media/[file]/route.ts.
export const mediaFile = defineType({
  name: "mediaFile",
  title: "Media file",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "A clear name, e.g. \"2026 Local SEO Checklist\". Shown on download cards and used in video structured data.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "File",
      description: "PDF, Word, Excel, PowerPoint, CSV, ZIP, MP4/WebM video or MP3 audio. Keep videos under about 100 MB; for longer videos use YouTube and the Video block.",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.txt,.rtf,.zip,.mp4,.webm,.mov,.mp3,.wav,.m4a",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      description: "The file's link: rankitglobally.com/media/your-slug.pdf. Short and descriptive. Don't change it once posts link to it.",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publicUrl",
      title: "Public link",
      type: "string",
      readOnly: true,
      components: { input: MediaUrlInput },
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "One or two sentences on what the file contains. Shown on download cards and used as the video description for Google.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail (videos)",
      description: "For videos: the poster image shown before playing. Google needs it to show the video in search. 1280 × 720 px.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Google (noindex)",
      description: "Keeps this file out of search results, e.g. gated lead magnets or client documents. Anyone with the link can still open it.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [{ title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", slug: "slug.current", size: "file.asset.size", extension: "file.asset.extension", media: "thumbnail" },
    prepare({ title, slug, size, extension, media }) {
      const parts = [extension ? extension.toUpperCase() : "", formatBytes(size), slug ? `/media/${slug}${extension ? `.${extension}` : ""}` : "No slug"].filter(Boolean);
      return { title, subtitle: parts.join(" · "), media: media || FolderIcon };
    },
  },
});
