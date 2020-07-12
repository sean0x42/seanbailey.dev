/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidImage } from '../app/types'
import * as styleRefs from './Project.treat'

import Figure from './Article/Figure'
import Header from './Project/Header'
import Logo from './Project/Logo'
import Overview from './Project/Overview'
import SEO from './SEO'
import TwoColumns from './Project/TwoColumns'
import ThreeColumns from './Project/ThreeColumns'
import Wrapper from './Wrapper'

interface ComponentMap {
  [name: string]: FunctionComponent<any>
}

const components: ComponentMap = {
  Figure,
  Overview,
  TwoColumns,
  ThreeColumns,
}

interface ProjectProps {
  coverImage: FluidImage
  title: string
  date: string
  excerpt: string
  body: string
}

function Project(props: ProjectProps) {
  const styles = useStyles(styleRefs)

  return (
    <article>
      <SEO title={props.title} description={props.excerpt} />

      <Wrapper className={styles.project}>
        <Logo image={props.coverImage} />
        <Header {...props} />

        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>
      </Wrapper>
    </article>
  )
}

export default Project
