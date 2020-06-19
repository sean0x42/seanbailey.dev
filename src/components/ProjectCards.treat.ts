/** @format */

import { style } from 'treat'

export const title = style({
  // Box model
  margin: 0,

  // Typography
  fontSize: '22px',
  lineHeight: '1.4 !important',
})

export const date = style((theme) => ({
  marginTop: '0.5rem',
  color: theme.typeColourLight,
}))
