/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const form = style({
  // Box model
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gridColumn: '2 / 3',
  marginTop: '1.5rem',

  '@media': {
    '(min-width: 650px)': {
      flexDirection: 'row',
      marginTop: 0,
    },
  },
})

export const input = style((theme) => ({
  // Box model
  padding: '0.75rem 1rem',
  marginBottom: '1rem',
  width: '100%',

  // Typography
  fontSize: 19,
  color: theme.typeColour,

  // Visuals
  background: theme.grey700,
  border: 0,
  borderRadius: 4,

  ':focus': {
    outlineColor: theme.primary,
  },

  '@media': {
    '(min-width: 650px)': {
      marginBottom: 0,
    },
  },
}))

export const send = style((theme) => ({
  // Box model
  padding: '0.75rem 1.25rem',
  width: '100%',

  // Typography
  color: theme.typeColour,
  fontSize: 19,
  fontWeight: 500,

  // Visuals
  background: theme.grey500,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'color 300ms, background 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.grey800,
    background: theme.primary,
  },

  ':focus': {
    color: theme.grey800,
    background: theme.primary,
    outline: 'none !important',
  },

  '@media': {
    '(min-width: 650px)': {
      width: 'unset',
    },
  },
}))

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '@media': {
    '(min-width: 650px)': {
      marginRight: '0.75rem',
      maxWidth: '30ch',
    },
  },
})
