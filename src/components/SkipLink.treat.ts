import { style } from 'treat'

export const link = style((theme) => ({
  // Positioning
  position: 'absolute',
  top: '0.5rem',
  left: '2rem',
  zIndex: 2,
  transform: 'translateY(-120%)',

  // Box model
  display: 'block',
  padding: '1rem 1.5rem',

  // Typography
  color: theme.typeColourStrong,

  // Visuals
  background: theme.grey900,
  transition: 'transform 200ms',

  ':focus': {
    transform: 'translateY(0)',
  },
}))
