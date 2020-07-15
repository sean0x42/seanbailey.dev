/** @format */

import { style } from 'treat'

export const grid = style((theme) => ({
  // Position
  position: 'absolute',
  bottom: '-21rem',
  left: '-9rem',
  zIndex: -1,

  // Box model
  height: '22rem',

  // Visuals
  fill: theme.grey70,

  // Misc
  pointerEvents: 'none',
}))
