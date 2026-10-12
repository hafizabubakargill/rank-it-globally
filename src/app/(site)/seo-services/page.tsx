import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { SeoPage } from "@/components/service-pages/pages/SeoPage";
import { seoPage } from "@/content/services/seo";

export const metadata = createServiceMetadata(seoPage);

export default function SeoServicesPage() {
  return <SeoPage />;
}
