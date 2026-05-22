import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useCases, getUseCaseBySlug } from '@/data/useCases';
import { createPageMetadata } from '@/lib/seo/metadata';

type UseCaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export const dynamic = 'error';
export const dynamicParams = false;

export async function generateMetadata(props: UseCaseDetailPageProps) {
  const { slug } = await props.params;
  const item = getUseCaseBySlug(slug);

  if (!item) {
    return {};
  }

  return createPageMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/use-cases/${item.slug}`,
    noIndex: true,
  });
}

export default async function UseCaseDetailPage(props: UseCaseDetailPageProps) {
  const { slug } = await props.params;
  const item = getUseCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  const path = `/use-cases/${item.slug}`;

  return (
    <div className="grid gap-6">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Use cases', href: '/use-cases' },
          { label: item.title, href: path },
        ]}
      />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Use case
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          {item.title}
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">{item.summary}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {item.sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-watchable-ink)]">
              {section.title}
            </h2>
            <p className="text-base text-[var(--color-watchable-muted)]">{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
