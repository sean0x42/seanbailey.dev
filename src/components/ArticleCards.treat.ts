/** @format */

import { style } from 'treat'

export const articleCards = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridGap: '2rem',
  padding: 0,
  margin: '2rem 0',

  // Visuals
  listStyleType: 'none',
})

export const articleCard = style(theme => ({
  // Box model
  display: 'block',
  padding: '1rem',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.grey40,
  borderRadius: '3px',
}))

export const title = style(theme => ({
  // Box model
  marginTop: 0,

  // Typography
  color: theme.typeColourStrong,
  fontSize: '18px',
}))
