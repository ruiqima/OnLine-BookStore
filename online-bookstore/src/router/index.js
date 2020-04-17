/*
--Created by 
--Hu Sicheng 2017302580096--
----------and---------------
--Ma Ruiqi------------------
-- on 2020/4/17
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import SearchResult from '../components/SearchResult.vue'
import BookDetail from '../components/BookDetail.vue'
import Login from '../components/user/login/Login.vue'
import Registry from '../components/user/login/Registry.vue'
import Address from '../components/user/login/Address.vue'
import Cart from '../components/cart/Cart.vue'
import User from '../components/user/User.vue'
import Order from '../components/user/Order.vue'
import Buynow from '../components/buynow/Buynow.vue'
import Comment from '../components/comment/Comment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/comment',
    name:'Comment',
    component:Comment

  },
  {
    path: '/home',
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
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/registry',
    name: 'Registry',
    component: Registry
  },
  {
    path: '/user/address',
    name: 'Address',
    component: Address
  },
  {
    path:'user/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'user',
    name:'User',
    component:User
  },
  {
    path:'user/order',
    name:'Order',
    component:Order

  },
  {
    path:'/detail/buynow',
    name:'Buynow',
    component:Buynow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
