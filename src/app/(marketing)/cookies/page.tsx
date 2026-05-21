import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LegalArticle } from '@/components/LegalArticle';
import { cookieContent, legalEffectiveDate } from '@/data/legalContent';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('cookies');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

export default function CookiesPage() {
  return (
    <div>
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <LegalArticle label="Cookies" title="Cookie Notice" effectiveDate={legalEffectiveDate}>
        <section className="space-y-3">
          <p>
            Watchable Inc. ("Watchable", "we", "us" or "our") may use cookies, web beacons, pixel
            tags, log files, and similar technologies to collect certain information about your
            online activity when you use our Service. These technologies provide analytics and
            statistical information that helps us improve our services and content.
          </p>
          <p>
            You may disallow cookies at any time through your web browser. Some or all of the
            cookies described below may be stored in your browser by Watchable or our partners.
            Please refer to our{' '}
            <Link
              href="/privacy"
              className="font-medium text-[var(--color-watchable-ink)] underline decoration-[var(--color-watchable-line)] underline-offset-4 hover:text-[var(--color-watchable-accent)]"
            >
              Privacy Policy
            </Link>{' '}
            for more information on our privacy practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            What are cookies?
          </h2>
          <p>
            A cookie is a small text file that may be placed on your browser or in storage on your
            device. Session cookies disappear when you close your browser. Persistent cookies stay
            on your device after you close your browser. Watchable and third-party service providers
            may set cookies via our Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Technologies we use
          </h2>
          <p>
            We may use cookies to remember preferences, maintain sessions, and understand Service
            usage. We may use pixel tags in our Service and emails to count visits, understand
            usage, and measure email campaign effectiveness. We may also use similar technologies,
            including mobile advertising IDs, tags, HTML5 local storage, and local shared objects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Managing your preferences
          </h2>
          <p>
            You can control cookies and similar technologies by configuring your browser to block or
            alert you about cookies. You can block email pixel tags by configuring your email client
            to block external images or show plain-text emails only. If you disable non-essential
            cookies, some parts of the Service may not function properly.
          </p>
          <p>
            For more information about cookies and how to manage them, visit allaboutcookies.org. To
            learn more about targeting and advertising cookies, you can visit the Network
            Advertising Initiative, the Digital Advertising Alliance&apos;s Consumer Choice, or Your
            Online Choices if you are in Europe.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Cookie details
          </h2>
          <div className="grid gap-4">
            {cookieContent.cookieCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] p-4"
              >
                <h3 className="text-sm font-semibold text-[var(--color-watchable-ink)]">
                  {category.title}
                </h3>
                <p className="mt-2">{category.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Changes to this Cookie Notice
          </h2>
          <p>
            Information about the cookies and similar technologies we use may be updated from time
            to time. We will update the effective date at the top of this page when changes are
            made.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">Contact</h2>
          <p>
            If you have any questions about this Cookie Notice, please contact us at{' '}
            <a
              className="font-medium text-[var(--color-watchable-ink)] hover:text-[var(--color-watchable-accent)]"
              href="mailto:hello@watchable-ai.com"
            >
              hello@watchable-ai.com
            </a>
            .
          </p>
        </section>
      </LegalArticle>
    </div>
  );
}
