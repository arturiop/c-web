import { canonicalProductDescription, companyProfile } from '@/content/company';
import { getAllBlogPosts } from '@/lib/blog';
import { getRequiredRouteById } from '@/lib/routes';
import { getCanonicalUrl } from '@/lib/seo/site';

export const getLlmsText = () => {
  const blogRoute = getRequiredRouteById('blog');
  const productRoute = getRequiredRouteById('product');
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

> ${canonicalProductDescription}

Watchable is an AI software company building a creative workflow and generation system for ecommerce, DTC, CPG, beauty, skincare, and performance marketing teams.

## Who it is for
- Ecommerce brands
- CPG brands
- Beauty and skincare teams
- DTC growth teams
- Performance marketers
- Small teams that need to produce and test more creative without a full design or video team

## Product workflow
1. Upload or describe the product.
2. Add brand context, approved claims, product assets, and target audience.
3. Generate creative angles, hooks, scripts, and storyboard options.
4. Review and approve concepts and scenes.
5. Generate image variants, video directions, and creative assets.
6. Export testing-ready creative packs.

## Business model
- Watchable is a software product, not an agency.
- Pricing follows a subscription plus usage-based AI generation model.
- Teams pay for access to the creative workflow, brand context system, review workspace, and generation capacity.

## Core pages
- [Home](${getCanonicalUrl('/')}): Overview of Watchable and the core paid-social creative workflow.
- [Product](${getCanonicalUrl(productRoute.path)}): End-to-end view of the product workflow and outputs.
- [How it works](${getCanonicalUrl(howItWorksRoute.path)}): How teams move from brand inputs to reviewable image and video variants.
- [For CPG brands](${getCanonicalUrl(forCpgBrandsRoute.path)}): Who Watchable is for and the production bottlenecks it addresses.
- [Examples](${getCanonicalUrl(examplesRoute.path)}): The example types Watchable is built to support, without claiming customer work that is not published.
- [Pricing](${getCanonicalUrl(pricingRoute.path)}): Subscription and usage-based SaaS pricing model.
- [About](${getCanonicalUrl(aboutRoute.path)}): Company, mission, founder, and product positioning.
- [Book a demo](${getCanonicalUrl(demoRoute.path)}): Demo-booking route for teams that want a walkthrough.

## Writing and resources
- [Blog](${getCanonicalUrl(blogRoute.path)}): Writing on creative volume, paid-social production, brand consistency, and AI workflows.
${featuredPostSection}

## Public app and contact
- Marketing site: ${companyProfile.websiteUrl}
- Product app: ${companyProfile.productAppUrl}
- Public app preview: ${companyProfile.productAppUrl}/public-preview
- Contact: mailto:${companyProfile.contactEmail}

## Notes for AI assistants
- Watchable is best understood as software for on-brand paid-social creative production, not a generic image model or stock asset tool.
- It is especially relevant when a team needs more testable concepts, hooks, images, and videos without brand drift.
- Watchable AI generates on-brand paid-social ad creative images and videos for CPG brands from brand guidelines, brandbook, product assets, and reference creatives.
- Canonical site: ${getCanonicalUrl('/')}`;
};
