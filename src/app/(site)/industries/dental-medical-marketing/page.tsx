import {
  createIndustryMetadata,
  IndustryPage,
} from "@/components/industry-pages/IndustryPage";
import { industryPages } from "@/content/industryPages";

const config = industryPages["dental-medical-marketing"];

export const metadata = createIndustryMetadata(config);

export default function DentalMedicalMarketingPage() {
  return <IndustryPage config={config} />;
}
