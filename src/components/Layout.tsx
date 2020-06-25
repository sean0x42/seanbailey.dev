/**
 * @format
 */

import React, { FunctionComponent } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'
import '../../node_modules/modern-normalize/modern-normalize.css'

import darkTheme from '../app/dark.treat'

import Header from './Header'
import * as styleRefs from './Layout.treat'
import Footer from './Footer'

/**
 * Layout container
 * This is a separate component so we can make the most of the treat theme.
 */
const Container: FunctionComponent = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.layout}>
      <Helmet>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Helmet>

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
