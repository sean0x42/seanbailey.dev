import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

function ThanksPage() {
  return (
    <Layout>
      <Wrapper>
        <h1>Thanks!</h1>
        <p>Your message has been passed on. I'll be in touch shortly.</p>
        <ButtonLink to="/">Return home</ButtonLink>
      </Wrapper>
    </Layout>
  )
}

export default ThanksPage
