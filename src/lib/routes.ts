export type MarketingRouteId =
  | 'home'
  | 'about'
  | 'pricing'
  | 'useCases'
  | 'useCaseEcommerceGrowthTeams'
  | 'useCaseBeautySkincare'
  | 'useCaseAmazonSellers'
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
  breadcrumbParentId?: MarketingRouteId;
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
    metadata: {
      title: 'Use Cases',
      description:
        'See how Watchable supports ecommerce growth teams, beauty and skincare brands, and Amazon sellers with stronger creative operating systems.',
    },
  },
  {
    id: 'pricing',
    path: '/pricing',
    label: 'Pricing',
    showInPrimaryNav: true,
    breadcrumbParentId: 'home',
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
    metadata: {
      title: 'Request a Demo',
      description:
        'Request a Watchable demo to see how ecommerce teams move from product context to reviewable creative direction.',
    },
  },
  {
    id: 'useCaseEcommerceGrowthTeams',
    path: '/use-cases/ecommerce-growth-teams',
    label: 'Ecommerce growth teams',
    breadcrumbParentId: 'useCases',
    metadata: {
      title: 'Use Case: Ecommerce Growth Teams',
      description:
        'How Watchable helps ecommerce growth teams turn product context into creative angles, scripts, assets, and faster testing cycles.',
    },
  },
  {
    id: 'useCaseBeautySkincare',
    path: '/use-cases/beauty-skincare',
    label: 'Beauty and skincare',
    breadcrumbParentId: 'useCases',
    metadata: {
      title: 'Use Case: Beauty and Skincare',
      description:
        'How Watchable helps beauty and skincare brands manage nuanced product storytelling and high-volume creative iteration.',
    },
  },
  {
    id: 'useCaseAmazonSellers',
    path: '/use-cases/amazon-sellers',
    label: 'Amazon sellers',
    breadcrumbParentId: 'useCases',
    metadata: {
      title: 'Use Case: Amazon Sellers',
      description:
        'How Watchable helps Amazon sellers turn listing context into stronger creative hooks, assets, and ad-ready direction.',
    },
  },
  {
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    showInFooter: true,
    breadcrumbParentId: 'home',
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
    breadcrumbParentId: 'home',
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
    breadcrumbParentId: 'home',
    metadata: {
      title: 'Cookie Notice',
      description: 'Cookie notice for the Watchable marketing site.',
    },
  },
];

export const primaryNavRoutes = marketingRoutes.filter((route) => route.showInPrimaryNav);

export const footerRoutes = marketingRoutes.filter((route) => route.showInFooter);

export const sitemapRoutes = marketingRoutes.map((route) => route.path);

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
