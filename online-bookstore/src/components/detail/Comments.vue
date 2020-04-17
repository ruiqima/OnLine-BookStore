
<template>
  <!-- ********************************

        created by：马睿祺 2017302580166

    *********************************** -->
  <div>
    <a-list class="comment-list"
            style="text-align:left;font-size:1vw;"
            :header="`所有评价 ${totalElements}`"
            itemLayout="horizontal"
            :dataSource="data">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <!-- 用户头像，昵称 -->
        <a-comment :author="item.author"
                   :avatar="item.profile">
          <!-- 评分 -->
          <a-rate v-model="item.stars"
                  disabled />
          <span class="ant-rate-text">{{ item.stars }} 星</span>
          <!-- 评论具体内容 -->
          <p slot="content">{{ item.content }}</p>
          <!-- 评论时间 -->
          <span slot="datetime"
                style="margin-left:100px;">{{
            item.time | formatDate
          }}</span>
        </a-comment>
      </a-list-item>
    </a-list>
    <a-pagination v-model="current"
                  :total="totalElements"
                  @change="onChange"
                  :pageSize="5" />
  </div>
</template>

<script>
export default {
  props: {
    isbn: {
      type: String
    }
  },
  data () {
    return {
      current: 1,
      totalElements: 0,
      data: [],
      temp: []

    }
  },
  created () {
    this.getcomments(1)
  },
  methods: {
    async getcomments (page) {
      var _this = this
      _this.data = []
      await _this.axios.get('/api/comment/book/' + _this.isbn, {
        params: {
          page: page - 1,
          size: 5
        }
      })
        .then(function (response) {
          _this.totalElements = response.data.totalElements
          _this.temp = response.data.data
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          _this.getuserinfo()
        });
    },

    async getuserinfo () {
      var _this = this
      var i = 0
      for (; i < _this.temp.length; i++) {
        console.log(_this.temp)
        await _this.axios.get('/api/user/customer/' + _this.temp[i].userId)
          .then(function (response) {
            _this.$set(_this.temp[i], 'author', response.data.username)
            _this.$set(_this.temp[i], 'profile', response.data.profile)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            _this.data.push(_this.temp[i])
          });
      }
    },
    onChange (page) {
      this.getcomments(page)
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
    }
  }
}
</script>

<style scoped></style>
