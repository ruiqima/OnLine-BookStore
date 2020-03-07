// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#3e8331',
            'link-color': '##3e8331',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    }
  }