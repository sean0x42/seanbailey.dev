/** @format */

import { style } from 'treat'

export const badge = style((theme) => ({
  // Positioning
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,

  // Box model
  display: 'flex',
  alignItems: 'center',
  padding: '0.3rem 0.75rem',

  // Typography
  color: theme.primary,
  fontWeight: 500,

  // Visuals
  background: theme.grey90,
  borderBottomLeftRadius: 3,
  opacity: 0.95,
}))

export const icon = style({
  marginRight: '0.5rem',
})
