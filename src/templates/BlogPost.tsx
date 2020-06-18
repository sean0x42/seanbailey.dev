/** @format */

import React, { FunctionComponent } from 'react'

import Layout from '../components/Layout'

const ArticleTemplate: FunctionComponent = props => {
  return (
    <Layout>
      {/* <SEO title={article.frontmatter.title} /> */}
      {/* <Article article={article} /> */}
      {props.children}
    </Layout>
  )
}

export default ArticleTemplate
