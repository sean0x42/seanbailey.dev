/** @format */

import { style } from 'treat'

export const logo = style({
  // Display
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  // Typography
  textDecoration: 'none',
})

export const name = style((theme) => ({
  // Box model
  margin: 0,

  // Typography
  fontSize: '28px',
  fontWeight: 650,
  lineHeight: 1,
  color: theme.white,
}))

export const dotdev = style(theme => ({
  color: theme.grey20,
}))

export const subheading = style((theme) => ({
  // Box model
  margin: '0.25rem 0',

  // Typography
  color: theme.grey20,
  fontSize: '19px',
  fontWeight: 500,

  '::after': {
    content: '"_"',
    animationDirection: 'alternate',
    animationDuration: '600ms',
    animationIterationCount: 'infinite',
    animationName: '@keyframes',
    animationTimingFunction: 'cubic-bezier(1, 0, 0, 1)',

    '@keyframes': {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
  },
}))

export const triangle = style((theme) => ({
  // Box model
  display: 'none',

  '@media': {
    '(min-width: 560px)': {
      // Box model
      display: 'block',
      marginBottom: 0,
      marginRight: '1.25rem',
      height: '82px',
      width: '82px',

      // Visuals
      opacity: 1,
      stroke: theme.grey10,
    },
  },
}))
