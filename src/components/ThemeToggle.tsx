import React from 'react'
import Copy from './Copy'
import { Theme, useTheme } from '../app/themeContext'

interface ThemeToggleProps {
  setTheme: (theme: Theme) => void
}

const ThemeToggle: React.FunctionComponent<ThemeToggleProps> = (props) => {
  const theme = useTheme()

  function handleClick() {
    props.setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={handleClick}>
      <Copy>Toggle theme</Copy>
    </button>
  )
}

export default ThemeToggle
