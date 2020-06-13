/** @format */

import { style } from 'treat'

export const blurb = style({
  // Box model
  padding: '9rem',

  // Typography
  fontSize: '34px',
  fontWeight: 450,
})

export const strong = style((theme) => ({
  // Typography
  color: theme.typeColourStrong,
  fontWeight: 700,
}))
