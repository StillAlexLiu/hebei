module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  lintOnSave: false,
  devServer: {
    // proxy: {
    //   '/comet': {
    //     // 目标 API 地址
    //     target: ' http://172.10.0.3/',
    //     // target: 'http://localhost:8000/',
    //     pathRewrite: {
    //       '^/comet/': '/' // 代理的路径
    //     }
    //   },
    //   '/test': {
    //     // 目标 API 地址
    //     target: ' https://c324891d-478a-4bb0-8d5d-99055eba30f9.mock.pstmn.io/',
    //     // target: 'http://localhost:8000/',
    //     pathRewrite: {
    //       '^/': '/' // 代理的路径
    //     }
    //   }
    // }
  }
}
