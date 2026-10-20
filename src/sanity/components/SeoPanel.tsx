"use client";

import { Badge, Box, Card, Flex, Heading, Stack, Text } from "@sanity/ui";
import type { ObjectInputProps } from "sanity";
import { useFormValue } from "sanity";
import { analyse, effectiveDescription, effectiveTitle, score, type SeoInput } from "../lib/seoAnalysis";

const dot = { good: "#2b8a3e", ok: "#e8a400", bad: "#e03131" } as const;

function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

function GooglePreview({ input }: { input: SeoInput }) {
  const title = effectiveTitle(input) || "Add a title";
  const description = effectiveDescription(input) || "Add a meta description so Google shows your summary instead of guessing one.";
  return (
    <Card padding={4} radius={3} border style={{ background: "#fff" }}>
      <Stack gap={3}>
        <Text size={1} weight="semibold" muted>Google preview</Text>
        <div style={{ fontFamily: "arial, sans-serif", maxWidth: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "grid", width: 26, height: 26, placeItems: "center", borderRadius: "50%", background: "#f1f3f4", fontSize: 12 }}>R</span>
            <span style={{ lineHeight: 1.3 }}>
              <span style={{ display: "block", color: "#202124", fontSize: 14 }}>Rank It Globally</span>
              <span style={{ display: "block", color: "#4d5156", fontSize: 12 }}>https://rankitglobally.com › blog › {input.slug || "your-post"}</span>
            </span>
          </div>
          <div style={{ margin: "6px 0 3px", color: "#1a0dab", fontSize: 20, lineHeight: 1.3 }}>{truncate(title, 62)}</div>
          <div style={{ color: "#4d5156", fontSize: 14, lineHeight: 1.58 }}>{truncate(description, 160)}</div>
        </div>
      </Stack>
    </Card>
  );
}

// SEO tab: live Google preview and a Yoast-style checklist above the fields.
export function SeoPanel(props: ObjectInputProps) {
  const title = useFormValue(["title"]) as string | undefined;
  const slug = (useFormValue(["slug"]) as { current?: string } | undefined)?.current;
  const excerpt = useFormValue(["excerpt"]) as string | undefined;
  const body = useFormValue(["body"]) as SeoInput["body"];
  const mainImage = useFormValue(["mainImage"]) as SeoInput["mainImage"];
  const input: SeoInput = { title, slug, excerpt, body, mainImage, seo: (props.value || {}) as SeoInput["seo"] };
  const checks = analyse(input);
  const result = score(checks);
  const order = { bad: 0, ok: 1, good: 2 };
  const sorted = [...checks].sort((a, b) => order[a.status] - order[b.status]);

  return (
    <Stack gap={4}>
      <GooglePreview input={input} />
      <Card padding={4} radius={3} border tone={result.tone}>
        <Stack gap={3}>
          <Flex align="center" justify="space-between" gap={3}>
            <Heading size={1}>SEO analysis</Heading>
            <Badge tone={result.tone} fontSize={1} padding={2}>{result.label} · {result.percent}/100</Badge>
          </Flex>
          <Stack gap={2} as="ul" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {sorted.map((check) => (
              <Flex as="li" key={check.id} gap={2} align="flex-start">
                <Box style={{ flex: "0 0 10px", width: 10, height: 10, marginTop: 4, borderRadius: "50%", background: dot[check.status] }} />
                <Text size={1}>{check.label}</Text>
              </Flex>
            ))}
          </Stack>
          <Text size={0} muted>Updates as you type. Green is good, amber could be better, red needs fixing.</Text>
        </Stack>
      </Card>
      {props.renderDefault(props)}
    </Stack>
  );
}
