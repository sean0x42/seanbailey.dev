/** @format */

import { style } from 'treat'

export const image = style((theme) => ({
  // Box model
  gridColumn: '1 / 3',

  // Visuals
  backgroundColor: theme.grey800,
  borderRadius: '3px',
  transition: 'background-color 300ms',
  overflow: 'hidden',
}))
