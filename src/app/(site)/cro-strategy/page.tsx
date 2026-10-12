import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { CroPage } from "@/components/service-pages/pages/CroPage";
import { croPage } from "@/content/services/cro";

export const metadata = createServiceMetadata(croPage);

export default function CroStrategyPage() {
  return <CroPage />;
}
