/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const footer = style({
  // Box model
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  marginTop: '4rem',
  padding: '1rem 0',
})

export const copyright = style({
  // Box model
  marginBottom: 0,

  // Typography
  textAlign: 'center',
})

export const social = style({
  // Box model
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,

  // Visuals
  listStyleType: 'none',
})

export const socialItem = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  display: 'block',
  padding: '0.5rem 1rem',

  // Typography
  color: theme.typeColourStrong,
  textDecoration: 'none',
  lineHeight: 1,

  // Visuals
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-2px)',
    color: theme.primary,
  },
}))

export const socialIcon = style({
  lineHeight: 1,
  verticalAlign: 'middle',
})
