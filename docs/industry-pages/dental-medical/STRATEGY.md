# Dental & Medical Marketing: build log

**Live URL:** https://rankitglobally.com/industries/dental-medical-marketing
**Code:** `src/content/industries/dentalMedical.ts`, `src/components/industry-pages/pages/DentalMedicalPage.tsx`, `dental-medical.css`.

The repo adaptation (Next.js, kept URLs, Palette B branding, shared kit) is the same as Home Services. See `../home-services/STRATEGY.md`.

## Audience

Owners of independent dental, orthodontic, medical and specialty practices.

- The FAQ says plainly that DSO- or hospital-employed clinicians whose marketing is run centrally usually can't hire us.
- All copy talks to the owner about the practice's marketing, never to patients about treatment.

## CTA hierarchy

- Full-size buttons and the form submit button: **Get My Free Practice Audit**.
- Sticky bar: **Free audit**.
- Secondary path: WhatsApp (wa.me link).

## Research behind the pain points

- **DSO consolidation (ADA Health Policy Institute):**
  - About 1 in 7 dentists (14%) were DSO-affiliated in 2023.
  - More than 1 in 4 dentists within 10 years of graduating were DSO-affiliated in 2024 (HPI, published September 2025).
  - Stated with the source on the page.
- **Private equity in medical specialties:** stated without numbers.
- **AI answers:** patients ask assistants for a provider, and insurance-led searches feed into those answers.
- **HIPAA and review replies:** HHS OCR has settled with dental practices over replies that disclosed patient information. This is why many practices stop replying.

## Compliance applied

- **HIPAA:** no patient health information in marketing without written authorization, and review replies never confirm someone is a patient.
- **Tracking:** no ad-platform pixels on booking or intake pages. The FTC's 2023 GoodRx and BetterHelp actions are cited.
- **State boards:**
  - Superlatives like "best" and "#1" are avoided.
  - Specialist claims are limited to what the state allows.
  - The page itself uses no superlatives.
- **Endorsements and reviews:** the FTC Endorsement Guides (2023) and the fake reviews rule (October 2024) apply, and testimonials need patient consent.
- **Ad platforms:** Google and Meta review health content automatically. Copy stays on the practice and booking, never clinical outcomes, and we don't run ads.

## Data honesty

- **Proof section:** uses one real, unnamed result, the Scottsdale naturopathic practice (4.8★, 36 Google reviews). It's labelled as a naturopathic practice, not a dental office. It's the same data already on the live Local SEO page.
- **Example screens:** the hero AI chat and booking widget are captioned "Example screen, not live data." and flagged `data-placeholder="true"`. They show no ratings or numbers, and the competitor name is blurred.

## On-page SEO / AEO

- **Title:** "Dental & Medical Practice Marketing | Local SEO & AI Search".
- **Description:** names DSO competition, AI answers and HIPAA-aware reviews.
- **JSON-LD:** the same set as Home Services (ProfessionalService, Service, FAQPage matching the visible FAQ word for word, BreadcrumbList).

## Verification (2026-10-14)

- All structural checks pass: tag balance, duplicate ids, SVG, JSON-LD, FAQ match, headings, landmarks and labels.
- `scrollWidth === clientWidth` at 1100, 390 and 320.
- I read every section in the screenshots and fixed three things:
  - The booking card covered the AI answer's sources in the hero.
  - Four "other industries" left an orphan card, so they now sit in one row of 4 on desktop.
  - Long eyebrows wrapped on phones, so I shortened them.

## Owner TODOs

- Written permission to name the Scottsdale practice, and the unedited GBP screenshot (TODO in `shared.ts`).
- A dental client result, once there is one, to replace or join the naturopathic example.
- Contract terms for the plan card.
