import type { Metadata } from "next";
import { plainText } from "@/components/service-pages/RichText";
import type { PageCommon } from "@/content/services/types";
import { organizationId, organizationSchema, siteUrl } from "@/content/organization";
import "./company.css";

const shareImage = "/assets/brand/favicon.png";

export function createCompanyMetadata(meta: { title: string; description: string }, path: string): Metadata {
  const canonical = `${siteUrl}${path}`;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { type: "website", url: canonical, title: meta.title, description: meta.description, siteName: "Rank It Globally", images: [shareImage] },
    twitter: { card: "summary_large_image", site: "@rankitglobally", title: meta.title, description: meta.description, images: [shareImage] },
  };
}

// WebPage-type node (AboutPage / CollectionPage), the agency, breadcrumb and a
// FAQPage that mirrors the visible FAQ word for word.
export function CompanySchema({
  page,
  type,
  name,
  description,
  extra = [],
}: {
  page: PageCommon & { path: string };
  type: "AboutPage" | "CollectionPage";
  name: string;
  description: string;
  extra?: object[];
}) {
  const url = `${siteUrl}${page.path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": type, "@id": `${url}#webpage`, url, name, description, isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": organizationId } },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "Rank It Globally",
      url: siteUrl,
      email: "hello@rankitglobally.com",
      logo: organizationSchema.logo,
      image: organizationSchema.logo,
      areaServed: { "@type": "Country", name: "United States" },
      sameAs: [...organizationSchema.sameAs, "https://clutch.co/profile/rank-it-globally"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: plainText(faq.answer) } })),
    },
    ...extra,
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
