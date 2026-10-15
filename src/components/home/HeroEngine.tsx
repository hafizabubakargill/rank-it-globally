"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// The hero "search-to-lead engine": a real query types out, the business is
// named across Google's AI Overview, the Maps pack, Google results and
// ChatGPT, and leads arrive. Scenario 1 uses a real client's Google Business
// Profile (Dents, Hail & Detail, Denver: 4.9 stars, 384 reviews, Book
// Online); the others are examples, and the caption says so.
type Scenario = {
  query: string;
  business: string;
  rating: string;
  category: string;
  ai: string;
  chat: string;
  leads: { icon: string; title: string; source: string }[];
};

const scenarios: Scenario[] = [
  {
    query: "hail damage repair denver",
    business: "Dents, Hail & Detail",
    rating: "4.9 ★★★★★ (384)",
    category: "Auto body shop · Denver",
    ai: "is a top-rated option for hail and dent repair in Denver, with strong reviews and online booking.",
    chat: "For hail repair in Denver, I'd start with Dents, Hail & Detail. Customers praise the work and you can book online.",
    leads: [
      { icon: "📅", title: "New booking", source: "from Google Maps" },
      { icon: "📞", title: "New call", source: "from Google Search" },
      { icon: "💬", title: "New enquiry", source: "from ChatGPT" },
    ],
  },
  {
    query: "emergency plumber near me",
    business: "Your Business",
    rating: "★★★★★ · Open 24 hours",
    category: "Plumber · Serves your area",
    ai: "is a well-reviewed local plumber offering 24/7 emergency repairs and upfront pricing.",
    chat: "If you need a plumber tonight, Your Business is open 24 hours and has great reviews for emergency work.",
    leads: [
      { icon: "📞", title: "New call", source: "from Google Maps" },
      { icon: "📞", title: "New call", source: "from AI Overview" },
      { icon: "✉️", title: "New quote request", source: "from your website" },
    ],
  },
  {
    query: "family dentist taking new patients",
    business: "Your Practice",
    rating: "★★★★★ · Accepting patients",
    category: "Dentist · Saturday hours",
    ai: "is a family dental practice accepting new patients, with Saturday hours and online booking.",
    chat: "Your Practice is taking new patients and parents mention the gentle, on-time team.",
    leads: [
      { icon: "📅", title: "New patient booking", source: "from Google Maps" },
      { icon: "💬", title: "New enquiry", source: "from Perplexity" },
      { icon: "📞", title: "New call", source: "from Google Search" },
    ],
  },
];

const CYCLE_MS = 8600;

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

// Types the query character by character. Keyed by scenario, so it starts
// from zero each time.
function useTyped(query: string, reduced: boolean) {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const typer = window.setInterval(() => {
      setChars((current) => {
        if (current >= query.length) {
          window.clearInterval(typer);
          return current;
        }
        return current + 1;
      });
    }, 55);
    return () => window.clearInterval(typer);
  }, [query, reduced]);
  return reduced ? query : query.slice(0, chars);
}

export function HeroEngine() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    const next = window.setTimeout(() => setIndex((current) => (current + 1) % scenarios.length), CYCLE_MS);
    return () => window.clearTimeout(next);
  }, [index, reduced, visible]);

  return (
    <figure className="he" ref={rootRef} data-placeholder="true">
      <div role="img" aria-label="Animated example: a customer searches, the business is recommended in Google's AI Overview, first in Google Maps, first in Google results and in ChatGPT, and new calls, bookings and enquiries arrive. The first example uses a real client's Google profile.">
        <Stage key={index} index={index} reduced={reduced} />
      </div>
      <figcaption className="he-caption">The first example uses a real client&apos;s Google profile. The others are examples.</figcaption>
    </figure>
  );
}

function Stage({ index, reduced }: { index: number; reduced: boolean }) {
  const scenario = scenarios[index];
  const typed = useTyped(scenario.query, reduced);
  return (
        <div className="he-stage" aria-hidden="true" data-reduced={reduced ? "true" : undefined}>
          {/* 1. The search */}
          <div className="he-col he-col--search">
            <p className="he-label"><b>1</b> They search</p>
            <div className="he-search">
              <span className="he-search-icon">⌕</span>
              <span className="he-typed">{typed}<i className="he-caret" /></span>
            </div>
            <ul className="he-engines">
              <li className="he-engine he-engine--1">Google</li>
              <li className="he-engine he-engine--2">Maps</li>
              <li className="he-engine he-engine--3">ChatGPT</li>
              <li className="he-engine he-engine--4">Perplexity</li>
            </ul>
            <div className="he-scenario-dots">
              {scenarios.map((s, i) => <span key={s.query} className={i === index ? "is-on" : ""} />)}
            </div>
          </div>

          <div className="he-flow he-flow--a"><span /><span /><span /></div>

          {/* 2. You're the answer */}
          <div className="he-col he-col--answers">
            <p className="he-label"><b>2</b> You&apos;re the answer</p>
            <div className="he-card he-ai">
              <small>✦ AI Overview</small>
              <p><strong>{scenario.business}</strong> {scenario.ai}</p>
            </div>
            <div className="he-card he-map">
              <span className="he-rank">1</span>
              <div>
                <strong>{scenario.business}</strong>
                <small>{scenario.rating}</small>
              </div>
              <span className="he-pin">📍</span>
            </div>
            <div className="he-card he-chat">
              <span className="he-chat-avatar">AI</span>
              <p>{scenario.chat}</p>
            </div>
          </div>

          <div className="he-flow he-flow--b"><span /><span /><span /></div>

          {/* 3. Leads */}
          <div className="he-col he-col--leads">
            <p className="he-label"><b>3</b> Leads come in</p>
            {scenario.leads.map((lead, i) => (
              <div className={`he-lead he-lead--${i + 1}`} key={lead.title + lead.source}>
                <span className="he-lead-icon">{lead.icon}</span>
                <div><strong>{lead.title}</strong><small>{lead.source}</small></div>
                <span className="he-lead-tag">Organic</span>
              </div>
            ))}
            <p className="he-noads">No ad spend. No shared leads.</p>
          </div>
        </div>
  );
}
