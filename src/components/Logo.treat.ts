/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const logo = style((theme) => ({
  // Positoning
  position: 'relative',

  // Box model
  padding: '0.5rem 1rem',
  marginLeft: '-1rem',

  // Typography
  color: theme.typeColourStrong,
  fontSize: '24px',
  fontWeight: 600,
  textDecoration: 'none',

  // Visuals
  cursor: 'pointer',
  transition: 'color 300ms',
  transitionTimingFunction: snap,

  '::before': {
    // Positoning
    position: 'absolute',
    left: '1rem',
    right: '1rem',
    top: '-2rem',

    // Box model
    height: '0.75rem',

    // Visuals
    background: theme.primary,

    // Misc
    content: '""',
    pointerEvents: 'none',
  },

  ':hover': {
    color: theme.primary,
  },
}))
