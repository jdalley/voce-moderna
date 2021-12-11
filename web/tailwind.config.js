// Extended colors
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utils/**/*.ts', // Some classes are stored in utils to be included post-purge.
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'vm-logo': "url('/images/vm-logo.svg')",
      }),
      colors: {},
    },
    fontFamily: {
      selima: ['Selima', 'script'],
    },
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
