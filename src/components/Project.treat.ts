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

globalStyle(`${project} hr`, (theme) => ({
  margin: '8rem 0',
  border: 0,
  borderBottom: '4px solid',
  borderBottomColor: 'currentcolor',
  color: theme.grey70,
}))

globalStyle(`${project} a`, (theme) => ({
  color: theme.primary,
}))
