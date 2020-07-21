import { style } from 'treat'

export const desktop = style({
  display: 'none',

  '@media': {
    '(min-width: 800px)': {
      display: 'unset',
    }
  }
})
