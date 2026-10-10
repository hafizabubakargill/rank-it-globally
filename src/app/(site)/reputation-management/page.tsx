import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { reputationPage } from "@/content/services/reputation";

export const metadata = createServiceMetadata(reputationPage);

export default function ReputationManagementPage() {
  return <ServiceDetailPage page={reputationPage} />;
}
