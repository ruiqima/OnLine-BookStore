<template>
  <div style="background-color:#f5f5f5;">

    <a-list itemLayout="horizontal"
            :pagination="pagination"
            :dataSource="books"
            style="width:100%;">
      <a-list-item slot="renderItem"
                   slot-scope="book">
        <a-card :bordered="false"
                hoverable
                style="width: 99%;">
          <template>
            <div class="flex-row ver-center">

              <div class="img-cover-div"><img :src="book.coverUrl"
                     slot="cover"
                     class="img-cover"></div>

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
            </div>
          </template>

        </a-card>
      </a-list-item>
    </a-list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 0,
      pagination: {
        onChange: page => {
          this.currentPage = page
          this.$emit('sendPageInfo', { page: page, size: 5 })
        },
        pageSize: 5,
      },
      books: [{
        title: '小王子',
        coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
        price: 19.80,
        introduction: '《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。',
        sales: 1835,
        author: '[法] 安托万·圣·埃克苏佩里',
        category: '童话',
        stock: 384,
        publisher: '天津人民出版社',
        value: 2,
        commentsNum: 19830,
      },
      {
        title: '小王子2',
        coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
        price: 19.80,
        introduction: '《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。',
        sales: 1835,
        author: '[法] 安托万·圣·埃克苏佩里',
        category: '童话',
        stock: 384,
        publisher: '天津人民出版社',
        value: 2,
        commentsNum: 19830,
      },

      ]
    }
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>