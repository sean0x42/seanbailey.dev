/** @format */

import { style, globalStyle } from 'treat'

export const columns = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '3rem',
  margin: '3rem 0',
})

globalStyle(`${columns} > p`, {
  margin: 0,
})
