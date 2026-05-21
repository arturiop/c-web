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
  sameAs?: string[];
}): JsonLdValue => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: props.name,
  url: props.url,
  description: props.description,
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
