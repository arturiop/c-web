import { marketPainCards } from '@/content/home';

export const MarketPain = () => (
  <section className="space-y-10">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
      <div className="max-w-[920px]">
        <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          Why teams look for Watchable
        </p>
        <h2 className="watchable-section-title max-w-[11ch]">
          Creative testing breaks when the workflow has no system
        </h2>
      </div>
      <p className="watchable-body-copy max-w-[410px] text-[1.02rem] lg:justify-self-end">
        Most teams are not missing raw generation tools. They are missing a repeatable way to turn
        product context into creative work that stays coherent from idea to launch.
      </p>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      {marketPainCards.map((card) => (
        <article
          key={card.title}
          className="watchable-panel rounded-[28px] px-6 py-7 sm:px-7 sm:py-8"
        >
          <h3 className="text-[1.4rem] leading-tight font-semibold tracking-[-0.03em] text-[var(--color-watchable-ink)]">
            {card.title}
          </h3>
          <p className="mt-4 text-[1rem] leading-8 text-[var(--color-watchable-muted)]">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  </section>
);
