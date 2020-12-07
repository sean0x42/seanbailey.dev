import { style } from 'treat'
import { snap } from '../app/constants'

export const button = style((theme) => ({
  zIndex: 1,

  // Box model
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0',

  // Typography
  color: theme.typeColourStrong,
  fontWeight: 500,
  textDecoration: 'none',
  lineHeight: 1,

  // Visuals
  cursor: 'pointer',
  transition: 'color 200ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.primary,
  },

  ':focus': {
    color: theme.primary,
    outlineOffset: '0.75rem',
  },
}))

export const icon = style({
  // Box model
  marginLeft: '0.5rem',
})
