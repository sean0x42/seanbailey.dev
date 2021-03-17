import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import Seo from '../components/Seo'
import Stack from '../components/layout/Stack'
import Wrapper from '../components/Wrapper'

const NotFoundPage: React.FunctionComponent = () => (
  <Wrapper width="max-w-prose">
    <Seo title="404: Not found" noIndex />

    <Stack space="mt-2">
      <Heading level={1}>Page Not Found</Heading>
      <Copy>
        There doesn't seem to be anything at this address. Double check the URL,
        or just return home.
      </Copy>
      <ButtonLink to="/">Return home</ButtonLink>
    </Stack>
  </Wrapper>
)

export default NotFoundPage
