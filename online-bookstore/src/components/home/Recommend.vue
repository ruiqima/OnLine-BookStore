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
      book: {
        title: '小王子',
        stars: 2,                //星星的数量
        coverUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796105480,3528245014&fm=26&gp=0.jpg',
        author: '[法] 安托万·圣·埃克苏佩里',
        introduction: '《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。小说叙述者是个飞行员，他在故事一开始告诉读者，他在大人世界找不到一个说话投机的人，因为大人都太讲实际了。接着，飞行员讲了六年前他因飞机故障迫降在撒哈拉沙漠遇见小王子故事。神秘的小王子来自另一个星球。飞行员讲了小王子和他的玫瑰的故事。小王子为什么离开自己的星球；在抵达地球之前，他又访问过哪些星球。他转述了小王子对六个星球的历险，他遇见了国王、爱虚荣的人、酒鬼、商人、点灯人、地理学家、蛇、三枚花瓣的沙漠花、玫瑰园、扳道工、商贩、狐狸以及我们的叙述者飞行员本人。飞行员和小王子在沙漠中共同拥有过一段极为珍贵的友谊。当小王子离开地球时，飞行员非常悲伤。他一直非常怀念他们共度的时光。他为纪念小王子写了这部小说。'

      }
    }
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>