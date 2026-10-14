# E-commerce Marketing: build log

**Live URL:** https://rankitglobally.com/industries/ecommerce-marketing
**Code:** `src/content/industries/ecommerce.ts`, `src/components/industry-pages/pages/EcommercePage.tsx`, `ecommerce.css`.

Repo adaptation: same as the other industry pages. See `../home-services/STRATEGY.md`.

## Audience

DTC brand owners and e-commerce operators, mostly on Shopify. They aren't "near me" businesses, so the local sections are replaced:

| Local-search section on other pages | E-commerce replacement |
|---|---|
| Map Pack chips | Organic search, AI shopping answers, conversion rate and site speed |
| Local-lead diagram | Rented vs. owned channel map |
| Map / Google profile hero | Revenue-by-channel dashboard |
| GBP and review deliverables | E-commerce SEO, AI shopping visibility, CRO, Shopify builds and migrations, speed, analytics |

## CTA hierarchy

- Full-size buttons and form submit: **Get My Free Store Growth Audit**.
- Sticky bar: **Free audit**.
- Secondary path: WhatsApp.
- The audit form pre-selects "Ecommerce Performance".

## Research behind the pain points

- **Apple App Tracking Transparency** (iOS 14.5, April 2021). Meta told investors in February 2022 that it would cost about $10B in 2022 revenue.
- **Single-platform dependency.** TikTok went dark in the US on January 18–19, 2025.
- **Margin pressure.** Tariffs, plus the end of the US de minimis exemption for all countries on August 29, 2025.
- **AI shopping.** ChatGPT and Google's AI Mode recommend products inside the answer.

## Compliance applied

- **FTC Endorsement Guides (2023 update):** influencer and UGC disclosures.
- **FTC fake reviews rule (October 2024):** no bought reviews and no review suppression.
- **CAN-SPAM:** accurate headers and subject lines, a physical address, and opt-outs honored within 10 business days. Email isn't a service we sell, so the page only covers signup forms and the client's own sends.
- **Product claims and feeds:** the FTC "Made in USA" standard, and Google Merchant Center price and availability matching.

## Data honesty

- **Proof:** the real Shopify launch weekend ($253K, 626 orders, 12.26% conversion rate), unnamed.
  - The copy doesn't claim what work caused the result.
  - A TODO asks the owner to describe the work only if a case study documents it.
- **Hero dashboard:** captioned as an example screen and flagged with `data-placeholder`. The bars have no numbers.
- **Ads:** the FAQ says plainly that we don't manage Meta, TikTok or Shopping ads.

## On-page SEO / AEO

- **Title:** "E-commerce Marketing for DTC & Shopify Brands | SEO & AI".
- **Description:** names SEO, AI shopping visibility, CRO and paid-social dependence.
- **JSON-LD:** same set as the other pages, with the FAQPage matching the visible FAQ word for word.

## Verification (2026-10-14)

- **Structural checks:** all pass.
- **Overflow:** `scrollWidth === clientWidth` at 1100, 390 and 320.
- **Screenshots:** I read every section at all three widths.
- **Headline fix:** the CTA band ("…revenue you actually own") echoed both the plan headline and the rented/owned section, so I reworded it.

## Owner TODOs

- Written permission and an unedited screenshot for the Shopify launch.
- What work was done on that launch, if it's documented.
- Contract terms for the plan card.
