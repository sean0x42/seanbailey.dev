import React, { FunctionComponent } from 'react'
import { Attribution, Image } from '../app/types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getSrc } from 'gatsby-plugin-image'
import { useStyles } from 'react-treat'

import Caption from './Article/Caption'
import Figure from './Article/Figure'
import Header from './Article/Header'
import SEO from './SEO'
import ThanksForReading from './Article/ThanksForReading'
import Wrapper from './Wrapper'
import YouTube from './Article/YouTube'
import * as styleRefs from './Article.treat'

interface ComponentMap {
  [name: string]: FunctionComponent<unknown>
}

const components: ComponentMap = {
  Figure,
  Caption,
  YouTube,
}

interface ArticleProps {
  coverImage: Image
  attribution: Attribution
  title: string
  date: string
  excerpt: string
  body: string
}

const Article: FunctionComponent<ArticleProps> = (props) => {
  const styles = useStyles(styleRefs)

  const meta = []
  if (props.coverImage?.childImageSharp?.gatsbyImageData) {
    meta.push({
      name: 'og:image',
      content: getSrc(props.coverImage.childImageSharp.gatsbyImageData),
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

        <hr className={styles.squiggle} />

        <ThanksForReading />

        {props.attribution && (
          <p className={styles.attribution}>
            Cover image by{' '}
            <a
              href={props.attribution.url}
              target="_blank"
              rel="noopener noreferrer"
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
