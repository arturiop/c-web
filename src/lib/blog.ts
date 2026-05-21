import fs from 'node:fs';
import path from 'node:path';
import type { BlogPostDefinition } from '@/content/blog';
import { blogPostDefinitions } from '@/content/blog';
import { siteConfig } from '@/lib/seo/site';

export type BlogBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export type BlogPost = BlogPostDefinition & {
  body: string;
  blocks: BlogBlock[];
  imageUrl?: string;
};

const articleImageUrl = siteConfig.defaultOgImage.startsWith('http')
  ? siteConfig.defaultOgImage
  : new URL(siteConfig.defaultOgImage, `${siteConfig.siteUrl}/`).toString();

const readPostSource = (sourceFile: string) =>
  fs.readFileSync(path.join(process.cwd(), sourceFile), 'utf-8').trim();

const sanitizeMarkdown = (markdown: string) =>
  markdown.replaceAll(
    /^Related reading once published: \[(.+?)\]\([^)]+\)\.?$/gmu,
    'Planned topic: $1.',
  );

const pushParagraph = (blocks: BlogBlock[], lines: string[]) => {
  if (lines.length === 0) {
    return;
  }

  blocks.push({
    type: 'paragraph',
    text: lines.join(' ').trim(),
  });
  lines.length = 0;
};

const parseMarkdownToBlocks = (markdown: string): BlogBlock[] => {
  const blocks: BlogBlock[] = [];
  const paragraphLines: string[] = [];
  const lines = markdown.split(/\r?\n/u);
  let index = 0;

  while (index < lines.length) {
    const rawLine = lines[index] ?? '';
    const line = rawLine.trim();

    if (index === 0 && line.startsWith('# ')) {
      index += 1;
      continue;
    }

    if (line.length === 0) {
      pushParagraph(blocks, paragraphLines);
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      pushParagraph(blocks, paragraphLines);
      blocks.push({ type: 'heading', level: 2, text: line.slice(3).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      pushParagraph(blocks, paragraphLines);
      blocks.push({ type: 'heading', level: 3, text: line.slice(4).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      pushParagraph(blocks, paragraphLines);
      const items: string[] = [];

      while (index < lines.length) {
        const candidate = (lines[index] ?? '').trim();
        if (!candidate.startsWith('- ')) {
          break;
        }
        items.push(candidate.slice(2).trim());
        index += 1;
      }

      blocks.push({ type: 'list', items });
      continue;
    }

    paragraphLines.push(line);
    index += 1;
  }

  pushParagraph(blocks, paragraphLines);

  return blocks;
};

const buildBlogPost = (definition: BlogPostDefinition): BlogPost => {
  const body = sanitizeMarkdown(readPostSource(definition.sourceFile));

  return {
    ...definition,
    body,
    blocks: parseMarkdownToBlocks(body),
    imageUrl: definition.imagePath
      ? new URL(definition.imagePath, `${siteConfig.siteUrl}/`).toString()
      : articleImageUrl,
  };
};

export const getAllBlogPosts = () =>
  blogPostDefinitions
    .map(buildBlogPost)
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));

export const getBlogPostBySlug = (slug: string) =>
  getAllBlogPosts().find((post) => post.slug === slug);
