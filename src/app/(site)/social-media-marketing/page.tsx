import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { servicePages } from "@/content/servicePages";

const config = servicePages.social;
const canonical = "https://rankitglobally.com/social-media-marketing/";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: canonical, title: config.title, description: config.description, siteName: "Rank It Globally" },
  twitter: { card: "summary", title: config.title, description: config.description },
};

export default function SocialMediaMarketingPage() {
  return <ServicePage config={config} />;
}
