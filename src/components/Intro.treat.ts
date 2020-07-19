/** @format */

import { style } from 'treat'

export const container = style({
  // Positioning
  position: 'relative',
  zIndex: 1,

  // Box model
  padding: '3rem 0rem 0rem',

  '@media': {
    '(min-width: 600px)': {
      padding: '10rem 4rem 8rem',
    },

    '(min-width: 1100px)': {
      padding: '12rem 8rem 10rem',
    },
  },
})

export const blurb = style({
  // Typography
  fontSize: 30,
  fontWeight: 400,

  '@media': {
    '(min-width: 600px)': {
      fontSize: 36,
    },
  },
})

export const strong = style((theme) => ({
  // Typography
  color: theme.primary,
  fontWeight: 550,
}))
