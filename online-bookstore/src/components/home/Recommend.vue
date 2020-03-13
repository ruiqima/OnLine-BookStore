<template>
  <div class="flex-column">
    <div style="display:flex;justify-content:flex-start;margin:40px 0 10px 0;"
         class="ver-center"><span class="card-title-text">最热推荐</span>
    </div>

    <a-card :bordered="false"
            hoverable
            size="small">
      <template slot="extra"
                :bordered="false">
        <!-- 右上角跳转链接 -->
        <router-link :to="{ name: `SearchResult`, params: { keyword: book.title } }">
          <a-icon type="double-right"
                  :style="{ fontSize: '10px', color: '#999' }" />
        </router-link>
      </template>
      <template>
        <a-row type="flex"
               justify="space-around"
               :gutter="16">
          <a-col :xs="24"
                 :sm="24"
                 :md="4"
                 :lg="4"
                 :xl="4"
                 class="ver-center">
            <img :src="book.coverUrl"
                 style="width:100%;"
                 alt="图片">
          </a-col>
          <a-col :xs="24"
                 :sm="24"
                 :md="24"
                 :lg="24"
                 :xl="20">
            <a-card-meta class="rec-content"
                         align="left">
              <template slot="description">
                <span style="letter-spacing: 2px;font-weight:900;color:black;line-height:27px;">{{book.title}}</span><br />
                <span style="letter-spacing: 2px;color:#555555;line-height:20px;">作者：{{book.author}}</span><br />
                <!-- 评分 -->
                <a-rate v-model='book.stars'
                        disabled />
                <span style="font-size:small;color:#999999;">{{book.stars}}星</span>
                <br /><br />
                <p align="left"
                   style="line-height:20px;letter-spacing: 2px;">{{book.introduction}}
                </p>
                <br />
              </template>
            </a-card-meta>
          </a-col>
        </a-row>

      </template>

    </a-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      book: {}
    }
  },
  mounted () {
    this.getinfo()
  },
  methods: {
    getinfo () {
      var _this = this
      _this.axios.get('/api/search/sales', {
        params: {
          page: 0,
          size: 1
        }
      })
        .then(function (response) {
          _this.book = response.data.data[0]
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          //获取星级
          _this.axios.get('/api/comment/book/' + _this.book.isbn + '/stars', {
          })
            .then(function (response) {
              _this.$set(_this.book, "stars", response.data)
            })
            .catch(function (error) {
              console.log(error);
            });
        });

    }
  }
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>