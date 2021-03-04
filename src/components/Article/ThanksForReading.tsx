import React from 'react'

import Copy from '../Copy'
import Heading from '../Heading'
import SubscribeForm from '../SubscribeForm'

const ThanksForReading: React.FunctionComponent = () => (
  <>
    <div className="mt-10">
      <Heading level={2}>Thanks for reading</Heading>
      <Copy className="my-2">
        If you liked that article, why not subscribe to my mailing list? I write
        mostly about design and programming.
      </Copy>
      <Copy className="font-medium">100% spam and tracker free!</Copy>
    </div>

    <SubscribeForm />
  </>
)

export default ThanksForReading
