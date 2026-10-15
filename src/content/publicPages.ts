import portfolioProjects from "@/content/portfolioProjects.json";

export type ProjectCard = {
  slug: string;
  name: string;
  url: string;
  screenshot: string;
  category: string;
  country: string;
  platform: string;
  location: string;
  result: string;
  highlightResult?: boolean;
};

export const calendlyUrl = "https://calendly.com/rankitglobally/free-consultation";
// Duplicated Calendly event dedicated to the /conversion-upside ad landing
// page, so its wording matches the product-page CRO pitch that page makes
// instead of the generic "Website Audit" framing the main site's event uses.
export const conversionUpsideCalendlyUrl = "https://calendly.com/rankitglobally/conversion-upside";
export const whatsappUrl = "https://wa.me/17865917846";
export const emailAddress = "hello@rankitglobally.com";

export const publicProjects = portfolioProjects satisfies ProjectCard[];

export const auditChecks = [
  "PageSpeed and Core Web Vitals",
  "Technical crawlability and indexability",
  "On-page SEO basics: titles, headings, and meta descriptions",
  "AI search readiness and schema opportunities",
  "Conversion leaks that stop visitors from becoming leads",
];

export const agencyValues = [
  {
    title: "Built for search behavior now",
    body: "We structure sites for Google, AI Overviews, answer engines, and the real humans comparing your business before they call.",
  },
  {
    title: "Design that earns the click",
    body: "Pages are written, designed, and built to make the next step obvious: call, book, buy, request, or submit.",
  },
  {
    title: "Performance is part of the offer",
    body: "Speed, mobile clarity, and clean technical foundations are treated as conversion requirements, not afterthoughts.",
  },
];

