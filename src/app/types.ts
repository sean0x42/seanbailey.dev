/** @format */

import { FluidObject, FixedObject } from 'gatsby-image'

export interface GraphQLNodes<T> {
  edges: { node: T }[]
}

export interface FluidImage {
  childImageSharp: {
    fluid: FluidObject
  }
}

export interface FixedImage {
  childImageSharp: {
    fixed: FixedObject
  }
}

export interface ArticleSummary {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    cover: FluidImage
  }
}

export interface Article {
  id: string
  body: string
  frontmatter: {
    title: string
    date: string
    cover: FluidImage
  }
}

export interface ProjectSummary {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    startDate: string
    endDate: string
    cover: FluidImage
  }
}

export interface Project {
  id: string
  body: string
  frontmatter: {
    title: string
    startDate: string
    endDate: string
  }
}
