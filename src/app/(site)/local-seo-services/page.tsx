import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { LocalSeoPage } from "@/components/service-pages/pages/LocalSeoPage";
import { localSeoPage } from "@/content/services/localSeo";

export const metadata = createServiceMetadata(localSeoPage);

export default function LocalSeoServicesPage() {
  return <LocalSeoPage />;
}
