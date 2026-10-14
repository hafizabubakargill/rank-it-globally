import BlogNav from "@/components/BlogNav";
import GlobalScrollControls from "@/components/GlobalScrollControls";
import PortfolioPreview from "@/components/PortfolioPreview";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { organizationSchema } from "@/content/organization";
import "@/styles/chrome.css";
import "@/styles/brand.css";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <BlogNav />
      {children}
      <SiteFooter />
      <PortfolioPreview />
      <SmoothScroll />
      <GlobalScrollControls />
    </>
  );
}
