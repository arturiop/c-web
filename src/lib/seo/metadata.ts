import type { Metadata } from 'next';
import { siteConfig, getCanonicalUrl } from './site';

type PageMetadataInput = {
  title: string;
  absoluteTitle?: string;
  description: string;
  path: string;
  noIndex?: boolean;
  openGraphType?: 'website' | 'article';
  imagePath?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: siteConfig.defaultOgImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultOgImage],
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const createPageMetadata = (input: PageMetadataInput): Metadata => {
  const canonicalUrl = getCanonicalUrl(input.path);
  const imageUrl = input.imagePath ?? siteConfig.defaultOgImage;

  return {
    title: input.absoluteTitle ? { absolute: input.absoluteTitle } : input.title,
    description: input.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: input.absoluteTitle ?? input.title,
      description: input.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: input.openGraphType ?? 'website',
      images: [
        {
          url: imageUrl,
        },
      ],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.absoluteTitle ?? input.title,
      description: input.description,
      images: [imageUrl],
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
};
