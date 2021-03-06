import React from 'react'

import Copy, { Bold } from '../Copy'
import Heading from '../Heading'
import Stack from '../layout/Stack'
import SubscribeForm from '../SubscribeForm'

const ThanksForReading: React.FunctionComponent = () => (
  <Stack space="mt-2" className="mt-16">
    <Heading level={2}>Thanks for reading</Heading>
    <Copy>
      If you liked that article, why not subscribe to my mailing list? I write
      about software engineering, product design and interface design.
    </Copy>
    <Copy>
      <Bold>100% spam and tracker free!</Bold>
    </Copy>

    <SubscribeForm />
  </Stack>
)

export default ThanksForReading
