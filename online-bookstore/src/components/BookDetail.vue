<template>
  <a-layout style="background-color: #F5F5F5;">
    <a-layout style="background-color: #F5F5F5;">
      <a-layout-sider style="background-color: #F5F5F5;"
                      width="7vw">
      </a-layout-sider>
      <!-- header -->
      <a-layout>
        <Header :keyword="$route.params.keyword" />

        <!-- 书目详情 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
            <DetailCard :isbn="$route.params.isbn"
                        :userId="$route.params.userId" />
          </a-layout-content>
        </a-layout>

        <a-layout>
          <a-layout-sider style="background-color: white;"
                          width="7vw">
          </a-layout-sider>
          <a-layout-content style="background-color: white;">
            <!-- 显示评论 -->
            <Comments :isbn="$route.params.isbn" />
            <div style="margin-bottom:50px;"></div>

            <a-layout-sider style="background-color: white;"
                            width="7vw">
            </a-layout-sider>
          </a-layout-content>
          <a-layout-sider style="background-color: white;"
                          width="7vw">
          </a-layout-sider>
        </a-layout>
      </a-layout>
      <a-layout-sider style="background-color: #F5F5F5;"
                      width="7vw">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="margin-top:50px;margin-bottom:30px;background-color: #F5F5F5;">
      <p style="font-size:medium;letter-spacing:3px;color:#ccc;margin-bottom:40px;">让每个人都能能享受阅读的乐趣</p>
      <a-divider style="color:#ccc;font-size:x-small;">ONLINE BOOKSTORE ©2020 Created by Our Team</a-divider>
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
@import url("../assets/css/homepage.css");
</style>
