/** @format */

import { style, globalStyle } from 'treat'

export const figure = style({
  margin: '3rem 0',
})

export const caption = style((theme) => ({
  // Box model
  margin: '0 2rem',

  // Typography
  color: theme.typeColourLight,
  textAlign: 'center',
}))
