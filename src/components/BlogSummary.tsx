/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import { Link } from 'gatsby'

import Wrapper from './Wrapper'
import { PostSummary } from '../pages'
import * as styleRefs from './BlogSummary.treat'

interface SummaryProps {
  post: PostSummary
}

function Summary(props: SummaryProps) {
  const styles = useStyles(styleRefs)
  const { post } = props

  return (
    <li>
      <Link to={`/blog/${post.frontmatter.slug}`} className={styles.summary}>
        {post.frontmatter.title}
      </Link>
    </li>
  )
}

interface BlogSummaryProps {
  posts: PostSummary[]
}

function BlogSummary(props: BlogSummaryProps) {
  return (
    <Wrapper>
      <h1>Recent Posts</h1>

      <ul>
        {props.posts.map(post => (
          <Summary post={post} key={post.frontmatter.slug} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default BlogSummary
