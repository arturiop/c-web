import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('forCpgBrands');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const audienceCards = [
  'CPG brands running Meta, TikTok, Reels, and Shorts programs',
  'DTC and ecommerce teams managing creative fatigue and launch calendars',
  'Beauty, skincare, food, beverage, wellness, and consumer goods brands',
  'Agencies serving CPG brands that need faster on-brand concept production',
] as const;

const painCards = [
  'Creative volume requirements increase faster than internal production capacity.',
  'Brand consistency breaks when more creators, freelancers, and AI tools enter the workflow.',
  'Paid-social fatigue forces constant refreshes of hooks, concepts, and formats.',
  'Approval friction slows launches when packaging, claims, and tone need tight control.',
  'Generic AI tools often generate output that looks usable at first glance but fails brand review.',
] as const;

export default function ForCpgBrandsPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          For CPG brands
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Built for CPG and ecommerce teams that need more paid-social creative without losing brand
          control
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Watchable fits teams that need more concepts, hooks, image variants, and video variants
          while still protecting packaging accuracy, claims discipline, tone, and visual
          consistency.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">Who it helps</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--color-watchable-muted)]">
            {audienceCards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[var(--color-watchable-ink)]">
            What it addresses
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--color-watchable-muted)]">
            {painCards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
