import { createServiceMetadata } from "@/components/service-pages/kit/Kit";
import { WebDesignPage } from "@/components/service-pages/pages/WebDesignPage";
import { webDesignPage } from "@/content/services/webDesign";

export const metadata = createServiceMetadata(webDesignPage);

export default function WebDevelopmentPage() {
  return <WebDesignPage />;
}
