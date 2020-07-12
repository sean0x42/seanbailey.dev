/** @format */

import { style } from 'treat'

export const header = style({
  gridColumn: '1 / 3',
})

export const title = style({
  // Positioning
  position: 'relative',

  // Box model
  marginBottom: '0.5rem !important',
})

export const date = style((theme) => ({
  // Box model
  margin: 0,

  // Typogrephy
  color: theme.typeColourLight,

  // Visuals
  transition: 'color 300ms',
}))
