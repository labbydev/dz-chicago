const colors = require('./src/tokens/colors');
const fontFamily = require('./src/tokens/font-family');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
