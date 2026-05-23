import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarkdownArticle } from '@/components/blog/MarkdownArticle';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import { buildArticleJsonLd } from '@/lib/seo/jsonLd';
import { createPageMetadata } from '@/lib/seo/metadata';
import { getCanonicalUrl, siteConfig } from '@/lib/seo/site';
import { AppConfig } from '@/utils/AppConfig';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamic = 'error';
export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: 'Blog Article',
      description: 'Watchable blog article.',
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.seoTitle ?? post.title,
    absoluteTitle:
      post.slug === 'creative-volume-is-the-new-targeting'
        ? 'Creative Volume Is the New Targeting | Watchable AI'
        : undefined,
    description: post.description,
    path: post.canonicalPath,
    openGraphType: 'article',
    imagePath: post.imageUrl,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
  });
}

export default async function BlogArticlePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = getCanonicalUrl(post.canonicalPath);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: post.canonicalPath },
  ];

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={breadcrumbItems} />
      <JsonLd
        data={buildArticleJsonLd({
          headline: post.title,
          description: post.description,
          url: canonicalUrl,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          authorName: post.author,
          publisherName: siteConfig.name,
          publisherLogoUrl: new URL('/logo.png', `${siteConfig.siteUrl}/`).toString(),
          image: post.imageUrl,
        })}
      />

      <article className="overflow-hidden rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/85 shadow-sm">
        <header className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-watchable-muted)]">
            <span>{post.readTime ?? 'Article'}</span>
            <span aria-hidden="true">•</span>
            <span>{post.category}</span>
            <span aria-hidden="true">•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-[var(--color-watchable-ink)]">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-watchable-ink)] text-sm font-semibold text-white">
              W
            </div>
            <div>
              <p className="font-medium text-[var(--color-watchable-ink)]">{post.author}</p>
              <p className="text-sm text-[var(--color-watchable-muted)]">
                Published {formatDate(post.publishedAt)}
                {post.updatedAt ? ` • Updated ${formatDate(post.updatedAt)}` : ''}
              </p>
            </div>
          </div>
        </header>

        <div className="px-8 pb-2 sm:px-10">
          <img
            src={post.imagePath ?? '/logo-big.png'}
            alt={post.imageAlt ?? post.title}
            className="w-full rounded-[1.6rem] bg-[var(--color-watchable-line)] object-cover"
          />
        </div>

        <div className="p-8 sm:p-10">
          <div className="mx-auto max-w-3xl">
            <MarkdownArticle blocks={post.blocks} />
          </div>
        </div>
      </article>

      <section className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-8">
        <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
          Next step
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-watchable-ink)]">
          Build more on-brand creative volume without random output
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-watchable-muted)]">
          Watchable helps CPG and ecommerce teams turn brand guidelines, product assets, and
          reference creatives into more testable paid-social image and video variants.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={AppConfig.signupUrl}
            className="inline-flex rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 font-medium text-white transition hover:bg-black"
          >
            Start in Watchable
          </a>
          <Link
            href="/demo-request"
            className="inline-flex rounded-full border border-[var(--color-watchable-line)] bg-white px-5 py-3 font-medium text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
          >
            Request demo
          </Link>
        </div>
      </section>
    </div>
  );
}
