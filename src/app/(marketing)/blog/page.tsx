import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getAllBlogPosts } from '@/lib/blog';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('blog');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Blog
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Practical writing on paid-social creative systems for CPG and ecommerce teams
        </h1>
        <p className="max-w-3xl text-lg text-[var(--color-watchable-muted)]">
          Watchable publishes direct, useful guidance on creative volume, brand consistency,
          paid-social production workflows, and how AI can help teams ship more testable creative
          without random off-brand output.
        </p>
      </section>

      <section className="grid gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-watchable-muted)]">
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">/</span>
              <span>{post.category}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
              <Link
                href={post.canonicalPath}
                className="transition hover:text-[var(--color-watchable-accent)]"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-watchable-muted)]">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-3 py-1 text-sm text-[var(--color-watchable-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
