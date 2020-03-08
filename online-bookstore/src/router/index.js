import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import User from '../components/user/User.vue'
import Login from '../components/user/login/Login.vue'
import Registry from '../components/user/login/Registry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'User',
    component: User
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/registry',
    name: 'Registry',
    component: Registry
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
