/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { ArticleSummary } from '../pages'
import { ChevronRight } from 'react-feather'
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
        <Img
          className={styles.image}
          fluid={article.frontmatter.cover.childImageSharp.fluid}
          alt={`Cover image: ${article.frontmatter.title}`}
        />

        <div className={styles.articleCardBody}>
          <h3 className={styles.title}>{article.frontmatter.title}</h3>
          <p className={styles.date}>{article.frontmatter.date}</p>
          <p>{article.excerpt}</p>

          <p className={styles.readMore}>
            Read more
            <ChevronRight />
          </p>
        </div>
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
      {props.articles.map((post) => (
        <ArticleCard article={post} key={post.frontmatter.slug} />
      ))}
    </ul>
  )
}

export default ArticleCards
