import { Env } from '@/libs/Env';

/** Centralized application configuration */
export const AppConfig = {
  name: Env.NEXT_PUBLIC_APP_NAME,
  defaultTitle: 'Watchable',
  defaultDescription:
    'Watchable lets marketers and growth teams make on-brand paid-social creative themselves — concepts, hooks, images, and video — 100× cheaper and 1000× faster, always within their brandbook.',
  domain: 'watchable-ai.com',
  productAppUrl: Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com',
  loginUrl: `${Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com'}/login`,
  signupUrl: `${Env.NEXT_PUBLIC_PRODUCT_APP_URL ?? 'https://app.watchable-ai.com'}/signup`,
};
