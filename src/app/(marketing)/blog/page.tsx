import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { plannedBlogTopics } from '@/content/blog';
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
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="grid gap-8">
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/80 p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Blog
        </p>
        <h1 className="mt-3 text-[clamp(2.8rem,6vw,5rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-[var(--color-watchable-ink)]">
          Practical writing on paid-social creative systems
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--color-watchable-muted)]">
          Watchable publishes direct, useful guidance on creative volume, brand consistency,
          paid-social production workflows, and how AI can help teams ship more testable creative
          without random off-brand output.
        </p>
      </section>

      <section className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={post.canonicalPath} className="block">
              <div className="relative aspect-[1/1] overflow-hidden rounded-[1.6rem] bg-[var(--color-watchable-line)]">
                <Image
                  src={post.imagePath ?? '/logo-big.png'}
                  alt={post.imageAlt ?? post.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[var(--color-watchable-muted)]">
              <span>{post.category}</span>
              <span aria-hidden="true">•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            <h2 className="mt-3 max-w-[14ch] text-[clamp(2rem,3vw,2.6rem)] leading-[1.04] font-medium tracking-[-0.05em] text-[var(--color-watchable-ink)]">
              <Link
                href={post.canonicalPath}
                className="transition hover:text-[var(--color-watchable-accent)]"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-md text-base leading-7 text-[var(--color-watchable-muted)]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-dashed border-[var(--color-watchable-line)] bg-white/75 p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Content map
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Planned cluster topics
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-watchable-muted)]">
          These topics are queued for substantive articles. They are intentionally not published as
          placeholder pages.
        </p>
        <ul className="mt-6 grid gap-3">
          {plannedBlogTopics.map((topic) => (
            <li
              key={topic.slug}
              className="rounded-[1.25rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-4"
            >
              <p className="font-medium text-[var(--color-watchable-ink)]">{topic.title}</p>
              <p className="mt-1 text-sm leading-6 text-[var(--color-watchable-muted)]">
                {topic.angle}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
