/** @format */

import { style } from 'treat'

export const spacer = style({
  display: 'none',

  '@media': {
    '(min-width: 650px)': {
      display: 'block',
      gridColumn: 'span 1',
    },
  },
})
