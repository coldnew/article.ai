import type { CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

export function tagSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, '-').replace(/^-|-$/g, '');
}

export function tagHref(tag: string) {
  return `/article.ai/tags/${encodeURIComponent(tagSlug(tag))}/`;
}

export function groupArticlesByTag(articles: ArticleEntry[]) {
  const groups = new Map<string, { label: string; slug: string; articles: ArticleEntry[] }>();
  for (const article of articles) {
    for (const label of article.data.tags) {
      const slug = tagSlug(label);
      if (!slug) continue;
      const group = groups.get(slug) ?? { label, slug, articles: [] };
      group.articles.push(article);
      groups.set(slug, group);
    }
  }
  return [...groups.values()].sort((a, b) => b.articles.length - a.articles.length || a.label.localeCompare(b.label, 'zh-Hant'));
}
