/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const navigation = style({
  // Box model
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: 0,

  // Visuals
  listStyleType: 'none',
})

export const navigationItem = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

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
  transition: 'transform 300ms, color 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-2px)',
    color: theme.primary,
  },
}))

export const icon = style({
  marginRight: '0.5rem',
})
