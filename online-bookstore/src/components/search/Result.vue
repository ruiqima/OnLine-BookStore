<template>
  <div style="background-color:#f5f5f5;">

    <a-list itemLayout="horizontal"
            :dataSource="books"
            style="width:100%;">
      <a-list-item slot="renderItem"
                   slot-scope="book">
        <a-card :bordered="false"
                hoverable
                style="width: 99%;">
          <template>
            <div class="flex-row ver-center">

              <img :src="book.coverUrl"
                   slot="cover"
                   class="img-cover"
                   style="margin-right:30px;">

              <a-card-meta class="rec-content"
                           align="left">
                <template slot="description">
                  <span style="color:black;line-height:35px;font-size:medium;">{{book.title}}</span><br />
                  <span style="font-weight:600;color:#ea1;line-height:30px;font-size:larger;">￥{{book.price}}</span>
                  <span style="font-size:smaller;color:#999999; margin-left:20px;">销量 {{book.sales}}</span><br />
                  <span style="color:#555555;line-height:20px; font-size:small;">{{book.author}}</span>
                  <span style="color:#555555;line-height:20px; font-size:small;margin-left:20px;">{{book.publisher}}</span><br />

                  <a-rate v-model='book.value'
                          disabled />
                  <span style="font-size:small;color:#999999;">{{book.commentsNum}}条评论</span>
                  <br />
                  <a-tag color="cyan"
                         style="margin-top:5px;">{{book.category}}</a-tag><br /><br />
                  <p align="left"
                     style="line-height:20px;">
                    {{book.introduction}}
                  </p>
                  <a-button style="background-color:#EAF4EB;margin-top:5px;">加入购物车</a-button>
                  <a-button style="margin-left:20px;margin-top:5px;">收藏</a-button>
                </template>

              </a-card-meta>
              <template slot="extra">
                <!-- 右上角跳转链接 -->
                <router-link :to="{ name: `BookDetail`, params: { keyword:book.title,isbn:book.isbn } }">
                  <a-icon type="double-right"
                          :style="{ fontSize: '10px', color: '#999' }" />
                </router-link>
              </template>
            </div>
          </template>

        </a-card>
      </a-list-item>
    </a-list>
    <a-pagination v-model="current"
                  :total="bookDatas.totalElements"
                  @change="onChange"
                  :pageSize="1" />
  </div>
</template>

<script>
export default {
  props: {
    bookDatas: {
      type: Object
    }
  },
  watch: {
    'bookDatas': function (val) {
      var _this = this
      _this.books = val.data
      _this.i = 0

      for (; _this.i < _this.books.length; _this.i++) {
        var isbn = _this.books[_this.i].isbn
        //获取总评论数
        _this.axios.get('/api/comment/book/' + isbn, {
          params: {
            page: _this.current - 1,
            size: 1
          }
        })
          .then(function (response) {
            //评论总数
            _this.$set(_this.books[_this.i - 1], 'commentsNum', response.data.totalElements)
          })
          .catch(function (error) {
            console.log(error);
          });
        //获取星级
        _this.axios.get('/api/comment/book/' + isbn + '/stars', {
        })
          .then((response) => {
            //星级
            _this.$set(_this.books[_this.i - 1], 'value', response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  },
  data () {
    return {
      current: 1,
      books: [],
      i: 0,
    }
  },
  methods: {
    onChange (page) {
      this.$emit('sendPageInfo', { page: page - 1, size: 1 })
    }
  }
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>