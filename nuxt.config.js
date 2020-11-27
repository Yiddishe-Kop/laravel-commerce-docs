import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ffad1f'
  },
  css: [
    './css/custom.css'
  ],
  i18n: {
    locales: () => [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }, {
      code: 'he',
      iso: 'he-IL',
      file: 'he-IL.js',
      name: 'עברית'
    }],
    defaultLocale: 'en'
  },
  pwa: {
    manifest: {
      name: 'Laravel Commerce Docs',
      short_name: 'Docs',
      background_color: '#ffad1f',
      theme_color: '#ffad1f',
    },
    meta: {
      twitterCard: 'summary_large_image',
    }
  }
})
