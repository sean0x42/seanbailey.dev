/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import Wrapper from './Wrapper'
import * as styleRefs from './Footer.treat'

function Footer() {
  const styles = useStyles(styleRefs)

  return (
    <footer className={styles.footer}>
      <Wrapper> 
        Sean Bailey &copy; {new Date().getFullYear()}
      </Wrapper>
    </footer>
  )
}

export default Footer
