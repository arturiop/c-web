import Link from 'next/link';
import { WatchableWordmark } from '@/components/WatchableWordmark';
import { canonicalProductDescription, companyProfile } from '@/content/company';
import { AppConfig } from '@/utils/AppConfig';

const productLinks = [
  { label: 'Product', href: '/product' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Examples', href: '/examples' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
] as const;

const solutionLinks = [
  { label: 'CPG brands', href: '/for-cpg-brands' },
  { label: 'Beauty & skincare', href: '/use-cases' },
  { label: 'Amazon sellers', href: '/use-cases' },
  { label: 'Growth teams', href: '/use-cases' },
] as const;

const resourceLinks = [
  { label: 'Creative volume', href: '/blog/creative-volume-is-the-new-targeting' },
  { label: 'Creative testing', href: '/blog' },
  { label: 'Brand consistency', href: '/blog' },
  { label: 'AI workflows', href: '/blog' },
  { label: 'Reviewer information', href: '/google-startups' },
] as const;

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Book a demo', href: '/demo-request' },
  { label: 'Contact', href: `mailto:${companyProfile.contactEmail}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/watchable-ai', external: true },
] as const;

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Notice', href: '/cookies' },
] as const;

const footerColumns = [
  { title: 'Product', links: productLinks },
  { title: 'Use cases', links: solutionLinks },
  { title: 'Learn', links: resourceLinks },
  { title: 'Company', links: companyLinks },
] as const;

const FooterLink = (props: { href: string; label: string; external?: boolean }) => {
  const className = 'transition hover:text-[var(--color-watchable-accent)]';

  if (props.external) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" className={className}>
        {props.label}
      </a>
    );
  }

  if (props.href.startsWith('mailto:')) {
    return (
      <a href={props.href} className={className}>
        {props.label}
      </a>
    );
  }

  return (
    <Link href={props.href} className={className}>
      {props.label}
    </Link>
  );
};

export const MarketingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mt-12 border-t border-[var(--color-watchable-line)] pt-14 pb-8"
      aria-labelledby="footer-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
        <section className="max-w-lg">
          <WatchableWordmark clickable={false} />
          <h2
            id="footer-heading"
            className="mt-5 text-[clamp(1.7rem,2.8vw,2.6rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-[var(--color-watchable-ink)]"
          >
            Watchable AI
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--color-watchable-muted)] sm:text-base">
            {canonicalProductDescription}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={AppConfig.signupUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              Start in Watchable
            </a>
            <Link
              href="/demo-request"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
            >
              Book a demo
            </Link>
          </div>
        </section>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="space-y-4">
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-muted)] uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3 text-[15px] text-[var(--color-watchable-ink)]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      label={link.label}
                      external={'external' in link ? link.external : undefined}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-watchable-line)] pt-6 text-sm text-[var(--color-watchable-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} {companyProfile.companyName}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-[var(--color-watchable-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
