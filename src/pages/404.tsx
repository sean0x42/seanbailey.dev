import React from 'react'

import ButtonLink from '../components/ButtonLink'
import Copy from '../components/Copy'
import Heading from '../components/Heading'
import Seo from '../components/SEO'
import Wrapper from '../components/Wrapper'

const NotFoundPage = () => (
  <Wrapper>
    <Seo title="404: Not found" />
    <Heading level={1}>Page Not Found</Heading>
    <Copy>
      You just hit a route that doesn&#39;t exist... Maybe something was
      moved&#63;
    </Copy>
    <ButtonLink to="/">Return home</ButtonLink>
  </Wrapper>
)

export default NotFoundPage
