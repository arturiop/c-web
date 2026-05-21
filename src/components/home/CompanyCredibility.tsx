import { credibilityBlocks } from '@/content/home';

export const CompanyCredibility = () => (
  <section id="about" className="watchable-panel rounded-[34px] px-10 py-12 sm:px-12">
    <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
      <div>
        <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          Why Watchable
        </p>
        <h2 className="max-w-[10ch] text-[3.4rem] leading-[1.04] font-semibold tracking-[-0.065em] text-[var(--color-watchable-ink)]">
          A serious workflow for creative teams that test often.
        </h2>
      </div>

      <div className="grid gap-4">
        {credibilityBlocks.map((block) => (
          <article
            key={block.title}
            className="rounded-[24px] border border-[var(--color-watchable-line)] bg-white/55 px-6 py-6"
          >
            <h3 className="text-[1.2rem] font-semibold text-[var(--color-watchable-ink)]">
              {block.title}
            </h3>
            <p className="mt-3 text-[1rem] leading-8 text-[var(--color-watchable-muted)]">
              {block.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
