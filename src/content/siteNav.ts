// Single source for the offered services and industry pages, shared by the
// header mega menu, the footer, and the cross-links on each service page.

export type SiteNavIcon =
  | "ai"
  | "search"
  | "pin"
  | "code"
  | "cart"
  | "cro"
  | "star"
  | "law"
  | "medical"
  | "tech"
  | "home"
  | "store"
  | "tools";

export type SiteNavLink = {
  label: string;
  href: string;
  icon: SiteNavIcon;
  description: string;
};

export const serviceNavLinks: SiteNavLink[] = [
  { label: "AI SEO & GEO Services", href: "/ai-seo-services", icon: "ai", description: "Get cited by ChatGPT, Google AI Overviews, Perplexity and Gemini." },
  { label: "SEO Services", href: "/seo-services", icon: "search", description: "Technical, on-page and content SEO measured in calls and leads." },
  { label: "Local SEO & Google Business Profile", href: "/local-seo-services", icon: "pin", description: "Show up in the Map Pack and turn your profile into a lead source." },
  { label: "Web Design & Development", href: "/web-development", icon: "code", description: "Fast, SEO-ready websites built to turn visitors into calls." },
  { label: "E-commerce & Shopify Development", href: "/ecommerce-development", icon: "cart", description: "Shopify stores designed, built and launched to sell." },
  { label: "Conversion Rate Optimization (CRO)", href: "/cro-strategy", icon: "cro", description: "More leads from the traffic you already have." },
  { label: "Review & Reputation Management", href: "/reputation-management", icon: "star", description: "More 5-star reviews, handled within Google's rules." },
];

export const industryNavLinks: SiteNavLink[] = [
  { label: "Law firm marketing", href: "/industries/law-firm-marketing", icon: "law", description: "Practice-area visibility and more qualified consultations." },
  { label: "Dental & medical marketing", href: "/industries/dental-medical-marketing", icon: "medical", description: "Local visibility and easier booking for practices and clinics." },
  { label: "Tech startup marketing", href: "/industries/tech-startup-marketing", icon: "tech", description: "Positioning, search and conversion paths for evaluating buyers." },
  { label: "Real estate marketing", href: "/industries/real-estate-marketing", icon: "home", description: "Neighborhood search and consultation paths for agents and teams." },
  { label: "E-commerce marketing", href: "/industries/ecommerce-marketing", icon: "store", description: "Search, store experience and conversion for online brands." },
  { label: "Home services marketing", href: "/industries/home-services-marketing", icon: "tools", description: "Map visibility, service-area pages and more direct calls." },
];
