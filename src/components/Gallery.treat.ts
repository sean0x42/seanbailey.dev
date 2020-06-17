import { style } from 'treat'

export const gallery = style({
  // Box model
  display: 'flex',
  margin: '2rem 0',
  padding: 0,

  // Visuals
  listStyleType: 'none',
  overflowX: 'scroll',
})

export const image = style({
  // Box model
  marginRight: '2rem',

  // Visuals
  borderRadius: '3px',
})
