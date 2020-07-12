/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Box model
  margin: '0 auto',
  width: '100%',
  maxWidth: '1350px',
  padding: '1.5rem',

  // Typography
  color: theme.typeColour,
}))
