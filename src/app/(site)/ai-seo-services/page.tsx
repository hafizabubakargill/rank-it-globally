import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { AiSeoPage } from "@/components/service-pages/pages/AiSeoPage";
import { aiSeoPage } from "@/content/services/aiSeo";

export const metadata = createServiceMetadata(aiSeoPage);

export default function AiSeoServicesPage() {
  return <AiSeoPage />;
}
