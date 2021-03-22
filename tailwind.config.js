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
				truegray: colors.trueGray,
				amber: colors.amber,
				fuchsia: colors.fuchsia,
				violet: colors.violet,
				rose: colors.rose,
				emerald: colors.emerald,
				lime: colors.lime,
				yellow: colors.yellow,
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