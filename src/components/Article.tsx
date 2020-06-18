/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidImage } from '../app/types'
import * as styleRefs from './Article.treat'

import Img from 'gatsby-image'
import SEO from './SEO'
import Wrapper from './Wrapper'

interface ArticleProps {
  coverImage: FluidImage
  title: string
  date: string
  excerpt: string
  body: string
  footerComponent?: JSX.Element
}

function Article(props: ArticleProps) {
  const styles = useStyles(styleRefs)
  const Footer = props.footerComponent

  return (
    <article>
      <SEO title={props.title} description={props.excerpt} />

      <Wrapper className={styles.article}>
        <Img
          className={styles.image}
          fluid={props.coverImage.childImageSharp.fluid}
        />
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.date}>{props.date}</p>

        <MDXProvider components={{}}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

        {Footer}
      </Wrapper>
    </article>
  )
}

export default Article
