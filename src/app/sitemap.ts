import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { sitemapRoutes } from '@/lib/routes';
import { getCanonicalUrl } from '@/lib/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = sitemapRoutes.map((route) => ({
    url: getCanonicalUrl(route.path),
    lastModified: route.lastModified,
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: getCanonicalUrl(post.canonicalPath),
    lastModified: post.updatedAt ?? post.publishedAt,
  }));

  return [...staticEntries, ...blogEntries];
}
