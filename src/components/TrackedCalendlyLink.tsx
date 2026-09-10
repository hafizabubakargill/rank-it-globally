"use client";

import type { ReactNode } from "react";
import { trackMetaLead } from "@/lib/metaPixel";

export default function TrackedCalendlyLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" onClick={trackMetaLead}>
      {children}
    </a>
  );
}
