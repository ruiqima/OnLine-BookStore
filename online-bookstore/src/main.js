import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// axios({
//   method: 'post',
//   url: '/api/user/customer/authentication',
//   data: {
//     username: '小小小王子',
//     password: '111'
//   }
// })
//   .then(function(response) {
//     alert(response)
//   })
//   .catch(function(error) {
//     alert(error)
//   })
