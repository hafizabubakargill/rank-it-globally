import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { homeMeta } from "@/content/home";
import { siteUrl } from "@/content/organization";

const shareImage = "/assets/brand/favicon.png";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true },
  openGraph: { type: "website", url: `${siteUrl}/`, title: homeMeta.title, description: homeMeta.description, siteName: "Rank It Globally", images: [shareImage] },
  twitter: { card: "summary_large_image", site: "@rankitglobally", title: homeMeta.title, description: homeMeta.description, images: [shareImage] },
};

export default function Home() {
  return <HomePage />;
}
