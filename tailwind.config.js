module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				'sick-red': '#FF0000' // generate colors for all variants of color classes
			},
			fontSize: {
				'4.5xl': '2.5rem' // generate custom font size
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}