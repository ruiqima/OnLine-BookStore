<template>
  <div id="app">
    <BookDetail />
    <!-- <div id="nav">
      <router-link to="/user/login">Login</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import BookDetail from '@/components/BookDetail'

export default {
  name: 'App',
  components: {
    BookDetail
  }
}

// 使用这个值作为屏幕宽度
// alert(document.body.clientWidth);
// 使用这个值作为屏幕高度
// alert(document.body.clientHeight);
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
