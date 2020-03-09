<template>
  <a-row style="margin:0 20px;"
         type="flex"
         justify="start">
    <a-col :xs="24"
           :sm="24"
           :md="24"
           :lg="8"
           :xl="8">
      <a-card :bordered="false"
              style="margin-top:7px;">

        <!-- 封面图片 -->
        <img src="../../assets/imgs/pic2.jpg"
             object-fit="contain"
             class="img-cover-detail">

        <!-- 右侧正文 -->

      </a-card>
    </a-col>

    <a-col :xs="24"
           :sm="24"
           :md="24"
           :lg="16"
           :xl="16">
      <a-card :bordered="false">
        <a-card-meta align="left">
          <template slot="description">
            <span style="color:black;line-height:35px;font-size:large;font-weight:bold;">{{book.title}}</span><br />

            <p align="left"
               style="letter-spacing: 1px;color:#555555;font-size:1.1vw;line-height:25px;"> {{book.introduction}}
            </p>
            <a-row type="flex"
                   justify="start">
              <a-col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     :xl="12">
                <span style="color:#555555;line-height:20px; font-size:small;">作者：{{book.author}}</span></a-col>
              <a-col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     :xl="12"><span style="color:#555555;line-height:20px; font-size:small;">出版社：{{book.publisher}}</span>
              </a-col>
            </a-row><br />

            <!-- 评分 -->
            <a-rate v-model='value'
                    disabled="true" />
            <span style="font-size:0.9vw;color:#999999;">{{comments.totalElements}}条评论</span>
            <br />

            <a-tag color="cyan"
                   style="margin-top:0.35vw;margin-bottom:10px;">{{book.category}}</a-tag><br />
            <span style="font-size:small;color:#999999;">价格 </span>
            <span style="font-weight:600;color:#ea1;line-height:20px;font-size:large;margin-left:10px;">￥{{book.price}}</span><br />

            <span style="font-size:x-small;color:#999999; line-height:40px;">本店活动 </span>
            <span style="color:#B5621B; margin-left:20px;letter-spacing:1px;"
                  v-for="(item, index) in discounts"
                  :key="index">满{{item.total}}减{{item.discount}}</span><br />
            <span style="font-size:x-small;color:#999999;">销量</span>
            <span style="font-size:x-small;color:#999999;margin-left:10px;">{{book.sales}}</span><br />
            <span style="font-size:x-small;color:#999999; line-height:40px;">库存 </span>
            <span style="font-size:x-small;color:#999999;margin-left:10px;">{{book.stock}}</span><br />

            <a-button style="background-color:#EAF4EB;margin-top:40px;">加入购物车</a-button>
            <a-button style="margin-left:20px;margin-top:40px;">立即购买</a-button>
            <a-button style="margin-left:20px;margin-top:40px;">收藏</a-button>
          </template>

        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  data () {
    return {
      value: 2,
      //书籍详细信息,接口：书籍详情
      book: {
        isbn: '9787201077642',
        title: '小王子',
        coverUrl: '../../assets/imgs/pic2.jpg',
        price: 19.80,
        introduction: '书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。',
        sales: 1835,
        author: '[法] 安托万·圣·埃克苏佩里',
        publisher: '天津人民出版社',
        category: '童话',
        stock: 127
      },
      // 所有评论，接口：某本书的全部评论
      comments: {
        totalElements: 5,
        totalPages: 2,
        data: [
          {
            commendId: 1,
            userId: 1,
            content: '这本书好好看呀！',
            stars: 5,
            time: 1583669312,
          },
          {
            commendId: 2,
            userId: 2,
            content: '小王子是我最喜欢的书，还有人送给我了这本书的韩语版~特别喜欢小王子',
            stars: 5,
            time: 1583669312,
          },
          {
            commendId: 1,
            userId: 1,
            content: '小王子和他的玫瑰花，小狐狸呢',
            stars: 5,
            time: 1583669312,
          },
          {
            commendId: 1,
            userId: 1,
            content: '小王子是我最喜欢的书，还有人送给我了这本书的韩语版~特别喜欢小王子',
            stars: 5,
            time: 1583669312,
          },
          {
            commendId: 1,
            userId: 1,
            content: '小王子和他的玫瑰花，小狐狸呢',
            stars: 5,
            time: 1583669312,
          }
        ]
      },
      //所有优惠
      discounts: [
        {
          discountId: 1,
          total: 300,
          discount: 30
        },
        {
          discountId: 2,
          total: 500,
          discount: 100
        }
      ]
    }
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>