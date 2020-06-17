/** @format */

import { FluidObject, FixedObject } from 'gatsby-image'

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
  frontmatter: {
    slug: string
    title: string
    date: string
    cover: FluidImage
  }
}

export interface Article {
  html: string
  frontmatter: {
    slug: string
    title: string
    date: string
    cover: FluidImage
  }
}

export interface ProjectSummary {
  excerpt: string
  frontmatter: {
    title: string
    startDate: string
    endDate: string
    slug: string
    cover: FluidImage
  }
}

export interface Project {
  html: string
  frontmatter: {
    title: string
    slug: string
    images: FixedObject[]
  }
}
