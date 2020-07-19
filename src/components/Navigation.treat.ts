/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const navigation = style((theme) => ({
  // Positioning
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 3,

  // Box model
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  padding: 0,

  // Visuals
  background: theme.grey90,
  listStyleType: 'none',

  '@media': {
    '(min-width: 550px)': {
      position: 'relative',
      background: 'none',
    },
  },
}))

export const navigationItem = style((theme) => ({
  // Positioning
  position: 'relative',
  transform: 'translateY(0)',
  zIndex: 3,

  // Box model
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',

  // Typography
  color: theme.typeColourStrong,
  fontSize: '18px',
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: 1,

  // Visuals
  cursor: 'pointer',
  transition: 'transform 300ms, color 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    transform: 'translateY(-2px)',
    color: theme.primary,
  },

  '@media': {
    '(min-width: 550px)': {
      flexDirection: 'row',
      padding: '0.5rem 1rem',
      lineHeight: 1.6,
    },
  },
}))

export const icon = style({
  marginBottom: '0.5rem',

  '@media': {
    '(min-width: 550px)': {
      marginBottom: 0,
      marginRight: '0.5rem',
    },
  },
})
