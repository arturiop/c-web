import Link from 'next/link';

export const WatchableWordmark = (props: { clickable?: boolean; className?: string }) => {
  const content = (
    <span
      className={
        props.className ??
        'inline-flex items-baseline text-[29px] font-semibold tracking-[-0.055em] sm:text-[38px]'
      }
    >
      <span className="text-[var(--color-watchable-ink)]">Watch</span>
      <span className="text-[#6f6cff]">able</span>
      <span className="ml-[0.02em] text-[1.15em] leading-none text-[var(--color-watchable-accent)]">
        .
      </span>
    </span>
  );

  if (props.clickable === false) {
    return content;
  }

  return (
    <Link href="/" className="inline-flex">
      {content}
    </Link>
  );
};
