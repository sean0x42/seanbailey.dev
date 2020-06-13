/** @format */

import { style, globalStyle } from 'treat'

globalStyle('body', {
  fontSize: '18px',
  fontFamily: "'Inter', sans-serif",
})

globalStyle('p, ol, ul, figcaption', {
  lineHeight: 1.6,
})

export const layout = style(theme => ({
  // Box model
  minHeight: '100vh',

  // Visual
  backgroundColor: theme.black,
}))

function generateSelector(root: string, ...selectors: string[]) {
  return selectors.map(selector => `${root} ${selector}`).join(', ')
}

globalStyle(
  generateSelector(layout, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
  theme => ({
    color: theme.typeColourStrong,
    lineHeight: 1.15,
  }),
)

globalStyle('h1', {
  marginTop: 0,
  fontSize: '3.052rem',
})

globalStyle('h2', { fontSize: '2.441rem' })
globalStyle('h3', { fontSize: '1.953rem' })
globalStyle('h4', { fontSize: '1.563rem' })
globalStyle('h5', { fontSize: '1.25rem' })
