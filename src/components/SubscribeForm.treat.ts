/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const form = style((theme) => ({
  // Box model
  padding: '2rem',
  marginTop: '4rem',

  // Visuals
  background: theme.grey90,
  borderRadius: 4,

  '@media': {
    '(min-width: 650px)': {
      display: 'grid',
      gridTemplateColumns: '45px 1fr',
      gridGap: '1rem 2rem',
      alignItems: 'center',
    },

    '(min-width: 1150px)': {
      gridTemplateColumns: '45px 1fr 1fr',
      gridGap: '2.5rem',
      padding: '2.5rem',
    },
  },
}))

export const icon = style((theme) => ({
  // Box model
  height: 48,
  width: 48,
  padding: '0.75rem',
  marginBottom: '1rem',

  // Typography
  color: theme.primary,
  lineHeight: 1,

  // Visuals
  background: theme.grey80,
  borderRadius: '50%',

  '@media': {
    '(min-width: 650px)': {
      marginBottom: 0,
    },
  },
}))

export const title = style({
  // Box model
  margin: '0 !important',

  // Typography
  fontSize: 21,
  lineHeight: '1.6 !important',
})

export const copy = style({
  // Box model
  margin: '0.25rem 0',

  // Typography
  fontSize: 21,
  lineHeight: 1.6,
})

export const highlight = style((theme) => ({
  color: theme.primary,
  fontWeight: 500,
}))

export const input = style((theme) => ({
  // Box model
  padding: '0.75rem 1rem',
  width: '100%',

  // Typography
  fontSize: 19,
  color: theme.typeColour,

  // Visuals
  background: theme.grey80,
  border: 0,
  borderRadius: 4,

  '@media': {
    '(min-width: 650px)': {
      background: 'none',
    },
  },
}))

export const inputWrapper = style((theme) => ({
  // Box model
  marginTop: '1.5rem',

  '@media': {
    '(min-width: 650px)': {
      // Box model
      display: 'flex',
      alignItems: 'stretch',
      gridColumn: '2',
      marginTop: 0,

      // Visuals
      background: theme.grey70,
      borderRadius: 4,
      overflow: 'hidden',
    },

    '(min-width: 1150px)': {
      gridColumn: 'span 1',
    },
  },
}))

export const send = style((theme) => ({
  // Box model
  padding: '0.75rem 1.25rem',
  marginTop: '1rem',
  width: '100%',

  // Typography
  color: theme.typeColour,
  fontWeight: 500,

  // Visuals
  background: theme.grey60,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'all 300ms',
  transitionTimingFunction: snap,

  ':hover': {
    color: theme.grey90,
    background: theme.primary,
  },

  '@media': {
    '(min-width: 650px)': {
      marginTop: 0,
      width: 'unset',
      borderRadius: 0,
    },
  },
}))
