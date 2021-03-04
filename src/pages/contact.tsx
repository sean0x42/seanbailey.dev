import React, { FunctionComponent } from 'react'

import ContactForm from '../components/ContactForm'
import Heading from '../components/Heading'
import SEO from '../components/SEO'
import Wrapper from '../components/Wrapper'

const ContactPage: FunctionComponent = () => (
  <Wrapper>
    <SEO title="Contact" />

    <Heading level={1}>Contact</Heading>
    <ContactForm />
  </Wrapper>
)

export default ContactPage
