import Image from 'next/image';
import { scriptRows, workflowSteps } from '@/content/home';
import { AppConfig } from '@/utils/AppConfig';

export const ProductJourney = () => (
  <section id="product" className="space-y-12">
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div className="max-w-[920px]">
        <p className="mb-6 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          How Watchable works
        </p>
        <h2 className="watchable-section-title max-w-[12ch]">
          From product context to a repeatable creative testing pipeline
        </h2>
      </div>
      <p className="watchable-body-copy max-w-[400px] pt-6 text-[1.02rem] lg:justify-self-end">
        Watchable gives growth teams a structured path from product and brand inputs to hooks,
        scripts, scenes, assets, and launch-ready direction.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
      <article className="watchable-panel rounded-[30px] p-6 sm:p-7">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff9449] text-sm text-white">
            ✣
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd4b7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd4b7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd4b7]" />
        </div>

        <div className="rounded-[24px] border border-[var(--color-watchable-line)] bg-[rgba(255,255,255,0.7)] p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffe2ce] text-[var(--color-watchable-accent)]">
                ▶
              </span>
              <p className="text-[12px] font-bold tracking-[0.14em] text-[var(--color-watchable-ink)] uppercase">
                Your Ad Script
              </p>
            </div>
            <span className="rounded-full bg-[#ffefe5] px-3 py-1 text-[12px] font-semibold text-[var(--color-watchable-accent)]">
              4 scenes
            </span>
          </div>

          <div className="space-y-3">
            {scriptRows.map((row) => (
              <div key={row.label} className={`rounded-2xl bg-gradient-to-r ${row.tone} px-4 py-3`}>
                <div className="flex items-center gap-4">
                  <span className="min-w-12 text-[12px] font-semibold text-[var(--color-watchable-accent)]">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-[var(--color-watchable-ink)]">{row.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[22px] bg-[rgba(250,247,242,0.9)] px-5 py-4 text-[15px] leading-8 text-[var(--color-watchable-muted)]">
          Need another angle? Watchable can reshape the direction around new audiences, offers,
          claims, or testing priorities before production starts.
        </div>

        <div className="mt-5 rounded-[24px] border border-[var(--color-watchable-line)] bg-[rgba(255,255,255,0.72)] p-4">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-[#c3b6aa] uppercase">
            Why this matters
          </p>
          <div className="space-y-3 text-[15px] leading-7 text-[var(--color-watchable-muted)]">
            <p>
              Keep product truth, brand voice, and channel context connected from the first prompt.
            </p>
            <p>
              Review creative direction before you spend cycles on motion, editing, or external
              production.
            </p>
            <p>Turn creative iteration into a workflow the full team can understand and repeat.</p>
          </div>
        </div>

        <a
          href={AppConfig.signupUrl}
          className="mt-5 inline-flex w-full items-center justify-center rounded-[18px] bg-black px-5 py-4 text-[1.05rem] font-semibold text-white transition hover:bg-[#1a1a1a]"
        >
          Start in Watchable
        </a>
      </article>

      <div className="grid gap-5">
        {workflowSteps.map((step) => (
          <article
            key={step.id}
            className="watchable-panel overflow-hidden rounded-[30px] border border-[var(--color-watchable-line)]"
          >
            <div className="grid gap-6 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <p className="text-[12px] font-semibold tracking-[0.24em] text-[var(--color-watchable-accent)] uppercase">
                    Step {step.step}
                  </p>
                  <h3 className="text-[1.8rem] leading-tight font-semibold tracking-[-0.04em] text-[var(--color-watchable-ink)]">
                    {step.label}
                  </h3>
                </div>
                <span className="watchable-tag rounded-full px-4 py-2 text-[14px] text-[var(--color-watchable-muted)]">
                  {step.sublabel}
                </span>
              </div>

              <p className="max-w-[58ch] text-[1rem] leading-8 text-[var(--color-watchable-muted)]">
                {step.body}
              </p>
            </div>

            <div className="border-t border-[var(--color-watchable-line)] bg-white/65 p-5">
              <div className="overflow-hidden rounded-[24px] border border-[var(--color-watchable-line)] bg-white">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  width={1600}
                  height={1200}
                  className="h-[280px] w-full object-cover object-left-top sm:h-[340px]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
