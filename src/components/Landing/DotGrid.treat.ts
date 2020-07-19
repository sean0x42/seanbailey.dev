/** @format */

import { style } from 'treat'

export const grid = style((theme) => ({
  // Position
  position: 'absolute',
  zIndex: -1,

  // Visuals
  fill: theme.grey70,

  // Misc
  pointerEvents: 'none',
}))
