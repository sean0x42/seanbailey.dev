/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import { Moon, Sun } from 'react-feather'
import * as styleRefs from './ThemeToggle.treat'

interface ThemeToggleProps {
  isDarkTheme: boolean
  setDarkTheme(enable: boolean): void
}

function ThemeToggle(props: ThemeToggleProps) {
  const styles = useStyles(styleRefs)

  const handleClick = () => {
    props.setDarkTheme(!props.isDarkTheme)
  }

  return (
    <button onClick={handleClick} role="button" className={styles.button}>
      {props.isDarkTheme ? <Moon /> : <Sun />}
    </button>
  )
}

export default ThemeToggle
