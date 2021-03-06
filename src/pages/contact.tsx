import React, { FunctionComponent } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Wrapper from '../components/Wrapper'

const ContactPage: FunctionComponent = () => (
  <Layout>
    <SEO title="Contact" />

    <Wrapper>
      <h1>Contact</h1>
      <ContactForm />
    </Wrapper>
  </Layout>
)

export default ContactPage
