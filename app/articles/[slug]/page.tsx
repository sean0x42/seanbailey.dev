import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Article from "@/components/Article";
import Layout from "@/components/Layout";
import { articleComponents, withContentImages } from "@/mdx-components";
import { formatArticleDate, getArticles, readContent } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = readContent("articles", slug);

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      ...(article.cover ? { images: [article.cover] } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = readContent("articles", slug);

  if (article.hidden) notFound();

  // The slug is selected at build time by generateStaticParams.
  const { default: Post } = await import(
    `@/content/articles/${slug}/index.mdx`
  );

  return (
    <Layout>
      <Article
        coverImage={article.cover}
        attribution={article.attribution}
        title={article.title}
        date={formatArticleDate(article.date)}
        excerpt={article.excerpt}
      >
        <Post
          components={withContentImages(articleComponents, "articles", slug)}
        />
      </Article>
    </Layout>
  );
}
