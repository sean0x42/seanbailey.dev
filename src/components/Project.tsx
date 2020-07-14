/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FluidImage } from '../app/types'
import * as styleRefs from './Project.treat'

import Column from './Project/Column'
import Columns from './Project/Columns'
import Header from './Project/Header'
import IncompleteWarning from './Project/IncompleteWarning'
import Logo from './Project/Logo'
import SEO from './SEO'
import ThanksForReading from './Project/ThanksForReading'
import ThreeColumns from './Project/ThreeColumns'
import TwoColumns from './Project/TwoColumns'
import Wrapper from './Wrapper'

interface ComponentMap {
  [name: string]: FunctionComponent<any>
}

const components: ComponentMap = {
  Column,
  Columns,
  IncompleteWarning,
  ThreeColumns,
  TwoColumns,
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
        <Columns>
          <Logo image={props.coverImage} />
          <Header {...props} />
        </Columns>

        <MDXProvider components={components}>
          <MDXRenderer>{props.body}</MDXRenderer>
        </MDXProvider>

        <hr />
        <Columns>
          <TwoColumns>
            <ThanksForReading />
          </TwoColumns>
        </Columns>
      </Wrapper>
    </article>
  )
}

export default Project
