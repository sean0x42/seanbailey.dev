/**
 * @format
 */

import React, { FunctionComponent } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import '../../node_modules/modern-normalize/modern-normalize.css'

import Header from './header'
import darkTheme from '../dark.treat'
import * as styleRefs from './layout.treat'

const Layout: FunctionComponent = props => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.layout}>
      <Header />
      <div>
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

function withTreatTheme(
  WrappedComponent: FunctionComponent,
): FunctionComponent {
  return props => (
    <TreatProvider theme={darkTheme}>
      <WrappedComponent {...props} />
    </TreatProvider>
  )
}

export default withTreatTheme(Layout)
