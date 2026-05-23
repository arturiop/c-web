export type BlogPostDefinition = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  readTime?: string;
  tags: string[];
  canonicalPath: string;
  sourceFile: string;
  imagePath?: string;
  imageAlt?: string;
};

export const blogPostDefinitions: readonly BlogPostDefinition[] = [
  {
    slug: 'creative-volume-is-the-new-targeting',
    title: 'Creative Volume Is the New Targeting: How Many Ad Creatives a CPG Brand Actually Needs',
    seoTitle: 'Creative Volume Is the New Targeting',
    description:
      'How many ad creatives does a CPG brand actually need on paid social? A practical monthly benchmark and a concept-hook-proof-format framework for staying on-brand.',
    excerpt:
      'A practical benchmark for how much paid-social creative volume CPG brands need, plus a framework for scaling concepts, hooks, proof points, formats, images, and video without brand drift.',
    publishedAt: '2026-05-21',
    updatedAt: '2026-05-21',
    author: 'Watchable AI',
    category: 'Paid-social creative strategy',
    readTime: '9 min read',
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
    imagePath: '/assets/article_1.png',
    imageAlt:
      'Placeholder blog artwork for Creative Volume Is the New Targeting until the final article image is provided.',
  },
] as const;

export const plannedBlogTopics = [
  {
    slug: 'how-many-ad-creatives-should-a-cpg-brand-test-per-month',
    title: 'How Many Ad Creatives Should a CPG Brand Test Per Month?',
    angle: 'Benchmarks by testing stage, spend level, and channel mix.',
  },
  {
    slug: 'from-brandbook-to-paid-social-ad',
    title: 'From Brandbook to Paid-Social Ad',
    angle: 'How brand guidelines become reviewable ad concepts, images, and videos.',
  },
  {
    slug: 'ai-ad-creative-generator-vs-creative-testing-platform',
    title: 'AI Ad Creative Generator vs Creative Testing Platform',
    angle: 'Positioning the workflow layer versus single-output generation tools.',
  },
  {
    slug: 'beating-creative-fatigue-meta',
    title: 'Beating Creative Fatigue on Meta',
    angle: 'Refresh systems for hooks, proof, offers, and formats before performance drops.',
  },
  {
    slug: 'best-ai-ad-creative-tools-for-cpg-brands-2026',
    title: 'Best AI Ad Creative Tools for CPG Brands in 2026',
    angle: 'A substantive comparison page once enough first-party evaluation exists.',
  },
] as const;
