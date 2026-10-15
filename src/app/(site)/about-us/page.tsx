import { AboutPage } from "@/components/company/AboutPage";
import { createCompanyMetadata } from "@/components/company/CompanyKit";
import { aboutMeta } from "@/content/about";

export const metadata = createCompanyMetadata(aboutMeta, "/about-us");

export default function AboutUsPage() {
  return <AboutPage />;
}
