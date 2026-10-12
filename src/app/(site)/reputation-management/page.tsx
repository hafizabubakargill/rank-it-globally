import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { ReputationPage } from "@/components/service-pages/pages/ReputationPage";
import { reputationPage } from "@/content/services/reputation";

export const metadata = createServiceMetadata(reputationPage);

export default function ReputationManagementPage() {
  return <ReputationPage />;
}
