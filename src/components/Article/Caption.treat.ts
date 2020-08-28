/** @format */

import { style } from 'treat'

export const caption = style((theme) => ({
  // Box model
  margin: '0 1.5rem',

  // Typography
  color: theme.typeColourLight,
  fontSize: 19,

  '@media': {
    '(min-width: 600px)': {
      margin: '0 2rem',
      fontSize: 'unset',
      textAlign: 'center',
    },
  },
}))
