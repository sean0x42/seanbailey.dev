/** @format */

import { style } from 'treat'

export const compass = style((theme) => ({
  // Positioning
  position: 'absolute',
  top: '0',
  right: '0',

  // Box model
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '2px 0 0',
  padding: 0,

  // Typography
  fontSize: '13px',
  fontWeight: 500,
  color: theme.grey40,

  // Visual
  listStyleType: 'none',
  overflow: 'hidden',

  '@media': {
    '(min-width: 850px)': {
      gridColumn: '1 / 3',
    },
  },
}))

export const minor = style((theme) => ({
  // Box model
  height: '0.4rem',
  width: '2px',

  // Visuals
  background: theme.grey70,
}))

export const major = style((theme) => ({
  // Positioning
  position: 'relative',

  // Box model
  paddingTop: '1rem',
  width: '3.2rem',

  // Typography
  textAlign: 'center',

  '::before': {
    // Positioning
    position: 'absolute',
    left: 'calc(50% - 1px)',
    top: 0,
    transform: 'translateX(50%)',

    // Box model
    display: 'block',
    height: '0.75rem',
    width: '2px',

    // Visuals
    backgroundColor: theme.grey60,

    // Misc
    content: '""',
  },

  '@media': {
    '(min-width: 1070px)': {
      width: '2.4rem',
    },
    '(min-width: 1280px)': {
      width: '3.2rem',
    },
  },
}))
