/** @format */

import { style } from 'treat'

export const articleCards = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
  gridGap: '2rem',
  padding: 0,
  margin: '2rem 0',

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
