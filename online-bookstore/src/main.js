/*
--Created by 
--Hu Sicheng 2017302580096--
----------and---------------
--Ma Ruiqi------------------
-- on 2020/4/17
*/
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
