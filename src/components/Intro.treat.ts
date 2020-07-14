/** @format */

import { style } from 'treat'

export const blurb = style({
  // Box model
  padding: '10rem',

  // Typography
  fontSize: '36px',
  fontWeight: 450,
})

export const strong = style((theme) => ({
  // Typography
  color: theme.primary,
  fontWeight: 550,
}))
