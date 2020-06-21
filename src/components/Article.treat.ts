/** @format */

import { style, globalStyle } from 'treat'

export const article = style((theme) => ({
  // Box model
  marginTop: '3rem',
  maxWidth: '70ch !important',

  // Typography
  color: theme.typeColour,
  fontSize: '21px',
  transition: 'color 300ms',
}))

globalStyle(`${article} a`, (theme) => ({
  color: theme.primary,
  transition: 'color 300ms',
}))

globalStyle(`${article} .gatsby-resp-image-wrapper`, {
  borderRadius: '3px',
  overflow: 'hidden',
})

globalStyle(`${article} blockquote`, (theme) => ({
  // Typography
  color: theme.typeColourStrong,
  fontSize: '24px',
  fontWeight: 500,
  fontStyle: 'italic',

  // Visuals
  transition: 'color 300ms',
}))

globalStyle(`${article} code`, (theme) => ({
  // Box model
  padding: '2px 6px',

  // Typography
  fontSize: '90%',
  fontFamily: '"JetBrains Mono", monospace',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
  transition: 'background 300ms',
}))

globalStyle(`${article} pre`, (theme) => ({
  // Box model
  padding: '0.75em',
  margin: '1.5em 0',

  // Typography
  lineHeight: 1.45,

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
  transition: 'background 300ms',
}))

globalStyle(`${article} pre code`, {
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

globalStyle(`${article} pre .token.function`, (theme) => ({
  color: theme.tokenFunction,
  transition: 'color 300ms',
}))

globalStyle(`${article} pre .token.keyword`, (theme) => ({
  color: theme.tokenKeyword,
  transition: 'color 300ms',
}))

globalStyle(`${article} pre .token.operator`, (theme) => ({
  color: theme.tokenOperator,
  transition: 'color 300ms',
}))

globalStyle(`${article} pre .token.punctuation`, (theme) => ({
  color: theme.tokenPunctuation,
  transition: 'color 300ms',
}))

globalStyle(`${article} pre .token.string`, (theme) => ({
  color: theme.tokenString,
  transition: 'color 300ms',
}))

globalStyle(`${article} pre .token.comment`, (theme) => ({
  color: theme.tokenComment,
  transition: 'color 300ms',
}))

export const image = style((theme) => ({
  // Box model
  marginBottom: '5rem',

  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px',
  transition: 'background-color 300ms',
}))

export const title = style({
  // Positioning
  position: 'relative',

  // Box model
  margin: '1rem 0',

  // Typography
  fontSize: '3.052rem',
})

export const date = style((theme) => ({
  // Box model
  marginTop: 0,

  // Typogrephy
  color: theme.typeColourLight,

  // Visuals
  transition: 'color 300ms',
}))
