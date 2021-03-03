/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const navigationItem = style((theme) => ({
  // Positioning
  position: 'relative',
  zIndex: 3,

  // Box model
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',

  // Typography
  color: theme.typeColourStrong,
  fontSize: 16,
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: 1,

  // Visuals
  cursor: 'pointer',
  transition: 'color 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.primary,
  },

  '@media': {
    '(min-width: 600px)': {
      // Box model
      flexDirection: 'row',
      padding: '0.5rem 1rem',

      // Typography
      fontSize: 18,
      lineHeight: 1.6,
    },
  },
}))
