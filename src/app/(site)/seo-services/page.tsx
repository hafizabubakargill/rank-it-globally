import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { seoPage } from "@/content/services/seo";

export const metadata = createServiceMetadata(seoPage);

export default function SeoServicesPage() {
  return <ServiceDetailPage page={seoPage} />;
}
