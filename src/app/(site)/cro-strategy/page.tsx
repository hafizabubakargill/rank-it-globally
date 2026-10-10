import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { croPage } from "@/content/services/cro";

export const metadata = createServiceMetadata(croPage);

export default function CroStrategyPage() {
  return <ServiceDetailPage page={croPage} />;
}
