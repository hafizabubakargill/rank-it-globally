import { createIndustryMetadata } from "@/components/industry-pages/IndustryKit";
import { TechStartupsPage } from "@/components/industry-pages/pages/TechStartupsPage";
import { techStartupsPage } from "@/content/industries/techStartups";

export const metadata = createIndustryMetadata(techStartupsPage);

export default function TechStartupMarketingPage() {
  return <TechStartupsPage />;
}
