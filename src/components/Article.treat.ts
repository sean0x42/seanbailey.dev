/** @format */

import { style, globalStyle } from 'treat'

export const article = style((theme) => ({
  // Box model
  marginTop: '3rem',

  // Typography
  color: theme.typeColour,
  fontSize: '21px',
  transition: 'color 300ms',
}))

globalStyle(`${article} a`, (theme) => ({
  color: theme.primary,
  transition: 'color 300ms',
}))

globalStyle(`${article} strong`, (theme) => ({
  color: theme.primary,
  fontWeight: 550,
}))

export const attribution = style((theme) => ({
  // Typography
  color: theme.typeColourLight,
}))
