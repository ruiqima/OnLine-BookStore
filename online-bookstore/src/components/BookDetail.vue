<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
      <!-- header -->
      <a-layout>
        <Header />

        <!-- 书目详情 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
            <DetailCard />
            <Comments />
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
import Header from '@/components/home/Header'
import DetailCard from '@/components/detail/DetailCard'
import Comments from '@/components/detail/Comments'

export default {
  components: {

    Header, DetailCard, Comments
  },
}
</script>

<style scoped>
@import url("../assets/css/homepage.css");
</style>