/**
 * @format
 */

import React, { FunctionComponent, useEffect } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

import darkTheme from '../app/dark.treat'
import { useSessionId } from '../helpers/session'

import Header from './Header'
import * as styleRefs from './Layout.treat'
import Footer from './Footer'

interface Visit {
  url: string
  params: string | null
  session: string
  visitedAt: number
}

function recordVisit(visit: Visit) {
  fetch('/.netlify/functions/visitsCreate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(visit),
  }).catch(console.error)
}

/**
 * Layout container
 * This is a separate component so we can make the most of the treat theme.
 */
const Container: FunctionComponent = (props) => {
  const styles = useStyles(styleRefs)
  const location = useLocation()
  const sessionId = useSessionId()

  useEffect(() => {
    const visit: Visit = {
      url: location.pathname,
      params: location.search === '' ? null : location.search,
      session: sessionId,
    }

    // Do not actually record page visits in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page visit', visit)
      return
    }

    recordVisit(visit)
  }, [sessionId])

  return (
    <div className={styles.layout}>
      <Helmet
        link={[
          {
            rel: 'stylesheet',
            href: 'https://rsms.me/inter/inter.css',
          },
        ]}
      />

      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

const Layout: FunctionComponent = (props) => (
  <TreatProvider theme={darkTheme}>
    <Container>{props.children}</Container>
  </TreatProvider>
)

export default Layout
