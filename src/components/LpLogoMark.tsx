import HardHomeLink from "@/components/HardHomeLink";

export default function LpLogoMark() {
  return (
    <div className="lp-logo-mark">
      <HardHomeLink className="n-logo" aria-label="Rank It Globally home">
        <img className="n-logo-img" src="/assets/brand/logo-icon.svg" alt="Rank It Globally" width={72} height={30} />
        <span className="n-logo-t">
          Rank It <span>Globally</span>
        </span>
      </HardHomeLink>
    </div>
  );
}
