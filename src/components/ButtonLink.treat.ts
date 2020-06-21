/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const button = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  display: 'inline-flex',
  alignItems: 'center',
  padding: '1rem 1.5rem',

  // Typography
  color: theme.typeColour,
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: 1,

  // Visuals
  background: theme.grey80,
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'all 200ms',
  transitionTimingFunction: snap,

  ':hover': {
    // Positioning
    transform: 'translateY(-2px)',

    // Typography
    color: theme.typeColourStrong,

    // Visuals
    background: theme.primary,
  },
}))

export const icon = style({
  // Box model
  marginLeft: '0.5rem',
})
