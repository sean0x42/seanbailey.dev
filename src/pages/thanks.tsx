/** @format */

import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'

function ThanksPage() {
  return (
    <Layout>
      <SEO title="Thanks!" />

      <Wrapper>
        <h1>Thanks!</h1>
        <p>Your message has been passed on. I'll be in touch shortly.</p>
        <ButtonLink to="/">Return home</ButtonLink>
      </Wrapper>
    </Layout>
  )
}

export default ThanksPage
