"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const homeLinks = [
  { href: "/about-us", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

type MenuIcon =
  | "grid"
  | "building"
  | "search"
  | "pin"
  | "social"
  | "ads"
  | "code"
  | "cart"
  | "design"
  | "cro"
  | "law"
  | "medical"
  | "tech"
  | "home"
  | "store"
  | "tools";

type MegaMenuLink = {
  label: string;
  href: string;
  pathLabel: string;
  icon: MenuIcon;
  available: boolean;
};

const serviceLinks: MegaMenuLink[] = [
  { label: "SEO services", href: "/seo-services", pathLabel: "/seo-services/", icon: "search", available: true },
  { label: "Local SEO", href: "#", pathLabel: "/local-seo-services/", icon: "pin", available: false },
  { label: "Social media marketing", href: "/social-media-marketing", pathLabel: "/social-media-marketing/", icon: "social", available: true },
  { label: "PPC / Google Ads", href: "#", pathLabel: "/ppc-management/", icon: "ads", available: false },
  { label: "Web development", href: "/web-development", pathLabel: "/web-development/", icon: "code", available: true },
  { label: "E-commerce development", href: "#", pathLabel: "/ecommerce-development/", icon: "cart", available: false },
  { label: "UI/UX design", href: "/ui-ux-design", pathLabel: "/ui-ux-design/", icon: "design", available: true },
  { label: "CRO strategy", href: "/cro-strategy", pathLabel: "/cro-strategy/", icon: "cro", available: true },
];

const industryLinks: MegaMenuLink[] = [
  { label: "Law firm marketing", href: "#", pathLabel: "/law-firm-seo/", icon: "law", available: false },
  { label: "Dental & medical marketing", href: "#", pathLabel: "/dental-seo/", icon: "medical", available: false },
  { label: "Tech startup marketing", href: "#", pathLabel: "/tech-startup-seo/", icon: "tech", available: false },
  { label: "Real estate marketing", href: "#", pathLabel: "/real-estate-seo/", icon: "home", available: false },
  { label: "E-commerce marketing", href: "#", pathLabel: "/ecommerce-seo/", icon: "store", available: false },
  { label: "Home services marketing", href: "#", pathLabel: "/home-services-seo/", icon: "tools", available: false },
];

function ServiceMenuIcon({ name }: { name: MenuIcon }) {
  const paths: Record<MenuIcon, React.ReactNode> = {
    grid: <><rect x="4" y="4" width="5" height="5" rx="1" /><rect x="15" y="4" width="5" height="5" rx="1" /><rect x="4" y="15" width="5" height="5" rx="1" /><rect x="15" y="15" width="5" height="5" rx="1" /></>,
    building: <><path d="M5 21V5l7-3 7 3v16" /><path d="M3 21h18M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    social: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.5h.01" /></>,
    ads: <><path d="m4 13 12-6v10L4 13ZM16 10l4-1v6l-4-1M6 14l1 5h4l-2-4" /></>,
    code: <><path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18" /></>,
    cart: <><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H7" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    design: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path d="m13.5 8 3 3M4 4h7M4 8h4" /></>,
    cro: <><path d="M4 5h16M4 12h16M4 19h16" /><path d="m8 2 3 3-3 3M16 9l-3 3 3 3M8 16l3 3-3 3" /></>,
    law: <><path d="M12 3v18M5 7h14M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7ZM7 21h10" /></>,
    medical: <><path d="M8 3v5a4 4 0 0 0 8 0V3M5 3v6a7 7 0 0 0 14 0V3" /><path d="M12 16v1a4 4 0 0 0 8 0v-2" /><circle cx="20" cy="13" r="2" /></>,
    tech: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    store: <><path d="M4 10h16M5 10v10h14V10M7 4h10l3 6H4l3-6Z" /><path d="M9 14h6" /></>,
    tools: <><path d="M14.7 6.3a4 4 0 0 0-5-5L13 4.6 9.5 8.1 6.2 4.8a4 4 0 0 0 5 5L4 17l3 3 7.2-7.2a4 4 0 0 0 5-5L16 11l-3.5-3.5 2.2-1.2Z" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function MegaMenuItem({ item, onNavigate }: { item: MegaMenuLink; onNavigate: () => void }) {
  const content = <><span className="mega-menu-icon"><ServiceMenuIcon name={item.icon} /></span><strong>{item.label}</strong><small>{item.pathLabel}</small></>;

  if (!item.available) {
    return <a className="mega-menu-link is-coming-soon" href="#" aria-disabled="true" onClick={(event) => event.preventDefault()}>{content}</a>;
  }

  return <Link className="mega-menu-link" href={item.href} onClick={onNavigate}>{content}</Link>;
}

export default function BlogNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const queueServicesClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!navRef.current?.contains(target)) closeMenus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <nav ref={navRef} className={mobileOpen ? "mobile-open" : ""}>
      <div className="nav-inner">
        <Link className="n-logo" href="/" aria-label="Rank It Globally home">
          <img className="n-logo-img" src="/assets/brand/logo-icon.svg" alt="" width="72" height="30" />
          <span className="n-logo-t">Rank It <span>Globally</span></span>
        </Link>
        <div className="nv" aria-label="Primary navigation">
          <Link className="nk" href="/about-us">About</Link>
          <div className={servicesOpen ? "services-nav-item is-open" : "services-nav-item"} onMouseEnter={openServices} onMouseLeave={queueServicesClose} onFocus={openServices} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
            <button className="nk services-nav-trigger" type="button" aria-expanded={servicesOpen} aria-controls="servicesMegaMenu" onClick={() => setServicesOpen((value) => !value)}>
              Services <span aria-hidden="true">⌄</span>
            </button>
            <div className="services-mega-menu" id="servicesMegaMenu">
              <div className="mega-menu-column mega-menu-column-services">
                <p className="mega-menu-heading"><span><ServiceMenuIcon name="grid" /></span> By service</p>
                <div className="mega-menu-list">
                  {serviceLinks.map((item) => <MegaMenuItem item={item} key={item.label} onNavigate={closeMenus} />)}
                </div>
                <Link className="mega-menu-featured mega-menu-featured-purple" href="/about-us" onClick={closeMenus}><span aria-hidden="true">☆</span> Why choose us? <span aria-hidden="true">→</span></Link>
              </div>
              <div className="mega-menu-column mega-menu-column-industries">
                <p className="mega-menu-heading"><span><ServiceMenuIcon name="building" /></span> By industry</p>
                <div className="mega-menu-list">
                  {industryLinks.map((item) => <MegaMenuItem item={item} key={item.label} onNavigate={closeMenus} />)}
                </div>
                <a className="mega-menu-featured mega-menu-featured-green" href="#" onClick={(event) => event.preventDefault()}><span aria-hidden="true">→</span> View all industries <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          {homeLinks.slice(1).map((link) => <Link className="nk" key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="cta-e" href="/free-audit">Get My Free Audit <span className="ar">→</span></Link>
        </div>
        <div className="mobile-nav-actions">
          <Link className="mobile-nav-cta" href="/free-audit" onClick={closeMenus}>Free Audit</Link>
          <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="blogMobileMenuPanel" onClick={() => setMobileOpen((value) => !value)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className="mobile-menu-panel" id="blogMobileMenuPanel">
        <Link href="/about-us" onClick={closeMenus}>About</Link>
        <button className="mobile-services-toggle" type="button" aria-expanded={mobileServicesOpen} aria-controls="mobileServicesList" onClick={() => setMobileServicesOpen((value) => !value)}>
          Services <span aria-hidden="true">+</span>
        </button>
        <div className={mobileServicesOpen ? "mobile-services-list is-open" : "mobile-services-list"} id="mobileServicesList">
          {serviceLinks.map((item) => item.available ? <Link key={item.label} href={item.href} onClick={closeMenus}><span className="mobile-service-icon"><ServiceMenuIcon name={item.icon} /></span>{item.label}</Link> : <a key={item.label} href="#" aria-disabled="true" onClick={(event) => event.preventDefault()}><span className="mobile-service-icon"><ServiceMenuIcon name={item.icon} /></span>{item.label}</a>)}
        </div>
        {homeLinks.slice(1).map((link) => <Link key={link.href} href={link.href} onClick={closeMenus}>{link.label}</Link>)}
      </div>
    </nav>
  );
}
