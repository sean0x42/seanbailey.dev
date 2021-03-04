import React, { FunctionComponent } from 'react'

import ButtonLink from '../components/ButtonLink'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const Subscribed: FunctionComponent = () => (
  <Wrapper>
    <SEO title="Thanks!" />

    <Heading level={1}>Thanks!</Heading>
    <Copy>You&apos;ve now been subscribed to my mailing list.</Copy>
    <ButtonLink to="/">Return home</ButtonLink>
  </Wrapper>
)

export default Subscribed
