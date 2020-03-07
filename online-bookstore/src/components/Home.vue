<template>
  <a-layout>
    <a-layout-sider style="background-color:#ECECEC;" width="100px">
    </a-layout-sider>
    <!-- header -->
    <a-layout>
      <Header />

      <!-- 中部内容 -->
      <a-layout>
        <a-layout-sider style="background-color:white;">
          <!-- 左侧边栏 --><SubMenu />
        </a-layout-sider>
        <a-layout-content> <!-- 走马灯 --><Carousel /> </a-layout-content>
        <!-- sider -->
        <a-layout-sider width="300px"></a-layout-sider>
      </a-layout>

      <a-layout>
        <a-layout-content> <!-- 卡片 --><Card /> </a-layout-content>
      </a-layout>

      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <a-layout-sider style="background-color:#ECECEC;" width="100px">
    </a-layout-sider>
  </a-layout>
</template>

<script>
// import home from '../../static/home'
// home.tohome()
import Carousel from '@/components/home/Carousel'
import Card from '@/components/home/Card'
import SubMenu from '@/components/home/SubMenu'
import Header from '@/components/home/Header'

export default {
  components: {
    Carousel,
    Card,
    SubMenu,
    Header
  },

  methods: {}
}
</script>

<style scope>
@import url('../assets/css/homepage.css');
</style>
