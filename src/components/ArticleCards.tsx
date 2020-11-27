import React, { FunctionComponent } from 'react'

import { ArticleSummary } from '../app/types'
import CardLayout from './CardLayout'
import ArticleCard from './ArticleCard'

interface ArticleCardsProps {
  articles: ArticleSummary[]
}

const ArticleCards: FunctionComponent<ArticleCardsProps> = (props) => (
  <CardLayout>
    {props.articles.map((article) => (
      <ArticleCard key={article.fields.slug} article={article} />
    ))}
  </CardLayout>
)

export default ArticleCards
