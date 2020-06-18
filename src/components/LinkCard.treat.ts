/** @format */

import { style } from 'treat'

export const card = style((theme) => ({
  // Positioning
  position: 'relative',
  transform: 'translateY(0)',

  // Box model
  display: 'block',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey90,
  cursor: 'pointer',
  transition: 'transform 200ms',
  transitionTimingFunction: theme.snap,

  ':hover': {
    transform: 'translateY(-4px)',
  },
}))

export const image = style((theme) => ({
  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px 3px 0 0',
}))

export const body = style({
  // Box model
  padding: '2rem',

  // Visuals
  borderTop: 'none',
  borderRadius: '0 0 3px 3px',
})

export const more = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  marginBottom: 0,

  // Typography
  color: theme.typeColourStrong,
}))
