import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["law-firm-marketing"];

export const metadata = createIndustryMetadata(config);

export default function LawFirmMarketingPage() {
  return <IndustryPage config={config} />;
}
