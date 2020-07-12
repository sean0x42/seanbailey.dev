/** @format */

import { style } from 'treat'

export const image = style((theme) => ({
  // Box model
  marginBottom: '4rem',

  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px',
  transition: 'background-color 300ms',
}))

export const title = style({
  // Positioning
  position: 'relative',

  // Box model
  margin: '1rem 0',

  // Typography
  fontSize: '3.052rem',
})

export const date = style((theme) => ({
  // Box model
  marginTop: 0,

  // Typogrephy
  color: theme.typeColourLight,

  // Visuals
  transition: 'color 300ms',
}))
