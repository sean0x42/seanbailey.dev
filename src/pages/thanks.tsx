import React, { FunctionComponent } from 'react'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'

const ThanksPage: FunctionComponent = () => (
  <Layout>
    <SEO title="Thanks!" />

    <Wrapper>
      <h1>Thanks!</h1>
      <p>Your message has been passed on. I&apos;ll be in touch shortly.</p>
      <ButtonLink to="/">Return home</ButtonLink>
    </Wrapper>
  </Layout>
)

export default ThanksPage
