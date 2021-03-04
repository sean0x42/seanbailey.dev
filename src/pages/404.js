import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Heading from '../components/Heading'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: Not found" />
    <Heading level={1}>Page Not Found</Heading>
    <Copy>
      You just hit a route that doesn&#39;t exist... Maybe something was
      moved&#63;
    </Copy>
    <ButtonLink to="/">Return home</ButtonLink>
  </Wrapper>
)

export default NotFoundPage
