/** @format */

import { style } from 'treat'

export const figure = style({
  margin: '3rem 0',
})

export const caption = style((theme) => ({
  // Box model
  margin: '0 1rem',

  // Typography
  color: theme.typeColourLight,
  fontSize: 16,
  textAlign: 'center',

  '@media': {
    '(min-width: 600px)': {
      margin: '0 2rem',
      fontSize: 'unset',
    },
  },
}))
