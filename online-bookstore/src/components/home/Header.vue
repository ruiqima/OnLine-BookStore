<template>
  <!-- <a-layout-header class="flex-row border"
                   style="background-color:white;"> -->
  <!-- 左上角网站首页入口 -->
  <div style="background-color:white;">
    <a-row type="flex"
           justify="space-between"
           align="middle"
           style="margin-left:70px;">
      <a-col :xs="24"
             :sm="10"
             :md="10"
             :lg="6"
             :xl="6">
        <div class="flex-row">
          <a @click="tohome">
            <img src="../../assets/imgs/logo.png"
                 alt="网站图标"
                 class="img-header-logo" /> <span class="hmp-title-text"
                  style="margin-left:20px;">网上书店</span></a></div>
      </a-col>

      <a-col :xs="24"
             :sm="12"
             :md="12"
             :lg="8"
             :xl="8">
        <div class="flex-row">
          <!-- 搜索框 -->
          <a-input-search placeholder="输入你想搜索的内容"
                          style="height:3.5vw; "
                          @search="onsearch"
                          size="small" />
        </div>
      </a-col>
      <a-col :xs="24"
             :sm="24"
             :md="24"
             :lg="10"
             :xl="10">
        <a-menu v-model="current"
                mode="horizontal">
          <a-menu-item key="cart">
            <a @click="tocart"
               target="_blank"
               rel="noopener noreferrer">
              <a-icon type="shopping-cart" />购物车</a>
          </a-menu-item>
          <a-menu-item key="orders">
            <a @click="toorders"
               target="_blank"
               rel="noopener noreferrer">
              <a-icon type="shopping-cart" /> 我的订单</a>
          </a-menu-item>
          <a-menu-item key="me">
            <a @click="tome"
               target="_blank"
               rel="noopener noreferrer">
              <a-icon type="user" />个人主页
            </a>
          </a-menu-item>

        </a-menu>
      </a-col>
    </a-row>
  </div>
  <!-- </a-layout-header> -->
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
      this.$router.push({ path: `/user` });
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
