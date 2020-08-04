/** @format */

import { style } from 'treat'

export const wrapper = style((theme) => ({
  // Box model
  margin: '0 auto',
  width: '100%',
  maxWidth: 1350,
  padding: '1.5rem',

  // Typography
  color: theme.typeColour,
}))

export const thin = style({
  maxWidth: '890px !important',
})
