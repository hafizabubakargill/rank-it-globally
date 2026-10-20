// Yoast-style checks for a blog post, run live in the Studio as the editor
// types. Pure functions so they are easy to test and reuse.

type Span = { _type?: string; text?: string; marks?: string[] };
type MarkDef = { _key?: string; _type?: string; href?: string; reference?: { _ref?: string } };
type Block = {
  _type?: string;
  style?: string;
  children?: Span[];
  markDefs?: MarkDef[];
  alt?: string;
  asset?: unknown;
};

export type SeoInput = {
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: Block[];
  mainImage?: { asset?: unknown; alt?: string };
  seo?: { focusKeyword?: string; title?: string; description?: string };
};

export type Check = { id: string; status: "good" | "ok" | "bad"; label: string };

export const siteName = "Rank It Globally";
export const titleRange = { min: 30, max: 60 };
export const descriptionRange = { min: 120, max: 160 };

export function blockText(block: Block) {
  return (block.children || []).map((child) => child.text || "").join("");
}

export function bodyText(body: Block[] = []) {
  return body.filter((block) => block._type === "block").map(blockText).join("\n");
}

export function wordCount(text: string) {
  return (text.match(/[\p{L}\p{N}'’-]+/gu) || []).length;
}

// Lowercase, straight apostrophes and no possessive "'s", so "Google's AI
// Overviews" matches the keyword "google ai overviews".
function normalise(text = "") {
  return text.toLowerCase().replace(/[’']/g, "'").replace(/'s\b/g, "").replace(/\s+/g, " ").trim();
}

function slugify(text = "") {
  return normalise(text).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function countOccurrences(text: string, keyword: string) {
  if (!keyword) return 0;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (normalise(text).match(new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(?=$|[^\\p{L}\\p{N}])`, "gu")) || []).length;
}

export function effectiveTitle(input: SeoInput) {
  return input.seo?.title?.trim() || (input.title ? `${input.title} | ${siteName}` : "");
}

export function effectiveDescription(input: SeoInput) {
  return input.seo?.description?.trim() || input.excerpt?.trim() || "";
}

export function linkCounts(body: Block[] = []) {
  let internal = 0;
  let external = 0;
  for (const block of body) {
    for (const def of block.markDefs || []) {
      if (def._type === "internalLink") internal += 1;
      else if (def._type === "link" && def.href) {
        if (def.href.startsWith("/") || /^https?:\/\/(www\.)?rankitglobally\.com/i.test(def.href)) internal += 1;
        else external += 1;
      }
    }
  }
  return { internal, external };
}

export function analyse(input: SeoInput): Check[] {
  const keyword = normalise(input.seo?.focusKeyword);
  const title = effectiveTitle(input);
  const description = effectiveDescription(input);
  const body = input.body || [];
  const text = bodyText(body);
  const words = wordCount(text);
  // The intro is the first real paragraph: skip short labels ("Key
  // Takeaways:") and author bylines.
  const firstParagraph = body.find((block) => {
    if (block._type !== "block" || (block.style && block.style !== "normal")) return false;
    const text = blockText(block).trim();
    return wordCount(text) >= 12 && !/^by\s/i.test(text);
  });
  const subheadings = body.filter((block) => block._type === "block" && /^h[2-4]$/.test(block.style || ""));
  const bodyImages = body.filter((block) => block._type === "image");
  const links = linkCounts(body);
  const checks: Check[] = [];
  const add = (id: string, status: Check["status"], label: string) => checks.push({ id, status, label });

  if (!keyword) {
    add("keyword", "bad", "Set a focus keyword to run the keyword checks.");
  } else {
    add("kw-title", countOccurrences(title, keyword) ? "good" : "bad", countOccurrences(title, keyword) ? "Focus keyword appears in the SEO title." : "Add the focus keyword to the SEO title.");
    add("kw-desc", countOccurrences(description, keyword) ? "good" : "bad", countOccurrences(description, keyword) ? "Focus keyword appears in the meta description." : "Add the focus keyword to the meta description.");
    const inSlug = (input.slug || "").includes(slugify(keyword));
    add("kw-slug", inSlug ? "good" : "ok", inSlug ? "Focus keyword appears in the URL slug." : "Consider using the focus keyword in the URL slug.");
    const inIntro = firstParagraph ? countOccurrences(blockText(firstParagraph), keyword) > 0 : false;
    add("kw-intro", inIntro ? "good" : "bad", inIntro ? "Focus keyword appears in the first paragraph." : "Use the focus keyword in the first paragraph.");
    const inHeading = subheadings.some((block) => countOccurrences(blockText(block), keyword) > 0);
    add("kw-heading", inHeading ? "good" : "ok", inHeading ? "Focus keyword appears in a subheading." : "Use the focus keyword in at least one H2 or H3.");
    const density = words ? (countOccurrences(text, keyword) * keyword.split(" ").length * 100) / words : 0;
    const densityLabel = `Keyword density is ${density.toFixed(1)}%`;
    if (density >= 0.5 && density <= 2.5) add("kw-density", "good", `${densityLabel}. Nicely balanced.`);
    else if (density < 0.5) add("kw-density", "ok", `${densityLabel}. Use the keyword a little more naturally in the text.`);
    else add("kw-density", "bad", `${densityLabel}. That reads as keyword stuffing; use it less often.`);
  }

  const titleLength = title.length;
  if (!titleLength) add("title-length", "bad", "Add a title.");
  else if (titleLength >= titleRange.min && titleLength <= titleRange.max) add("title-length", "good", `SEO title length is good (${titleLength} characters).`);
  else add("title-length", titleLength > titleRange.max ? "bad" : "ok", `SEO title is ${titleLength} characters. Aim for ${titleRange.min}–${titleRange.max} so Google doesn't cut it off.`);

  const descriptionLength = description.length;
  if (!descriptionLength) add("desc-length", "bad", "Add a meta description (or an excerpt).");
  else if (descriptionLength >= descriptionRange.min && descriptionLength <= descriptionRange.max) add("desc-length", "good", `Meta description length is good (${descriptionLength} characters).`);
  else add("desc-length", descriptionLength > descriptionRange.max ? "bad" : "ok", `Meta description is ${descriptionLength} characters. Aim for ${descriptionRange.min}–${descriptionRange.max}.`);

  if (words >= 1000) add("length", "good", `Text length is ${words} words. Great depth.`);
  else if (words >= 600) add("length", "ok", `Text length is ${words} words. 1,000+ usually ranks better for competitive topics.`);
  else add("length", "bad", `Text length is ${words} words. Aim for at least 600.`);

  add("subheadings", subheadings.length >= 2 ? "good" : "ok", subheadings.length >= 2 ? `${subheadings.length} subheadings break up the text.` : "Add H2/H3 subheadings to structure the article.");
  add("internal-links", links.internal ? "good" : "bad", links.internal ? `${links.internal} internal link${links.internal > 1 ? "s" : ""} to other pages on the site.` : "Add at least one internal link (to a service page or another post).");
  add("external-links", links.external ? "good" : "ok", links.external ? `${links.external} outbound link${links.external > 1 ? "s" : ""} to sources.` : "Link to at least one trusted outside source.");

  const hasFeatured = Boolean(input.mainImage?.asset);
  if (!hasFeatured) add("featured", "bad", "Add a main image (used for Google, social shares and AI answers).");
  else add("featured", input.mainImage?.alt ? "good" : "bad", input.mainImage?.alt ? "Main image has alt text." : "Add alt text to the main image.");

  if (bodyImages.length) {
    const missing = bodyImages.filter((image) => !image.alt?.trim()).length;
    add("image-alt", missing ? "bad" : "good", missing ? `${missing} image${missing > 1 ? "s" : ""} in the article ${missing > 1 ? "are" : "is"} missing alt text.` : "All article images have alt text.");
  }

  return checks;
}

export function score(checks: Check[]) {
  const points = checks.reduce((sum, check) => sum + (check.status === "good" ? 2 : check.status === "ok" ? 1 : 0), 0);
  const percent = checks.length ? Math.round((points / (checks.length * 2)) * 100) : 0;
  return { percent, label: percent >= 80 ? "Good" : percent >= 55 ? "OK" : "Needs work", tone: percent >= 80 ? "positive" : percent >= 55 ? "caution" : "critical" } as const;
}
