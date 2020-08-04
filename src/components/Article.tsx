/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidImage, Attribution } from '../app/types'
import * as styleRefs from './Article.treat'

import Figure from './Article/Figure'
import Header from './Article/Header'
import SEO from './SEO'
import ThanksForReading from './Article/ThanksForReading'
import Wrapper from './Wrapper'
import YouTube from './Article/YouTube'

interface ComponentMap {
  [name: string]: FunctionComponent<any>
}

const components: ComponentMap = {
  Figure,
  YouTube,
}

interface ArticleProps {
  coverImage: FluidImage
  attribution: Attribution
  title: string
  date: string
  excerpt: string
  body: string
}

function Article(props: ArticleProps) {
  const styles = useStyles(styleRefs)

  const meta = []
  if (props.coverImage.publicURL) {
    meta.push({
      name: 'og:image',
      content: props.coverImage.publicURL,
    })
  }

  return (
    <article>
      <SEO title={props.title} description={props.excerpt} meta={meta} />

      <Wrapper thin className={styles.article}>
        <Header {...props} />

        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

        <ThanksForReading />

        {props.attribution && (
          <p className={styles.attribution}>
            Cover image by{' '}
            <a
              href={props.attribution.url}
              target="_blank"
              rel="noopener noreferer"
            >
              {props.attribution.author}
            </a>
          </p>
        )}
      </Wrapper>
    </article>
  )
}

export default Article
