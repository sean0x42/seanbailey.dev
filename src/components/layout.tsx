/**
 * @format
 */

import React, { FunctionComponent } from 'react'
import { TreatProvider } from 'react-treat'
import '../../node_modules/modern-normalize/modern-normalize.css'

import Header from './header'
import darkTheme from '../dark.treat'

const Layout: FunctionComponent = props => (
  <TreatProvider theme={darkTheme}>
    <Header />
    <div>
      <main>{props.children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </TreatProvider>
)

export default Layout
