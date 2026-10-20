import { defineField, defineType } from "sanity";
import { charCountInput } from "../components/CharCountInput";
import { SeoPanel } from "../components/SeoPanel";
import { descriptionRange, titleRange } from "../lib/seoAnalysis";

// Per-post SEO settings, shown on the post's SEO tab with a live Google
// preview and checklist (SeoPanel). Field names title/description/image are
// unchanged so existing posts keep their values.
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  components: { input: SeoPanel },
  fieldsets: [
    { name: "keywords", title: "Keywords", options: { collapsible: false } },
    { name: "search", title: "Google search result", options: { collapsible: false } },
    { name: "social", title: "Social sharing (Facebook, LinkedIn, X)", options: { collapsible: true, collapsed: true } },
    { name: "advanced", title: "Advanced", options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    defineField({
      name: "focusKeyword",
      title: "Focus keyword",
      description: "The main search phrase this post should rank for, e.g. \"how much does seo cost\". The checklist above uses it.",
      type: "string",
      fieldset: "keywords",
    }),
    defineField({
      name: "secondaryKeywords",
      title: "Secondary keywords",
      description: "Related phrases and synonyms. Press Enter after each one. Added to the article's structured data.",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      fieldset: "keywords",
    }),
    defineField({
      name: "title",
      title: "SEO title",
      description: "Leave empty to use \"Post title | Rank It Globally\".",
      type: "string",
      fieldset: "search",
      components: { input: charCountInput(titleRange, `Ideal: ${titleRange.min}–${titleRange.max} characters`) },
      validation: (rule) => rule.max(70).warning("Google usually cuts titles longer than about 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Meta description",
      description: "The summary Google shows under your title. Leave empty to use the excerpt.",
      type: "text",
      rows: 3,
      fieldset: "search",
      components: { input: charCountInput(descriptionRange, `Ideal: ${descriptionRange.min}–${descriptionRange.max} characters`) },
      validation: (rule) => rule.max(170).warning("Google usually cuts descriptions longer than about 160 characters."),
    }),
    defineField({
      name: "ogTitle",
      title: "Social title",
      description: "Optional. Leave empty to use the SEO title.",
      type: "string",
      fieldset: "social",
    }),
    defineField({
      name: "ogDescription",
      title: "Social description",
      description: "Optional. Leave empty to use the meta description.",
      type: "text",
      rows: 2,
      fieldset: "social",
    }),
    defineField({
      name: "image",
      title: "Social image",
      description: "Optional. 1200 × 630 px works best. Leave empty to use the main image.",
      type: "image",
      options: { hotspot: true },
      fieldset: "social",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      description: "Only set this if the same article is published elsewhere and that copy should rank. Leave empty in almost every case.",
      type: "url",
      fieldset: "advanced",
      validation: (rule) => rule.uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Google (noindex)",
      description: "Keeps this post out of search results and the sitemap. Use for thin or internal posts.",
      type: "boolean",
      initialValue: false,
      fieldset: "advanced",
    }),
  ],
});
