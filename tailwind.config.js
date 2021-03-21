const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			colors: { // generate colors for all variants of color classes
				teal: colors.teal,
				cyan: colors.cyan
			},
			fontSize: { // generate custom font size
				'4.5xl': '2.5rem' 
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}