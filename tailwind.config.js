const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Cascadia', ...defaultTheme.fontFamily.mono]
      },
      typography: theme => ({
        default: {
          css: {
            'pre code': {
              fontFamily: 'Cascadia'
            },
            code: {
              fontFamily: 'Cascadia',
              padding: '0.2em 0.5em',
              borderRadius: theme('borderRadius.md'),
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
          }
        },
      })
    },
  }
};
