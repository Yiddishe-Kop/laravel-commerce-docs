import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ffad1f'
  },
  css: [
    './css/custom.css'
  ],
  pwa: {
    manifest: {
      name: 'Laravel Commerce Docs',
      short_name: 'Docs',
      background_color: '#ffad1f',
      theme_color: '#ffad1f',
    },
    meta: {
      description: 'An open source plug & play ecommerce package for Laravel',
      twitterCard: 'summary_large_image',
    }
  }
})
