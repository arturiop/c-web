import { MarketingFooter } from '@/components/MarketingFooter';
import { WatchableWordmark } from '@/components/WatchableWordmark';

export const MarketingShell = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="w-full px-5 text-[var(--color-watchable-ink)] antialiased sm:px-8 lg:px-12">
    <div className="mx-auto max-w-[1280px]">
      <header className="flex items-center justify-between py-8 sm:py-10">
        <div className="flex items-center gap-6">
          <WatchableWordmark />
          <p className="hidden text-[11px] font-semibold tracking-[0.26em] text-[var(--color-watchable-accent)] uppercase lg:block">
            Watchable
          </p>
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[var(--color-watchable-muted)] sm:gap-8">
            {props.leftNav}
            {props.rightNav}
          </ul>
        </nav>
      </header>

      <main className="pb-12">{props.children}</main>
      <MarketingFooter />
    </div>
  </div>
);
