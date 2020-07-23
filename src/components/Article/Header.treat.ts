/** @format */

import { style } from 'treat'

export const image = style((theme) => ({
  // Box model
  marginBottom: '4rem',

  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px',
  transition: 'background-color 300ms',
}))

export const title = style({
  // Positioning
  position: 'relative',

  // Box model
  margin: '1rem 0',

  // Typography
  fontSize: '2rem',
  lineHeight: '1.4 !important',

  '@media': {
    '(min-width: 600px)': {
      fontSize: '3.052rem',
      lineHeight: '1.15 !important',
    }
  }
})

export const date = style((theme) => ({
  // Box model
  marginTop: 0,

  // Typogrephy
  color: theme.typeColourLight,

  // Visuals
  transition: 'color 300ms',
}))
