import React, { FunctionComponent } from 'react'

import ButtonLink from '../components/ButtonLink'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const ThanksPage: FunctionComponent = () => (
  <Wrapper>
    <SEO title="Thanks!" />

    <Heading level={1}>Thanks!</Heading>
    <Copy>Your message has been passed on. I&apos;ll be in touch shortly.</Copy>
    <ButtonLink to="/">Return home</ButtonLink>
  </Wrapper>
)

export default ThanksPage
