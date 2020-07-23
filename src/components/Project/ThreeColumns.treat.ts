/** @format */

import { style, globalStyle } from 'treat'

export const wrapper = style({
  '@media': {
    '(min-width: 650px)': {
      gridColumn: 'span 2',
    },

    '(min-width: 1000px)': {
      gridColumn: 'span 3',
    }
  }
})

globalStyle(`${wrapper} > *:first-child`, {
  marginTop: 0,
})

globalStyle(`${wrapper} > *:last-child`, {
  marginBottom: 0,
})
