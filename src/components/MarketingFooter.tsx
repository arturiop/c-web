import Link from 'next/link';
import { WatchableWordmark } from '@/components/WatchableWordmark';
import { footerRoutes } from '@/lib/routes';
import { AppConfig } from '@/utils/AppConfig';

const resourceRoutes = footerRoutes.filter((route) => route.footerSection === 'resources');
const legalRoutes = footerRoutes.filter((route) => route.footerSection === 'legal');

export const MarketingFooter = () => (
  <footer id="contact" className="border-t border-[var(--color-watchable-line)] py-14">
    <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-start">
      <div className="max-w-sm space-y-4">
        <WatchableWordmark clickable={false} />
        <p className="max-w-[22rem] text-[15px] leading-8 text-[var(--color-watchable-muted)]">
          Watchable helps CPG and ecommerce growth teams turn brand guidelines, product assets, and
          reference creatives into on-brand paid-social creative variants.
        </p>
        <div className="pt-2">
          <a
            href={AppConfig.signupUrl}
            className="inline-flex rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
          >
            Start in Watchable
          </a>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-4">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-muted)] uppercase">
            Resources
          </p>
          <div className="space-y-2 text-[15px] text-[var(--color-watchable-ink)]">
            {resourceRoutes.map((route) => (
              <Link
                key={route.id}
                href={route.path}
                className="block transition hover:text-[var(--color-watchable-accent)]"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-muted)] uppercase">
            Connect
          </p>
          <div className="space-y-2 text-[15px] text-[var(--color-watchable-ink)]">
            <a
              href="https://www.linkedin.com/company/watchable-ai"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-[var(--color-watchable-accent)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@watchable-ai.com"
              className="block transition hover:text-[var(--color-watchable-accent)]"
            >
              hello@watchable-ai.com
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-muted)] uppercase">
            Legal
          </p>
          <div className="space-y-2 text-[15px] text-[var(--color-watchable-ink)]">
            {legalRoutes.map((route) => (
              <Link
                key={route.id}
                href={route.path}
                className="block transition hover:text-[var(--color-watchable-accent)]"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-muted)] uppercase">
            Company
          </p>
          <p className="text-[15px] leading-7 text-[var(--color-watchable-muted)]">
            © {new Date().getFullYear()} Watchable. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
