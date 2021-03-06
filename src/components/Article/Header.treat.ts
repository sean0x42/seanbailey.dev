/** @format */

import { style } from 'treat'

export const image = style((theme) => ({
  // Visuals
  backgroundColor: theme.grey700,
  borderRadius: 3,
  transition: 'background-color 300ms',
}))

export const title = style({
  // Positioning
  position: 'relative',

  // Box model
  margin: '1rem 0',

  // Typography
  fontSize: 32,
  fontWeight: 700,
  lineHeight: '1.2 !important',

  '@media': {
    '(min-width: 600px)': {
      fontSize: 48,
      lineHeight: '1.15 !important',
    },
  },
})

export const date = style((theme) => ({
  // Box model
  marginTop: 0,

  // Typogrephy
  color: theme.typeColourLight,

  // Visuals
  transition: 'color 300ms',
}))
