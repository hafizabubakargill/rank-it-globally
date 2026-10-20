// Parses the optional custom JSON-LD an editor pastes into a post. Shared by
// Studio validation, the Studio summary and the blog page, so all three agree
// on what is valid.

type JsonLdNode = Record<string, unknown>;

export function parseCustomSchema(raw?: string): { value: JsonLdNode[] | null; types: string[]; error?: string } {
  const text = raw?.trim();
  if (!text) return { value: null, types: [] };
  const json = text.replace(/^<script[^>]*>/i, "").replace(/<\/script>\s*$/i, "").trim();
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch (error) {
    return { value: null, types: [], error: `invalid JSON (${(error as Error).message})` };
  }
  const items = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === "object" && Array.isArray((parsed as JsonLdNode)["@graph"])
      ? ((parsed as JsonLdNode)["@graph"] as unknown[])
      : [parsed];
  const nodes = items.filter((item): item is JsonLdNode => Boolean(item) && typeof item === "object" && !Array.isArray(item));
  if (!nodes.length || nodes.some((node) => !node["@type"])) {
    return { value: null, types: [], error: 'every item needs an "@type"' };
  }
  const cleaned = nodes.map((node) => {
    const copy = { ...node };
    delete copy["@context"];
    return copy;
  });
  return { value: cleaned, types: cleaned.map((node) => String(node["@type"])) };
}
