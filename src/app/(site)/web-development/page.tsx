import { createServiceMetadata, ServiceDetailPage } from "@/components/service-pages/ServiceDetailPage";
import { webDesignPage } from "@/content/services/webDesign";

export const metadata = createServiceMetadata(webDesignPage);

export default function WebDevelopmentPage() {
  return <ServiceDetailPage page={webDesignPage} />;
}
