/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const link = style({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  display: 'block',
  height: '100%',

  // Typography
  textDecoration: 'none',

  // Visuals
  transition: 'transform 200ms, color 300ms, background-color 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-4px)',
  },
})

export const more = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  marginBottom: 0,

  // Typography
  color: theme.typeColourStrong,
  fontWeight: 500,

  // Visuals
  transition: 'color 300ms',

  selectors: {
    [`${link}:hover &`]: {
      color: theme.primary,
    },
  },

  '@media': {
    '(min-width: 600px)': {
      // Positioning
      position: 'absolute',
      bottom: '2rem',
    },
  },
}))

export const icon = style({
  marginLeft: '0.5rem',
})
