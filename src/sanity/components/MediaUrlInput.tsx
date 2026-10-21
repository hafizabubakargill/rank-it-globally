"use client";

import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { useState } from "react";
import type { StringInputProps } from "sanity";
import { useFormValue } from "sanity";
import { extensionFromAssetRef, mediaUrl } from "../lib/media";

// Read-only box showing the file's public rankitglobally.com link, with a
// copy button, so editors can paste it anywhere.
export function MediaUrlInput(_props: StringInputProps) {
  const slug = (useFormValue(["slug"]) as { current?: string } | undefined)?.current;
  const ref = (useFormValue(["file"]) as { asset?: { _ref?: string } } | undefined)?.asset?._ref;
  const [copied, setCopied] = useState(false);
  const url = slug && ref ? mediaUrl(slug, extensionFromAssetRef(ref)) : "";

  if (!url) {
    return (
      <Card padding={3} radius={2} tone="caution" border>
        <Text size={1}>Upload a file and set the URL slug to get the link.</Text>
      </Card>
    );
  }

  return (
    <Card padding={3} radius={2} tone="positive" border>
      <Stack gap={3}>
        <Flex gap={2} align="center" wrap="wrap">
          <Text size={1} weight="semibold" style={{ wordBreak: "break-all", flex: 1 }}>{url}</Text>
          <Button
            mode="ghost"
            fontSize={1}
            padding={2}
            text={copied ? "Copied" : "Copy link"}
            onClick={() => {
              navigator.clipboard?.writeText(url).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              });
            }}
          />
        </Flex>
        <Text size={0} muted>Works after you publish this file. In a post, select text and use &quot;Link to a file&quot; or paste this link.</Text>
      </Stack>
    </Card>
  );
}
