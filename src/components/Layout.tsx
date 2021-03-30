import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import Header from './Header'
import SkipLink from './SkipLink'
import { Theme, ThemeContext } from '../app/themeContext'

const Layout: React.FunctionComponent = (props) => {
  const [_theme, setTheme] = useState<Theme>('dark')

  function onColorSchemeChange(event: MediaQueryListEvent) {
    setTheme(event.matches ? 'dark' : 'light')
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Set initial preference
    if (mediaQuery.matches) {
      setTheme('dark')
    }

    // Respond to further changes to preference
    mediaQuery.addEventListener('change', onColorSchemeChange)
    return () => mediaQuery.removeEventListener('change', onColorSchemeChange)
  }, [])

  // Temporarily disable light theme.
  return (
    <ThemeContext.Provider value="dark">
      <Helmet>
        <html lang="en-AU" className="dark" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          defer
          data-domain="seanbailey.dev"
          src="https://stats.seanbailey.dev/js/index.js"
        ></script>
      </Helmet>

      <SkipLink />
      <Header setTheme={setTheme} />

      <main id="main">{props.children}</main>

      <Footer />
    </ThemeContext.Provider>
  )
}

export default Layout
