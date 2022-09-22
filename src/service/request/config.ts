let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_NAME = 'dev'
} else if (process.env.NODE_ENV === 'production') {
  BASE_NAME = 'pro'
} else {
  BASE_NAME = 'test'
}

export { BASE_NAME }
