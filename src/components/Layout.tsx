import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import Header from './Header'
import SkipLink from './SkipLink'
import ThemeToggle from './ThemeToggle'
import { Theme, ThemeContext } from '../app/themeContext'

const Layout: React.FunctionComponent = (props) => {
  const [theme, setTheme] = useState<Theme>('light')

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

  return (
    <ThemeContext.Provider value={theme}>
      <Helmet>
        <html lang="en-AU" className={theme} />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          async
          defer
          data-domain="seanbailey.dev"
          src="https://stats.seanbailey.dev/js/index.js"
        ></script>
      </Helmet>

      <SkipLink />
      <ThemeToggle setTheme={setTheme} />
      <Header />

      <main id="main">{props.children}</main>

      <Footer />
    </ThemeContext.Provider>
  )
}

export default Layout
