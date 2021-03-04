module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      primary: {
        500: '#09F1C6',
      },
      grey: {
        900: '#070808',
        800: '#1B1E23',
        700: '#32373E',
        600: '#40464F',
        500: '#4C525D',
        400: '#5D636F',
        300: '#6F7785',
        200: '#868C98',
        100: '#E6E7EA',
      },
    },
    extend: {},
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
