const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {

  // Environment
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',
}

function isDev() {
  return config.__DEV__
}

function isProd() {
  return config.__PROD__
}

export {
  config as default,
  isDev,
  isProd,
}
