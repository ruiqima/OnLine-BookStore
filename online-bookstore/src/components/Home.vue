<template>
  <a-layout style="background-color: #F5F5F5;">
    <a-layout style="background-color: #F5F5F5;">
      <a-layout-sider style="background-color: #F5F5F5;"
                      width="100px">
      </a-layout-sider>
      <!-- header -->
      <a-layout style="background-color: #F5F5F5;">

        <Header />
        <div style="height:50px;background-color:white;"></div>
        <!-- 中部内容 -->
        <a-layout-content style="background-color: white;">
          <!-- 上部分类选择-->
          <template v-for=" tag in tags">
            <a-checkable-tag :key="tag.categoryId"
                             @change="(checked) => handleChange(tag.category)"
                             style="font-size:medium;">
              {{tag.category}}
            </a-checkable-tag>
          </template>

          <div style="height:20px;background-color:white;"></div>
          <!-- 走马灯 -->
          <Carousel style="margin: 0 20px;" />

          <!-- </div> -->
          <!-- </a-layout-content> -->
          <div style="height:30px;background-color:white;"></div>
        </a-layout-content>

        <a-layout>
          <a-layout-content style="background-color: #F5F5F5;">
            <!-- 卡片 -->
            <Card totalTitle="新书上架" />
            <!-- 分割图片 -->
            <PicDivider />
            <!-- 卡片 -->
            <Card totalTitle="热销推荐" />
          </a-layout-content>
        </a-layout>

        <a-layout>
          <a-layout-content style="background-color: #F5F5F5;">
            <!-- 分割图片 -->
            <PicDivider />
            <!-- 推荐 -->
            <Recommend />
          </a-layout-content>
        </a-layout>

      </a-layout>

      <a-layout-sider style="background-color: #F5F5F5;"
                      width="100px">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="margin-top:50px;margin-bottom:30px;background-color: #F5F5F5;">
      <p style="font-size:medium;letter-spacing:3px;color:#ccc;margin-bottom:40px;">让每个人都能能享受阅读的乐趣</p>
      <a-divider style="color:#ccc;font-size:x-small;">ONLINE BOOKSTORE ©2020 Created by Our Team</a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Carousel from '@/components/home/Carousel'
import Card from '@/components/home/Card'
import Header from '@/components/home/Header'
import PicDivider from '@/components/home/PicDivider'
import Recommend from '@/components/home/Recommend'

export default {
  components: {
    Carousel,
    Card,
    Header,
    PicDivider,
    Recommend
  },

  data () {
    return {
      tags: [],
      userId:0
    };
  },
  created () {

    this.getcate();
    this.userId=this.$route.params.userId;
    console.log("home"+this.userId)
  },
  methods: {
    handleChange (tag) {
      this.$router.push({ name: `SearchResult`, params: { keyword: tag } });
    },
    getcate () {
      var _this = this
      _this.axios.get('/api/category')
        .then((response) => {
          _this.tags = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }
}
</script>

<style scope>
@import url("../assets/css/homepage.css");
</style>
