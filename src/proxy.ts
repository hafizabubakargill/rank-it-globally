import { NextResponse } from "next/server";

// Junk URLs Search Console reports as 404: spam paths that were never part of
// this site (/detail/<id>, /mo, /shop/..., /contents/...) and WordPress theme
// files left from the old site. "410 Gone" tells Google they are removed for
// good, so they drop out of the index faster than with a 404. Redirecting them
// to the homepage would be treated as a soft 404.
export function proxy() {
  return new NextResponse("410 Gone: this page has been permanently removed.", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

export const config = {
  matcher: [
    "/detail/:path*",
    "/mo",
    "/shop/:path*",
    "/contents/:path*",
    "/themes/:path*",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-admin/:path*",
  ],
};
