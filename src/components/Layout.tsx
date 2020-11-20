import React, { FunctionComponent } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'

import darkTheme from '../app/dark.treat'

import Header from './Header'
import Footer from './Footer'
import SkipLink from './SkipLink'
import * as styleRefs from './Layout.treat'

/**
 * Layout container
 * This is a separate component so we can make the most of the treat theme.
 */
const Container: FunctionComponent = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.layout}>
      <Helmet>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          async
          defer
          data-domain="seanbailey.dev"
          src="https://stats.seanbailey.dev/js/index.js"
        ></script>
      </Helmet>

      <SkipLink />

      <Header />

      <main id="main">{props.children}</main>

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
