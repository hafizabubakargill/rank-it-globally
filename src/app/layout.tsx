import type { Metadata } from "next";
import "./globals.css";
import "../styles/landing.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rankitglobally.com"),
  title:
    "Rank It Globally | AI SEO & Web Design Agency - Get Found on Google & AI Search",
  description:
    "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Get your free SEO audit - no obligation.",
  keywords: [
    "web design agency",
    "conversion optimization",
    "landing pages",
    "Shopify development",
    "WordPress websites",
    "SEO",
    "e-commerce",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Rank It Globally",
    title: "Rank It Globally | AI SEO & Web Design Agency",
    description:
      "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Get your free SEO audit - no obligation.",
    url: "https://rankitglobally.com/",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankitglobally",
    title: "Rank It Globally | AI SEO & Web Design Agency",
    description:
      "We build websites that rank on AI search, dominate Google, and turn clicks into clients. Free SEO audit - no obligation.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#5552D4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link
          href="https://fonts.cdnfonts.com/css/product-sans"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
