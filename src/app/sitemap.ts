import type { MetadataRoute } from 'next';
import { sitemapRoutes } from '@/lib/routes';
import { getCanonicalUrl } from '@/lib/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: getCanonicalUrl(route),
    lastModified: new Date(),
  }));
}
