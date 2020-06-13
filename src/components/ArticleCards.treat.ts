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

export const articleCard = style((theme) => ({
  // Positioning
  transform: 'translateY(0)',

  // Box model
  display: 'block',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey90,
  cursor: 'pointer',
  transition: 'transform 200ms',
  transitionTimingFunction: theme.snap,

  ':hover': {
    transform: 'translateY(-4px)',
  },
}))

export const articleCardBody = style({
  // Box model
  padding: '2rem',

  // Visuals
  borderTop: 'none',
  borderRadius: '0 0 3px 3px',
})

export const image = style((theme) => ({
  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px 3px 0 0',
}))

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

export const readMore = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  marginBottom: 0,

  // Typography
  color: theme.typeColourStrong,
}))
