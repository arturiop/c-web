import { CompanyCredibility } from '@/components/home/CompanyCredibility';
import { HomeCTA } from '@/components/home/HomeCTA';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeOperatingModel } from '@/components/home/HomeOperatingModel';
import { MarketingFAQ } from '@/components/home/MarketingFAQ';
import { MarketPain } from '@/components/home/MarketPain';
import { MarketplaceProof } from '@/components/home/MarketplaceProof';
import { OutputsGrid } from '@/components/home/OutputsGrid';
import { ProductJourney } from '@/components/home/ProductJourney';
import { JsonLd } from '@/components/JsonLd';
import { faqItems, homeMetadata } from '@/content/home';
import { buildFaqJsonLd, buildSoftwareApplicationJsonLd } from '@/lib/seo/jsonLd';
import { createPageMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/seo/site';

export const metadata = createPageMetadata({
  title: homeMetadata.title,
  description: homeMetadata.description,
  path: '/',
});

export default function HomePage() {
  return (
    <div className="space-y-24 pb-8 sm:space-y-28 lg:space-y-32">
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <JsonLd
        data={buildSoftwareApplicationJsonLd({
          name: siteConfig.name,
          url: siteConfig.siteUrl,
          description:
            'Watchable lets marketers and growth teams produce on-brand paid-social creative themselves — concepts, hooks, images, and video — within their brandbook, 100× cheaper and 1000× faster, without designers.',
          applicationCategory: 'BusinessApplication',
        })}
      />

      <HomeHero />
      <MarketPain />
      <HomeOperatingModel />
      <ProductJourney />
      <OutputsGrid />
      <MarketplaceProof />
      <CompanyCredibility />
      <MarketingFAQ />
      <HomeCTA />
    </div>
  );
}
