/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const form = style((theme) => ({
  // Box model
  padding: '1.5rem',
  maxWidth: 410,

  // Visuals
  background: theme.grey800,
  borderRadius: 4,

  '@media': {
    '(min-width: 650px)': {
      padding: '2rem',
    },
  },
}))

export const field = style({
  margin: '0 0 1.5rem',
})

export const fieldPot = style({
  position: 'absolute',
  left: -1000,
  zIndex: -1,
  pointerEvents: 'none',
})

export const label = style((theme) => ({
  // Box model
  display: 'block',
  marginBottom: '0.5rem',

  // Typography
  color: theme.typeColourLight,
  fontWeight: 500,
  lineHeight: 1,
}))

export const input = style((theme) => ({
  // Box model
  padding: '0.75rem',
  width: '100%',

  // Typography
  color: theme.typeColour,

  // Visuals
  background: theme.grey700,
  border: 0,
  borderRadius: 4,

  selectors: {
    'textarea&': {
      minHeight: '8rem',
      resize: 'vertical',
    },
  },
}))

export const send = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  padding: '0.75rem',
  width: '100%',

  // Typography
  color: theme.typeColour,
  fontWeight: 500,

  // Visuals
  background: theme.grey600,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.grey800,
    background: theme.primary,
    transform: 'translateY(-2px)',
  },
}))
