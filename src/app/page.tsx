import type { Metadata } from "next";
import LandingClient from "@/components/LandingClient";
import SmoothScroll from "@/components/SmoothScroll";
import { homepageFaqs } from "@/content/faqs";
import landingBodyHtml from "@/content/landingBody";
import baseSchema from "@/content/schema.json";
import scripts from "@/content/landingScripts.json";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://rankitglobally.com/",
  },
};

export default function Home() {
  const schemaItems = [
    baseSchema,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItems) }}
      />
      <main
        id="main-content"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: landingBodyHtml }}
      />
      <SmoothScroll />
      <LandingClient scripts={scripts} />
    </>
  );
}
