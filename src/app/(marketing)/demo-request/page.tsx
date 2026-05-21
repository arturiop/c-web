import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';
import { AppConfig } from '@/utils/AppConfig';

const route = getRequiredRouteById('demoRequest');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const cards = [
  {
    title: 'Map the workflow',
    body: 'See how Watchable fits your creative planning, review, and launch process.',
  },
  {
    title: 'Align stakeholders',
    body: 'Give growth, brand, and creative leads a shared view of the product and the operating model.',
  },
  {
    title: 'Choose the next step',
    body: 'Move into the app or continue with a guided rollout conversation based on your team’s needs.',
  },
];

export default function DemoRequestPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Demo request
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Book a closer look at the Watchable workflow
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Use this route when your team wants to see how Watchable turns product context into
          creative direction and production-ready outputs.
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

      <a
        href={AppConfig.signupUrl}
        className="inline-flex w-fit rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 font-medium text-white transition hover:bg-black"
      >
        Start in the app
      </a>
    </div>
  );
}
