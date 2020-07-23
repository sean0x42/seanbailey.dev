/** @format */

import { style, globalStyle } from 'treat'

export const columns = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '3rem',
  margin: '3rem 0',

  '@media': {
    '(min-width: 650px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '(min-width: 1000px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

globalStyle(`${columns} > p`, {
  margin: 0,
})
