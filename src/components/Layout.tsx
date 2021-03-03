import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Footer from './Footer'
import SkipLink from './SkipLink'

const Layout: React.FunctionComponent = (props) => (
  <div>
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

export default Layout
