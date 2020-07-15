/** @format */

import { style } from 'treat'

export const wrapper = style({
  // Positioning
  position: 'relative',
  zIndex: 1,

  // Box model
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1rem',
  paddingBottom: '1rem',
})

export const banner = style(theme => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1.5rem',
  marginTop: '1rem',

  // Visuals
  background: theme.grey90,
  borderRadius: 3,
}))

export const bannerCopy = style({
  // Box model
  margin: 0,
})

export const bannerIcon = style(theme => ({
  // Box model
  marginRight: '0.75rem',

  // Typography
  color: theme.primary,
}))
