import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import SearchResult from '../components/SearchResult.vue'
import BookDetail from '../components/BookDetail.vue'
import User from '../components/user/User.vue'
import Login from '../components/user/login/Login.vue'
import Registry from '../components/user/login/Registry.vue'
import Address from '../components/user/login/Address.vue'
import Cart from '../components/cart/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/results',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/detail',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '/user',
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
  },
  {
    path:'/user/address',
    name:'Address',
    component:Address

  },
  {
    path:'user/cart',
    name:'Cart',
    component:Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
