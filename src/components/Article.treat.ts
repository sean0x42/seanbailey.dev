/** @format */

import { style, globalStyle } from 'treat'

export const article = style((theme) => ({
  // Box model
  marginTop: '3rem',
  maxWidth: '70ch !important',

  // Typography
  color: theme.typeColour,
  fontSize: '21px',
  transition: 'color 300ms',
}))

globalStyle(`${article} a`, (theme) => ({
  color: theme.primary,
  transition: 'color 300ms',
}))
