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
  }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

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
    title: post.title,
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

      <article className="rounded-[2rem] border border-[var(--color-watchable-line)] bg-white/85 p-8 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-watchable-muted)]">
          <span>{post.category}</span>
          <span aria-hidden="true">/</span>
          <span>By {post.author}</span>
          <span aria-hidden="true">/</span>
          <span>Published {formatDate(post.publishedAt)}</span>
          {post.updatedAt ? (
            <>
              <span aria-hidden="true">/</span>
              <span>Updated {formatDate(post.updatedAt)}</span>
            </>
          ) : null}
        </div>

        <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-[var(--color-watchable-ink)]">
          {post.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-watchable-muted)]">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-3 py-1 text-sm text-[var(--color-watchable-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <MarkdownArticle blocks={post.blocks} />
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
