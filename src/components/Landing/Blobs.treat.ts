/** @format */

import { style } from 'treat'

export const blobWrapper = style((theme) => ({
  position: 'relative',
  pointerEvents: 'none',
  color: theme.grey800,
  opacity: 0.7,
}))

export const blobA = style({
  position: 'absolute',
  left: '-22rem',
  top: '24rem',
})

export const blobB = style({
  position: 'absolute',
  right: '-19rem',
  top: '-18rem',
})

export const blobC = style({
  position: 'absolute',
  right: '-20rem',
  top: '75rem',
})

export const blobD = style({
  position: 'absolute',
  right: '20rem',
  top: '21rem',
})
