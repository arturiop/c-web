import Image from 'next/image';
import { marketplaceStages } from '@/content/home';

export const MarketplaceProof = () => (
  <section className="space-y-12">
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div className="max-w-[920px]">
        <p className="mb-6 text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
          Marketplace proof
        </p>
        <h2 className="watchable-section-title max-w-[11ch]">Product page to creative workspace</h2>
      </div>
      <p className="watchable-body-copy max-w-[410px] pt-6 text-[1.02rem] lg:justify-self-end">
        A direct view of how Watchable moves from source material to reviewable creative direction
        for ecommerce teams, marketplace operators, and brands running high-volume creative tests.
      </p>
    </div>

    <div className="grid gap-7 lg:grid-cols-2">
      {marketplaceStages.map((stage) => (
        <article key={stage.title} className="watchable-panel overflow-hidden rounded-[30px]">
          <div className="space-y-5 px-8 pt-8 pb-8">
            <div className="flex items-center justify-between gap-5">
              <p className="text-[13px] font-semibold tracking-[0.32em] text-[var(--color-watchable-accent)] uppercase">
                {stage.eyebrow}
              </p>
              <span className="watchable-tag rounded-full px-4 py-2 text-[14px] text-[var(--color-watchable-muted)]">
                {stage.proof}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-[3rem] leading-none font-semibold tracking-[-0.055em] text-[var(--color-watchable-ink)]">
                {stage.title}
              </h3>
              <p className="watchable-body-copy max-w-[22ch] text-[1.02rem]">{stage.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {stage.points.map((point) => (
                <span
                  key={point}
                  className="watchable-tag rounded-full px-4 py-2 text-[14px] text-[var(--color-watchable-muted)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--color-watchable-line)] p-5">
            <div className="overflow-hidden rounded-[22px] border border-[var(--color-watchable-line)] bg-white">
              <Image
                src={stage.image}
                alt={stage.imageAlt}
                width={1600}
                height={stage.imageHeight}
                className="h-[440px] w-full object-cover object-left-top"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
