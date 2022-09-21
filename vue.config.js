const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置方式一：CLI提供的属性
  outputDir: './dist',
  //配置方式二： 和webpacl属性完全一致，最后会进行合并
  // configureWebpack:{
  //   resolve:{
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  //配置方式三：链式
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', path.resolve(__dirname, 'src'))
    .set('components', '@/components')
  }

})


