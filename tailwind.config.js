const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
		content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
			'./utils/**/*.ts'
    ]
	},
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			colors: { // generate colors for all variants of color classes
				teal: colors.teal,
				cyan: colors.cyan,
				bluegray: colors.blueGray,
				amber: colors.amber,
				fuchsia: colors.fuchsia,
				emerald: colors.emerald
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