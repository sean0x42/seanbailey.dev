/** @format */

import { style, globalStyle } from 'treat'

export const headingWrapper = style({
  // Box model
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  margin: '4rem 0 1.5rem',

  '@media': {
    '(min-width: 550px)': {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
  },
})

globalStyle(`${headingWrapper} a`, {
  display: 'none',

  '@media': {
    '(min-width: 550px)': {
      display: 'flex',
    },
  },
})

export const heading = style({
  position: 'relative',
  zIndex: 0,

  display: 'flex',
  alignItems: 'center',
  margin: '0 !important',
})

export const headingIcon = style((theme) => ({
  marginRight: '1rem',
  color: theme.primary,
}))

export const mobileButton = style({
  '@media': {
    '(min-width: 550px)': {
      display: 'none !important',
    },
  },
})
