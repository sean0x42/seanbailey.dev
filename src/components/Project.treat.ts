/** @format */

import { style, globalStyle } from 'treat'

export const project = style((theme) => ({
  // Box model
  marginTop: '3rem',

  // Typography
  color: theme.typeColour,
  fontSize: 19,
  transition: 'color 300ms',

  '@media': {
    '(min-width: 430px)': {
      fontSize: 21,
    },
  },
}))

globalStyle(`${project} a`, (theme) => ({
  color: theme.primary,
}))
