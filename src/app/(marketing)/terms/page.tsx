import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LegalArticle, LegalList } from '@/components/LegalArticle';
import { legalEffectiveDate, termsContent } from '@/data/legalContent';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('terms');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <LegalArticle label="Legal" title="Terms of Service" effectiveDate={legalEffectiveDate}>
        <section className="space-y-3">
          <p>
            These Terms of Service govern your access to and use of Watchable Inc. ("Watchable",
            "we", "us" or "our") and our AI-powered platform for generating and testing video ad
            creatives, storyboards, video variants, and creative briefs for paid social channels.
          </p>
          <p>
            By accessing or using the Service, you agree to these Terms. If you use Watchable on
            behalf of a company or other organization, you represent that you have authority to bind
            that organization to these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Use of the Service
          </h2>
          <LegalList items={termsContent.serviceTerms} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Accounts and responsibilities
          </h2>
          <LegalList items={termsContent.responsibilities} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Your content and generated outputs
          </h2>
          <LegalList items={termsContent.contentTerms} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Third-party services
          </h2>
          <p>
            The Service may integrate with or rely on third-party services, including payment
            processors, AI infrastructure providers, analytics providers, and advertising platforms
            such as Meta Ads Manager or TikTok Ads Manager. Your use of third-party services may be
            subject to their own terms and policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Payments and subscriptions
          </h2>
          <p>
            If paid plans, subscriptions, or usage-based features are made available, fees, billing
            cycles, renewal terms, and cancellation terms will be disclosed at purchase or in the
            applicable order flow. Payment information is processed by our payment processors and
            not stored directly by Watchable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Privacy and cookies
          </h2>
          <p>
            Our{' '}
            <Link
              href="/privacy"
              className="font-medium text-[var(--color-watchable-ink)] underline decoration-[var(--color-watchable-line)] underline-offset-4 hover:text-[var(--color-watchable-accent)]"
            >
              Privacy Policy
            </Link>{' '}
            explains how we collect and process personal information. Our{' '}
            <Link
              href="/cookies"
              className="font-medium text-[var(--color-watchable-ink)] underline decoration-[var(--color-watchable-line)] underline-offset-4 hover:text-[var(--color-watchable-accent)]"
            >
              Cookie Notice
            </Link>{' '}
            explains how we use cookies and similar technologies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Disclaimers and limitations
          </h2>
          <p>
            The Service is provided on an "as is" and "as available" basis. To the fullest extent
            permitted by law, Watchable disclaims warranties of merchantability, fitness for a
            particular purpose, non-infringement, and uninterrupted or error-free operation.
          </p>
          <p>
            To the fullest extent permitted by law, Watchable will not be liable for indirect,
            incidental, special, consequential, exemplary, or punitive damages, or for lost profits,
            revenues, goodwill, data, or business opportunities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we will notify
            you by updating the effective date, posting the updated Terms on the Service, or using
            other appropriate means. Continued use of the Service after changes become effective
            means you accept the updated Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">Contact</h2>
          <p>
            Questions about these Terms can be sent to{' '}
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
