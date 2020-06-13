/** @format */

import { FluidObject } from 'gatsby-image'

export interface ArticleSummary {
  excerpt: string
  frontmatter: {
    slug: string
    title: string
    date: string
    cover: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
