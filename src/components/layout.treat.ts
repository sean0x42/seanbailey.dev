/** @format */

import { style, globalStyle } from 'treat'

globalStyle('body', {
  fontFamily: "'Inter', sans-serif",
})

globalStyle('p, ol, ul, figcaption', {
  lineHeight: 1.6,
})

export const layout = style(theme => ({
  // Box model
  minHeight: '100vh',
  padding: '1.5rem',

  // Visual
  backgroundColor: theme.black,

  '@media': {
    '(min-width: 600px)': {
      padding: '2rem',
    },
  },
}))
