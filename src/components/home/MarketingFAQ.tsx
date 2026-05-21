import { faqItems } from '@/content/home';

export const MarketingFAQ = () => (
  <section className="border-t border-[var(--color-watchable-line)] pt-14" id="faq">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div>
        <p className="mb-5 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          FAQ
        </p>
        <h2 className="text-[3.15rem] leading-none font-semibold tracking-[-0.055em] text-[var(--color-watchable-ink)]">
          A few practical details
        </h2>
      </div>
      <p className="watchable-body-copy max-w-[400px] pt-3 text-[1.02rem] lg:justify-self-end">
        Visible answers for people, search engines, and answer engines. The same FAQ content is what
        powers the homepage FAQ JSON-LD.
      </p>
    </div>

    <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
      {faqItems.map((item) => (
        <div key={item.question} className="border-t border-[var(--color-watchable-line)] py-7">
          <h3 className="text-[1.05rem] font-semibold text-[var(--color-watchable-ink)]">
            {item.question}
          </h3>
          <p className="mt-3 max-w-[34ch] text-[1rem] leading-8 text-[var(--color-watchable-muted)]">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  </section>
);
