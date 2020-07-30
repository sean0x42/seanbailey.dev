/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const card = style((theme) => ({
  // Positioning
  position: 'relative',
  transform: 'translateY(0)',

  // Box model
  display: 'block',
  height: '100%',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey90,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'transform 200ms, color 300ms, background-color 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-4px)',
  },
}))

export const image = style((theme) => ({
  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px 3px 0 0',
  transition: 'background-color 300ms',
}))

export const body = style({
  // Box model
  padding: '1.75rem',

  // Visuals
  borderTop: 'none',
  borderRadius: '0 0 3px 3px',

  '@media': {
    '(min-width: 600px)': {
      padding: '2rem',
      paddingBottom: '3.75rem',
    },
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
  fontWeight: 600,

  // Visuals
  transition: 'color 300ms',

  selectors: {
    [`${card}:hover &`]: {
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
