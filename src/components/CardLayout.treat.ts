import { style } from 'treat'

export const layout = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
  padding: 0,
  margin: '2rem 0',

  // Visuals
  listStyleType: 'none',
})
