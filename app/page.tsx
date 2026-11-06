import type { FC } from "react";

import { ArticleCards } from "@/components/ArticleCards";
import { Copy } from "@/components/prose/copy";
import { formatArticleDate, getArticles } from "@/lib/articles";
import { Heading } from "@/components/prose/heading";
import { VBox, Container } from "@/components/layout";
import { PrimaryButton } from "@/components/button";

const HomePage: FC = () => {
  const articles = getArticles();

  return (
    <Container>
      <VBox gap={7}>
        <VBox gap={5} items="start" paddingVertical={6}>
          <VBox gap={3}>
            <Heading size={1}>
              Handmade websites, designed with passion.
            </Heading>

            <Copy size="large">
              I’ve been delighting users and clients with intuitive, fast, and
              secure websites and web apps for over 15 years.
            </Copy>
          </VBox>

          <VBox gap={3} items="start">
            <PrimaryButton>Get in touch</PrimaryButton>
            <Copy>I typically respond within 24 hours</Copy>
          </VBox>
        </VBox>

        <VBox gap={5}>
          <Heading size={1}>Articles</Heading>
          <ArticleCards
            articles={articles.map((article) => ({
              ...article,
              date: formatArticleDate(article.date),
              rawDate: article.date ?? "",
            }))}
          />
        </VBox>

        <VBox gap={5}>
          <Heading size={1}>Projects</Heading>
        </VBox>
      </VBox>
    </Container>
  );
};

export default HomePage;
