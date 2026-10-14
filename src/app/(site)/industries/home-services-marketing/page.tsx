import { createIndustryMetadata } from "@/components/industry-pages/IndustryKit";
import { HomeServicesPage } from "@/components/industry-pages/pages/HomeServicesPage";
import { homeServicesPage } from "@/content/industries/homeServices";

export const metadata = createIndustryMetadata(homeServicesPage);

export default function HomeServicesMarketingPage() {
  return <HomeServicesPage />;
}
