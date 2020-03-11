<template>
  <a-layout style="background-color: #F5F5F5;">
    <a-layout style="background-color: #F5F5F5;">
      <a-layout-sider style="background-color: #F5F5F5;" width="7vw">
      </a-layout-sider>
      <!-- header -->
      <a-layout>
        <Header />

        <!-- 书目详情 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
            <DetailCard />
          </a-layout-content>
        </a-layout>

        <a-layout>
          <a-layout-sider style="background-color: white;" width="7vw">
          </a-layout-sider>
          <a-layout-content style="background-color: white;">
            <!-- 显示评论 -->
            <Comments />
            <div style="margin-bottom:50px;"></div>

            <a-layout-sider style="background-color: white;" width="7vw">
            </a-layout-sider>
          </a-layout-content>
          <a-layout-sider style="background-color: white;" width="7vw">
          </a-layout-sider>
        </a-layout>
      </a-layout>
      <a-layout-sider style="background-color: #F5F5F5;" width="7vw">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer
      style="height:300px;background-color:white;margin-top:3.5vw;"
    >
      <a-divider
        ><span style="letter-spacing:4px;color:#999999;"
          >让每个人都能享受阅读的乐趣</span
        ></a-divider
      >
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'
import DetailCard from '@/components/detail/DetailCard'
import Comments from '@/components/detail/Comments'

export default {
  components: {
    Header,
    DetailCard,
    Comments
  }
}
</script>

<style scoped>
@import url('../assets/css/homepage.css');
</style>
