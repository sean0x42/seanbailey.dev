/** @format */

import { style } from 'treat'

export const video = style({
  margin: '1.5rem -1.5rem',
  height: 350,
  width: '100vw',

  '@media': {
    '(min-width: 600px)': {
      margin: '2rem 0',
      maxWidth: '100%',

      // Visuals
      borderRadius: 4,
    },
  },
})
