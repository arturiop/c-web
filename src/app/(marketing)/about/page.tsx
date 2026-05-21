import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('about');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const cards = [
  {
    title: 'Context-first creative systems',
    body: 'Watchable starts from product truth, brand context, and audience intent before creative execution begins.',
  },
  {
    title: 'Reviewable outputs',
    body: 'Teams can align on hooks, scripts, storyboards, and creative direction before production work gets expensive.',
  },
  {
    title: 'Built for ecommerce velocity',
    body: 'The workflow supports fast iteration across launches, paid social programs, marketplaces, and ongoing creative testing.',
  },
];

export default function AboutPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Watchable helps growth teams make better creative decisions, faster
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          We built Watchable for ecommerce teams that need a stronger operating layer between raw
          product context and the creative assets they test in market.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-watchable-ink)]">
              {card.title}
            </h2>
            <p className="text-base text-[var(--color-watchable-muted)]">{card.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
