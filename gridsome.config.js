// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'products/*.md',
        typeName: 'Product',
        resolveAbsolutePaths: true,
        refs: {
          category: {
            typeName: 'Category',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Product: [
      {
        path: '/:category/:title',
        component: 'src/templates/Product.vue'
      }
    ],
    Category: [
      {
        path: '/:title',
        component: 'src/templates/Category.vue'
      }
    ]
  }
}
