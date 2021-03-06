module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      primary: {
        500: '#06DBB3',
      },
      grey: {
        900: '#070808',
        800: '#212327',
        700: '#383C42',
        600: '#494E55',
        500: '#595F69',
        400: '#777E8D',
        300: '#A8ABB3',
        200: '#D3D5D9',
        100: '#E6E7EA',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      margin: ['first'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
