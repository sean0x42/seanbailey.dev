/** @format */

import { style, globalStyle } from 'treat'

export const article = style(theme => ({
  // Box model
  marginTop: '3rem',
  maxWidth: '75ch !important',

  // Typography
  color: theme.typeColour,
  fontSize: '20px',
}))

globalStyle(`${article} code`, theme => ({
  // Box model
  padding: '2px 6px',

  // Typography
  fontSize: '90%',
  fontFamily: '"JetBrains Mono", monospace',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
}))

globalStyle(`${article} pre`, theme => ({
  // Box model
  padding: '0.75em',
  margin: '1.5em 0',

  // Typography
  lineHeight: 1.45,

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
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

globalStyle(`${article} pre .token.function`, theme => ({
  color: theme.tokenFunction,
}))

globalStyle(`${article} pre .token.keyword`, theme => ({
  color: theme.tokenKeyword,
}))

globalStyle(`${article} pre .token.operator`, theme => ({
  color: theme.tokenOperator,
}))

globalStyle(`${article} pre .token.punctuation`, theme => ({
  color: theme.tokenPunctuation,
}))

globalStyle(`${article} pre .token.string`, theme => ({
  color: theme.tokenString,
}))

globalStyle(`${article} pre .token.comment`, theme => ({
  color: theme.tokenComment,
}))

export const image = style(theme => ({
  // Box model
  marginBottom: '5rem',

  // Visuals
  backgroundColor: theme.grey80,
  borderRadius: '3px',
}))

export const title = style(theme => ({
  // Positioning
  position: 'relative',

  // Box model
  marginBottom: '1rem',

  // Typography
  color: theme.typeColourStrong,
  fontSize: '3.052rem',

  '::before': {
    // Positioning
    position: 'absolute',
    top: '-1.5rem',
    left: 0,

    // Box model
    width: '5rem',
    height: '3px',

    // Visuals
    background: theme.grey40,

    // Misc
    content: '""',
  },
}))

export const date = style(theme => ({
  // Box model
  marginTop: 0,

  // Typogrephy
  color: theme.typeColourLight,
}))
