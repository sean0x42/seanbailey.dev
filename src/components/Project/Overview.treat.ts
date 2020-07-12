import { style, globalStyle } from 'treat'

export const overview = style({
  // Box model
  gridColumn: '1 / 3'
})

globalStyle(`${overview} p`, {
  margin: 0,
})
