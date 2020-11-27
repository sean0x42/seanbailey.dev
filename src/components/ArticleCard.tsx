import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { Radio } from 'react-feather'

import * as styleRefs from './ArticleCards.treat'
import LinkCard from './LinkCard'
import Badge from './Badge'
import { ArticleSummary } from '../app/types'

interface ArticleCardProps {
  article: ArticleSummary
}

function daysAgo(date: Date): number {
  const today = new Date()
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

const ArticleCard: FunctionComponent<ArticleCardProps> = (props) => {
  const styles = useStyles(styleRefs)
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
        <h3 className={styles.title}>{article.frontmatter.title}</h3>
        <p className={styles.date}>{article.frontmatter.date}</p>
        <p className={styles.snippet}>{article.excerpt}</p>
      </LinkCard>
    </li>
  )
}

export default ArticleCard
