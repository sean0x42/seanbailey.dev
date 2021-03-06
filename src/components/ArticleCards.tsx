import React, { FunctionComponent } from 'react'

import Badge from './Badge'
import CardLayout from './CardLayout'
import LinkCard from './LinkCard'
import SunIcon from './icons/Sun'
import { ArticleSummary } from '../app/types'

interface ArticleCardsProps {
  articles: ArticleSummary[]
}

function daysAgo(date: Date): number {
  const today = new Date()
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

const ArticleCards: FunctionComponent<ArticleCardsProps> = (props) => (
  <CardLayout>
    {props.articles.map((article) => {
      const isNew = daysAgo(new Date(article.frontmatter.rawDate)) <= 7

      return (
        <li key={article.fields.slug}>
          <LinkCard
            to={`/articles${article.fields.slug}`}
            cover={article.frontmatter.cover}
            title={article.frontmatter.title}
            date={article.frontmatter.date}
            copy={article.excerpt}
            more="Read more"
            badge={isNew && <Badge icon={SunIcon}>New</Badge>}
          />
        </li>
      )
    })}
  </CardLayout>
)

export default ArticleCards
