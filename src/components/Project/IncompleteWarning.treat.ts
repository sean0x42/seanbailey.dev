/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Box model
  display: 'block',
  alignItems: 'center',
  padding: '1.5rem 2rem',
  marginTop: '2rem',

  // Visuals
  background: theme.grey90,
  borderRadius: 3,

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
    },
  },
}))

export const iconInner = style({
  lineHeight: 1,
  verticalAlign: 'middle',
})

export const copy = style({
  margin: 0,
})
