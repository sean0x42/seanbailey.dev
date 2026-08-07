import React from "react";

import Badge from "./Badge";
import CardLayout from "./CardLayout";
import LinkCard from "./LinkCard";
import LightningBoltIcon from "./icons/LightningBolt";

export interface ArticleCardData {
  slug: string;
  title: string;
  date: string;
  rawDate: string;
  excerpt: string;
  cover?: string;
}

function daysAgo(date: Date): number {
  const today = new Date();
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
}

interface ArticleCardsProps {
  articles: ArticleCardData[];
}

const ArticleCards: React.FunctionComponent<ArticleCardsProps> = ({
  articles,
}) => (
  <CardLayout>
    {articles.map((article) => {
      const isNew = daysAgo(new Date(`${article.rawDate}T00:00:00Z`)) <= 7;

      return (
        <li key={article.slug}>
          <LinkCard
            to={`/articles/${article.slug}`}
            cover={article.cover}
            title={article.title}
            date={article.date}
            copy={article.excerpt}
            more="Read more"
            badge={isNew && <Badge icon={LightningBoltIcon}>New!</Badge>}
          />
        </li>
      );
    })}
  </CardLayout>
);

export default ArticleCards;
