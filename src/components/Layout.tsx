/**
 * @format
 */

import React, { FunctionComponent } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'
import '../../node_modules/modern-normalize/modern-normalize.css'

import Header from './Header'
import darkTheme from '../app/dark.treat'
import * as styleRefs from './Layout.treat'
import Footer from './Footer'

const Layout: FunctionComponent = (props) => {
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

function withTreatTheme(
  WrappedComponent: FunctionComponent,
): FunctionComponent {
  return (props) => (
    <TreatProvider theme={darkTheme}>
      <WrappedComponent {...props} />
    </TreatProvider>
  )
}

export default withTreatTheme(Layout)
