import type { Metadata, Viewport } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { buildOrganizationJsonLd, buildWebSiteJsonLd } from '@/lib/seo/jsonLd';
import { baseMetadata } from '@/lib/seo/metadata';
import { siteConfig } from '@/lib/seo/site';
import '@/styles/global.css';

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={buildOrganizationJsonLd({
            name: siteConfig.name,
            url: siteConfig.siteUrl,
            description: siteConfig.defaultDescription,
            sameAs: ['https://www.linkedin.com/company/watchable-ai'],
          })}
        />
        <JsonLd
          data={buildWebSiteJsonLd({
            name: siteConfig.name,
            url: siteConfig.siteUrl,
            description: siteConfig.defaultDescription,
          })}
        />
        {props.children}
      </body>
    </html>
  );
}
