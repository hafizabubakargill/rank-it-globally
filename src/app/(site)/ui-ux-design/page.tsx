import type { Metadata } from "next";
import { ServicePage } from "@/components/service-pages/ServicePage";
import { servicePages } from "@/content/servicePages";

const config = servicePages.design;
const canonical = "https://rankitglobally.com/ui-ux-design/";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: canonical, title: config.title, description: config.description, siteName: "Rank It Globally" },
  twitter: { card: "summary", title: config.title, description: config.description },
};

export default function UiUxDesignPage() {
  return <ServicePage config={config} />;
}
