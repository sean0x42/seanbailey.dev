import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type ContentType = "articles" | "projects";

export interface Attribution {
  author: string;
  url: string;
}

export interface ContentEntry {
  type: ContentType;
  slug: string;
  title: string;
  excerpt: string;
  cover?: string;
  hidden?: boolean;
  date?: string;
  startDate?: string;
  endDate?: string;
  attribution?: Attribution;
}

const contentRoot = path.join(process.cwd(), "content");

function normalizeDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return typeof value === "string" ? value : undefined;
}

function excerptFromMarkdown(markdown: string) {
  const text = markdown
    .replace(/<!--[^]*?-->/g, "")
    .replace(/```[^]*?```/g, "")
    .replace(/^\[[^\]]+\]:.*$/gm, "")
    .replace(/<[^>]+>/g, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\[[^\]]*\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return text.slice(0, 200);
}

export function readContent(type: ContentType, slug: string): ContentEntry {
  const source = fs.readFileSync(
    path.join(contentRoot, type, slug, "index.mdx"),
    "utf8",
  );
  const parsed = matter(source);
  const data = parsed.data as Record<string, unknown>;
  const cover = typeof data.cover === "string" ? data.cover : undefined;

  return {
    type,
    slug,
    title: String(data.title ?? slug),
    excerpt: excerptFromMarkdown(parsed.content),
    cover: cover
      ? `/content/${type}/${slug}/${cover.replace(/^\.\//, "")}`
      : undefined,
    hidden: data.hidden === true,
    date: normalizeDate(data.date),
    startDate: normalizeDate(data.startDate),
    endDate: normalizeDate(data.endDate),
    attribution:
      data.attribution && typeof data.attribution === "object"
        ? (data.attribution as Attribution)
        : undefined,
  };
}

export function getEntries(type: ContentType) {
  return fs
    .readdirSync(path.join(contentRoot, type), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readContent(type, entry.name))
    .filter((entry) => !entry.hidden);
}

export function getArticles() {
  return getEntries("articles").sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
}

export function getProjects() {
  return getEntries("projects").sort((a, b) =>
    (b.startDate ?? "").localeCompare(a.startDate ?? ""),
  );
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

export function formatProjectDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
