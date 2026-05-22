export const HomeHero = () => (
  <section className="px-0 pt-22 pb-16 md:pt-24">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 lg:hidden">
        <div>
          <p className="mb-6 text-[11px] font-semibold tracking-[0.25em] text-[var(--color-watchable-accent)] uppercase">
            AI-Powered Production
          </p>
          <h1 className="mb-6 text-4xl leading-[1.08] font-bold tracking-tight text-[var(--color-watchable-ink)] sm:text-5xl">
            The easiest way to make{' '}
            <span className="inline-block rounded-lg bg-[color:rgb(255_122_26_/_0.15)] px-3 py-0.5 text-[var(--color-watchable-accent)]">
              video ads
            </span>{' '}
            people <span className="font-black italic">actually watch</span>
            <span className="text-5xl leading-none font-black text-[var(--color-watchable-accent)]">
              .
            </span>
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-[var(--color-watchable-muted)] sm:text-lg">
            Upload your product · Project with AI · Choose your storyboard · Get polished UGC video
            ads —{' '}
            <span className="font-medium text-[var(--color-watchable-ink)]">
              no production hassle
            </span>
            .
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[color:rgb(255_122_26_/_0.1)] blur-2xl" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-watchable-line)] bg-black shadow-2xl">
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
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div className="ml-auto w-[70%]">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[color:rgb(255_122_26_/_0.1)] blur-2xl" />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--color-watchable-line)] bg-black shadow-2xl">
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
          </div>
        </div>

        <div className="absolute top-1/2 left-0 z-10 w-[26rem] -translate-y-1/2">
          <div
            className="rounded-2xl border border-r-0 border-white/30 px-8 py-16 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.4)]"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <p className="mb-6 text-[11px] font-semibold tracking-[0.25em] text-[var(--color-watchable-accent)] uppercase">
              AI-Powered Production
            </p>
            <h1 className="mb-8 text-5xl leading-[1.08] font-bold tracking-tight text-[var(--color-watchable-ink)] xl:text-6xl">
              The easiest way to make
              <br />
              <span className="mt-1 inline-block rounded-lg bg-[color:rgb(255_122_26_/_0.15)] px-3 py-0.5 text-[var(--color-watchable-accent)]">
                video ads
              </span>{' '}
              people
              <br />
              <span className="font-black italic">actually watch</span>
              <span className="text-7xl leading-none font-black text-[var(--color-watchable-accent)]">
                .
              </span>
            </h1>
            <p className="max-w-sm text-lg leading-relaxed text-[var(--color-watchable-muted)]">
              Upload your product · Clip with AI Choose your storyboard · Get polished UGC video ads
              —{' '}
              <span className="font-medium text-[var(--color-watchable-ink)]">
                no production hassle
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
