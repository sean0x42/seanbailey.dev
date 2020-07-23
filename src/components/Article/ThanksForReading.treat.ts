/** @format */

import { style } from 'treat'
import { snap } from '../../app/constants'

export const wrapper = style((theme) => ({
  // Positioning
  transform: 'translateY(0) scale(1)',

  // Box model
  display: 'block',
  alignItems: 'center',
  padding: '1.25rem 2rem',
  marginTop: '2rem',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
  transition: 'all 200ms !important',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-3px) scale(1.005)',
  },

  '@media': {
    '(min-width: 650px)': {
      // Box model
      display: 'grid',
      gridTemplateColumns: '48px 1fr',
      gridGap: '1.5rem',
    },
  },
}))

export const icon = style((theme) => ({
  // Box model
  padding: '0.75rem',
  width: 48,
  height: 48,
  marginBottom: '1rem',

  // Typography
  color: theme.primary,
  lineHeight: 1,

  // Visuals
  background: theme.grey80,
  borderRadius: '50%',

  '@media': {
    '(min-width: 650px)': {
      marginBottom: 0,
    }
  }
}))

export const iconInner = style({
  lineHeight: 1,
  verticalAlign: 'middle',
})

export const heading = style({
  // Box model
  margin: '0 !important',

  // Typography
  fontSize: '21px',
  lineHeight: '1.6 !important',
})

export const copy = style((theme) => ({
  // Box model
  margin: '0.25rem 0',

  // Typography
  color: theme.typeColour,

  // Visuals
  transition: 'color 300ms',
}))

export const seeMore = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  margin: 0,

  // Typography
  color: theme.typeColourStrong,
  fontWeight: 500,

  // Visuals
  transition: 'color 300ms',

  selectors: {
    [`${wrapper}:hover &`]: {
      color: theme.primary,
    },
  },
}))
