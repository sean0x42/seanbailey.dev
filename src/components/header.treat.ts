/** @format */

import { style } from 'treat'

export const header = style({
  // Positioning
  position: 'relative',

  // Box model
  display: 'grid',
  gridTemplateColumns: '1fr',
  margin: '0 auto',
  padding: '0 0 2rem',
  maxWidth: '100%',
  width: '120ch',

  '@media': {
    '(min-width: 850px)': {
      gridGap: '1rem',
      gridTemplateColumns: '1fr 250px',
    },
    '(min-width: 1070px)': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  },
})
