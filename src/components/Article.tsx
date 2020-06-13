/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import { Article as ArticleModel } from '../templates/BlogPost'
import Wrapper from './Wrapper'
import * as styleRefs from './Article.treat'
import ThanksForReading from './ThanksForReading'

interface ArticleProps {
  article: ArticleModel
}

function Article(props: ArticleProps) {
  const { article } = props
  const styles = useStyles(styleRefs)

  return (
    <article>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Wrapper className={styles.article}>
        <Img
          className={styles.image}
          fluid={article.frontmatter.cover.childImageSharp.fluid}
          alt={`Cover image: ${article.frontmatter.title}`}
        />
        <h1 className={styles.title}>{article.frontmatter.title}</h1>
        <p className={styles.date}>Published {article.frontmatter.date}</p>

        <div dangerouslySetInnerHTML={{ __html: article.html }} />

        <ThanksForReading />
      </Wrapper>
    </article>
  )
}

export default Article
