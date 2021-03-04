import React from 'react'
import { Attribution, Image } from '../app/types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getSrc } from 'gatsby-plugin-image'

import Caption from './Article/Caption'
import Figure from './Article/Figure'
import Header from './Article/Header'
import SEO from './SEO'
import ThanksForReading from './Article/ThanksForReading'
import Wrapper from './Wrapper'
import YouTube from './Article/YouTube'
import Copy, { Bold } from './Copy'
import Heading from './Heading'

interface ComponentMap {
  [name: string]: React.ComponentType
}

const components: ComponentMap = {
  Figure,
  Caption,
  YouTube,
  h1: (props) => (
    <Heading level={1} className="mt-8">
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading level={2} className="mt-8">
      {props.children}
    </Heading>
  ),
  p: (props) => <Copy className="my-4">{props.children}</Copy>,
  strong: Bold,
}

interface ArticleProps {
  coverImage: Image
  attribution: Attribution
  title: string
  date: string
  excerpt: string
  body: string
}

const Article: React.FunctionComponent<ArticleProps> = (props) => {
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

      <Wrapper width="max-w-prose">
        <Header {...props} />

        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

        <hr className="styles.squiggle" />

        <ThanksForReading />

        {props.attribution && (
          <p className="styles.attribution">
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
