import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';
import { AppConfig } from '@/utils/AppConfig';

const route = getRequiredRouteById('pricing');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const cards = [
  {
    title: 'Built for team workflows',
    body: 'Choose a setup that fits your review process, creative volume, and stakeholder needs.',
  },
  {
    title: 'Room for guided rollout',
    body: 'Support onboarding, workflow setup, and rollout planning when your team needs a tighter implementation path.',
  },
  {
    title: 'Clear buying path',
    body: 'Move interested teams into the product app or into a guided demo conversation without route confusion.',
  },
];

export default function PricingPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Pricing
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Pricing should reflect your creative workflow, team shape, and rollout needs
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Watchable pricing should align with how your team sources product context, collaborates on
          creative direction, and moves approved ideas into production.
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

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-8">
        <p className="font-medium text-[var(--color-watchable-ink)]">
          Need a full product walkthrough?
        </p>
        <p className="text-base text-[var(--color-watchable-muted)]">
          Talk through your workflow, creative volume, and rollout needs with the Watchable team.
        </p>
        <a
          href={AppConfig.signupUrl}
          className="mt-4 inline-flex rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 font-medium text-white transition hover:bg-black"
        >
          Start in the app
        </a>
      </section>
    </div>
  );
}
