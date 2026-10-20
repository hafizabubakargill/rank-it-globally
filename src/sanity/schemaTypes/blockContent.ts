import { LinkIcon } from "@sanity/icons/Link";
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
  ],
});
