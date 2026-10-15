"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { EastsideIcon } from "@/components/bellevue-services/BellevueServiceShared";
import type { ServiceIcon } from "@/content/services/types";

type Service = { icon: ServiceIcon; title: string; body: string; href: string; points?: string[] };

const STEP_MS = 7000;

// Each service gets a short, realistic demo of what it changes. The demos are
// illustrative screens with no client data; numbers are avoided on purpose.
function Demo({ href }: { href: string }) {
  switch (href) {
    case "/ai-seo-services":
      return (
        <div className="sx-demo sx-chat">
          <div className="sx-chat-q">Who&apos;s the best roofer near me for storm damage?</div>
          <div className="sx-chat-a">
            <span className="sx-chat-ai">AI</span>
            <p><span className="sx-type">Based on reviews and local expertise, <b>Your Business</b> is a strong choice for storm repairs, known for fast inspections and clear quotes.</span></p>
          </div>
          <div className="sx-cites"><small>Sources</small><i className="is-you">yourbusiness.com</i><i>Google reviews</i><i>Local directory</i></div>
          <div className="sx-badge">✦ Cited in the answer</div>
        </div>
      );
    case "/local-seo-services":
      return (
        <div className="sx-demo sx-map">
          <div className="sx-map-canvas">
            <span className="sx-road sx-road--1" /><span className="sx-road sx-road--2" />
            <span className="sx-pin sx-pin--b">2</span><span className="sx-pin sx-pin--c">3</span>
            <span className="sx-pin sx-pin--you">1</span>
            <span className="sx-me" />
          </div>
          <ol className="sx-pack">
            <li className="is-you"><b>Your Business</b><span>★★★★★ · Open now</span><em>Call</em></li>
            <li><b className="sv-blur">Competitor Co.</b><span>★★★★☆ · Closes 5 PM</span></li>
            <li><b className="sv-blur">Another Pro LLC</b><span>★★★★☆</span></li>
          </ol>
          <div className="sx-toast">📞 New call from your Google profile</div>
        </div>
      );
    case "/seo-services":
      return (
        <div className="sx-demo sx-serp">
          <div className="sx-serp-bar">emergency plumber austin</div>
          <ol className="sx-results">
            <li className="sx-r sx-r--you"><span className="sx-r-rank" /><b>Your Business: 24/7 Emergency Plumber in Austin</b><small>yourbusiness.com › emergency-plumbing</small></li>
            <li className="sx-r sx-r--2"><b className="sv-blur">Emergency Plumbing Services in Austin, TX</b><small className="sv-blur">competitor.com</small></li>
            <li className="sx-r sx-r--3"><b className="sv-blur">The 10 Best Plumbers in Austin</b><small className="sv-blur">directory.com</small></li>
          </ol>
          <div className="sx-badge">Page 2 → top of page 1</div>
        </div>
      );
    case "/reputation-management":
      return (
        <div className="sx-demo sx-reviews">
          <div className="sx-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <div className="sx-review sx-review--1"><b>Sam R.</b> &ldquo;Fast, honest and on time. Highly recommend.&rdquo;</div>
          <div className="sx-review sx-review--2"><b>Owner reply</b> &ldquo;Thanks, Sam! Glad we could help.&rdquo;</div>
          <div className="sx-review sx-review--3"><b>Priya K.</b> &ldquo;Booked online, fixed the same day.&rdquo;</div>
          <div className="sx-badge">Fresh reviews, every week</div>
        </div>
      );
    case "/web-development":
      return (
        <div className="sx-demo sx-site">
          <div className="sx-browser"><span /><span /><span /><em>yourbusiness.com</em></div>
          <div className="sx-page">
            <i className="sx-line sx-line--h" /><i className="sx-line" /><i className="sx-line sx-line--s" />
            <span className="sx-cta-btn">Call now</span>
          </div>
          <div className="sx-gauge"><span className="sx-needle" /><small>Page speed</small><b>Fast</b></div>
        </div>
      );
    default:
      return (
        <div className="sx-demo sx-cro">
          <div className="sx-ab"><span>Version A</span><i className="sx-bar sx-bar--a" /></div>
          <div className="sx-ab is-b"><span>Version B</span><i className="sx-bar sx-bar--b" /></div>
          <div className="sx-badge">B wins: more enquiries, same traffic</div>
        </div>
      );
  }
}

export function ServiceExplorer({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % services.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, inView, services.length]);

  return (
    <div
      className={`sx${paused ? " is-paused" : ""}${inView ? " is-live" : ""}`}
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="sx-tabs" role="tablist" aria-label="Our services">
        {services.map((service, index) => (
          <button
            key={service.href}
            type="button"
            role="tab"
            id={`sx-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`sx-panel-${index}`}
            className={`sx-tab${active === index ? " is-active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="sx-tab-icon" aria-hidden="true"><EastsideIcon name={service.icon} /></span>
            <span className="sx-tab-title">{service.title}</span>
            <span className="sx-progress" aria-hidden="true"><i key={`${active}-${index}`} /></span>
          </button>
        ))}
      </div>

      {services.map((service, index) => (
        <div
          key={service.href}
          id={`sx-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`sx-tab-${index}`}
          hidden={active !== index}
          className="sx-panel"
        >
          <div className="sx-copy">
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            {service.points ? <ul className="sx-points">{service.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
            <Link className="sv-btn" href={service.href}>Explore {service.title.split(" & ")[0]} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="sx-screen" aria-hidden="true" key={active === index ? `on-${active}` : "off"}>
            {active === index ? <Demo href={service.href} /> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
