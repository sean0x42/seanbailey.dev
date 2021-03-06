/** @format */

import { style, globalStyle } from 'treat'

export const article = style((theme) => ({
  // Box model
  marginTop: '3rem',

  // Typography
  color: theme.typeColour,
  fontSize: 19,
  transition: 'color 300ms',

  '@media': {
    '(min-width: 430px)': {
      fontSize: 22,
    },
  },
}))

globalStyle(`${article} a`, (theme) => ({
  color: theme.primary,
  transition: 'color 300ms',
}))

globalStyle(`${article} strong`, (theme) => ({
  color: theme.primary,
  fontWeight: 550,
}))

globalStyle(`${article} .footnotes`, {
  fontSize: 19,
  marginTop: '3rem',
})

globalStyle(`${article} .footnotes hr`, (theme) => ({
  borderColor: theme.grey500,
}))

export const attribution = style((theme) => ({
  // Typography
  color: theme.typeColourLight,
}))

export const squiggle = style((theme) => ({
  // Box model
  margin: '4rem auto',
  maxWidth: 50,

  // Visuals
  border: 0,
  borderColor: theme.primary,
  borderWidth: 3,
  borderBottomStyle: 'solid',
}))
