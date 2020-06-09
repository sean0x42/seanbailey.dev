/** @format */

import { style } from 'treat'

export const header = style({
  // Positioning
  position: 'relative',

  // Box model
  display: 'grid',
  gridTemplateColumns: '1fr',
  margin: '0 auto',
  padding: '0 0 2rem',
  maxWidth: '100%',
  width: '100%',
})

export const nameWrapper = style({
  // Box model
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '1.5rem 0',
})

export const name = style({
  // Positioning
  position: 'relative',
  zIndex: 1,

  // Display
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingTop: '2px',
})

export const triangle = style(theme => ({
  // Box model
  display: 'none',

  '@media': {
    '(min-width: 560px)': {
      // Box model
      display: 'block',
      marginBottom: 0,
      marginRight: '2rem',
      height: '82px',
      width: '82px',

      // Visuals
      opacity: 1,
      stroke: theme.grey10,
    },
  },
}))
