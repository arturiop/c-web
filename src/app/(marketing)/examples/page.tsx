import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('examples');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const exampleTypes = [
  {
    title: 'Hook variations',
    body: 'Different openings for the same product story so teams can test which framing earns attention first.',
  },
  {
    title: 'Static image variants',
    body: 'Paid-social image concepts that adapt packaging, proof points, offer framing, and visual hierarchy to channel needs.',
  },
  {
    title: 'Short-form video directions',
    body: 'Concepts for product demos, creator-style explainers, routine content, benefit-led cuts, and proof-driven video sequences.',
  },
  {
    title: 'Refreshes of winning creatives',
    body: 'Follow-on variants that keep strong concepts alive longer as performance starts to fatigue.',
  },
] as const;

export default function ExamplesPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Examples
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Example types Watchable is built to support
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          This page does not claim customer case studies or generated assets that are not publicly
          published. It describes the creative output categories Watchable is designed to help teams
          produce and review.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {exampleTypes.map((item) => (
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
    </div>
  );
}
