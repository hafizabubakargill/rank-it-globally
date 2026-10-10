import Link from "next/link";
import { Fragment } from "react";

const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Renders copy that may contain [label](/path) links.
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(linkPattern)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));
    parts.push(
      href.startsWith("/") ? (
        <Link key={index} href={href}>{label}</Link>
      ) : (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      ),
    );
    lastIndex = index + whole.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts.map((part, index) => <Fragment key={index}>{part}</Fragment>)}</>;
}

export function plainText(text: string) {
  return text.replace(linkPattern, "$1");
}
