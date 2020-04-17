// vue.config.js
// ***********************************

//  created by：马睿祺 2017302580166

// ***********************************
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#3e8331',
          'link-color': '##3e8331',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://csquare.wang:8081', //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // cnpm 虚拟的站点需要更管origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': '',
        },
      },
    },
  },
}
