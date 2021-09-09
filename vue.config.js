module.exports = {
  devServer: {
    open: true, // 自动打开浏览器
    port: 9528, // 配置端口号
    proxy: {
      '/fundq': {
        target: 'http://localhost:8080', // 目标地址
        changeOrigin: true, // 是否跨域，默认false
        ws: true, // 是否代理websockets
        pathRewrite: { // 重写路径
          '^/fundq': '' // 此处为问题原因，正确写法应为： '^/fundq': '/fundq'
        }
      }
    }
  }

}
