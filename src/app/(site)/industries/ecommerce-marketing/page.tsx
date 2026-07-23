import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["ecommerce-marketing"];

export const metadata = createIndustryMetadata(config);

export default function EcommerceMarketingPage() {
  return <IndustryPage config={config} />;
}
