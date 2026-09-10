"use client";

import { useEffect } from "react";
import { trackMetaSchedule } from "@/lib/metaPixel";

// Renders nothing — just fires the real Meta Pixel conversion event once,
// when this page (the Calendly redirect target) actually mounts.
export default function TrackScheduleEvent() {
  useEffect(() => {
    trackMetaSchedule();
  }, []);

  return null;
}
