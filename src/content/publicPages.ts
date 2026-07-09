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

export const proofStats = [
  { value: "150+", label: "projects completed" },
  { value: "4.9★", label: "average client rating" },
  { value: "98%", label: "client satisfaction" },
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

export const processSteps = [
  "Audit the current site, competitors, search visibility, and conversion path.",
  "Map the highest-intent pages, offers, and calls to action before design starts.",
  "Build clean, fast pages with SEO structure and conversion copy baked in.",
  "Launch, measure, and keep improving based on leads, bookings, and revenue signals.",
];
