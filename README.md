# Marketing Site

Public marketing website for Watchable.

This repository powers `watchable-ai.com`.

The product application lives separately at `app.watchable-ai.com`. Backend APIs live separately from this repository.

## Scope

- Landing pages
- Use-case pages
- Pricing and demo-request pages
- Legal pages
- SEO metadata
- OpenGraph and social previews
- JSON-LD
- Sitemap and robots
- i18n and localized public pages
- Blog and content foundation later

## Out of scope

- Product dashboard
- Auth
- User workspace
- Creative generation flows
- Backend business APIs
- Database, ORM, and migrations

## Route overview

- `/` public landing page
- `/pricing` public pricing page
- `/use-cases` public use-case index
- `/use-cases/[slug]` public use-case detail pages
- `/about` company/about page
- `/demo-request` public demo-request page
- `/privacy`, `/terms`, `/cookies` public legal pages

## Product-app boundary

- Public marketing pages belong here.
- Account access, product usage, dashboard flows, and workspace flows do not.
- Product-entry CTAs should point to `https://app.watchable-ai.com`, `https://app.watchable-ai.com/login`, or `https://app.watchable-ai.com/signup`.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- `next-intl`
- Optional Sentry and PostHog integrations
- Optional Arcjet request protection
- Storybook, Vitest, and Playwright

## Local development

```bash
npm install
npm run dev
```

The local site defaults to `http://localhost:3000`.

Use `.env.example` as the starting point for local environment configuration.

## Verification

```bash
npm run typecheck
npm run lint
npm run check:i18n
npm run build
```

Optional:

```bash
npm run test
npm run test:e2e
npm run build-storybook
```

## i18n

- Locale routing is handled with `next-intl`.
- Localized marketing copy lives in `src/locales`.
- English is the source locale.
- `crowdin.yml` is optional workflow configuration and does not affect runtime behavior.

## Environment

Common variables:

```bash
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_APP_NAME
NEXT_PUBLIC_PRODUCT_APP_URL
NEXT_PUBLIC_POSTHOG_KEY
NEXT_PUBLIC_POSTHOG_HOST
NEXT_PUBLIC_SENTRY_DSN
NEXT_PUBLIC_SENTRY_DISABLED
NEXT_PUBLIC_LOGGING_LEVEL
ARCJET_KEY
```

`NEXT_PUBLIC_APP_URL` should match the public marketing domain for canonical URLs and metadata.

`NEXT_PUBLIC_PRODUCT_APP_URL` should point to the product app origin, such as `https://app.watchable-ai.com`.

Local development should not require auth-provider, database, or product-app secrets.

## Deployment

- Build with `npm run build`.
- The project is intended for Vercel-compatible deployment.
- Keep optional integrations non-blocking when their environment variables are absent.

## CTA Link Policy

- Public marketing CTAs should point to the configured product app URL where account access or product usage begins.
- Do not add fake internal sign-in or sign-up routes to this site.

## Notices

Third-party attribution for the original MIT-licensed template base is preserved in `THIRD_PARTY_NOTICES.md`.
