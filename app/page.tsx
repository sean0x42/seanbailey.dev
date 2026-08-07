import type { Metadata } from "next";

import ArticleCards from "../components/ArticleCards";
import Copy from "../components/Copy";
import Layout from "../components/Layout";
import Stack from "../components/layout/Stack";
import Wrapper from "../components/Wrapper";
import { getArticles, formatArticleDate } from "../lib/content";

export const metadata: Metadata = {
  title: "Sean Bailey (Designer and Developer)",
};

export default function HomePage() {
  const articles = getArticles();

  return (
    <Layout>
      <Stack space="mt-24">
        <Wrapper>
          <Stack space="mt-4">
            <Copy variant="large">Hello!</Copy>
            <Copy variant="large">
              I am{" "}
              <span className="text-grey-900 dark:text-white font-medium underline underline-teal-800 dark:underline-teal-500">
                designer and developer
              </span>{" "}
              in Sydney, Australia.
              <br />
              Welcome to my home on the web.
            </Copy>
          </Stack>
        </Wrapper>

        <Wrapper>
          <ArticleCards
            articles={articles.map((article) => ({
              ...article,
              date: formatArticleDate(article.date),
              rawDate: article.date ?? "",
            }))}
          />
        </Wrapper>
      </Stack>
    </Layout>
  );
}
