/** @format */

import { style } from 'treat'

export const cardWrapper = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gridGap: '2rem',
  margin: 0,
  padding: 0,

  // Visuals
  listStyleType: 'none',
})

export const title = style({
  // Box model
  margin: 0,

  // Typography
  fontSize: '22px',
})

export const date = style((theme) => ({
  marginTop: '0.5rem',
  color: theme.typeColourLight,
}))
