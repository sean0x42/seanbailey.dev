/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'

import { Article as ArticleModel } from '../templates/BlogPost'
import Wrapper from './Wrapper'
import * as styleRefs from './Article.treat'

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
        <h1 className={styles.title}>{article.frontmatter.title}</h1>
        <p className={styles.date}>{article.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </Wrapper>
    </article>
  )
}

export default Article
