# Rank It Globally Next.js Site

Next.js conversion of the Rank It Globally landing page with a hidden Sanity blog and a Brevo-powered audit form.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in the credentials you want enabled.

Required for visitor/admin audit emails:

```env
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_ADMIN_EMAIL=
```

Required for full automated reports:

```env
ANTHROPIC_API_KEY=
GOOGLE_PAGESPEED_API_KEY=
DATAFORSEO_LOGIN=
DATAFORSEO_PASSWORD=
```

Optional lead capture into a Brevo list:

```env
BREVO_LIST_ID=
```

## Sanity Setup

You already have a Sanity account. From this project folder:

```bash
npx sanity@latest login
npx sanity@latest projects list
```

Create or select a project in Sanity, then add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

The embedded Studio is available at `/studio`. The blog routes are available at `/blog` and `/blog/[slug]`, but they are intentionally not linked from the landing page navigation yet.

## Audit Form

The landing page posts to `/api/audit`. The route:

- validates the visitor website and email
- runs Google PageSpeed when configured
- runs DataForSEO OnPage when configured
- asks Claude to write a readable report when configured
- sends the visitor report through Brevo
- sends an admin notification through Brevo

If an upstream API is missing or unavailable, the route still returns success and includes a clear pending/fallback section in the report.

## Hostinger Deployment

Use Node.js 20.19+ or 22.12+ for this dependency set.

Build command:

```bash
npm run build
```

Start command:

```bash
npm start
```
