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
  background: theme.grey700,
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'transform 200ms, color 200ms, background 200ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-2px)',
    color: theme.grey800,
    background: theme.primary,
  },

  ':focus': {
    transform: 'translateY(-2px)',
    color: theme.grey800,
    background: theme.primary,
    outline: 'none !important',
  },
}))

export const icon = style({
  // Box model
  marginLeft: '0.5rem',
})
