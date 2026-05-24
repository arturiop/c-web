import { marketPainSection } from '@/content/home';

export const MarketPain = () => (
  <section className="space-y-10">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-end">
      <div className="max-w-[920px]">
        <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          {marketPainSection.eyebrow}
        </p>
        <h2 className="watchable-section-title max-w-[13ch]">{marketPainSection.title}</h2>
        <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[var(--color-watchable-muted)]">
          {marketPainSection.body}
        </p>
      </div>
      <p className="watchable-body-copy max-w-[460px] text-[1.02rem] lg:justify-self-end">
        {marketPainSection.supporting}
      </p>
    </div>

    {/* TODO: Replace placeholder skincare/wellness example chips with real Watchable source and output samples. */}
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)_44px_minmax(0,1fr)] lg:items-stretch">
      {marketPainSection.columns.map((column, index) => (
        <div key={column.title} className="contents">
          <article className="watchable-panel rounded-[28px] px-6 py-7 sm:px-7 sm:py-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-[var(--color-watchable-ink)]">
                {column.title}
              </h3>
              <div className="rounded-full border border-[var(--color-watchable-line)] bg-[var(--color-watchable-sand)] px-3 py-1 text-[11px] font-medium text-[var(--color-watchable-muted)]">
                0{index + 1}
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {column.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[1rem] leading-7 text-[var(--color-watchable-ink)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-watchable-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {column.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--color-watchable-line)] bg-white px-3 py-1.5 text-xs text-[var(--color-watchable-muted)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>

          {index < marketPainSection.columns.length - 1 ? (
            <div className="hidden items-center justify-center lg:flex">
              <div className="flex h-full min-h-[260px] w-full items-center justify-center">
                <div className="h-px w-full bg-[var(--color-watchable-line)]" />
                <div className="ml-[-1px] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-watchable-line)] bg-white text-[var(--color-watchable-accent)] shadow-sm">
                  →
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>

    <div className="flex justify-center lg:justify-start">
      <div className="rounded-full border border-[var(--color-watchable-line)] bg-white px-4 py-2 text-[11px] font-medium tracking-[0.16em] text-[var(--color-watchable-muted)] uppercase shadow-sm">
        {marketPainSection.flowLabel}
      </div>
    </div>
  </section>
);
