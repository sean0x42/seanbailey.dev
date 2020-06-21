/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const button = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  marginLeft: '0.5rem',
  padding: '0.5rem',

  // Typography
  color: theme.typeColour,

  // Visuals
  background: 'none',
  border: 0,
  cursor: 'pointer',
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.primary,
    transform: 'translateY(-2px)',
  },
}))
