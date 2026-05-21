import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useCases } from '@/data/useCases';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('useCases');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

export default function UseCasesPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Use cases
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Use cases for teams that need stronger creative systems
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Watchable helps CPG and ecommerce growth teams turn product context into creative
          direction that is easier to review, refine, and launch across paid-social workflows.
        </p>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <article
            key={useCase.slug}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-watchable-ink)]">
              {useCase.title}
            </h2>
            <p className="mt-2 text-base text-[var(--color-watchable-muted)]">{useCase.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
