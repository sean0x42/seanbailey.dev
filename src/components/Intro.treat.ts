import { style, globalStyle } from 'treat'

export const container = style({
  fontSize: 25,
  padding: '1rem 0rem 0rem',

  '@media': {
    '(min-width: 600px)': {
      fontSize: 34,
      padding: '10rem 4rem 8rem',
    },

    '(min-width: 1100px)': {
      padding: '12rem 6rem 10rem',
    },
  },
})

globalStyle(`${container} p`, {
  margin: '1rem 0',
})

export const strong = style((theme) => ({
  color: theme.typeColourStrong,
  fontWeight: 600,
  textDecoration: 'underline',
  textDecorationColor: theme.primary,
}))
