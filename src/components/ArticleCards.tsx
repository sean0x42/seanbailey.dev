/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './ArticleCards.treat'
import { ArticleSummary } from '../app/types'
import LinkCard from './LinkCard'
import CardLayout from './CardLayout'

interface ArticleCardProps {
  article: ArticleSummary
}

function ArticleCard(props: ArticleCardProps) {
  const styles = useStyles(styleRefs)
  const { article } = props

  return (
    <li>
      <LinkCard
        to={`/articles/${article.frontmatter.slug}`}
        fluidImage={article.frontmatter.cover.childImageSharp.fluid}
        moreCopy="Read more"
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
    {props.articles.map(post => (
      <ArticleCard article={post} key={post.frontmatter.slug} />
    ))}
  </CardLayout>
)

export default ArticleCards
