<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './router';
Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
=======
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import router from './router'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
>>>>>>> 7977ecb18decaadc1817aeb4317a9efbdc21229f
