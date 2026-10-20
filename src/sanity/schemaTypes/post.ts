import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { defineArrayMember, defineField, defineType } from "sanity";
import { charCountInput } from "../components/CharCountInput";
import { SchemaSummary } from "../components/SchemaSummary";
import { parseCustomSchema } from "../lib/customSchema";

// Blog post, organised like a WordPress + Yoast editor: Content, SEO, Schema
// and Settings tabs. Existing field names are unchanged, so current posts keep
// their content.
export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  icon: DocumentTextIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
    { name: "schema", title: "Schema" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    // ---------- Content ----------
    defineField({
      name: "title",
      title: "Title",
      description: "The H1 on the page. Write it for readers; you can set a separate SEO title on the SEO tab.",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      description: "rankitglobally.com/blog/your-slug. Short, lowercase, with the focus keyword. Don't change it after publishing.",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Shown on the blog page and used as the meta description if you don't set one.",
      type: "text",
      rows: 3,
      group: "content",
      components: { input: charCountInput({ min: 120, max: 220 }, "Ideal: 120–160 characters") },
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      description: "Shown at the top of the post and in social shares. 1200 × 630 px or larger.",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          description: "Describe the image for screen readers and Google Images.",
          type: "string",
          validation: (rule) => rule.warning().custom((value, context) => {
            const parent = context.parent as { asset?: unknown } | undefined;
            return parent?.asset && !value ? "Add alt text for accessibility and SEO." : true;
          }),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Article",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "faqs",
      title: "Article FAQs",
      description: "Shown below the article and published as FAQ structured data, which AI answers and Google can quote.",
      type: "array",
      group: ["content", "schema"],
      of: [
        defineArrayMember({
          type: "object",
          name: "articleFaq",
          title: "FAQ",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "question", subtitle: "answer" } },
        }),
      ],
    }),

    // ---------- SEO ----------
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      options: { collapsible: false },
    }),

    // ---------- Schema ----------
    defineField({
      name: "schemaSummary",
      title: "Structured data",
      type: "string",
      group: "schema",
      readOnly: true,
      components: { input: SchemaSummary },
    }),
    defineField({
      name: "articleType",
      title: "Article type",
      description: "Most posts are blog posts. Use Technical article for in-depth how-to or developer content.",
      type: "string",
      group: "schema",
      initialValue: "BlogPosting",
      options: {
        list: [
          { title: "Blog post", value: "BlogPosting" },
          { title: "Article", value: "Article" },
          { title: "News article", value: "NewsArticle" },
          { title: "Technical article", value: "TechArticle" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "howTo",
      title: "How-to steps",
      description: "For step-by-step guides. Published as HowTo structured data, which AI assistants use to answer \"how do I…\" questions.",
      type: "object",
      group: "schema",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "enabled", title: "Include how-to steps", type: "boolean", initialValue: false }),
        defineField({
          name: "name",
          title: "How-to title",
          description: "e.g. \"How to get your business into Google's AI Overviews\". Leave empty to use the post title.",
          type: "string",
          hidden: ({ parent }) => !parent?.enabled,
        }),
        defineField({
          name: "totalTime",
          title: "Time needed (minutes)",
          type: "number",
          hidden: ({ parent }) => !parent?.enabled,
          validation: (rule) => rule.min(1).integer(),
        }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          hidden: ({ parent }) => !parent?.enabled,
          of: [
            defineArrayMember({
              type: "object",
              name: "howToStep",
              title: "Step",
              fields: [
                defineField({ name: "name", title: "Step title", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "text", title: "What to do", type: "text", rows: 3, validation: (rule) => rule.required() }),
              ],
              preview: { select: { title: "name", subtitle: "text" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "customSchema",
      title: "Custom schema (JSON-LD)",
      description: "Advanced. Paste extra JSON-LD, e.g. a Product, Review or VideoObject. It's checked before publishing and added alongside the automatic schema.",
      type: "text",
      rows: 8,
      group: "schema",
      validation: (rule) =>
        rule.custom((value) => {
          const result = parseCustomSchema(value as string | undefined);
          return result.error ? `Custom schema is not valid: ${result.error}` : true;
        }),
    }),

    // ---------- Settings ----------
    defineField({
      name: "publishedAt",
      title: "Published on",
      type: "datetime",
      group: "settings",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "updatedAt",
      title: "Last meaningfully updated",
      description: "Set this when you refresh the content. Google and AI tools use it to judge freshness. Leave empty to use the last edit time.",
      type: "datetime",
      group: "settings",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "settings",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "settings",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
    { title: "Title A–Z", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", author: "author.name", media: "mainImage", keyword: "seo.focusKeyword", noIndex: "seo.noIndex" },
    prepare({ title, author, media, keyword, noIndex }) {
      const parts = [author ? `by ${author}` : "", keyword ? `🔑 ${keyword}` : "No focus keyword", noIndex ? "noindex" : ""].filter(Boolean);
      return { title, media, subtitle: parts.join(" · ") };
    },
  },
});
