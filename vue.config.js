const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const express = require('express')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置方式一：CLI提供的属性
  outputDir: './dist',
  publicPath:'./',
  devServer: {
    setupMiddlewares:(middlewares, devServer) => {
      const loginResult = require('./response/login.json')
      devServer.app.use(express.json())
      devServer.app.post('/login',(request, response) => {
        // console.log('request:',request.body);
        if(request.body.name === 'tuser'){
          if(request.body.password === '123abc'){
            response.send(loginResult);
          }else{
            response.send('password wrong!')
          }
        }else{
          response.send('no user!')
        }

        const userInfo = require('./response/user1.json')
        devServer.app.get('/users/1',(request,response) => {
          response.send(userInfo)
        })

        const userMenu = require('./response/menu1.json')
        devServer.app.get('/role/1/menu',(request, response) => {
          response.send(userMenu)
        })

      })
      return middlewares
    }
    // proxy: {
    //   '^/api': {
    //     target: 'localhost:3000',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  },
  //配置方式二： 和webpacl属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
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
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //   .set('@', path.resolve(__dirname, 'src'))
  //   .set('components', '@/components')
  // }

})


