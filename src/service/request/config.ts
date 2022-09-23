let BASE_NAME = ''
let BASE_URL = ''
let TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_NAME = 'dev'
  BASE_URL = 'http://httpbin.org'
  TIME_OUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_NAME = 'pro'
} else {
  BASE_NAME = 'test'
}

export { BASE_NAME, BASE_URL, TIME_OUT }
