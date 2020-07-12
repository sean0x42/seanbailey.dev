/** @format */

import { style } from 'treat'

export const project = style((theme) => ({
  // Box model
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
  marginTop: '3rem',

  // Typography
  color: theme.typeColour,
  fontSize: '21px',
  transition: 'color 300ms',
}))
