/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const logo = style({
  // Display
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  // Typography
  textDecoration: 'none',
})

export const svg = style((theme) => ({
  // Box model
  width: '260px',
  margin: '0.5rem 0',

  // Typography
  lineHeight: 1,
  verticalAlign: 'middle',

  // Visuals
  fill: theme.typeColourStrong,
  transition: 'fill 300ms',
  transitionTimingFunction: snap,

  selectors: {
    [`${logo}:hover &`]: {
      fill: theme.primary,
    },
  },
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
