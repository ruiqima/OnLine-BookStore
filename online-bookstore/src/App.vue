<template>
  <div id="app">
    <Cart/>
    <router-view/>
    <!-- <BookDetail /> -->
    <!-- <div id="nav">
      <router-link to="/user/login">Login</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>

<script>
// import Home from '@/components/Home'
// import BookDetail from '@/components/BookDetail'
import Cart from '@/components/cart/Cart'
export default {
  name: 'App',
  components: {
    // Home,
    // BookDetail
    Cart
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>