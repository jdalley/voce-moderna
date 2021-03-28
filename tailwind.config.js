const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
		content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
			'./utils/**/*.ts'
    ]
	},
  darkMode: 'media', 
  theme: {
    extend: {
			colors: { 
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
			backgroundImage: (theme) => ({
				'piano-man': "url('/images/piano-man.svg')"
			}),
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.cyan.600')
						}
					}
				}
			})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
}