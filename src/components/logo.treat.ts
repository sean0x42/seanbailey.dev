import { style } from 'treat'

export const nameWrapper = style({
  // Box model
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '1.5rem 0',

  // Typography
  textDecoration: 'none',

  '@media': {
    '(min-width: 560px)': {
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    '(min-width: 850px)': {
      justifyContent: 'unset',
      margin: 0,
    },
  },
})

export const name = style(theme => ({
  // Positioning
  position: 'relative',
  zIndex: 1,

  // Display
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  paddingTop: '2px',

  '::before': {
    // Positioning
    position: 'absolute',
    left: '1.5rem',
    bottom: '1em',
    right: '-1.5em',
    zIndex: -1,

    // Box model
    height: '3em',

    // Visuals
    backgroundColor: theme.grey50,
    opacity: 0.25,

    // Misc
    content: '""',
    pointerEvents: 'none',
  }
}))

export const nameHeading = style(theme => ({
  // Box model
  margin: 0,

  // Typography
  fontSize: '40px',
  fontWeight: 700,
  letterSpacing: '2px',
  lineHeight: 1,
  textTransform: 'uppercase',
  color: theme.white,

  '@media': {
    '(min-width: 560px)': {
      fontSize: '46px',
    },
  },
}))

export const nameSubheading = style(theme => ({
  // Box model
  margin: '0.5rem 0',

  // Typography
  color: theme.grey20,
  fontSize: '19px',
  fontWeight: 500,

  '::after': {
    content: '"_"',
    animationDirection: 'alternate',
    animationDuration: '600ms',
    animationIterationCount: 'infinite',
    animationName: '@keyframes',
    animationTimingFunction: 'cubic-bezier(1, 0, 0, 1)',

    '@keyframes': {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
  },
}))

export const triangle = style(theme => ({
  // Box model
  display: 'none',

  '@media': {
    '(min-width: 560px)': {
      // Box model
      display: 'block',
      marginBottom: 0,
      marginRight: '2rem',
      height: '82px',
      width: '82px',

      // Visuals
      opacity: 1,
      stroke: theme.grey10,
    },
  },
}))
