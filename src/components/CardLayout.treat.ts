/** @format */

import { style } from 'treat'

export const layout = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '2rem',
  padding: 0,
  margin: '2rem 0',

  // Visuals
  listStyleType: 'none',

  '@media': {
    '(min-width: 800px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '(min-width: 1150px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})
