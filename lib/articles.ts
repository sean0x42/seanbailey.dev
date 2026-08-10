import type { MDXContent } from "mdx/types";

import { readContent } from "./content";

type ArticleModule = () => Promise<{ default: MDXContent }>;
const articleModules = import.meta.glob("./content/articles/*/index.mdx", {
  base: "..",
}) as Record<string, ArticleModule>;

function getArticleSlugs() {
  return Object.keys(articleModules)
    .map((filePath) => filePath.split("/").at(-2))
    .filter((slug): slug is string => Boolean(slug));
}

export function getArticles() {
  return getArticleSlugs()
    .map((slug) => readContent("articles", slug))
    .filter((article) => !article.hidden)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function loadArticle(slug: string) {
  const loadPost = articleModules[`../content/articles/${slug}/index.mdx`];
  if (!loadPost) return undefined;

  return (await loadPost()).default;
}

export function formatArticleDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
