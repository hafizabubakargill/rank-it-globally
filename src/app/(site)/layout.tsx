import BlogNav from "@/components/BlogNav";
import GlobalScrollControls from "@/components/GlobalScrollControls";
import PortfolioPreview from "@/components/PortfolioPreview";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogNav />
      {children}
      <SiteFooter />
      <PortfolioPreview />
      <SmoothScroll />
      <GlobalScrollControls />
    </>
  );
}
