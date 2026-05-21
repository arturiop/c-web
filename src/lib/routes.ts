export type MarketingRouteId =
  | 'home'
  | 'about'
  | 'blog'
  | 'howItWorks'
  | 'forCpgBrands'
  | 'examples'
  | 'pricing'
  | 'useCases'
  | 'demoRequest'
  | 'privacy'
  | 'terms'
  | 'cookies';

export type MarketingRoute = {
  id: MarketingRouteId;
  path: string;
  label: string;
  navLabel?: string;
  navHref?: string;
  showInPrimaryNav?: boolean;
  showInFooter?: boolean;
  footerSection?: 'resources' | 'legal';
  breadcrumbParentId?: MarketingRouteId;
  lastModified: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const marketingRoutes: MarketingRoute[] = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    navLabel: 'Product',
    navHref: '/#product',
    showInPrimaryNav: true,
    lastModified: '2026-05-22',
    metadata: {
      title: 'Watchable',
      description:
        'Watchable is an AI Creative Operating System for ecommerce growth teams turning product and brand context into hooks, scripts, storyboards, assets, and creative learnings.',
    },
  },
  {
    id: 'useCases',
    path: '/use-cases',
    label: 'Use cases',
    showInPrimaryNav: true,
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Use Cases',
      description:
        'See how Watchable supports ecommerce growth teams, beauty and skincare brands, and Amazon sellers with stronger creative operating systems.',
    },
  },
  {
    id: 'howItWorks',
    path: '/how-it-works',
    label: 'How it works',
    showInFooter: true,
    footerSection: 'resources',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'How Watchable Works',
      description:
        'See how Watchable turns brand guidelines, product assets, and reference creatives into on-brand paid-social image and video variants.',
    },
  },
  {
    id: 'forCpgBrands',
    path: '/for-cpg-brands',
    label: 'For CPG brands',
    showInFooter: true,
    footerSection: 'resources',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Watchable for CPG Brands',
      description:
        'Learn how Watchable helps CPG and ecommerce teams produce more on-brand paid-social creative without losing brand consistency.',
    },
  },
  {
    id: 'examples',
    path: '/examples',
    label: 'Examples',
    showInFooter: true,
    footerSection: 'resources',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Creative Example Types',
      description:
        'See the paid-social creative example types Watchable is built to support for CPG and ecommerce teams.',
    },
  },
  {
    id: 'blog',
    path: '/blog',
    label: 'Blog',
    showInPrimaryNav: true,
    showInFooter: true,
    footerSection: 'resources',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Blog',
      description:
        'Practical writing on creative volume, paid-social production, brand consistency, and AI workflows for CPG and ecommerce teams.',
    },
  },
  {
    id: 'pricing',
    path: '/pricing',
    label: 'Pricing',
    showInPrimaryNav: true,
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Pricing',
      description:
        'Explore how Watchable pricing can align with your team structure, creative workflow, and rollout needs.',
    },
  },
  {
    id: 'about',
    path: '/about',
    label: 'About',
    showInPrimaryNav: true,
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'About Watchable',
      description:
        'Learn how Watchable helps ecommerce growth teams build better creative operating systems with product and brand context at the center.',
    },
  },
  {
    id: 'demoRequest',
    path: '/demo-request',
    label: 'Request demo',
    showInPrimaryNav: true,
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Request a Demo',
      description:
        'Request a Watchable demo to see how ecommerce teams move from product context to reviewable creative direction.',
    },
  },
  {
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    showInFooter: true,
    footerSection: 'legal',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Privacy Policy',
      description: 'Privacy policy for the Watchable marketing site.',
    },
  },
  {
    id: 'terms',
    path: '/terms',
    label: 'Terms of Service',
    showInFooter: true,
    footerSection: 'legal',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Terms of Service',
      description: 'Terms of service for the Watchable marketing site.',
    },
  },
  {
    id: 'cookies',
    path: '/cookies',
    label: 'Cookie Notice',
    showInFooter: true,
    footerSection: 'legal',
    breadcrumbParentId: 'home',
    lastModified: '2026-05-22',
    metadata: {
      title: 'Cookie Notice',
      description: 'Cookie notice for the Watchable marketing site.',
    },
  },
];

export const primaryNavRoutes = marketingRoutes.filter((route) => route.showInPrimaryNav);

export const footerRoutes = marketingRoutes.filter((route) => route.showInFooter);

export const sitemapRoutes = marketingRoutes.map((route) => ({
  path: route.path,
  lastModified: route.lastModified,
}));

export const getRouteById = (routeId: MarketingRouteId) =>
  marketingRoutes.find((route) => route.id === routeId);

export const getRouteByPath = (path: string) =>
  marketingRoutes.find((route) => route.path === path);

export const getRequiredRouteById = (routeId: MarketingRouteId) => {
  const route = getRouteById(routeId);

  if (!route) {
    throw new Error(`Missing route definition for "${routeId}".`);
  }

  return route;
};

export const getBreadcrumbsForPath = (path: string) => {
  const route = getRouteByPath(path);

  if (!route) {
    return [];
  }

  const breadcrumbs: { label: string; href: string }[] = [];
  let currentRoute: MarketingRoute | undefined = route;

  while (currentRoute) {
    breadcrumbs.unshift({ label: currentRoute.label, href: currentRoute.path });
    currentRoute = currentRoute.breadcrumbParentId
      ? getRouteById(currentRoute.breadcrumbParentId)
      : undefined;
  }

  return breadcrumbs;
};
