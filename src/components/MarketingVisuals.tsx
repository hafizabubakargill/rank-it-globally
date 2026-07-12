type MarketingIconName =
  | "search"
  | "conversion"
  | "performance"
  | "email"
  | "whatsapp"
  | "calendar"
  | "audit"
  | "strategy"
  | "launch"
  | "growth";

export function MarketingIcon({ name }: { name: MarketingIconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.3 15.3 4.2 4.2M7.5 10.5h6M10.5 7.5v6" />
      </svg>
    );
  }

  if (name === "conversion") {
    return (
      <svg {...common}>
        <path d="M4 5h16l-6.3 7.1v5.2l-3.4 1.7v-6.9L4 5Z" />
        <path d="m15.5 16.5 1.7 1.7 3.3-3.7" />
      </svg>
    );
  }

  if (name === "performance") {
    return (
      <svg {...common}>
        <rect x="3.5" y="4.5" width="17" height="12" rx="3" />
        <path d="M7 11h2l1.5-3 2.5 6 1.5-3H17M9 20h6M12 16.5V20" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg
        aria-hidden="true"
        className="whatsapp-brand-icon"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.76.46 3.48 1.34 5L2 22l5.13-1.34A10.07 10.07 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18c-1.5 0-2.96-.4-4.23-1.16l-.3-.18-3.04.8.81-2.96-.2-.31A8.12 8.12 0 0 1 3.82 12c0-4.5 3.68-8.18 8.22-8.18A8.17 8.17 0 0 1 20.18 12c0 4.5-3.64 8.18-8.14 8.18Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-1.46-.73-2.42-1.3-3.39-2.96-.26-.45.26-.42.73-1.4.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.16 1.75 2.67 4.24 3.75.59.26 1.05.41 1.42.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3M8 17h3" />
      </svg>
    );
  }

  if (name === "audit") {
    return (
      <svg {...common}>
        <path d="M9 4h6M9 3v3h6V3M7 5H5.5A1.5 1.5 0 0 0 4 6.5v13A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 5H17" />
        <path d="m8 13 2.2 2.2L16.5 9" />
      </svg>
    );
  }

  if (name === "strategy") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
      </svg>
    );
  }

  if (name === "launch") {
    return (
      <svg {...common}>
        <path d="M14 4c3-1 5-1 6-1 0 1 0 3-1 6l-6.5 6.5-4-4L14 4Z" />
        <path d="M8.5 11.5 5 12l-2 2 5 1M12.5 15.5 12 19l-2 2-1-5M15 8h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 18V9M10 18V5M16 18v-7M3 20h18" />
      <path d="m4 8 5-4 6 5 5-5" />
    </svg>
  );
}

export function AboutGrowthGraphic() {
  return (
    <div className="about-growth-graphic" aria-hidden="true">
      <svg viewBox="0 0 560 300" fill="none">
        <defs>
          <linearGradient id="aboutGrowthLine" x1="75" y1="210" x2="485" y2="90">
            <stop stopColor="#5552D4" />
            <stop offset="1" stopColor="#9B59FF" />
          </linearGradient>
          <linearGradient id="aboutGrowthFill" x1="280" y1="40" x2="280" y2="255">
            <stop stopColor="#9B59FF" stopOpacity=".2" />
            <stop offset="1" stopColor="#5552D4" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="558" height="298" rx="22" fill="white" fillOpacity=".68" stroke="#6664E4" strokeOpacity=".16" />
        <path d="M54 244H506M54 196H506M54 148H506M54 100H506M102 56V244M198 56V244M294 56V244M390 56V244M486 56V244" stroke="#6664E4" strokeOpacity=".09" />
        <path d="M70 226C121 211 151 216 198 186C244 156 266 174 310 139C353 105 397 129 448 89C467 74 482 66 498 61V244H70V226Z" fill="url(#aboutGrowthFill)" />
        <path d="M70 226C121 211 151 216 198 186C244 156 266 174 310 139C353 105 397 129 448 89C467 74 482 66 498 61" stroke="url(#aboutGrowthLine)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="70" cy="226" r="8" fill="#fff" stroke="#5552D4" strokeWidth="4" />
        <circle cx="198" cy="186" r="8" fill="#fff" stroke="#6664E4" strokeWidth="4" />
        <circle cx="310" cy="139" r="8" fill="#fff" stroke="#7B61E8" strokeWidth="4" />
        <circle cx="448" cy="89" r="8" fill="#fff" stroke="#925CF8" strokeWidth="4" />
        <circle cx="498" cy="61" r="10" fill="#9B59FF" stroke="#fff" strokeWidth="5" />
        <g fill="#4A4870" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700">
          <text x="57" y="268">Audit</text>
          <text x="177" y="268">Clarity</text>
          <text x="284" y="268">Trust</text>
          <text x="423" y="268">Leads</text>
        </g>
      </svg>
    </div>
  );
}
