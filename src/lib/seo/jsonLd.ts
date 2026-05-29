type JsonLdValue = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const buildOrganizationJsonLd = (props: {
  name: string;
  url: string;
  description: string;
  logo?: string;
  sameAs?: string[];
  email?: string;
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: props.name,
  url: props.url,
  description: props.description,
  ...(props.logo ? { logo: { '@type': 'ImageObject', url: props.logo } } : {}),
  ...(props.email ? { email: props.email } : {}),
  sameAs: props.sameAs,
});

export const buildWebSiteJsonLd = (props: {
  name: string;
  url: string;
  description: string;
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: props.name,
  url: props.url,
  description: props.description,
});

export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const buildFaqJsonLd = (items: readonly FaqItem[]): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const buildSoftwareApplicationJsonLd = (props: {
  name: string;
  url: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: props.name,
  url: props.url,
  description: props.description,
  applicationCategory: props.applicationCategory,
  operatingSystem: props.operatingSystem ?? 'Web',
});

export const buildWebPageJsonLd = (props: {
  name: string;
  url: string;
  description: string;
  isPartOf?: string;
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: props.name,
  url: props.url,
  description: props.description,
  ...(props.isPartOf ? { isPartOf: { '@type': 'WebSite', url: props.isPartOf } } : {}),
});

export const buildArticleJsonLd = (props: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogoUrl: string;
  image?: string;
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: props.headline,
  description: props.description,
  ...(props.image ? { image: props.image } : {}),
  datePublished: props.datePublished,
  dateModified: props.dateModified,
  author: {
    '@type': 'Organization',
    name: props.authorName,
    url: props.url.replace(/\/blog\/[^/]+$/u, ''),
  },
  publisher: {
    '@type': 'Organization',
    name: props.publisherName,
    logo: {
      '@type': 'ImageObject',
      url: props.publisherLogoUrl,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': props.url,
  },
});
