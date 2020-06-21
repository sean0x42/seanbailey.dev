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
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
})

export const navWrapper = style({
  display: 'flex',
  alignItems: 'center',
})
