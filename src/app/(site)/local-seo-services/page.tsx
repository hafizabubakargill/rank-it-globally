import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { localSeoPage } from "@/content/services/localSeo";

export const metadata = createServiceMetadata(localSeoPage);

export default function LocalSeoServicesPage() {
  return <ServiceDetailPage page={localSeoPage} />;
}
