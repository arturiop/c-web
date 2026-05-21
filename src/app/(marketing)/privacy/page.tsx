import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LegalArticle, LegalList } from '@/components/LegalArticle';
import { legalEffectiveDate, privacyContent } from '@/data/legalContent';
import { getBreadcrumbsForPath, getRequiredRouteById } from '@/lib/routes';
import { createPageMetadata } from '@/lib/seo/metadata';

const route = getRequiredRouteById('privacy');

export const metadata = createPageMetadata({
  title: route.metadata.title,
  description: route.metadata.description,
  path: route.path,
});

export default function PrivacyPage() {
  return (
    <div>
      <Breadcrumbs items={getBreadcrumbsForPath(route.path)} />

      <LegalArticle label="Privacy" title="Privacy Policy" effectiveDate={legalEffectiveDate}>
        <section className="space-y-3">
          <p>
            Watchable Inc. ("Watchable", "we", "us" or "our") offers an AI-powered platform for
            generating and testing video ad creatives for paid social channels, including tools that
            help brands produce storyboards, video variants, and creative briefs at scale.
          </p>
          <p>
            This Privacy Policy describes how Watchable processes personal information collected
            through our digital properties that link to this policy, including watchable-ai.com and
            our social media pages, as well as our marketing activities, events, and related
            activities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Personal information we collect
          </h2>
          <LegalList items={privacyContent.personalInformation} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Third-party sources
          </h2>
          <p>
            We may combine information you provide with information from other sources, including:
          </p>
          <LegalList items={privacyContent.thirdPartySources} />
          <p>
            Our use and disclosure of information received from Google&apos;s APIs will adhere to
            the Google API Services User Data Policy, including Limited Use requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Automatic data collection
          </h2>
          <p>
            We, our service providers, and business partners may automatically log information about
            your device and interaction with the Service, including:
          </p>
          <LegalList items={privacyContent.automaticData} />
          <p>
            Some automatic collection is facilitated by cookies and similar technologies. For more
            information, see our{' '}
            <Link
              href="/cookies"
              className="font-medium text-[var(--color-watchable-ink)] underline decoration-[var(--color-watchable-line)] underline-offset-4 hover:text-[var(--color-watchable-accent)]"
            >
              Cookie Notice
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            How we use personal information
          </h2>
          <LegalList items={privacyContent.useCases} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">Retention</h2>
          <p>
            We generally retain personal information to fulfill the purposes for which we collected
            it, including legal, accounting, reporting, fraud prevention, and claim-related
            purposes. When we no longer require personal information, we may delete it, anonymize or
            aggregate it, or isolate it from further processing.
          </p>
          <p>
            If you remove content from your account, it may remain on active servers for up to 30
            days. If you cancel your account, your content becomes immediately inaccessible and
            should be purged from our systems in full within 90 days, unless a longer period is
            required for legal purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            How we share personal information
          </h2>
          <LegalList items={privacyContent.sharingCategories} />
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Your choices
          </h2>
          <LegalList items={privacyContent.choices} />
          <p>
            We currently do not respond to "Do Not Track" browser signals. If you decline to provide
            information we identify as required, we may not be able to provide certain services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Other sites, security, transfers, and children
          </h2>
          <p>
            The Service may contain links to third-party websites or services that we do not
            control. We use technical, organizational, and physical safeguards designed to protect
            personal information, but no internet or information technology system can be guaranteed
            secure.
          </p>
          <p>
            We are headquartered in the United States and may transfer personal information to the
            United States or other locations where privacy laws may differ. The Service is not
            intended for anyone under 18 years of age.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Notice to European users
          </h2>
          <p>
            For individuals in the EEA or UK, references to personal information include personal
            data under GDPR-aligned laws. Watchable is the controller for processing covered by this
            Privacy Policy. Watchable&apos;s infrastructure is based in the United States.
          </p>
          <p>
            Our legal bases may include contractual necessity, legitimate interests, compliance with
            law, and consent. Where personal information is transferred outside Europe, we may rely
            on adequacy decisions, Standard Contractual Clauses, or legally permitted derogations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            European privacy rights
          </h2>
          <LegalList items={privacyContent.europeanRights} />
          <p>
            You may submit requests by contacting us. We may request information to confirm your
            identity and process your request. If you are not satisfied with our response, you may
            lodge a complaint with your local data protection regulator, including the EDPB in the
            EEA or the ICO in the UK.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">
            Changes to this Privacy Policy
          </h2>
          <p>
            We may modify this Privacy Policy at any time. If we make material changes, we will
            notify you by updating the policy date and posting the updated version on the Service or
            through other appropriate means.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-[var(--color-watchable-ink)]">Contact us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, contact us at{' '}
            <a
              className="font-medium text-[var(--color-watchable-ink)] hover:text-[var(--color-watchable-accent)]"
              href="mailto:hello@watchable-ai.com"
            >
              hello@watchable-ai.com
            </a>{' '}
            or visit watchable-ai.com.
          </p>
        </section>
      </LegalArticle>
    </div>
  );
}
