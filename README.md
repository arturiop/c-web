# Marketing Site

Public marketing website for Watchable.

This repository powers `watchable-ai.com`.

The product application lives separately at `app.watchable-ai.com`. Backend APIs live separately from this repository.

The deployment target is Next.js on Vercel with a static-first marketing/content architecture.

## Scope

- Landing pages
- Use-case pages
- Blog and content pages
- Pricing and demo-request pages
- Legal pages
- SEO metadata
- OpenGraph and social previews
- JSON-LD
- Sitemap and robots
- `llms.txt`
- English-only public content

## Out of scope

- Product dashboard
- Auth
- User workspace
- Creative generation flows
- Backend business APIs
- Database, ORM, and migrations
- Server actions and runtime CMS/content fetching

## Route overview

- `/` public landing page
- `/how-it-works`, `/for-cpg-brands`, `/use-cases`, `/examples` public content pages
- `/blog` public blog index
- `/blog/[slug]` public blog article pages generated from local content
- `/pricing` public pricing page
- `/about` company/about page
- `/demo-request` public demo-request page
- `/privacy`, `/terms`, `/cookies` public legal pages
- `/llms.txt`, `/robots.txt`, `/sitemap.xml` public metadata resources

## Product-app boundary

- Public marketing pages belong here.
- Account access, product usage, dashboard flows, and workspace flows do not.
- Product-entry CTAs should point to `https://app.watchable-ai.com`, `https://app.watchable-ai.com/login`, or `https://app.watchable-ai.com/signup`.
- Content should come from local files under `src/content`, not runtime APIs.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Optional Sentry and PostHog integrations
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
npm run build
```

Optional:

```bash
npm run test
npm run test:e2e
npm run build-storybook
```

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
```

`NEXT_PUBLIC_APP_URL` should match the public marketing domain for canonical URLs and metadata.

`NEXT_PUBLIC_PRODUCT_APP_URL` should point to the product app origin, such as `https://app.watchable-ai.com`.

Local development should not require auth-provider, database, or product-app secrets.

## Deployment

- Build with `npm run build`.
- The project is intended for Vercel-compatible deployment.
- Keep optional monitoring and analytics integrations non-blocking when their environment variables are absent.
- Do not enable `output: 'export'` unless hosting requirements change.

## CTA Link Policy

- Public marketing CTAs should point to the configured product app URL where account access or product usage begins.
- Do not add fake internal sign-in or sign-up routes to this site.
