import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DemoRequestForm } from '@/components/demo/DemoRequestForm';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('demoRequest');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const cards = [
  {
    title: 'Workflow fit',
    body: 'Show how Watchable maps to your current creative planning, review, and launch process.',
  },
  {
    title: 'Team alignment',
    body: 'Give growth, brand, and creative leads a shared view of the product and rollout path.',
  },
  {
    title: 'Next-step clarity',
    body: 'Leave with a concrete recommendation for whether your team should start in-app or plan a guided rollout.',
  },
];

const agenda = [
  'Current creative workflow and bottlenecks',
  'How your team briefs product and brand context today',
  'What outputs you need most: hooks, scripts, storyboards, or variants',
  'What a practical rollout could look like for your team',
];

export default function DemoRequestPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="watchable-panel rounded-[2rem] px-8 py-10">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Book a demo
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Show your team how Watchable turns product context into review-ready creative direction
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-watchable-muted)]">
          Share a few details about your workflow and goals. We will open a prefilled email draft to
          the Watchable team so you can send the request with the right context.
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
            <p className="mt-2 text-base leading-7 text-[var(--color-watchable-muted)]">
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <DemoRequestForm />

        <aside className="space-y-6 rounded-[2rem] border border-[var(--color-watchable-line)] bg-[rgba(255,255,255,0.75)] p-7">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
              What to expect
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-watchable-ink)]">
              Keep the first conversation concrete
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--color-watchable-muted)]">
              The best demo requests include enough workflow detail to show where creative planning,
              review, and testing are slowing down today.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white/80 p-5">
            <p className="text-sm font-semibold text-[var(--color-watchable-ink)]">
              Typical first-call agenda
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-watchable-muted)]">
              {agenda.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-watchable-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-[color:rgb(255_122_26_/_0.08)] p-5">
            <p className="text-sm font-semibold text-[var(--color-watchable-ink)]">
              Prefer direct email?
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-watchable-muted)]">
              Send your request to{' '}
              <a
                href="mailto:hello@watchable-ai.com"
                className="font-medium text-[var(--color-watchable-ink)] underline decoration-[var(--color-watchable-accent)] underline-offset-4"
              >
                hello@watchable-ai.com
              </a>{' '}
              and include your company, role, workflow, and main creative testing goals.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
