import React from 'react'
import { Radio } from 'react-feather'

import Badge from './Badge'
import Copy from './Copy'
import Heading from './Heading'
import LinkCard from './LinkCard'
import { ArticleSummary } from '../app/types'

interface ArticleCardProps {
  article: ArticleSummary
}

function daysAgo(date: Date): number {
  const today = new Date()
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = (props) => {
  const { article } = props

  const isNew = daysAgo(new Date(article.frontmatter.rawDate)) <= 7

  return (
    <li>
      <LinkCard
        to={`/articles${article.fields.slug}`}
        cover={article.frontmatter.cover}
        moreCopy="Read more"
        badge={isNew && <Badge icon={Radio}>New</Badge>}
      >
        <Heading level={2}>{article.frontmatter.title}</Heading>
        <Copy className="my-2">{article.frontmatter.date}</Copy>
        <Copy>{article.excerpt}</Copy>
      </LinkCard>
    </li>
  )
}

export default ArticleCard
