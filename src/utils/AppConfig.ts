import { Env } from '@/libs/Env';

/** Centralized application configuration */
export const AppConfig = {
  name: Env.NEXT_PUBLIC_APP_NAME,
  defaultTitle: 'Watchable',
  defaultDescription:
    'Watchable helps ecommerce growth teams turn product and brand context into creative angles, hooks, scripts, storyboards, assets, variants, and performance learnings.',
  domain: 'watchable-ai.com',
  productAppUrl: Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com',
  loginUrl: `${Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com'}/login`,
  signupUrl: `${Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com'}/signup`,
};
