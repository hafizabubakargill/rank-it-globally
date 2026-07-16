import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { servicePages } from "@/content/servicePages";

const config = servicePages.seo;
const canonical = "https://rankitglobally.com/seo-services/";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: canonical, title: config.title, description: config.description, siteName: "Rank It Globally" },
  twitter: { card: "summary", title: config.title, description: config.description },
};

export default function SeoServicesPage() {
  return <ServicePage config={config} />;
}
