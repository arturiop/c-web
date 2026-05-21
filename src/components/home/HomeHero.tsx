import Link from 'next/link';
import { homeHero } from '@/content/home';
import { AppConfig } from '@/utils/AppConfig';

export const HomeHero = () => (
  <section className="pt-2 sm:pt-6">
    <div className="relative min-h-[540px] lg:min-h-[720px]">
      <div className="watchable-panel absolute inset-x-0 top-[4.8rem] hidden overflow-hidden rounded-[28px] lg:right-0 lg:left-[30%] lg:block lg:h-[660px]">
        <video
          aria-label="Watchable product overview video"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/demo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex max-w-[500px] flex-col justify-between rounded-[28px] border border-white/70 bg-[rgba(255,255,255,0.78)] px-10 py-12 shadow-[0_28px_80px_rgba(188,159,116,0.2)] backdrop-blur-[18px] sm:px-12 sm:py-14 lg:min-h-[660px]">
        <div>
          <p className="mb-8 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
            {homeHero.eyebrow}
          </p>
          <h1 className="max-w-[12ch] text-[3.5rem] leading-[0.95] font-semibold tracking-[-0.07em] text-[var(--color-watchable-ink)] sm:text-[5rem]">
            Turn product and brand context into{' '}
            <span className="rounded-[18px] bg-[#ffefe5] px-3 py-1 text-[var(--color-watchable-accent)]">
              creative direction
            </span>{' '}
            your team can actually test
            <span className="text-[var(--color-watchable-accent)]">.</span>
          </h1>
        </div>

        <div className="mt-10 space-y-8">
          <p className="max-w-[24ch] text-[1.05rem] leading-9 text-[var(--color-watchable-muted)]">
            {homeHero.body}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={AppConfig.signupUrl}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              {homeHero.primaryCta}
            </a>
            <Link
              href="/demo-request"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
            >
              {homeHero.secondaryCta}
            </Link>
          </div>

          <ul className="grid gap-3 text-sm text-[var(--color-watchable-muted)] sm:grid-cols-3 sm:gap-4">
            {homeHero.points.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-[var(--color-watchable-line)] bg-white/55 px-4 py-3"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="watchable-panel mt-8 overflow-hidden rounded-[28px] lg:hidden">
        <video
          aria-label="Watchable mobile product overview video"
          autoPlay
          muted
          loop
          playsInline
          className="aspect-[16/10] w-full object-cover"
        >
          <source src="/assets/demo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);
