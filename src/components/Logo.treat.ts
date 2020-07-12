/** @format */

import { style } from 'treat'
import { snap } from '../app/constants'

export const logo = style(theme => ({
  // Display
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  // Typography
  color: theme.typeColourStrong,
  fontSize: '30px',
  fontWeight: 650,
  textDecoration: 'none',

  // Visuals
  transition: 'color 300ms',
  transitionTimingFunction: snap,
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
