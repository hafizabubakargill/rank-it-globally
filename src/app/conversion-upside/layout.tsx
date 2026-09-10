import { Bricolage_Grotesque } from "next/font/google";
import LpFooter from "@/components/LpFooter";

const lpDisplayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--lp-font-display",
  display: "swap",
});

export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${lpDisplayFont.variable} lp-root`}>
      {children}
      <LpFooter />
    </div>
  );
}
