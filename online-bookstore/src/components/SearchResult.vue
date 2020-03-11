<template>
  <a-layout style="background-color: #F5F5F5;">
    <a-layout style="background-color: #F5F5F5;">
      <a-layout-sider style="background-color: #F5F5F5;"
                      width="100px">
      </a-layout-sider>
      <!-- header -->
      <a-layout>
        <Header :keyword="$route.params.keyword" />
        <div style="height:20px;background-color:white;"></div>

        <a-layout>
          <!-- 搜索结果 -->
          <a-layout-content style="background-color:#f5f5f5;">
            <!-- 筛选栏 -->
            <SearchFilter />
            <!-- 搜索结果列表 -->
            <Result />

          </a-layout-content>

        </a-layout>
      </a-layout>

      <a-layout-sider style="background-color: #F5F5F5;"
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
import Result from '@/components/search/Result'
import SearchFilter from '@/components/search/SearchFilter'

// alert(this)

export default {
  components: {

    Header, Result, SearchFilter

  },
}
</script>

<style scoped>
@import url("../assets/css/homepage.css");
</style>