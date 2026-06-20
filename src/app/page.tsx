import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import LandingClient from "@/components/LandingClient";
import SmoothScroll from "@/components/SmoothScroll";
import scripts from "@/content/landingScripts.json";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://rankitglobally.com/",
  },
};

export default async function Home() {
  const [bodyHtml, schemaJson] = await Promise.all([
    readFile(path.join(process.cwd(), "src/content/landingBody.html"), "utf8"),
    readFile(path.join(process.cwd(), "src/content/schema.json"), "utf8"),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
      <main
        id="main-content"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
      <SmoothScroll />
      <LandingClient scripts={scripts} />
    </>
  );
}
