/** @format */

import { style, globalStyle } from 'treat'

export const project = style((theme) => ({
  // Box model
  marginTop: '3rem',

  // Typography
  color: theme.typeColour,
  fontSize: '21px',
  transition: 'color 300ms',
}))

globalStyle(`${project} a`, (theme) => ({
  color: theme.primary,
}))
