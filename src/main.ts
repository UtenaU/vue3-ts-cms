import { createApp } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'
import hyRequest from './service'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
setupStore()
app.mount('#app')

// hyRequest.request({
//   url: 'get',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的congfig')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })
interface DataType {
  data: any
  returnCode?: string
  success?: boolean
  headers?: any
}
hyRequest
  .request<DataType>({
    url: 'get',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log('res.data', res.headers)
  })
