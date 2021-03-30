const plugin = require('tailwindcss/plugin')

function processColors(colors) {
  const colourMap = {}

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      colourMap[key] = value
      return
    }

    const map = processColors(value)
    Object.entries(map).forEach(([name, shade]) => {
      colourMap[`${key}-${name}`] = shade
    })
  })

  return colourMap
}

const textDecorationColorPlugin = plugin(({ addUtilities, theme }) => {
  const colors = theme('colors', {})
  const colourMap = processColors(colors)
  const textDecorationUtilities = {}

  Object.entries(colourMap).forEach(([name, shade]) => {
    textDecorationUtilities[`.underline-${name}`] = {
      'text-decoration-color': shade,
    }
  })

  console.debug('Generating underline colors', textDecorationUtilities)
  addUtilities(textDecorationUtilities)
})

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      blue: {
        600: '#223591',
        500: '#485DC8',
        400: '#7B91FF',
      },
      teal: {
        900: '#06957A',
        800: '#06A285',
        700: '#07B897',
        600: '#08CDA8',
        500: '#06DBB3',
        400: '#07F6C9',
      },
      grey: {
        900: '#111213',
        800: '#26282C',
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
      sans: ['Inter', 'system-ui', 'sans-serif'],
      title: ['Red Hat Display', 'Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), textDecorationColorPlugin],
}
