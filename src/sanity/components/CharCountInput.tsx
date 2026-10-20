"use client";

import { Flex, Stack, Text } from "@sanity/ui";
import type { StringInputProps, TextInputProps } from "sanity";

// Wraps a string/text input with a live character counter coloured by the
// ideal range (green inside it, amber short, red too long).
export function charCountInput(range: { min: number; max: number }, hint: string) {
  return function CharCountInput(props: StringInputProps | TextInputProps) {
    const length = (props.value || "").length;
    const color = !length ? "#868e96" : length > range.max ? "#c92a2a" : length < range.min ? "#b07d00" : "#2b8a3e";
    return (
      <Stack gap={2}>
        {props.renderDefault(props)}
        <Flex justify="space-between" gap={3}>
          <Text size={1} muted>{hint}</Text>
          <Text size={1} weight="semibold" style={{ color, whiteSpace: "nowrap" }}>
            {length} / {range.max}
          </Text>
        </Flex>
        <div style={{ height: 4, borderRadius: 4, background: "#e9ecef", overflow: "hidden" }} aria-hidden="true">
          <div style={{ width: `${Math.min(100, (length / range.max) * 100)}%`, height: "100%", background: color, transition: "width 120ms" }} />
        </div>
      </Stack>
    );
  };
}
