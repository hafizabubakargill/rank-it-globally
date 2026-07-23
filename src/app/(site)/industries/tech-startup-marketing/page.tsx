import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["tech-startup-marketing"];

export const metadata = createIndustryMetadata(config);

export default function TechStartupMarketingPage() {
  return <IndustryPage config={config} />;
}
