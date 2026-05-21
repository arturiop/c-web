import Link from 'next/link';
import type { BlogBlock } from '@/lib/blog';

const inlineTokenExpression = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/gu;
const markdownLinkExpression = /^\[([^\]]+)\]\(([^)]+)\)$/u;

const renderInlineContent = (text: string) =>
  text.split(inlineTokenExpression).map((part, index) => {
    if (!part) {
      return null;
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(markdownLinkExpression);

    if (linkMatch) {
      const label = linkMatch[1] ?? '';
      const href = linkMatch[2] ?? '#';
      const isInternal = href.startsWith('/');

      return isInternal ? (
        <Link
          key={`${href}-${index}`}
          href={href}
          className="text-[var(--color-watchable-accent)] underline underline-offset-4 transition hover:text-[var(--color-watchable-ink)]"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`${href}-${index}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--color-watchable-accent)] underline underline-offset-4 transition hover:text-[var(--color-watchable-ink)]"
        >
          {label}
        </a>
      );
    }

    return part;
  });

export const MarkdownArticle = (props: { blocks: BlogBlock[] }) => (
  <div className="space-y-6 text-[1.02rem] leading-8 text-[var(--color-watchable-muted)]">
    {props.blocks.map((block, index) => {
      if (block.type === 'heading') {
        if (block.level === 2) {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="pt-4 text-3xl font-semibold tracking-tight text-[var(--color-watchable-ink)]"
            >
              {block.text}
            </h2>
          );
        }

        return (
          <h3
            key={`${block.text}-${index}`}
            className="pt-2 text-2xl font-semibold tracking-tight text-[var(--color-watchable-ink)]"
          >
            {block.text}
          </h3>
        );
      }

      if (block.type === 'list') {
        return (
          <ul key={`list-${index}`} className="list-disc space-y-2 pl-5">
            {block.items.map((item) => (
              <li key={item}>{renderInlineContent(item)}</li>
            ))}
          </ul>
        );
      }

      return <p key={`paragraph-${index}`}>{renderInlineContent(block.text)}</p>;
    })}
  </div>
);
