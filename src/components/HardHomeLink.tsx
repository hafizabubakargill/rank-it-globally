import type { AnchorHTMLAttributes } from "react";

type HardHomeLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>;

export default function HardHomeLink({
  ...props
}: HardHomeLinkProps) {
  // A full document request is intentional: the homepage runs legacy reveal scripts
  // that must start in a fresh browser document after leaving an inner route.
  // eslint-disable-next-line @next/next/no-html-link-for-pages
  return <a {...props} href="/" />;
}
