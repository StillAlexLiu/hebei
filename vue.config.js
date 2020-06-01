const StatsPlugin = require('stats-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  runtimeCompiler: true,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  lintOnSave: true,
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
  },
  configureWebpack: {
    plugins: [
      new StatsPlugin('stats.json', {
        chunkModules: true,
        chunks: true,
        assets: false,
        modules: true,
        children: true,
        chunksSort: true,
        assetsSort: true
      }), new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false// 是否删除源文件
      })
    ]
  }
}
