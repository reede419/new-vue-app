const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/main.js',
    },
  },
})
