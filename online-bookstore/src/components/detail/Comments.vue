<template>
  <div>

    <a-list class="comment-list"
            style="text-align:left;font-size:1vw;"
            :header="`所有评价 ${data.length}`"
            itemLayout="horizontal"
            :dataSource="data">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <!-- 用户头像，昵称 -->
        <a-comment :author="item.author"
                   :avatar="item.avatar">
          <!-- 评分 -->
          <a-rate v-model='value'
                  disabled />
          <span class="ant-rate-text">{{value}} stars</span>
          <!-- 评论具体内容 -->
          <p slot="content">{{item.content}}</p>
          <!-- 评论时间 -->
          <a-tooltip slot="datetime"
                     :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">

            <span>{{item.datetime.fromNow()}}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>

    <!-- 分页 -->
    <div>
      <br /><br />
      <a-pagination :defaultCurrent="6"
                    :total="500"
                    size="small"
                    style="font-size:1vw;" />
      <br /><br />
    </div>
  </div>

</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      value: 3,
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
      moment,
    }
  },
}
</script>

<style scoped>
</style>