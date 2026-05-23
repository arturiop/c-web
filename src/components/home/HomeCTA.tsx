import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

export const HomeCTA = () => (
  <section className="watchable-panel rounded-[34px] px-8 py-10 sm:px-10 sm:py-12">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
      <div className="max-w-[760px]">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          Next step
        </p>
        <h2 className="text-[3rem] leading-[1.02] font-semibold tracking-[-0.06em] text-[var(--color-watchable-ink)]">
          If your team needs a faster creative testing pipeline, start here.
        </h2>
        <p className="mt-4 text-[1.02rem] leading-8 text-[var(--color-watchable-muted)]">
          Explore the product directly in the app, or book a demo if you want to map Watchable to
          your current ecommerce workflow first.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 lg:justify-end">
        <a
          href={AppConfig.signupUrl}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Start in Watchable
        </a>
        <a
          href={AppConfig.loginUrl}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
        >
          Log in
        </a>
        <Link
          href="/demo-request"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
        >
          Book a demo
        </Link>
      </div>
    </div>
  </section>
);
