import { getCollection } from 'astro:content';

export async function getArticles() {
  const articles = await getCollection('articles');
  return articles
    .filter((article) => !article.data.publishedAt || article.data.publishedAt <= new Date())
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function articlePath(id: string) {
  return `/article.ai/articles/${id.replace(/\.mdx$/, '')}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-TW', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}
