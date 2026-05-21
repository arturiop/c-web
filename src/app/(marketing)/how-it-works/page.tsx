import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('howItWorks');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const steps = [
  {
    title: '1. Upload brand and product inputs',
    body: 'Start with the assets your team already has: brand guidelines, brandbook, packaging references, product images, approved claims, and example creatives.',
  },
  {
    title: '2. Extract usable brand context',
    body: 'Turn visual rules, tone, proof points, and product details into a creative system that is easier to reuse across paid-social production.',
  },
  {
    title: '3. Generate creative directions and variants',
    body: 'Shape concepts, hooks, images, and video directions for Meta, TikTok, Reels, Shorts, and adjacent placements without starting from a blank page every time.',
  },
  {
    title: '4. Review for brand fidelity',
    body: 'Check outputs against product truth, packaging accuracy, claims, visual consistency, and channel fit before launch.',
  },
  {
    title: '5. Launch, learn, and refresh',
    body: 'Use performance learnings to guide the next round of hooks, proof points, formats, and creative refreshes so the workflow compounds over time.',
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          How it works
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          From brand inputs to paid-social creative variants your team can actually review
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Watchable is built for teams that need more creative volume without brand drift. The goal
          is not random generation. The goal is a repeatable workflow from source material to
          testable image and video outputs.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-watchable-ink)]">
              {step.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--color-watchable-muted)]">
              {step.body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
