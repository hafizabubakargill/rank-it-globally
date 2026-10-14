import { createIndustryMetadata } from "@/components/industry-pages/IndustryKit";
import { RealEstatePage } from "@/components/industry-pages/pages/RealEstatePage";
import { realEstatePage } from "@/content/industries/realEstate";

export const metadata = createIndustryMetadata(realEstatePage);

export default function RealEstateMarketingPage() {
  return <RealEstatePage />;
}
