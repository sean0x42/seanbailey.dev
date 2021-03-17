import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getSrc } from 'gatsby-plugin-image'

import Caption from './Article/Caption'
import Copy, { Bold } from './Copy'
import Figure from './Article/Figure'
import Heading from './Heading'
import Link from './Link'
import Seo from './Seo'
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
    <Heading level={1} className="mt-12">
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
  ul: (props) => <ul className="pl-[1.66667em] my-4 list-disc" {...props} />,
  ol: (props) => <ol className="pl-[1.66667em] my-4 list-decimal" {...props} />,
  code: (props) => (
    <code
      {...props}
      className="bg-grey-100 dark:bg-grey-800 rounded px-1 text-sm"
    />
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

      <Wrapper width="max-w-prose">
        {props.coverImage && (
          <GatsbyImage
            image={props.coverImage.childImageSharp.gatsbyImageData}
            className="bg-gray-900 rounded leading-none align-middle mb-9"
            alt={props.title}
            aria-hidden={true}
          />
        )}
      </Wrapper>

      <Wrapper width="max-w-prose md:max-w-screen-md" className="md:my-10">
        <Stack space="mt-2">
          {props.date && (
            <Copy className="md:text-center" variant="suppressed" width="none">
              {props.date}
            </Copy>
          )}

          <Heading level={1} className="md:text-center" variant="title">
            {props.title}
          </Heading>
        </Stack>
      </Wrapper>

      <Wrapper
        width="max-w-prose"
        className="text-grey-900 dark:text-grey-200 font-light"
      >
        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

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
