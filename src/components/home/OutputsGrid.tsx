import { outputCategories } from '@/content/home';

export const OutputsGrid = () => (
  <section className="space-y-10">
    <div className="grid gap-8 lg:grid-cols-[480px_minmax(0,1fr)] lg:items-start">
      <div>
        <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          What teams get
        </p>
        <h2 className="max-w-[10ch] text-[3.4rem] leading-[1.02] font-semibold tracking-[-0.065em] text-[var(--color-watchable-ink)]">
          Outputs built for real creative review.
        </h2>
      </div>
      <p className="watchable-body-copy max-w-[38ch] pt-2 text-[1.02rem]">
        Watchable is designed to produce outputs that help teams make clearer creative decisions,
        not just generate more raw media. The value is the structure around testing, iteration, and
        shared review.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {outputCategories.map((item) => (
        <article
          key={item}
          className="watchable-panel rounded-[24px] px-5 py-6 text-center text-[1rem] font-medium text-[var(--color-watchable-ink)]"
        >
          {item}
        </article>
      ))}
    </div>
  </section>
);
