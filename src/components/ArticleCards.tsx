/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Radio } from 'react-feather'

import { ArticleSummary } from '../app/types'

import * as styleRefs from './ArticleCards.treat'
import LinkCard from './LinkCard'
import CardLayout from './CardLayout'
import Badge from './Badge'

interface ArticleCardProps {
  article: ArticleSummary
}

function daysAgo(date: Date): number {
  const today = new Date()
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

function ArticleCard(props: ArticleCardProps) {
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
        <p>{article.excerpt}</p>
      </LinkCard>
    </li>
  )
}

interface ArticleCardsProps {
  articles: ArticleSummary[]
}

const ArticleCards = (props: ArticleCardsProps) => (
  <CardLayout>
    {props.articles.map((article) => (
      <ArticleCard key={article.fields.slug} article={article} />
    ))}
  </CardLayout>
)

export default ArticleCards
