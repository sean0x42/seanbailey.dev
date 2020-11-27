import React, { FunctionComponent } from 'react'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'

const Subscribed: FunctionComponent = () => (
  <Layout>
    <SEO title="Thanks!" />

    <Wrapper>
      <h1>Thanks!</h1>
      <p>You&apos;ve now been subscribed to my mailing list.</p>
      <ButtonLink to="/">Return home</ButtonLink>
    </Wrapper>
  </Layout>
)

export default Subscribed
