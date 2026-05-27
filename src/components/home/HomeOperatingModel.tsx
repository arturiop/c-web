import { homeOperatingModel } from '@/content/home';

export const HomeOperatingModel = () => (
  <section className="space-y-10">
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
        {homeOperatingModel.eyebrow}
      </p>
      <h2 className="watchable-section-title mx-auto max-w-[14ch]">{homeOperatingModel.title}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-[1.05rem] leading-8 text-[var(--color-watchable-muted)]">
        {homeOperatingModel.body}
      </p>
    </div>
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_36px_minmax(0,1fr)_36px_minmax(0,1fr)_36px_minmax(0,1fr)] xl:items-stretch">
      {homeOperatingModel.steps.map((step, index) => {
        const isHighlighted = step.label === 'Intelligence' || step.label === 'Direction';

        return (
          <div key={step.step} className="contents">
            <article
              className={[
                'rounded-[30px] border px-6 py-7 sm:px-7 sm:py-8',
                isHighlighted
                  ? 'border-[rgba(91,97,255,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,243,255,0.92))] shadow-[0_16px_36px_rgba(64,70,190,0.08)]'
                  : 'watchable-panel',
              ].join(' ')}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.24em] text-[var(--color-watchable-accent)] uppercase">
                    {step.step}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--color-watchable-muted)]">
                    {step.label}
                  </p>
                </div>
                <div className="rounded-full border border-[var(--color-watchable-line)] bg-white px-3 py-1 text-[11px] font-medium text-[var(--color-watchable-muted)]">
                  Stage
                </div>
              </div>

              <h3 className="mt-5 text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-[var(--color-watchable-ink)]">
                {step.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-watchable-line)] bg-white px-3 py-1.5 text-xs text-[var(--color-watchable-ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[0.98rem] leading-7 text-[var(--color-watchable-muted)]">
                {step.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-3 py-1.5 text-xs text-[var(--color-watchable-muted)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>

            {index < homeOperatingModel.steps.length - 1 ? (
              <div className="hidden items-center justify-center xl:flex">
                <div className="flex h-full min-h-[320px] w-full items-center justify-center">
                  <div className="h-px w-full bg-[var(--color-watchable-line)]" />
                  <div className="ml-[-1px] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white text-[var(--color-watchable-accent)] shadow-sm">
                    →
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>

    <div className="flex justify-center">
      <div className="rounded-full border border-[var(--color-watchable-line)] bg-white px-4 py-2 text-[11px] font-medium tracking-[0.16em] text-[var(--color-watchable-muted)] uppercase shadow-sm">
        {homeOperatingModel.flowLabel}
      </div>
    </div>
  </section>
);
