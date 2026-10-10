import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { ecommercePage } from "@/content/services/ecommerce";

export const metadata = createServiceMetadata(ecommercePage);

export default function EcommerceDevelopmentPage() {
  return <ServiceDetailPage page={ecommercePage} />;
}
