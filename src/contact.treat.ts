import { style } from 'treat'

export const wrapper = style({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
})
