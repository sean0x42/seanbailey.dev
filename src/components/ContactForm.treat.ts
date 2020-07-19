/** @format */

import { style, globalStyle } from 'treat'
import { snap } from '../app/constants'

export const form = style((theme) => ({
  // Box model
  padding: '2rem',

  // Visuals
  background: theme.grey90,
  borderRadius: 4,
  zIndex: 1,
}))

export const field = style((theme) => ({
  margin: '0 0 1.5rem',
}))

export const fieldPot = style({
  position: 'absolute',
  left: '-100%',
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
  background: theme.grey80,
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
  background: theme.grey70,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.typeColourStrong,
    background: theme.primary,
    transform: 'translateY(-2px)',
  },
}))
