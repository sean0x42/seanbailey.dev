/** @format */

import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

function NotFoundPage() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="404: Not found" />
        <h1>Page Not Found</h1>
        <p>
          You just hit a route that doesn&#39;t exist... Maybe something was
          moved&#63;
        </p>
        <ButtonLink to="/">Return home</ButtonLink>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
