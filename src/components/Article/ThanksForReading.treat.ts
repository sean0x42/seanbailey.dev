/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Box model
  padding: '1.5rem',
  marginTop: '2rem',

  // Visuals
  background: theme.grey800,
  borderRadius: '3px',

  '@media': {
    '(min-width: 600px)': {
      padding: '2rem',
    },

    '(min-width: 650px)': {
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: '48px 1fr',
      gridGap: '2rem 1.5rem',
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
  background: theme.grey700,
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
