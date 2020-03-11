<template>
  <div>

    <a-list class="comment-list"
            style="text-align:left;font-size:1vw;"
            :header="`所有评价 ${data.length}`"
            itemLayout="horizontal"
            :pagination="pagination"
            :dataSource="data">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <!-- 用户头像，昵称 -->
        <a-comment :author="item.author"
                   :avatar="item.profile">
          <!-- 评分 -->
          <a-rate v-model='item.stars'
                  disabled />
          <span class="ant-rate-text">{{item.stars}} 星</span>
          <!-- 评论具体内容 -->
          <p slot="content">{{item.content}}</p>
          <!-- 评论时间 -->
          <span slot="datetime"
                style="margin-left:100px;">{{item.time | formatDate}}</span>
        </a-comment>
      </a-list-item>
    </a-list>

  </div>

</template>

<script>
export default {
  data () {
    return {
      pagination: {
        onChange: page => {
          alert(page)
        },
        pageSize: 1,
      },
      data: [
        {
          author: '小小小王子',
          profile: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: '我最喜欢小王子这本书了',
          stars: 2,
          time: 1583500980000,
        },
        {
          author: '我的愿望是拥有一只博美然后一只大金毛',
          profile: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: '小王子和玫瑰花，那小狐狸和飞行员呢？',
          stars: 3,
          time: 1583500980000,
        },
      ],
    }
  },
  filters: {
    formatDate: function (value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();
      s = s < 10 ? ('0' + s) : s;
      return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    }
  }
}
</script>

<style scoped>
</style>



