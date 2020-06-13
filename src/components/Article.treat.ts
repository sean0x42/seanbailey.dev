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
  fontFamily: '"IBM Plex Mono", monospace',

  // Visuals
  background: theme.grey90,
  borderRadius: '3px',
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
