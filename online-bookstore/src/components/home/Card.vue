<template>
  <div class="flex-column">
    <div class="card-title-div ver-center">
      <span class="card-title-text">{{booksCard.totalTitle}}</span>
      <div id="components-pagination-demo-mini">
        <a-pagination size="small"
                      :total="50" />
      </div>
    </div>
    <div class="flex-row">
      <div style="width:210px; margin-right:20px; ">
        <img src="../../assets/imgs/new.jpg"
             slot="cover"
             style=" width:200px;height:100%;" />
      </div>
      <div style="background-color: #f5f5f5;">
        <a-row type="flex"
               justify="space-between"
               :gutter="15">
          <a-col :xs="24"
                 :sm="24"
                 :md="12"
                 :lg="8"
                 :xl="6"
                 v-for="book in booksCard.books"
                 :key="book">
            <a-card hoverable
                    style="margin-bottom:10px;">
              <div class="hori-center">
                <img alt="图片"
                     :src="book.coverUrl"
                     slot="cover"
                     style="margin:10px 0;width:100%;" /></div>
              <a-card-meta :title="book.title"
                           :description="book.author">
              </a-card-meta>
              <template><br /><span style="color:#ea1;font-size:small;">￥{{book.price}}</span></template>
            </a-card>
          </a-col>

        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      booksCard: {
        totalTitle: '新书推荐',
        titleImgUrl: '../../assets/imgs/new.jpg',
        books: [{
          title: '爱丽丝梦游仙境',
          coverUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: '../../assets/imgs/pic2.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }, {
          title: '狼图腾',
          coverUrl: '../../assets/imgs/pic3.jpg',
          author: '姜戎',
          price: 44.90
        }, {
          title: '爱丽丝梦游仙境',
          coverUrl: '../../assets/imgs/pic1.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: '../../assets/imgs/pic2.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }, {
          title: '狼图腾',
          coverUrl: '../../assets/imgs/pic3.jpg',
          author: '姜戎',
          price: 44.90
        }, {
          title: '爱丽丝梦游仙境',
          coverUrl: '../../assets/imgs/pic1.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: '../../assets/imgs/pic2.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }

        ]

      }
    };
  }
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");

#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
