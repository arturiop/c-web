import Link from 'next/link';

export const WatchableWordmark = (props: { clickable?: boolean; className?: string }) => {
  const content = (
    <span
      className={
        props.className ??
        'inline-flex items-baseline text-[25px] font-bold tracking-[-0.03em] leading-none sm:text-[32px]'
      }
    >
      <span
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(252, 252, 252, 1) 0%, rgba(135, 135, 135, 1) 22%, rgba(9, 9, 10, 1) 40%, rgba(11, 13, 18, 1) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        Watch
      </span>
      <span
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(252, 252, 252, 1) 0%, rgba(232, 232, 255, 1) 2%, rgba(172, 173, 252, 1) 10%, rgba(91, 97, 255, 1) 50%, rgba(91, 97, 255, 1) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        able
      </span>
      <span className="ml-[0.015em] text-[1.2em] leading-none text-[#ff6a1a]">
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
