/** @format */

import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Wrapper from '../components/Wrapper'
import * as styles from '../contact.treat.ts'
import DotGrid from '../components/Landing/DotGrid'

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />

      <Wrapper>
        <h1>Contact</h1>

        <DotGrid
          width={4}
          height={6}
          position={{ left: '14rem', top: '8rem' }}
        />

        <div className={styles.wrapper}>
          <ContactForm />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default ContactPage
