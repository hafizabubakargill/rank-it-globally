import { createIndustryMetadata } from "@/components/industry-pages/IndustryKit";
import { DentalMedicalPage } from "@/components/industry-pages/pages/DentalMedicalPage";
import { dentalMedicalPage } from "@/content/industries/dentalMedical";

export const metadata = createIndustryMetadata(dentalMedicalPage);

export default function DentalMedicalMarketingPage() {
  return <DentalMedicalPage />;
}
