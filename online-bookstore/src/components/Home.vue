<template>
  <a-layout>
    <!-- header -->
    <a-layout-header
      class="flex-row ver-center"
      style="background-color:white; height:100px;"
    >
      <!-- 左上角网站首页入口 -->
      <div class="flex-row ver-center">
        <a @click="tohome">
          <img
            src="../assets/imgs/logo.png"
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

    <!-- 中部内容 -->
    <a-layout>
      <!-- sider -->
      <a-layout-sider style="background-color:white;">
        <a-menu
          @click="handleClick"
          style="width: 256px"
          :defaultOpenKeys="['sub1']"
          :openKeys.sync="openKeys"
          mode="inline"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title">
              <a-icon type="bars" /><span>全部分类</span>
            </span>
            <a-menu-item key="1">文艺</a-menu-item>
            <a-menu-item key="2">心理</a-menu-item>
            <a-menu-item key="3">社会</a-menu-item>
            <a-menu-item key="4">法律</a-menu-item>
            <a-menu-item key="5">科学</a-menu-item>
            <a-menu-item key="6">科幻</a-menu-item>
            <a-menu-item key="7">健康</a-menu-item>
            <a-menu-item key="8">设计</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <!-- content -->
      <a-layout-content>
        <!-- 走马灯 -->
        <a-carousel style="border:5px solid red" autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </a-layout-content>
    </a-layout>

    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
// import home from '../../static/home'
// home.tohome()

export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1']
    }
  },

  methods: {
    watch: {
      openKeys(val) {
        console.log('openKeys', val)
      }
    },
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
    },

    // 侧面导航栏方法
    handleClick: function(e) {
      console.log('click', e)
    },
    titleClick: function(e) {
      //点击：全部分类
      console.log('titleClick', e)
    }
  }
}
</script>

<style>
@import url('../assets/css/homepage.css');
</style>
