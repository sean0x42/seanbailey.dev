import React, { FunctionComponent } from 'react'

import ButtonLink from '../components/ButtonLink'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import Seo from '../components/SEO'
import Wrapper from '../components/Wrapper'
import Stack from '../components/layout/Stack'

const Subscribed: FunctionComponent = () => (
  <Wrapper width="max-w-prose">
    <Seo title="Thanks!" />

    <Stack space="mt-2">
      <Heading level={1}>Thanks!</Heading>
      <Copy>
        You have been successfully subscribed to my mailing list. Thank you for
        your support!
      </Copy>
      <ButtonLink to="/">Return home</ButtonLink>
    </Stack>
  </Wrapper>
)

export default Subscribed
