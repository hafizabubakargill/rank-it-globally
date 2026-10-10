import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { aiSeoPage } from "@/content/services/aiSeo";

export const metadata = createServiceMetadata(aiSeoPage);

export default function AiSeoServicesPage() {
  return <ServiceDetailPage page={aiSeoPage} />;
}
