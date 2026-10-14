import { createIndustryMetadata } from "@/components/industry-pages/IndustryKit";
import { EcommercePage } from "@/components/industry-pages/pages/EcommercePage";
import { ecommercePage } from "@/content/industries/ecommerce";

export const metadata = createIndustryMetadata(ecommercePage);

export default function EcommerceMarketingPage() {
  return <EcommercePage />;
}
