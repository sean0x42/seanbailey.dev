/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidImage } from '../app/types'
import * as styleRefs from './Article.treat'

import Figure from './Article/Figure'
import Header from './Article/Header'
import SEO from './SEO'
import ThanksForReading from './Article/ThanksForReading'
import Wrapper from './Wrapper'

interface ComponentMap {
  [name: string]: FunctionComponent<any>
}

const components: ComponentMap = {
  Figure,
}

interface ArticleProps {
  coverImage: FluidImage
  title: string
  date: string
  excerpt: string
  body: string
}

function Article(props: ArticleProps) {
  const styles = useStyles(styleRefs)

  return (
    <article>
      <SEO title={props.title} description={props.excerpt} />

      <Wrapper className={styles.article}>
        <Header {...props} />

        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

        <ThanksForReading />
      </Wrapper>
    </article>
  )
}

export default Article
