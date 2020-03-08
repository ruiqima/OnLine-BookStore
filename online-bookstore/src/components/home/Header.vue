<template>
  <a-layout-header class="flex-row ver-center"
                   style="background-color:white; height:7vw;display:flex;justify-content:space-between;">
    <!-- 左上角网站首页入口 -->
    <div class="flex-row ver-center"
         style="width:30vw">
      <a @click="tohome">
        <img src="../../assets/imgs/logo.png"
             alt="网站图标"
             class="img-header-logo" />
        <span class="hmp-title-text">网上书店</span></a>
    </div>
    <!-- Header搜索框、右侧边栏 -->
    <div class="flex-row">
      <!-- 搜索框 -->
      <a-input-search placeholder="输入你想搜索的内容"
                      style="width: 35vw;height:3.5vw; margin-right:1.4vw;"
                      @search="onsearch"
                      size="small" />

      <!-- 右侧导航栏 -->
      <a-menu v-model="current"
              mode="horizontal"
              width="35vw">
        <a-menu-item key="cart">
          <a @click="tocart"
             target="_blank"
             rel="noopener noreferrer">
            <a-icon type="shopping-cart" /> <span style="font-size:1vw">购物车</span></a>
        </a-menu-item>
        <a-menu-item key="orders">
          <a @click="toorders"
             target="_blank"
             rel="noopener noreferrer">
            <a-icon type="shopping-cart" /> <span style="font-size:1vw">我的订单</span></a>
        </a-menu-item>
        <a-menu-item key="me">
          <a @click="tome"
             target="_blank"
             rel="noopener noreferrer">
            <a-icon type="user" /><span style="font-size:1vw">个人主页</span></a>
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    // 跳转到主页
    tohome: function () {
      alert('跳转到主页')
    },
    // 点击搜索框，搜索
    onsearch: function (value) {
      console.log(value)
    },
    // 跳转到购物车页面
    tocart: function () {
      alert('跳转到购物车页面')
    },
    //跳转到购物车页面
    tome: function () {
      alert('跳转到个人主页')
    },
    //跳转到全部订单页面
    toorders: function () {
      alert('跳转到全部订单页')
    }
  }
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>
