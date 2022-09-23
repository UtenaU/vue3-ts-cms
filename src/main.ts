import { createApp } from 'vue'
import { registerApp } from './global'
// import './service/axios_demo'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import hyRequest from './service'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

hyRequest.request({
  url: 'get',
  method: 'GET'
})
