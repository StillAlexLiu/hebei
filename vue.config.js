const StatsPlugin = require('stats-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  // 输出文件目录
  outputDir: 'dist',
  runtimeCompiler: true,
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      // '/comet': {
      //   // 目标 API 地址
      //   target: ' http://172.10.0.3/',
      //   // target: 'http://localhost:8000/',
      //   pathRewrite: {
      //     '^/comet/': '/' // 代理的路径
      //   }
      // },
      // '/test': {
      //   // 目标 API 地址
      //   target: ' https://c324891d-478a-4bb0-8d5d-99055eba30f9.mock.pstmn.io/',
      //   // target: 'http://localhost:8000/',
      //   pathRewrite: {
      //     '^/': '/' // 代理的路径
      //   }
      // }
      '/HK': {
        // 目标 API 地址
        // target: 'http://222.222.44.206:8000',
        target: 'http://192.168.1.103/blade-hikregions',
        // target: 'http://localhost:8000/',
        pathRewrite: {
          '^/': '/' // 代理的路径
        }
      },
      '/monitor': {
        // target: 'http://192.168.105.38:8080/blade-screen',
        target: 'http://222.222.44.206:8000/monitor',
        // target: 'http://192.168.1.102:8080/blade-screen',
        changeOrigin: true,
        pathRewrite: {
          '^/monitor': ''
        }
      }
    }
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
