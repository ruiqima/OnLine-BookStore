<template>
  <a-layout-header
    class="flex-row ver-center"
    style="background-color:white; height:100px;"
  >
    <!-- 左上角网站首页入口 -->
    <div class="flex-row ver-center">
      <a @click="tohome">
        <img
          src="../../assets/imgs/logo.png"
          alt="网站图标"
          class="img-header-logo"
        /><span class="hmp-title-text">网上书店</span></a
      >
    </div>
    <!-- Header搜索框、右侧边栏 -->
    <div class="flex-row">
      <!-- 搜索框 -->
      <a-input-search
        placeholder="输入你想搜索的内容"
        style="width: 500px;height:50px; margin-right:20px; margin-left:230px;"
        @search="onsearch"
        size="small"
      />

      <!-- 右侧导航栏 -->
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="cart">
          <a @click="tocart" target="_blank" rel="noopener noreferrer"
            ><a-icon type="shopping-cart" /> 购物车</a
          >
        </a-menu-item>
        <a-menu-item key="orders">
          <a @click="toorders" target="_blank" rel="noopener noreferrer"
            ><a-icon type="shopping-cart" /> 我的订单</a
          >
        </a-menu-item>
        <a-menu-item key="me">
          <a @click="tome" target="_blank" rel="noopener noreferrer"
            ><a-icon type="user" />个人主页</a
          >
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    // 跳转到主页
    tohome: function() {
      alert('跳转到主页')
    },
    // 点击搜索框，搜索
    onsearch: function(value) {
      console.log(value)
    },
    // 跳转到购物车页面
    tocart: function() {
      alert('跳转到购物车页面')
    },
    //跳转到购物车页面
    tome: function() {
      alert('跳转到个人主页')
    },
    //跳转到全部订单页面
    toorders: function() {
      alert('跳转到全部订单页')
    }
  }
}
</script>

<style scoped>
@import url('../../assets/css/homepage.css');
</style>
