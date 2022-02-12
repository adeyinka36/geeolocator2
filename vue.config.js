module.exports = {
    devServer: {
      port: 8200
  },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/hello-world/'
    : '/'
}