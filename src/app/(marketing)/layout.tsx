import Link from 'next/link';
import { MarketingShell } from '@/shells/MarketingShell';
import { AppConfig } from '@/utils/AppConfig';

export const dynamic = 'error';

export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <MarketingShell
      leftNav={
        <>
          <li>
            <Link
              href="/#product"
              className="hidden transition hover:text-[var(--color-watchable-ink)] md:block"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="hidden transition hover:text-[var(--color-watchable-ink)] md:block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hidden transition hover:text-[var(--color-watchable-ink)] md:block"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hidden transition hover:text-[var(--color-watchable-ink)] md:block"
            >
              Contact
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <a
              href={AppConfig.signupUrl}
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-watchable-ink)] px-4 py-2 text-sm font-medium text-[hsl(40_20%_98%)] transition hover:bg-black"
            >
              Get Started
            </a>
          </li>
        </>
      }
    >
      {props.children}
    </MarketingShell>
  );
}
