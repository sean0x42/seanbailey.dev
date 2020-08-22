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

globalStyle(`${project} hr`, (theme) => ({
  // Box model
  margin: '4rem 0',

  // Typography
  color: theme.grey70,

  // Visuals
  border: 0,
  borderBottom: '4px solid',
  borderBottomColor: 'currentcolor',

  '@media': {
    '(min-width: 650px)': {
      margin: '8rem 0',
    },
  },
}))
