import { style } from 'treat'

export const article = style(theme => ({
  // Box model
  marginTop: '3rem',
  maxWidth: '75ch !important',

  // Typography
  color: theme.typeColour,
  fontSize: '20px',
}))
