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
            }
          }
        },
      })
    },
  }
};
