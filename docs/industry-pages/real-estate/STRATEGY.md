# Real Estate Marketing: build log

**Live URL:** https://rankitglobally.com/industries/real-estate-marketing
**Code:**
- `src/content/industries/realEstate.ts`
- `src/components/industry-pages/pages/RealEstatePage.tsx`
- `real-estate.css`

The repo adaptation is the same as the other industry pages. See `../home-services/STRATEGY.md`.

## Audience

Individual agents, team leads and brokerage owners, not franchise corporate marketing.

The FAQ covers agents at large brokerages: we follow the brokerage's brand and disclosure rules where it allows agent-run marketing.

## CTA hierarchy

- Full-size buttons and the form submit button: **Get My Free Agent Visibility Audit**
- Sticky bar: **Free audit**
- Secondary path: WhatsApp

## Research behind the pain points

- **Portal leads.** These are often sold to several agents per area, or carry a referral fee at closing (pay-at-close models). No percentages are claimed.
- **Fewer transactions.** Existing-home sales in 2023 and 2024 were the lowest since the mid-1990s (NAR). This means more agents compete for each deal.
- **The NAR settlement.** It took effect on August 17, 2024. I verified the following against NAR's FAQ and state association guidance:
  - Offers of compensation are no longer on the MLS.
  - A written buyer agreement is required before touring.

  It drives the "Buyers now choose an agent before the first showing" journey section.
- **AI answers.** Buyers ask "who's a good realtor in [neighborhood]?".

## Compliance applied

- **Fair Housing Act, 42 U.S.C. 3604(c).**
  - Copy describes homes, areas and amenities, never people.
  - The redline example uses unambiguous violations: familial status and religion. I avoided contested phrases such as "walking distance" and church landmarks.
  - Neighborhood pages exclude "who should live here" language, and this is stated in the plan.
- **Ad targeting.**
  - Meta's and Google's housing policies block age, gender and ZIP targeting.
  - HUD withdrew its April 2024 digital-advertising guidance. The withdrawal took effect September 17, 2025 and was published in the Federal Register in April 2026. The page says the Act itself still applies.
  - We never suggest audiences that exclude protected groups.
- **Brokerage disclosure.** Most states require the brokerage name in all advertising. New York, Texas and Florida are named as examples.
- **Buyer-agent fees.** Any fee content must reflect the client's agreements and state rules.

## Data honesty

- No real estate client data exists, so there is **no proof or reviews section**.
- The hero search result is captioned as an example screen and flagged with `data-placeholder`. "Maple Heights", "Your Name" and "Your Brokerage LLC" are invented.

## On-page SEO / AEO

- **Title:** "Real Estate Agent Marketing | Local SEO & AI Search Visibility".
- **Description:** names neighborhood SEO, GBP, AI answers and "before the portals".
- **JSON-LD:** the same set as the other pages, with the FAQPage matching the visible FAQ word for word.

## Verification (2026-10-14)

- All structural checks pass.
- `scrollWidth === clientWidth` at 1100, 390 and 320.
- I read every section in the screenshots. Fixes made:
  - The final CTA ("…your market online") repeated the plan headline, so I reworded it.
  - The struck-through "before" copy had low contrast, so I raised it to full white.

## Owner TODOs

- Contract terms for the plan card.
- A real estate client result with written permission, if one becomes available.
