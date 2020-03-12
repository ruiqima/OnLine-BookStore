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
        <img :src="booksCard.titleImgUrl"
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
                 :key="book.title">

            <a-card hoverable
                    style="margin-bottom:10px;"
                    size="small">
              <div class="hori-center">
                <img alt="图片"
                     :src="book.coverUrl"
                     slot="cover"
                     style="margin:10px 0;width:100%;" /></div>
              <a-card-meta :title="book.title"
                           :description="book.author">
              </a-card-meta>
              <template><br /><span style="color:#ea1;font-size:small;">￥{{book.price}}</span><br /><br /></template>
              <template slot="extra">
                <!-- 右上角跳转链接 -->
                <router-link :to="{ name: `SearchResult`, params: { keyword: book.title } }">
                  <a-icon type="double-right"
                          :style="{ fontSize: '10px', color: '#999' }" />
                </router-link>
              </template>
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
        titleImgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?w=468&h=1228',
        books: [{
          title: '爱丽丝梦游仙境',
          coverUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583818140272&di=c4b76176481266c175cebf05fcdd5159&imgtype=0&src=http%3A%2F%2Fimg3m8.ddimg.cn%2F12%2F0%2F1231790088-1_u_1.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }, {
          title: '狼图腾',
          coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
          author: '姜戎',
          price: 44.90
        }, {
          title: '爱丽丝梦游仙境',
          coverUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583818140272&di=c4b76176481266c175cebf05fcdd5159&imgtype=0&src=http%3A%2F%2Fimg3m8.ddimg.cn%2F12%2F0%2F1231790088-1_u_1.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }, {
          title: '狼图腾',
          coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
          author: '姜戎',
          price: 44.90
        }, {
          title: '爱丽丝梦游仙境',
          coverUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583818140272&di=c4b76176481266c175cebf05fcdd5159&imgtype=0&src=http%3A%2F%2Fimg3m8.ddimg.cn%2F12%2F0%2F1231790088-1_u_1.jpg',
          author: '[美] 刘易斯·卡罗尔',
          price: 15.04
        },
        {
          title: '小王子',
          coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
          author: '[法] 安托万·圣·埃克苏佩里',
          price: 19.80
        }

        ]

      }
    };
  },
  method: {
    searchBook: function () {
      alert('1')
    }
  }
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");

#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>
