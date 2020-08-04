/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const form = style({
  // Box model
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
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
  background: theme.grey80,
  border: 0,
  borderRadius: 4,

  ':focus': {
    outlineColor: theme.primary,
  },

  '@media': {
    '(min-width: 650px)': {
      width: '30ch',
      marginRight: '0.75rem',
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
  fontSize: 18,
  fontWeight: 500,

  // Visuals
  background: theme.grey60,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.grey90,
    background: theme.primary,
  },

  '@media': {
    '(min-width: 650px)': {
      width: 'unset',
    },
  },
}))
