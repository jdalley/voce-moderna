const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
  purge: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./utils/**/*.ts' // Some classes are stored in utils to be included post-purge.
	],
  darkMode: false, 
  theme: {
    extend: {
			backgroundImage: (theme) => ({
				'vm-logo': "url('/images/vm-logo.svg')",
				'topography': "url('/images/topography.svg')"
			}),
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
		fontFamily: {
			selima: ['Selima', 'script'],
		}
  },
  variants: {
    extend: {},
  },
  plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
}