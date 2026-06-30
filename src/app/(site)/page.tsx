import type { Metadata } from "next";
import LandingClient from "@/components/LandingClient";
import PortfolioSection from "@/components/PortfolioSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import { homepageFaqs } from "@/content/faqs";
import {
  landingBodyBeforePortfolio,
} from "@/content/landingBody";
import {
  landingBodyAfterVideoTestimonials,
  landingBodyBeforeVideoTestimonials,
} from "@/content/landingSegments";
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
          dangerouslySetInnerHTML={{
            __html: landingBodyBeforeVideoTestimonials,
          }}
        />
        <VideoTestimonials />
        <div
          className="landing-html-fragment"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: landingBodyAfterVideoTestimonials,
          }}
        />
      </main>
      <LandingClient scripts={scripts} />
    </>
  );
}
