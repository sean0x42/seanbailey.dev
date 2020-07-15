/** @format */

import { style } from 'treat'

export const container = style({
  // Positioning
  position: 'relative',
  zIndex: 1,

  // Box model
  padding: '12rem 8rem 10rem',
})

export const blurb = style({
  // Typography
  fontSize: 36,
  fontWeight: 400,
})

export const strong = style((theme) => ({
  // Typography
  color: theme.primary,
  fontWeight: 550,
}))
