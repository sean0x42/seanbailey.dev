/** @format */

import { style } from 'treat'

export const layout = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
  alignItems: 'center',
  margin: '2rem 0',
})

export const wide = style({
  margin: '3rem -20rem',
  maxWidth: '100vw',
})
