"use client";

import { Card, Flex, Stack, Text } from "@sanity/ui";
import type { StringInputProps } from "sanity";
import { useFormValue } from "sanity";
import { parseCustomSchema } from "../lib/customSchema";

const labels: Record<string, string> = {
  BlogPosting: "Blog post (BlogPosting)",
  Article: "Article",
  NewsArticle: "News article (NewsArticle)",
  TechArticle: "Technical article (TechArticle)",
};

// Read-only list of the JSON-LD this post will publish, so editors can see
// the effect of the Schema tab without reading code.
export function SchemaSummary(_props: StringInputProps) {
  const articleType = (useFormValue(["articleType"]) as string | undefined) || "BlogPosting";
  const faqs = (useFormValue(["faqs"]) as Array<{ question?: string; answer?: string }> | undefined) || [];
  const howTo = useFormValue(["howTo"]) as { enabled?: boolean; steps?: unknown[] } | undefined;
  const body = (useFormValue(["body"]) as Array<{ _type?: string }> | undefined) || [];
  const videoCount = body.filter((block) => block._type === "videoEmbed").length;
  const custom = useFormValue(["customSchema"]) as string | undefined;
  const parsedCustom = parseCustomSchema(custom);
  const faqCount = faqs.filter((faq) => faq.question?.trim() && faq.answer?.trim()).length;
  const stepCount = howTo?.steps?.length || 0;

  const rows: Array<{ ok: boolean; label: string; note: string }> = [
    { ok: true, label: labels[articleType] || articleType, note: "Headline, description, image, dates, author, publisher and keywords." },
    { ok: true, label: "Breadcrumbs (BreadcrumbList)", note: "Home › Blog › this post." },
    { ok: faqCount > 0, label: "FAQ (FAQPage)", note: faqCount ? `${faqCount} question${faqCount > 1 ? "s" : ""} from Article FAQs.` : "Add Article FAQs to include it." },
    { ok: Boolean(howTo?.enabled && stepCount), label: "How-to steps (HowTo)", note: howTo?.enabled ? `${stepCount} step${stepCount === 1 ? "" : "s"}.` : "Turn on How-to steps to include it." },
    { ok: videoCount > 0, label: "Video (VideoObject)", note: videoCount ? `${videoCount} video${videoCount > 1 ? "s" : ""} from Video blocks in the article.` : "Add a Video block to the article to include it." },
    {
      ok: Boolean(parsedCustom.value),
      label: "Custom schema",
      note: !custom?.trim() ? "None added." : parsedCustom.error ? `Not published: ${parsedCustom.error}` : `${parsedCustom.types.join(", ")} will be added.`,
    },
  ];

  return (
    <Card padding={4} radius={3} border>
      <Stack gap={3}>
        <Text size={1} weight="semibold">Structured data this post will publish</Text>
        {rows.map((row) => (
          <Flex key={row.label} gap={3} align="flex-start">
            <Text size={1} style={{ color: row.ok ? "#2b8a3e" : "#868e96", fontWeight: 700 }}>{row.ok ? "✓" : "–"}</Text>
            <Stack gap={2}>
              <Text size={1} weight="semibold">{row.label}</Text>
              <Text size={1} muted>{row.note}</Text>
            </Stack>
          </Flex>
        ))}
        <Text size={0} muted>Test the live page in Google&apos;s Rich Results Test after publishing.</Text>
      </Stack>
    </Card>
  );
}
