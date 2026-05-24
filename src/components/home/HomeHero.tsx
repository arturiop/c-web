import Link from 'next/link';
import { homeHero } from '@/content/home';
import { AppConfig } from '@/utils/AppConfig';

export const HomeHero = () => (
  <section className="px-0 pt-18 pb-16 sm:pt-20 lg:pt-24 lg:pb-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-[var(--color-watchable-accent)] uppercase">
            {homeHero.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.7rem,5vw,5rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-[var(--color-watchable-ink)]">
            {homeHero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-watchable-muted)] sm:text-lg">
            {homeHero.body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/demo-request"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-watchable-ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
            >
              {homeHero.primaryCta}
            </Link>
            <a
              href={AppConfig.signupUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-watchable-ink)] transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
            >
              {homeHero.secondaryCta}
            </a>
          </div>
          <p className="mt-6 max-w-lg text-sm leading-6 text-[var(--color-watchable-muted)]">
            {homeHero.audienceLine}
          </p>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute inset-x-6 top-6 bottom-8 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(244,241,236,0.7)_55%,rgba(244,241,236,0.18)_100%)] blur-3xl" />
          <div className="relative rounded-[2.3rem] border border-[var(--color-watchable-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,243,238,0.94))] p-4 shadow-[0_22px_70px_rgba(17,18,23,0.1)] sm:p-5">
            {/* TODO: Replace with a real 8–12s hero system video showing product context → Watchable intelligence → testing pack → premium output. */}
            <div className="overflow-hidden rounded-[1.9rem] border border-white/70 bg-[linear-gradient(180deg,#f7f3ee,#f2eee8)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              <div className="border-b border-[var(--color-watchable-line)] px-5 py-4 sm:px-6">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--color-watchable-accent)] uppercase">
                  {homeHero.visualTitle}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-watchable-muted)]">
                  {homeHero.visualSubtitle}
                </p>
              </div>

              <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className="space-y-4">
                  <div className="rounded-[1.35rem] border border-[var(--color-watchable-line)] bg-white/88 p-4 shadow-[0_10px_24px_rgba(17,18,23,0.05)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--color-watchable-muted)] uppercase">
                          {homeHero.contextCard.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[var(--color-watchable-ink)]">
                          {homeHero.contextCard.subtitle}
                        </p>
                      </div>
                      <div className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-2.5 py-1 text-[10px] font-medium text-[var(--color-watchable-muted)]">
                        Sources
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {homeHero.sourceItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-3 py-1.5 text-xs text-[var(--color-watchable-ink)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.35rem] border border-[rgba(91,97,255,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,242,255,0.92))] p-4 shadow-[0_12px_28px_rgba(64,70,190,0.08)]">
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--color-watchable-muted)] uppercase">
                      {homeHero.angleCard.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-watchable-ink)]">
                      {homeHero.angleCard.subtitle}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-watchable-ink)]">
                      {homeHero.recommendationItems.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[var(--color-watchable-accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.35rem] border border-[var(--color-watchable-line)] bg-[#101116] p-4 text-white shadow-[0_14px_36px_rgba(17,18,23,0.12)]">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.18em] text-white/56 uppercase">
                          {homeHero.hookCard.title}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {homeHero.hookCard.subtitle}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[10px] font-medium text-white/70">
                        Ready
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {homeHero.packItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs text-white/88"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-watchable-line)] bg-[#18191f] shadow-[0_18px_46px_rgba(17,18,23,0.14)]">
                    <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(8,9,12,0.24),transparent)]" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(8,9,12,0),rgba(8,9,12,0.42))]" />
                    <div className="absolute top-4 right-4 left-4 flex items-start justify-between gap-3">
                      <div className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.09)] px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white/75 uppercase backdrop-blur-md">
                        {homeHero.packCard.title}
                      </div>
                      <div className="rounded-full border border-white/16 bg-[rgba(18,19,25,0.72)] px-3 py-1.5 text-[11px] font-medium text-white/88 backdrop-blur-md">
                        {homeHero.claimChip}
                      </div>
                    </div>
                    <div className="aspect-[4/3] sm:aspect-[16/12]">
                      <video
                        aria-label="Watchable premium creative output preview"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/assets/demo.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="absolute right-4 bottom-4 left-4 rounded-[1.1rem] border border-white/14 bg-[rgba(17,18,23,0.68)] px-4 py-3 text-white backdrop-blur-md">
                      <p className="text-[10px] font-semibold tracking-[0.18em] text-white/56 uppercase">
                        {homeHero.packCard.title}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {homeHero.packCard.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.35rem] border border-[var(--color-watchable-line)] bg-white/86 p-4 shadow-[0_10px_24px_rgba(17,18,23,0.05)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--color-watchable-muted)] uppercase">
                          Flow
                        </p>
                        <p className="mt-1 text-sm font-medium text-[var(--color-watchable-ink)]">
                          {homeHero.flowLine}
                        </p>
                      </div>
                      <div className="rounded-full border border-[rgba(91,97,255,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(240,242,255,0.94))] px-3 py-1.5 text-[11px] font-medium text-[var(--color-watchable-ink)]">
                        Pack ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
