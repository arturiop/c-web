import Link from 'next/link';
import { buildBreadcrumbJsonLd } from '@/lib/seo/jsonLd';
import { getCanonicalUrl } from '@/lib/seo/site';
import { JsonLd } from './JsonLd';

type Breadcrumb = {
  label: string;
  href: string;
};

export const Breadcrumbs = (props: { items: Breadcrumb[] }) => {
  if (props.items.length < 2) {
    return null;
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd(
          props.items.map((item) => ({
            name: item.label,
            item: getCanonicalUrl(item.href),
          })),
        )}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-watchable-muted)]">
          {props.items.map((item, index) => {
            const isLast = index === props.items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-[var(--color-watchable-ink)]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition hover:text-[var(--color-watchable-accent)]"
                  >
                    {item.label}
                  </Link>
                )}
                {isLast ? null : <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
