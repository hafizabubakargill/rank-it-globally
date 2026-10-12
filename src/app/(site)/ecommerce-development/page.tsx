import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { EcommercePage } from "@/components/service-pages/pages/EcommercePage";
import { ecommercePage } from "@/content/services/ecommerce";

export const metadata = createServiceMetadata(ecommercePage);

export default function EcommerceDevelopmentPage() {
  return <EcommercePage />;
}
