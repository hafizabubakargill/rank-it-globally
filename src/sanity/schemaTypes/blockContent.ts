import { DocumentPdfIcon } from "@sanity/icons/DocumentPdf";
import { DownloadIcon } from "@sanity/icons/Download";
import { LinkIcon } from "@sanity/icons/Link";
import { PlayIcon } from "@sanity/icons/Play";
import { defineArrayMember, defineField, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            title: "External link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }),
              }),
              defineField({ name: "blank", title: "Open in a new tab", type: "boolean", initialValue: false }),
              defineField({
                name: "nofollow",
                title: "Nofollow",
                description: "Tell Google not to pass ranking credit, e.g. for sponsored or untrusted links.",
                type: "boolean",
                initialValue: false,
              }),
            ],
          }),
          defineArrayMember({
            name: "internalLink",
            title: "Link to another post",
            type: "object",
            icon: LinkIcon,
            fields: [
              defineField({
                name: "reference",
                title: "Post",
                type: "reference",
                to: [{ type: "post" }],
                validation: (rule) => rule.required(),
              }),
            ],
          }),
          defineArrayMember({
            name: "fileLink",
            title: "Link to a file (PDF, doc, video)",
            type: "object",
            icon: DocumentPdfIcon,
            fields: [
              defineField({
                name: "file",
                title: "File",
                description: "Pick a file from the Media library, or click \"Create\" to upload a new one here.",
                type: "reference",
                to: [{ type: "mediaFile" }],
                validation: (rule) => rule.required(),
              }),
              defineField({ name: "blank", title: "Open in a new tab", type: "boolean", initialValue: true }),
              defineField({
                name: "download",
                title: "Download instead of opening",
                description: "Saves the file to the reader's device instead of opening it in the browser.",
                type: "boolean",
                initialValue: false,
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          description: "Describe the image for screen readers and Google Images.",
          type: "string",
          validation: (rule) => rule.warning().required(),
        }),
        defineField({ name: "caption", title: "Caption", description: "Optional text shown under the image.", type: "string" }),
      ],
    }),
    defineArrayMember({
      type: "responsiveTable",
    }),
    defineArrayMember({
      name: "videoEmbed",
      title: "Video",
      type: "object",
      icon: PlayIcon,
      fields: [
        defineField({
          name: "source",
          title: "Video source",
          type: "string",
          initialValue: "youtube",
          options: {
            list: [
              { title: "YouTube link", value: "youtube" },
              { title: "Uploaded video (Media library)", value: "upload" },
            ],
            layout: "radio",
          },
        }),
        defineField({
          name: "youtubeUrl",
          title: "YouTube link",
          type: "url",
          hidden: ({ parent }) => parent?.source === "upload",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { source?: string } | undefined;
              if (parent?.source === "upload") return true;
              if (!value) return "Paste a YouTube link.";
              return /(youtube(-nocookie)?\.com|youtu\.be)\//i.test(String(value)) ? true : "This doesn't look like a YouTube link.";
            }),
        }),
        defineField({
          name: "file",
          title: "Video file",
          description: "Pick an uploaded video, or click \"Create\" to upload one. Add a thumbnail to the media file so Google can show it.",
          type: "reference",
          to: [{ type: "mediaFile" }],
          hidden: ({ parent }) => parent?.source !== "upload",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { source?: string } | undefined;
              return parent?.source === "upload" && !value ? "Pick a video file." : true;
            }),
        }),
        defineField({
          name: "title",
          title: "Video title",
          description: "Used for accessibility and the video's structured data (VideoObject).",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Video description",
          description: "One or two sentences. Google uses it for video results. Leave empty to use the media file's description.",
          type: "text",
          rows: 2,
        }),
        defineField({ name: "caption", title: "Caption", description: "Optional text shown under the video.", type: "string" }),
      ],
      preview: {
        select: { title: "title", source: "source", url: "youtubeUrl", file: "file.title" },
        prepare({ title, source, url, file }) {
          return { title: title || "Video", subtitle: source === "upload" ? `Uploaded: ${file || "no file picked"}` : url || "No link", media: PlayIcon };
        },
      },
    }),
    defineArrayMember({
      name: "fileCard",
      title: "Download card",
      type: "object",
      icon: DownloadIcon,
      fields: [
        defineField({
          name: "file",
          title: "File",
          description: "Pick a file from the Media library, or click \"Create\" to upload a new one here.",
          type: "reference",
          to: [{ type: "mediaFile" }],
          validation: (rule) => rule.required(),
        }),
        defineField({ name: "heading", title: "Heading", description: "Leave empty to use the file's title.", type: "string" }),
        defineField({ name: "text", title: "Text", description: "Leave empty to use the file's description.", type: "text", rows: 2 }),
        defineField({ name: "buttonLabel", title: "Button label", description: "e.g. \"Download the checklist\". Defaults to \"Download\".", type: "string" }),
      ],
      preview: {
        select: { heading: "heading", title: "file.title", extension: "file.file.asset.extension" },
        prepare({ heading, title, extension }) {
          return { title: heading || title || "Download card", subtitle: extension ? `${extension.toUpperCase()} download` : "Download", media: DownloadIcon };
        },
      },
    }),
  ],
});
