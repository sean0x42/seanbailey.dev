/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Positioning
  position: 'relative',

  // Box model
  display: 'block',
  height: '100%',

  // Typography
  color: theme.typeColour,
  textDecoration: 'none',

  // Visuals
  background: theme.grey800,
  borderRadius: 4,
  cursor: 'pointer',
}))

export const image = style((theme) => ({
  // Box model
  display: 'block',
  width: '100%',

  // Visuals
  backgroundColor: theme.grey700,
  borderRadius: '3px 3px 0 0',
  transition: 'background-color 300ms',
}))

export const body = style({
  // Box model
  padding: '1.75rem',

  // Visuals
  borderTop: 'none',
  borderRadius: '0 0 3px 3px',

  '@media': {
    '(min-width: 600px)': {
      padding: '2rem',
      paddingBottom: '3.75rem',
    },
  },
})
