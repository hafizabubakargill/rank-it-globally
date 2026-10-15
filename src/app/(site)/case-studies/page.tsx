import { CaseStudiesPage } from "@/components/company/CaseStudiesPage";
import { createCompanyMetadata } from "@/components/company/CompanyKit";
import { caseMeta } from "@/content/caseStudies";

export const metadata = createCompanyMetadata(caseMeta, "/case-studies");

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
