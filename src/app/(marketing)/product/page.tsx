import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { canonicalProductDescription, companyProfile } from '@/content/company';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { buildSoftwareApplicationJsonLd, buildWebPageJsonLd } from '@/lib/seo/jsonLd';
import { createPageMetadata } from '@/lib/seo/metadata';
import { getCanonicalUrl, siteConfig } from '@/lib/seo/site';
import { AppConfig } from '@/utils/AppConfig';

const route = getRequiredRouteById('product');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const workflowSteps = [
  {
    step: '01',
    title: 'Capture product and brand context',
    body: 'Upload a product, product page copy, claims, packaging, and past assets so the system starts from real source material instead of a blank prompt.',
  },
  {
    step: '02',
    title: 'Build the working creative brief',
    body: 'Watchable structures the usable context into angles, proof points, hooks, constraints, and channel-ready guidance for paid-social execution.',
  },
  {
    step: '03',
    title: 'Generate reviewable creative direction',
    body: 'Teams generate concepts, scripts, storyboards, image variants, and video directions in a format that can be reviewed before production spend increases.',
  },
  {
    step: '04',
    title: 'Export testing-ready packs',
    body: 'Approved outputs become a practical testing pack that supports handoff, launch planning, and monthly creative iteration.',
  },
] as const;

const productProof = [
  {
    title: 'Brand context memory',
    body: 'Keep product facts, approved claims, tone, audience notes, and reference assets in one working layer.',
  },
  {
    title: 'Creative angle generation',
    body: 'Generate hooks, angles, scripts, and paid-social concepts from structured context instead of one-off prompting.',
  },
  {
    title: 'Storyboard-first workflow',
    body: 'Review scenes and story beats before committing to production, editing, or external creator work.',
  },
  {
    title: 'Testing pack output',
    body: 'Ship a usable set of assets, directions, and variants built for testing cadence rather than one isolated ad.',
  },
] as const;

const audiences = [
  'Ecommerce brands',
  'CPG teams',
  'Beauty and skincare marketers',
  'DTC growth teams',
  'Performance marketers',
  'Startups where one person does it all',
] as const;

export default function ProductPage() {
  return (
    <div className="grid gap-6">
      <JsonLd
        data={buildWebPageJsonLd({
          name: route.metadata.title,
          url: getCanonicalUrl(route.path),
          description: route.metadata.description,
          isPartOf: siteConfig.siteUrl,
        })}
      />
      <JsonLd
        data={buildSoftwareApplicationJsonLd({
          name: companyProfile.companyName,
          url: getCanonicalUrl(route.path),
          description: canonicalProductDescription,
          applicationCategory: 'BusinessApplication',
        })}
      />

      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Product
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          The creative operating system for faster paid-social testing
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-[var(--color-watchable-muted)]">
          {canonicalProductDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={AppConfig.signupUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Start in Watchable
          </a>
          <Link
            href="/demo-request"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
          >
            Book a demo
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
        <article className="rounded-[1.75rem] border border-[var(--color-watchable-line)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">
            What the product does
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--color-watchable-muted)]">
            Watchable is built for teams that need more creative output without losing the product
            truth, claims discipline, or brand voice. It connects product inputs, brand memory,
            generation, review, and export into one workflow.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-6">
          <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">
            Who it is for
          </h2>
          <ul className="mt-3 space-y-2 text-base text-[var(--color-watchable-muted)]">
            {audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">
          Workflow overview
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {workflowSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-5"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-[var(--color-watchable-accent)] uppercase">
                Step {item.step}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-watchable-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-watchable-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {productProof.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-watchable-ink)]">
              {item.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--color-watchable-muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">
          Public product links
        </h2>
        <ul className="mt-4 space-y-3 text-base text-[var(--color-watchable-muted)]">
          <li>
            Marketing site:{' '}
            <a
              className="text-[var(--color-watchable-ink)] underline"
              href={companyProfile.websiteUrl}
            >
              {companyProfile.websiteUrl}
            </a>
          </li>
          <li>
            Product app:{' '}
            <a
              className="text-[var(--color-watchable-ink)] underline"
              href={companyProfile.productAppUrl}
            >
              {companyProfile.productAppUrl}
            </a>
          </li>
          <li>
            Public app preview:{' '}
            <a
              className="text-[var(--color-watchable-ink)] underline"
              href={`${companyProfile.productAppUrl}/public-preview`}
            >
              {companyProfile.productAppUrl}/public-preview
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
