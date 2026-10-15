"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseResult } from "@/content/caseStudies";
import { caseGoals } from "@/content/caseStudies";

// Results filtered by goal. Every card stays in the DOM (hidden when filtered
// out) so the content and links are always crawlable.
export function CaseResults({ results }: { results: CaseResult[] }) {
  const [goal, setGoal] = useState<(typeof caseGoals)[number]["id"]>("all");
  return (
    <>
      <div className="cs-filters" role="group" aria-label="Filter results by goal">
        {caseGoals.map((option) => {
          const count = option.id === "all" ? results.length : results.filter((r) => r.goal === option.id).length;
          return (
            <button key={option.id} type="button" aria-pressed={goal === option.id} className={goal === option.id ? "is-on" : ""} onClick={() => setGoal(option.id)}>
              {option.label} <span>{count}</span>
            </button>
          );
        })}
      </div>
      <ol className="cs-results">
        {results.map((result) => (
          <li key={result.headline} hidden={goal !== "all" && goal !== result.goal}>
            <article className="cs-result">
              <div className="cs-result-copy">
                <span className="cs-kicker">{result.kicker}</span>
                <h3>{result.headline}</h3>
                <p className="cs-client">{result.client}</p>
                <p>{result.what}</p>
                <p className="cs-source">Source: {result.item.source}</p>
                <Link className="cs-service" href={result.service.href}>How we do this: {result.service.label} <span aria-hidden="true">→</span></Link>
              </div>
              <div className="cs-result-proof">
                {result.item.screenshot ? (
                  <a className="cs-shot" href={result.item.screenshot.src} target="_blank" rel="noopener noreferrer">
                    <span className="cs-shot-bar" aria-hidden="true"><i /><i /><i /><em>Search Console · Performance</em></span>
                    <Image src={result.item.screenshot.src} alt={result.item.alt} width={result.item.screenshot.width} height={result.item.screenshot.height} sizes="(max-width: 980px) 100vw, 55vw" />
                    <span className="cs-zoom">View full size ↗</span>
                  </a>
                ) : (
                  <dl className="cs-stats" aria-label={result.item.alt}>
                    {result.item.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
