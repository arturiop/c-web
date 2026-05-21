import Link from 'next/link';
import { WatchableWordmark } from '@/components/WatchableWordmark';

export const LegalList = (props: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5">
    {props.items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export const LegalArticle = (props: {
  label: string;
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="mb-10 flex items-center justify-between gap-4">
      <WatchableWordmark />
      <Link
        href="/"
        className="text-sm text-[var(--color-watchable-muted)] transition hover:text-[var(--color-watchable-accent)]"
      >
        Back to Watchable
      </Link>
    </div>

    <article className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-watchable-line)] bg-white/80 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:p-12">
      <p className="mb-4 text-[11px] font-semibold tracking-[0.24em] text-[var(--color-watchable-accent)] uppercase">
        {props.label}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-watchable-ink)] sm:text-5xl">
        {props.title}
      </h1>
      <p className="mt-4 text-sm leading-6 text-[var(--color-watchable-muted)]">
        Effective as of {props.effectiveDate}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-[var(--color-watchable-muted)]">
        {props.children}
      </div>
    </article>
  </div>
);
