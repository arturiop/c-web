# AGENTS

## Purpose

This codebase is the public marketing site for Watchable at `watchable-ai.com`.

- Build public, indexable marketing pages.
- Keep i18n support with `next-intl`.
- Keep metadata, OpenGraph, JSON-LD, sitemap, and robots support intact.
- Send product-entry CTAs to the configured product app URL.

## Product positioning

Watchable is an AI Creative Operating System for ecommerce growth teams.

It helps teams turn product and brand context into creative angles, hooks, storyboards, marketplace creative concepts, and ad-ready creative directions.

It is not positioned as a generic AI video generator.

## Hard constraints

- Do not add auth.
- Do not add database logic, ORM, or migrations.
- Do not add dashboard, workspace, onboarding, or generation app flows here.
- Do not add backend business APIs here.
- Do not reintroduce prior launch-kit branding or vendor branding.
- Do not add removed review-bot or coverage-bot integrations back into this codebase.

## Implementation guidance

- Use server components by default.
- Use client components only for interactive islands.
- Keep pages SEO-friendly, fast, and public.
- Preserve the current locale structure and `next-intl` routing.
- Keep Sentry, PostHog, and Arcjet optional and non-blocking when env vars are absent.
- Use Next.js metadata APIs for titles, descriptions, canonical URLs, and social metadata.
- Keep legal pages public and static.
- Keep public copy in locale files when practical.

## Content guidance

- Keep copy customer-facing and product-focused.
- Avoid generic “AI video maker” framing unless a page explicitly needs that language for search intent and it remains accurate.
- Do not describe the site as a reusable starting point or internal cleanup stage.
- CTA links should point to the configured product app URLs, not fake internal auth routes.

## Design guidance

- Preserve the established marketing visual language unless a task explicitly calls for redesign.
- Prefer low-risk content and structure cleanup over broad UI churn during foundation work.
