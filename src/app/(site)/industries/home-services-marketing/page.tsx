import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["home-services-marketing"];

export const metadata = createIndustryMetadata(config);

export default function HomeServicesMarketingPage() {
  return <IndustryPage config={config} />;
}
