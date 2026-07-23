import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["real-estate-marketing"];

export const metadata = createIndustryMetadata(config);

export default function RealEstateMarketingPage() {
  return <IndustryPage config={config} />;
}
