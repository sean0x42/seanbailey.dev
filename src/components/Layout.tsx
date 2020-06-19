/**
 * @format
 */

import React, { FunctionComponent } from 'react'
import { TreatProvider, useStyles } from 'react-treat'
import { Helmet } from 'react-helmet'
import '../../node_modules/modern-normalize/modern-normalize.css'

import { useLocalStorage } from '../app/hooks'
import darkTheme from '../app/dark.treat'
import lightTheme from '../app/light.treat'

import Header from './Header'
import * as styleRefs from './Layout.treat'
import Footer from './Footer'

interface ContainerProps {
  isDarkTheme: boolean
  setDarkTheme(enable: boolean): void
}

/**
 * Layout container
 * This is a separate component so we can make the most of the treat theme.
 */
const Container: FunctionComponent<ContainerProps> = (props) => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.layout}>
      <Helmet>
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
      </Helmet>

      <Header
        isDarkTheme={props.isDarkTheme}
        setDarkTheme={props.setDarkTheme}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

const Layout: FunctionComponent = (props) => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('isDarkTheme', true)

  return (
    <TreatProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme}>
        {props.children}
      </Container>
    </TreatProvider>
  )
}

export default Layout
