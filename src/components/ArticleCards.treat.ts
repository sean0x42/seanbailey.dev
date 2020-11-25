/** @format */

import { style } from 'treat'

export const title = style({
  // Box model
  margin: '0 !important',

  // Typography
  fontSize: 20,
  lineHeight: '1.4 !important',
})

export const date = style((theme) => ({
  marginTop: '0.5rem',
  color: theme.typeColourLight,
}))

export const snippet = style({})
