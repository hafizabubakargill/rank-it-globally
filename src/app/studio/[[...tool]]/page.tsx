"use client";

import Studio from "@/components/Studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <Studio config={config} />;
}
