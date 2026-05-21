export type BlogPostDefinition = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  canonicalPath: string;
  sourceFile: string;
  imagePath?: string;
};

export const blogPostDefinitions: readonly BlogPostDefinition[] = [
  {
    slug: 'creative-volume-is-the-new-targeting',
    title: 'Creative Volume Is the New Targeting: How Many Ad Creatives a CPG Brand Actually Needs',
    description:
      'How many ad creatives does a CPG brand actually need on paid social? A practical monthly benchmark and a concept-hook-proof-format framework for staying on-brand.',
    excerpt:
      'A practical benchmark for how much paid-social creative volume CPG brands need, plus a framework for scaling concepts, hooks, proof points, formats, images, and video without brand drift.',
    publishedAt: '2026-05-21',
    updatedAt: '2026-05-21',
    author: 'Watchable AI',
    category: 'Paid-social creative strategy',
    tags: [
      'CPG marketing',
      'creative volume',
      'paid social',
      'Meta ads',
      'TikTok ads',
      'brand consistency',
    ],
    canonicalPath: '/blog/creative-volume-is-the-new-targeting',
    sourceFile: 'src/content/blog/creative-volume-is-the-new-targeting.md',
  },
] as const;
