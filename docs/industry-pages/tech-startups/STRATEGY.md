# Tech Startup Marketing: build log

**Live URL:** https://rankitglobally.com/industries/tech-startup-marketing
**Code:** `src/content/industries/techStartups.ts`, `src/components/industry-pages/pages/TechStartupsPage.tsx`, `tech-startups.css`.

The repo adaptation is the same as the other industry pages. See `../home-services/STRATEGY.md`.

## Audience

Startup founders and early-stage growth or marketing leads. This is the most skeptical buyer of the five, in the most crowded agency niche. The positioning avoids generic "we grow startups" claims and rests on one specific idea: **getting on the shortlist when buyers ask AI**, using the pages closest to a buying decision.

## Local-search sections replaced

| Local section on other pages | Replacement here |
|---|---|
| Local hero visual | AI shortlist answer, plus a CRM "AI referral" demo card |
| Local diagram | "Pages that win the shortlist" map, from buyer query to page type to why it works |
| Map Pack chips | AI shortlist presence, comparison searches, technical SEO, demo conversion |
| — (no equivalent) | An honest agency / freelancer / DIY comparison table, because this audience compares options before buying |

## CTA hierarchy

- Full-size buttons and the form submit: **Get My Free Startup Growth Audit**. It's worded so it isn't confused with the site nav's global "Get My Growth Audit".
- Sticky bar: **Free audit**.
- Secondary path: WhatsApp.
- The audit form pre-selects "SEO".

## Research behind the pain points

- **Paid costs:** CAC is rising across paid search, paid social and LinkedIn at the same time. Stated without numbers.
- **Funding climate:** global venture funding fell by more than half from its 2021 peak (Crunchbase: 2023 vs. 2021). Since then, boards focus on efficient growth: CAC payback and burn multiple.
- **Founder-led marketing:** founders do marketing part-time against incumbents with content teams.
- **AI content:** Google's March 2024 spam policy update on scaled content abuse. This explains why AI-written volume doesn't rank or get cited.

## Compliance applied

There's no licensing body for this audience. These rules apply:

- **FTC truth-in-advertising for comparative claims:** every claim must be substantiated, and there are no unprovable "#1" claims.
- **Competitor names:** used only to describe competitors accurately, with no logos and nothing that implies a partnership.
- **Reviews:** the FTC fake reviews rule, and G2 and Capterra incentive-disclosure rules.
- **Customer logos and quotes:** used only with written permission.
- **Regulated products:** for fintech or healthtech, the client's own compliance rules apply on top, as the brief says.

## Data honesty

- There's no real startup client data, so the page has **no proof or reviews section**.
- The hero AI answer and CRM card are captioned as example screens and flagged `data-placeholder`. The competitor names are invented and blurred.
- The FAQ says plainly that we don't run LinkedIn or Google Ads.
- The pre-PMF FAQ honestly limits what SEO is worth before product-market fit.

## On-page SEO / AEO

- **Title:** "Tech Startup Marketing | SEO & AI Search for SaaS Founders".
- **Description:** names AI shortlists, comparison and alternatives pages, and CAC.
- **JSON-LD:** the same set as the other pages. The FAQPage matches the visible FAQ word for word.

## Verification (2026-10-14)

- All structural checks pass.
- `scrollWidth === clientWidth` at 1100, 390 and 320.
- I read every section in the screenshots at all three widths.
- I changed the final CTA headline, because "shortlist" already appeared in the hero, the shortlist section and the final CTA.

## Owner TODOs

- Contract terms for the plan card.
- A startup client result with written permission, when there is one.
