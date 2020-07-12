/** @format */

import { style, globalStyle } from 'treat'

globalStyle('body', {
  fontSize: '18px',
  fontFamily: "'Inter', sans-serif",
  ['WebkitFontSmoothing' as string]: 'antialiased',
  ['MozOsxFontSmoothing' as string]: 'grayscale',
})

globalStyle('p, ol, ul, figcaption', {
  lineHeight: 1.6,
})

export const layout = style((theme) => ({
  // Box model
  minHeight: '100vh',
  paddingTop: 1,

  // Visual
  backgroundColor: theme.black,
  borderBottom: `6px solid ${theme.primary}`,
}))

function generateSelector(root: string, ...selectors: string[]) {
  return selectors.map((selector) => `${root} ${selector}`).join(', ')
}

globalStyle(
  generateSelector(layout, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'),
  (theme) => ({
    margin: '3rem 0 1.05rem',
    color: theme.typeColourStrong,
    lineHeight: 1.15,
  }),
)

globalStyle('h1', {
  marginTop: 0,
  fontSize: '1.802rem',
})

globalStyle('h2', { fontSize: '1.602rem' })
globalStyle('h3', { fontSize: '1.424rem' })
globalStyle('h4', { fontSize: '1.266rem' })
globalStyle('h5', { fontSize: '1.125rem' })

globalStyle(`${layout} .gatsby-resp-image-wrapper`, {
  borderRadius: '3px',
  overflow: 'hidden',
})

globalStyle(`${layout} blockquote`, (theme) => ({
  // Box model
  margin: '2rem 0',
  paddingLeft: '1.5rem',

  // Typography
  color: theme.typeColourLight,
  fontStyle: 'italic',

  // Visuals
  borderLeft: `4px solid ${theme.primary}`,
}))

globalStyle(`${layout} code`, (theme) => ({
  // Box model
  padding: '2px 6px',

  // Typography
  fontSize: '90%',
  fontFamily: '"JetBrains Mono", monospace',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
}))

globalStyle(`${layout} pre`, (theme) => ({
  // Box model
  padding: '0.75em',
  margin: '1.5em 0',

  // Typography
  lineHeight: 1.45,

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
}))

globalStyle(`${layout} pre code`, {
  // Box model
  display: 'inline',
  padding: 0,
  margin: 0,

  // Typography
  fontSize: '90%',

  // Visuals
  backgroundColor: 'initial',
  border: 0,
})

globalStyle(`${layout} pre .token.function`, (theme) => ({
  color: theme.tokenFunction,
}))

globalStyle(`${layout} pre .token.keyword`, (theme) => ({
  color: theme.tokenKeyword,
}))

globalStyle(`${layout} pre .token.operator`, (theme) => ({
  color: theme.tokenOperator,
}))

globalStyle(`${layout} pre .token.punctuation`, (theme) => ({
  color: theme.tokenPunctuation,
}))

globalStyle(`${layout} pre .token.string`, (theme) => ({
  color: theme.tokenString,
}))

globalStyle(`${layout} pre .token.comment`, (theme) => ({
  color: theme.tokenComment,
}))
