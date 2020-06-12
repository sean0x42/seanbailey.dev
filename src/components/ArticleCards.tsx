/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'

import { ArticleSummary } from '../pages'
import * as styleRefs from './ArticleCards.treat'

interface ArticleCardProps {
  article: ArticleSummary
}

function ArticleCard(props: ArticleCardProps) {
  const styles = useStyles(styleRefs)
  const { article } = props

  return (
    <li>
      <Link
        to={`/articles/${article.frontmatter.slug}`}
        className={styles.articleCard}
      >
        <h2 className={styles.title}>{article.frontmatter.title}</h2>
        <p>{article.excerpt}</p>
      </Link>
    </li>
  )
}

interface ArticleCardsProps {
  articles: ArticleSummary[]
}

function ArticleCards(props: ArticleCardsProps) {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.articleCards}>
      {props.articles.map(post => (
        <ArticleCard article={post} key={post.frontmatter.slug} />
      ))}
    </ul>
  )
}

export default ArticleCards
