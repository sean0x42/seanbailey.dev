/** @format */

import { style } from 'treat'

export const title = style({
  // Box model
  margin: 0,

  // Typography
  fontSize: '22px',
})

export const date = style((theme) => ({
  marginTop: '0.5rem',
  color: theme.typeColourLight,
}))
