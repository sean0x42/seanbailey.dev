import { IGatsbyImageData } from "gatsby-plugin-image";

export interface GraphQLNodes<T> {
  edges: { node: T }[];
}

export interface Image {
  publicURL?: string;
  childImageSharp?: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface ArticleSummary {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    rawDate: string;
    date: string;
    cover: Image;
  };
}

export interface Attribution {
  author: string;
  url: string;
}

export interface Article {
  id: string;
  body: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    cover: Image;
    attribution: Attribution | null;
  };
}

export interface ProjectSummary {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    startDate: string;
    endDate?: string;
    cover?: Image;
  };
}

export interface Project {
  id: string;
  body: string;
  excerpt: string;
  frontmatter: {
    title: string;
    startDate: string;
    endDate: string;
    cover: Image;
  };
}
