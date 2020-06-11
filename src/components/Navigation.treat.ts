/** @format */

import { style } from 'treat'

export const navigation = style(theme => ({
  // Positioning
  position: 'relative',

  // Box model
  display: 'flex',
  alignItems: 'center',

  // Visuals
  listStyleType: 'none',

  '::before': {
    // Positioning
    position: 'absolute',
    top: '0.5rem',
    bottom: '-0.5rem',
    right: '0rem',
    left: '4rem',

    // Visuals
    background: theme.grey50,
    opacity: 0.25,

    // Misc
    content: '""',
    pointerEvents: 'none',
  },
}))

export const navigationItem = style(theme => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',

  // Typography
  color: theme.typeColour,
  fontSize: '18px',
  fontWeight: 500,
  textDecoration: 'none',

  // Visuals
  cursor: 'pointer',

  ':hover': {
    color: theme.white,
  },
}))

export const icon = style({
  marginRight: '0.5rem',
})
