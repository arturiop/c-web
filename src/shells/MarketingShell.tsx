import { MarketingFooter } from '@/components/MarketingFooter';
import { WatchableWordmark } from '@/components/WatchableWordmark';

export const MarketingShell = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="landing-hero-shell w-full px-6 text-[var(--color-watchable-ink)] antialiased md:px-16">
    <div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between py-5">
        <div className="flex items-center gap-6">
          <WatchableWordmark />
        </div>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-[color:rgb(20_20_23_/_0.7)] md:gap-6">
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
