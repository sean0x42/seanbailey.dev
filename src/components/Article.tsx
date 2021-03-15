import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

import Caption from './Article/Caption'
import Copy, { Bold } from './Copy'
import Figure from './Article/Figure'
import Heading from './Heading'
import Link from './Link'
import Seo from './SEO'
import Stack from './layout/Stack'
import ThanksForReading from './Article/ThanksForReading'
import Wrapper from './Wrapper'
import YouTube from './Article/YouTube'
import { Attribution, Image } from '../app/types'

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
  p: (props) => <Copy className="my-6" {...props} />,
  a: (props) => (
    <Link to={props.href} external>
      {props.children}
    </Link>
  ),
  ul: (props) => <ul className="pl-3 my-4 list-inside list-disc" {...props} />,
  ol: (props) => (
    <ol className="pl-3 my-4 list-inside list-numeric" {...props} />
  ),
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
      <Seo title={props.title} description={props.excerpt} meta={meta} />

      <Wrapper
        width="max-w-prose"
        className="text-grey-900 dark:text-grey-200 font-light"
      >
        {props.coverImage && (
          <GatsbyImage
            image={props.coverImage.childImageSharp.gatsbyImageData}
            className="bg-gray-900 rounded leading-none align-middle mb-9"
            alt={props.title}
            aria-hidden={true}
          />
        )}

        <Stack space="mt-1">
          <Heading level={1}>{props.title}</Heading>
          {props.date && <Copy variant="suppressed">{props.date}</Copy>}
        </Stack>

        <div className="disprose">
          <MDXProvider components={components}>
            <MDXRenderer>{props.body}</MDXRenderer>
          </MDXProvider>
        </div>

        <ThanksForReading />

        {props.attribution && (
          <Copy className="mt-16">
            Cover image by{' '}
            <Link to={props.attribution.url} external>
              {props.attribution.author}
            </Link>
          </Copy>
        )}
      </Wrapper>
    </article>
  )
}

export default Article
