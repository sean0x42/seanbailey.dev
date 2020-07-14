/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Box model
  display: 'grid',
  gridTemplateColumns: '48px 1fr',
  gridGap: '1.5rem',
  alignItems: 'center',
  padding: '1.5rem 2rem',
  marginTop: '2rem',

  // Visuals
  background: theme.grey90,
  borderRadius: 3,
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
}))

export const iconInner = style({
  lineHeight: 1,
  verticalAlign: 'middle',
})

export const copy = style({
  margin: 0,
})
