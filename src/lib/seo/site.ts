import { Env } from '@/libs/Env';
import { AppConfig } from '@/utils/AppConfig';

const productionSiteUrl = 'https://watchable-ai.com';

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/u, '');

export const siteConfig = {
  name: AppConfig.name,
  siteUrl: normalizeSiteUrl(Env.NEXT_PUBLIC_SITE_URL ?? productionSiteUrl),
  defaultTitle: 'Watchable',
  titleTemplate: `%s | ${AppConfig.name}`,
  defaultDescription: AppConfig.defaultDescription,
  defaultOgImage: '/logo-big.png',
};

export const getCanonicalUrl = (path: string) =>
  new URL(path === '/' ? '/' : path.replace(/\/+$/u, ''), `${siteConfig.siteUrl}/`).toString();
