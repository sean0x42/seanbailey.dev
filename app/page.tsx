import type { Metadata } from "next";
import type { FC } from "react";

import { ArticleCards } from "@/components/ArticleCards";
import { Copy } from "@/components/Copy";
import { Layout } from "@/components/Layout";
import { Stack } from "@/components/layout/Stack";
import { Wrapper } from "@/components/Wrapper";
import { formatArticleDate, getArticles } from "@/lib/articles";
import { Heading } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Sean Bailey (Designer and Developer)",
};

const HomePage: FC = () => {
  const articles = getArticles();

  return (
    <Layout>
      <Stack space="mt-24">
        <Wrapper>
          <Stack space="mt-4">
            <Copy variant="large">Hello!</Copy>
            <Copy variant="large">
              I am{" "}
              <span className="text-white font-medium underline underline-teal-500">
                designer and developer
              </span>{" "}
              in Sydney, Australia.
              <br />
              Now available for hire.
            </Copy>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack space="mt-8">
            <Heading>Articles</Heading>
            <ArticleCards
              articles={articles.map((article) => ({
                ...article,
                date: formatArticleDate(article.date),
                rawDate: article.date ?? "",
              }))}
            />
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack space="mt-8">
            <Heading>Projects</Heading>
          </Stack>
        </Wrapper>
      </Stack>
    </Layout>
  );
};

export default HomePage;
