import { AppConfig } from '@/utils/AppConfig';

export const canonicalProductDescription =
  'Watchable is an AI creative operating system for ecommerce and CPG growth teams. It turns product and brand context into on-brand paid-social concepts, hooks, scripts, storyboards, image variants, video directions, and testing packs.';

export const companyProfile = {
  companyName: 'Watchable AI',
  website: 'watchable-ai.com',
  websiteUrl: 'https://watchable-ai.com',
  productAppUrl: AppConfig.productAppUrl,
  productCategory:
    'AI creative production software / marketing technology / ecommerce growth software',
  contactEmail: 'hello@watchable-ai.com',
  mission:
    'Our mission is to help ecommerce and CPG growth teams create, test, and improve paid-social creative faster while staying consistent with their brand, claims, and product context.',
} as const;