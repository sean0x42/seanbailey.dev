/** @format */

import { style, globalStyle } from 'treat'

export const wrapper = style({
  '@media': {
    '(min-width: 650px)': {
      gridColumn: 'span 2',
    },
  },
})

globalStyle(`${wrapper} > *:first-child`, {
  marginTop: 0,
})

globalStyle(`${wrapper} > *:last-child`, {
  marginBottom: 0,
})
