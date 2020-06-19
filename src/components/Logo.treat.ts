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

export const name = style({
  // Box model
  margin: 0,

  // Typography
  fontSize: '28px',
  fontWeight: 650,
  lineHeight: 1,
})

export const dotdev = style((theme) => ({
  color: theme.grey20,
  transition: 'color 300ms',
}))

export const subheading = style((theme) => ({
  // Box model
  margin: '0.25rem 0',

  // Typography
  color: theme.grey20,
  fontSize: '19px',
  fontWeight: 500,

  // Visuals
  transition: 'color 300ms',

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
