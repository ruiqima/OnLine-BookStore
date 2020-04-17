<template>
  <!-- *****************************************

 作者：马睿祺

***************************************** -->
  <div class="flex-column">
    <div class="card-title-div ver-center">
      <span class="card-title-text">{{totalTitle}}</span>
    </div>
    <a-row type="flex"
           justify="space-between"
           :gutter="15">
      <div style="background-color: #f5f5f5;">
        <a-row type="flex"
               justify="space-around"
               :gutter="15">
          <a-col :xs="24"
                 :sm="19"
                 :md="12"
                 :lg="6"
                 :xl="6"
                 v-for="book in booksCard"
                 :key="book.title">

            <a-card hoverable
                    style="margin-bottom:10px;"
                    size="small">
              <div class="hori-center">
                <img alt="图片"
                     :src="book.coverUrl"
                     slot="cover"
                     class="card-img" /></div>
              <a-card-meta :title="book.title"
                           :description="book.author">
              </a-card-meta>
              <template><br /><span style="color:#ea1;font-size:small;">￥{{book.price}}</span><br /><br /></template>
              <template slot="extra">
                <!-- 右上角跳转链接 -->
                <router-link :to="{ name: `SearchResult`, params: { keyword: book.title,userId:userId } }">
                  <a-icon type="double-right"
                          :style="{ fontSize: '10px', color: '#999' }" />
                </router-link>
              </template>
            </a-card>
          </a-col>

        </a-row>
      </div>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    totalTitle: {
      type: String,
      default: ''
    },
    userId: {
      type: Number
    }
  },
  data () {
    return {
      booksCard: [],
      titleImgUrl: ""
    };
  },
  mounted () {
    this.getcontent()
  },
  methods: {
    getfromapi (str) {
      var _this = this
      _this.axios.get('/api/search/' + str, {
        params: {
          page: 0,
          size: 8
        }
      })
        .then(function (response) {
          _this.booksCard = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getcontent () {
      if (this.totalTitle == "新书上架") {
        this.getfromapi("time")
        this.titleImgUrl = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?w=468&h=1228"
      } else if (this.totalTitle == "热销推荐") {
        this.getfromapi("sales")
        this.titleImgUrl = "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?w=468&h=1228"
      }
    }
  },

}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");

#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
