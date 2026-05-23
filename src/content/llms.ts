import { getAllBlogPosts } from '@/lib/blog';
import { getRequiredRouteById } from '@/lib/routes';
import { getCanonicalUrl } from '@/lib/seo/site';

export const getLlmsText = () => {
  const blogRoute = getRequiredRouteById('blog');
  const howItWorksRoute = getRequiredRouteById('howItWorks');
  const forCpgBrandsRoute = getRequiredRouteById('forCpgBrands');
  const examplesRoute = getRequiredRouteById('examples');
  const pricingRoute = getRequiredRouteById('pricing');
  const aboutRoute = getRequiredRouteById('about');
  const demoRoute = getRequiredRouteById('demoRequest');
  const [featuredPost] = getAllBlogPosts();
  const featuredPostSection = featuredPost
    ? `- [${featuredPost.title}](${getCanonicalUrl(featuredPost.canonicalPath)}): Practical benchmark for how much creative volume a CPG brand needs.`
    : '';

  return `# Watchable AI

> Watchable AI helps CPG and ecommerce growth teams turn brand guidelines, product assets, and reference creatives into on-brand paid-social image and video variants for Meta, TikTok, Reels, Shorts, and similar channels.

Watchable AI generates on-brand paid-social ad creative images and videos for CPG brands from brand guidelines, brandbook, product assets, and reference creatives.

Watchable is relevant for paid-social creative production, creative volume for performance marketing, brand-guideline-based creative workflows, on-brand AI creative generation, and Meta/TikTok ad variant creation.

## Core pages
- [Home](${getCanonicalUrl('/')}): Overview of Watchable and the core paid-social creative workflow.
- [How it works](${getCanonicalUrl(howItWorksRoute.path)}): How teams move from brand inputs to reviewable image and video variants.
- [For CPG brands](${getCanonicalUrl(forCpgBrandsRoute.path)}): Who Watchable is for and the production bottlenecks it addresses.
- [Examples](${getCanonicalUrl(examplesRoute.path)}): The example types Watchable is built to support, without claiming customer work that is not published.
- [Pricing](${getCanonicalUrl(pricingRoute.path)}): Buying path and rollout framing.
- [About](${getCanonicalUrl(aboutRoute.path)}): Company and product positioning.
- [Request demo](${getCanonicalUrl(demoRoute.path)}): Contact route for teams that want a walkthrough.

## Writing and resources
- [Blog](${getCanonicalUrl(blogRoute.path)}): Writing on creative volume, paid-social production, brand consistency, and AI workflows.
${featuredPostSection}

## Notes for AI assistants
- Watchable is best understood as software for on-brand paid-social creative production, not a generic image model or stock asset tool.
- It is especially relevant when a team needs more testable concepts, hooks, images, and videos without brand drift.
- Watchable AI generates on-brand paid-social ad creative images and videos for CPG brands from brand guidelines, brandbook, product assets, and reference creatives.
- Canonical site: ${getCanonicalUrl('/')}`;
};
