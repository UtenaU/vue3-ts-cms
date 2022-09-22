import axios from 'axios'

// axios 的实例对象
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'sdfjlksd',
//       code: 333
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'dsfs',
//       code: 33
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
//promis本身可以有类型
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })
//4.axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'sdfjlksd',
      code: 333
    },
    timeout: 5000
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'dsfs',
      code: 33
    }
  })
  .then((res) => {
    console.log(res.data)
  })
axios
  .all([
    axios.get('/get', { params: { name: 'dfdf' } }),
    axios.post('/post', { data: { name: 'dfdfd' } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })
//axios拦截器
//fn1: 请求发送成功
//fn2: 请求发送失败
axios.interceptors.request.use(
  (config) => {
    //
    //1.给请求添加token
    //2.isLoading
    return config
  },
  (err) => {
    console.log('请求发送错误' + err)
  }
)
axios.interceptors.response
