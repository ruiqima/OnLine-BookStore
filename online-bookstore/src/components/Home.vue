<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
      <!-- header -->
      <a-layout class="">
        <Header />

        <!-- 中部内容 -->
        <a-layout style="background-color: #ececec;">
          <a-layout-sider style="background-color:white;">
            <!-- 左侧边栏 -->
            <SubMenu />
          </a-layout-sider>
          <a-layout-content style="background-color: #ececec;">
            <!-- 走马灯 -->
            <Carousel />
          </a-layout-content>
          <!-- 热书推荐
          <a-layout-sider style="background-color: #ececec;"
                          width="300px">
            <List />
          </a-layout-sider> -->
        </a-layout>

        <a-layout>
          <a-layout-content style="background-color: #ececec;">
            <!-- 卡片 -->
            <Card />
            <!-- 分割图片 -->
            <PicDivider />
            <!-- 卡片 -->
            <Card />
          </a-layout-content>
        </a-layout>

        <a-layout>
          <a-layout-content style="background-color: #ececec;">
            <!-- 分割图片 -->
            <PicDivider />
            <!-- 推荐 -->
            <Recommend />
          </a-layout-content>
        </a-layout>

      </a-layout>

      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="height:300px;background-color:white;margin-top:50px;">
      <a-divider><span style="letter-spacing:4px;color:#999999;">让每个人都能享受阅读的乐趣</span></a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
// import home from '../../static/home'
// home.tohome()
import Carousel from '@/components/home/Carousel'
import Card from '@/components/home/Card'
import SubMenu from '@/components/home/SubMenu'
import Header from '@/components/home/Header'
import PicDivider from '@/components/home/PicDivider'
import Recommend from '@/components/home/Recommend'

export default {
  components: {
    Carousel,
    Card,
    SubMenu,
    Header,
    PicDivider,
    Recommend,
  },

  methods: {}
}
</script>

<style scope>
@import url("../assets/css/homepage.css");
</style>
