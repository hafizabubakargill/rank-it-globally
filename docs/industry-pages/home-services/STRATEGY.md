# Home Services Marketing — build log

**Live URL:** https://rankitglobally.com/industries/home-services-marketing
**Code:** `src/content/industries/homeServices.ts` (copy), `src/components/industry-pages/pages/HomeServicesPage.tsx` (layout and illustrations), `home-services.css`.

## How the brief was adapted to this repo

The brief describes static `verticals/<slug>/index.html` files and a `verticals/holistic-health` reference. Neither exists in this repo: the site is a Next.js app and the industry pages already live at `/industries/<slug>-marketing`. To keep indexed URLs and match the live service pages, as the owner asked:

- **URLs:** the existing paths are kept (path, not subdomain), so the canonical is the URL Google already knows.
- **Branding:** the brief asks for a separate palette per page and Cormorant Garamond / Mulish. The owner asked for the live service-page branding instead, so every industry page uses Palette B (charcoal, gold, logo indigo) and the site fonts. Each page gets its own illustrations instead of its own colours.
- **Structure:** built from the service-page kit (hero, pain cards, bento, timeline, CTA band, FAQ, compact audit form, sticky bar) plus industry blocks in `IndustryKit.tsx`: audit chips, sub-segments, compliance rules and one named plan.
- **Type and spacing:** the site's accessible scale (18px+ body text) and the compact section rhythm the owner already approved. CTA buttons wrap under 480px.

## Audience

Owner-operators and small companies: plumbers, HVAC, electricians, roofers, landscapers. All copy talks to the owner, never to homeowners.

## CTA hierarchy

- Full-size buttons: **Get My Free Home Services Audit** (hero, CTA band, plan, FAQ, form submit).
- Sticky bar: **Free audit** on mobile, full label on desktop. The site nav keeps its global "Get My Growth Audit".
- Secondary, lower-commitment path: **WhatsApp (786) 591-7846**, linked to `https://wa.me/17865917846`, never `tel:`.

## Research behind the pain points

- **Shared leads:** per-lead marketplaces send one request to several pros. In January 2023 the FTC finalized a $7.2M order against HomeAdvisor over misrepresenting the leads it sold to contractors (FTC; reported by Search Engine Journal and others).
- **Franchise and roll-up competition:** national brands and private-equity-backed consolidators in HVAC and plumbing outspend independents. No numbers are claimed.
- **Emergency intent:** "near me" and "open now" searches favour profiles with matching hours, categories and services.
- **AI answers:** homeowners asking ChatGPT and Google's AI Overviews who to call.

## Compliance applied

- "Licensed and insured" is only stated where true for each state and city.
- License numbers in ads where the state requires it (California and Florida are given as examples).
- FTC rule on fake reviews and testimonials (in effect since October 21, 2024): no bought, written or filtered reviews.
- Google Business Profile guidelines: hidden address for service-area businesses, no keyword-stuffed names.
- No ranking guarantee, and no guarantee of any kind (the owner hasn't approved one).

## Data honesty

- No real home-services client data exists yet, so there is **no case study or reviews section**. The Denver auto shop result is not home services and isn't used here.
- The hero phone and lead diagram are illustrations of how leads work. They show no metrics or real businesses.
- The FAQ says plainly that we don't run Google Ads or Local Services Ads, which matches the retired PPC service.

## On-page SEO / AEO

- Title: "Home Services Marketing for Contractors | Local & AI Search" (58 chars). The description names Map Pack, AI answers and owned leads (156 chars).
- Canonical, Open Graph and Twitter tags set.
- JSON-LD:
  - `ProfessionalService`: Brooklyn, NY. WhatsApp goes in a `ContactPoint` URL with no `telephone` field, because the line doesn't take calls. `sameAs` lists only the real LinkedIn, Instagram and Facebook profiles.
  - `Service` with a `BusinessAudience`.
  - `FAQPage`, word for word with the visible FAQ; inline links are stripped to plain text.
  - `BreadcrumbList`: Home › Industries › page.
- Semantics: one `<h1>`, h2 → h3 only, nav/main/footer landmarks, and illustrations as `role="img"` with descriptive labels.

## Verification (2026-10-14)

- Tag balance, duplicate ids, SVG XML (54 blocks), JSON-LD parse and the FAQ word-for-word match all pass. So do one h1, no skipped levels, landmarks, alt text and labelled controls. Script: `verify.py` in the session scratchpad.
- `scrollWidth === clientWidth` at 1100, 390 and 320.
  - Found and fixed two overflows on all service and industry pages: the footer grid was 28px too wide at 1100px, and the menu button went off-screen at 320px.
- Read every section in the screenshots at all three widths.
  - Fixed: the hero badge covered the phone, and the mobile swipe hint never showed (a CSS order bug in the kit).
  - Fixed a near-duplicate headline: the CTA band and the final CTA both said "…your calls".

## Owner TODOs

- Contract length and cancellation terms for the plan card.
- Replace the "no proof" approach once a home-services client gives written permission.
