const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif'],
    },
    colors: {
      'blue-dark': 'hsl(228, 39%, 23%)',
      'red-bright': 'hsl(12, 88%, 59%)',
      'blue-dark-grayish': 'hsl(227, 12%, 61%)',
      'blue-very-dark': 'hsl(233, 12%, 13%)',
      'red-pale': 'hsl(13, 100%, 96%)',
      'gray-light': 'hsl(0, 0%, 98%)',
      'black': '#000000'
    },
    screens: {
      ...defaultTheme.screens,

      'md': '769px',
      // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [],
}
