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

export interface Article {
  html: string
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

export interface ProjectSummary {
  excerpt: string
  frontmatter: {
    title: string
    startDate: string
    endDate: string
    slug: string
    cover: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}
