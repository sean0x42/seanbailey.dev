/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const wrapper = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  display: 'grid',
  gridTemplateColumns: '48px 1fr',
  gridGap: '1.5rem',
  alignItems: 'center',
  padding: '1.25rem 2rem',
  marginTop: '2rem',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
  transition: 'all 200ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-3px)',
  },
}))

export const icon = style((theme) => ({
  // Box model
  padding: '0.75rem',

  // Typography
  color: theme.primary,
  lineHeight: 1,

  // Visuals
  background: theme.grey80,
  borderRadius: '50%',
  transition: 'all 300ms',
}))

export const iconInner = style({
  lineHeight: 1,
  verticalAlign: 'middle',
})

export const heading = style({
  // Box model
  margin: 0,

  // Typography
  fontSize: '20px',
  lineHeight: '1.6 !important',
})

export const copy = style({
  // Box model
  margin: '0.25rem 0',
})

export const seeMore = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  margin: 0,

  // Typography
  color: theme.typeColourStrong,

  // Visuals
  transition: 'color 300ms',
}))
