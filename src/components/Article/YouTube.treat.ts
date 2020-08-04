/** @format */

import { style } from 'treat'

export const video = style({
  margin: '1.25rem 0',
  height: 350,
  width: '100vw',

  '@media': {
    '(min-width: 600px)': {
      height: 450,
      maxWidth: '100%',

      // Visuals
      borderRadius: 4,
    },
  },
})
