/** @format */

import { style } from 'treat'

export const layout = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '2rem',
  alignItems: 'center',
  margin: '2rem 0',
})

export const wide = style({
  margin: '3rem -20rem',
  maxWidth: '100vw',
})

export const left = style({
  gridTemplateColumns: '2fr 1fr',
})

export const right = style({
  gridTemplateColumns: '1fr 2fr',
})
