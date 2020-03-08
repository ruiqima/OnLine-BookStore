<template>
  <a-card :bordered="false"
          style="width: 83vw;margin-top:0.5vw;">
    <template>
      <div class="flex-row ver-center">
        <!-- 封面图片 -->
        <div class="img-cover-div-detail"><img src="../../assets/imgs/pic2.jpg"
               slot="cover"
               class="img-cover-detail"></div>

        <!-- 右侧正文 -->
        <a-card-meta class="rec-content"
                     align="left">
          <template slot="description">
            <span style="color:black;line-height:35px;font-size:1.7vw;font-weight:bold;line-height:3.5vw;">{{book.title}}</span><br />

            <p align="left"
               style="line-height:1.4px;letter-spacing: 0.07vw;color:#555555;font-size:1.1vw;line-height:1.8vw;"> {{book.introduction}}
            </p>
            <span style="color:#555555;line-height:1.4vw; font-size:0.91vw;">作者：{{book.author}}</span>
            <span style="color:#555555;line-height:1.4vw; font-size:0.91vw;margin-left:1.4vw;">出版社：{{book.publisher}}</span><br />

            <!-- 评分 -->
            <a-rate v-model='value'
                    disabled="true" />
            <span style="font-size:0.9vw;color:#999999;">{{comments.totalElements}}条评论</span>
            <br />

            <a-tag color="cyan"
                   style="margin-top:0.35vw;margin-bottom:0.7vw;">{{book.category}}</a-tag><br />
            <span style="font-size:small;color:#999999;">价格 </span>
            <span style="font-weight:600;color:#ea1;line-height:2.1vw;font-size:2.1vw;margin-left:0.7vw;">￥{{book.price}}</span><br />

            <span style="font-size:0.9vw;color:#999999; line-height:2.8vw;">本店活动 </span>
            <span style="color:#B5621B; margin-left:1.4vw;letter-spacing:0.07vw;"
                  v-for="(item, index) in discounts"
                  :key="index">满{{item.total}}减{{item.discount}}</span><br />
            <span style="font-size:0.9vw;color:#999999;">销量</span>
            <span style="font-size:0.9vw;color:#999999;margin-left:0.7vw;">{{book.sales}}</span><br />
            <span style="font-size:0.9vw;color:#999999; line-height:2.8vw;">库存 </span>
            <span style="font-size:0.9vw;color:#999999;margin-left:0.7vw;">{{book.stock}}</span><br /><br />

            <a-button style="background-color:#EAF4EB;margin-top:0.35vw;">加入购物车</a-button>
            <a-button style="margin-left:1.4vw;">立即购买</a-button>
            <a-button style="margin-left:1.4vw;">收藏</a-button>
          </template>

        </a-card-meta>
      </div>
    </template>

  </a-card>

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