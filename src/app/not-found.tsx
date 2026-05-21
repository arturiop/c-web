import Link from 'next/link';

export default function RootNotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-[420px] text-center">
        <h1 className="mb-2 text-[clamp(48px,6vw,72px)] font-extrabold tracking-[-0.03em] text-[var(--color-watchable-ink)]">
          404
        </h1>
        <p className="mb-8 text-base text-[var(--color-watchable-muted)]">
          This page no longer exists, or it has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full border border-[var(--color-watchable-line)] px-5 py-3 text-base font-medium transition hover:border-[var(--color-watchable-accent)] hover:text-[var(--color-watchable-accent)]"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
