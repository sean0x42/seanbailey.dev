/** @format */

import { style } from 'treat'

export const social = style((theme) => ({
  // Positioning
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,

  // Box model
  display: 'grid',
  gridGap: '1rem',
  gridTemplateColumns: '1fr 1fr 1fr',
  padding: '0 1rem',
  margin: 0,

  // Visuals
  background: theme.black,
  listStyleType: 'none',

  '@media': {
    '(min-width: 850px)': {
      // Positioning
      position: 'relative',
      bottom: 'unset',
      left: 'unset',
      right: 'unset',
      zIndex: 'unset',

      // Box model
      display: 'flex',
      alignItems: 'flex-start',
      gridGap: 'unset',
      gridTemplateColumns: 'unset',
      padding: 0,

      // Visuals
      background: 'transparent',

      '::before': {
        // Positioning
        position: 'absolute',
        right: '3rem',
        top: '2rem',
        left: 0,
        zIndex: -1,

        // Box model
        height: '2rem',

        // Visuals
        background: theme.grey400,
        opacity: 0.25,

        // Misc
        content: '""',
        pointerEvents: 'none',
      },
    },
    '(min-width: 1070px)': {
      // Positioning
      position: 'absolute',
      right: '3rem',
      top: '4rem',
      zIndex: 10,

      // Box model
      alignItems: 'center',
      marginLeft: 'auto',

      '::before': {
        bottom: '0.25rem',
        right: '2rem',
        top: 'unset',
      },
    },
  },
}))

export const socialItem = style((theme) => ({
  // Box model
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  transform: 'translateY(0)',

  // Typography
  color: theme.typeColour,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: 1,
  textDecoration: 'none',

  // Visuals
  fill: theme.grey000,

  // Misc
  transition: 'all 100ms',

  ':hover': {
    fill: theme.white,
    transform: 'translateY(-2px)',
  },

  '@media': {
    '(min-width: 850px)': {
      flexDirection: 'row',
      padding: '0.5rem 1rem',
    },
    '(min-width: 1070px)': {
      padding: '1rem 1.25rem',
    },
  },
}))

export const socialIcon = style({
  // Box model
  height: '30px',
  marginBottom: '0.5rem',

  // Typography
  verticalAlign: 'middle',

  '@media': {
    '(min-width: 850px)': {
      height: '40px',
    },
  },
})

export const socialTitle = style({
  '@media': {
    '(min-width: 850px)': {
      display: 'none',
    },
  },
})
