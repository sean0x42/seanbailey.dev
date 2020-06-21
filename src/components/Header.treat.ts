/** @format */

import { style } from 'treat'

export const header = style((theme) => ({
  background: theme.grey90,
  transition: 'background 300ms',
}))

export const wrapper = style({
  // Positioning
  position: 'relative',

  // Box model
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1rem',
  paddingBottom: '1rem',
})

export const navWrapper = style({
  display: 'flex',
  alignItems: 'center',
})
