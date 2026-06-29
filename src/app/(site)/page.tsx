import type { Metadata } from "next";
import ClutchReviews from "@/components/ClutchReviews";
import LandingClient from "@/components/LandingClient";
import PortfolioSection from "@/components/PortfolioSection";
import { homepageFaqs } from "@/content/faqs";
import {
  landingBodyAfterClutch,
  landingBodyBeforeClutch,
  landingBodyBeforePortfolio,
} from "@/content/landingBody";
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
      <main id="main-content" suppressHydrationWarning>
        <div
          className="landing-html-fragment"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: landingBodyBeforePortfolio }}
        />
        <PortfolioSection />
        <div
          className="landing-html-fragment"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: landingBodyBeforeClutch }}
        />
        <ClutchReviews />
        <div
          className="landing-html-fragment"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: landingBodyAfterClutch }}
        />
      </main>
      <LandingClient scripts={scripts} />
    </>
  );
}
