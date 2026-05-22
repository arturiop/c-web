import Link from 'next/link';
import { primaryNavRoutes } from '@/lib/routes';
import { MarketingShell } from '@/shells/MarketingShell';
import { AppConfig } from '@/utils/AppConfig';

export const dynamic = 'error';

export default function MarketingLayout(props: { children: React.ReactNode }) {
  return (
    <MarketingShell
      leftNav={
        <>
          {primaryNavRoutes.map((route) => (
            <li key={route.id}>
              <Link
                href={route.navHref ?? route.path}
                className="transition hover:text-[var(--color-watchable-ink)]"
              >
                {route.navLabel ?? route.label}
              </Link>
            </li>
          ))}
        </>
      }
      rightNav={
        <>
          <li>
            <a
              href={AppConfig.loginUrl}
              className="transition hover:text-[var(--color-watchable-ink)]"
            >
              Log in
            </a>
          </li>
          <li>
            <a
              href={AppConfig.signupUrl}
              className="font-semibold text-[var(--color-watchable-ink)] transition hover:text-[var(--color-watchable-accent)]"
            >
              Start in the app
            </a>
          </li>
        </>
      }
    >
      {props.children}
    </MarketingShell>
  );
}
