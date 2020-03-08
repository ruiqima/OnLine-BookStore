<template>
  <a-card :bordered="false"
          style="width: 1200px;margin-top:7px;"
          hoverable>
    <template>
      <div class="flex-row ver-center">
        <!-- 封面图片 -->
        <div class="img-cover-div"><img src="../../assets/imgs/pic2.jpg"
               slot="cover"
               class="img-cover"></div>

        <!-- 右侧正文 -->
        <a-card-meta class="rec-content"
                     align="left">
          <template slot="description">
            <span style="color:black;line-height:35px;font-size:medium;">小王子</span><br />

            <span style="font-weight:600;color:#ea1;line-height:30px;font-size:larger;">￥19.80</span>
            <span style="font-size:smaller;color:#999999; margin-left:20px;">销量 1835</span><br />
            <span style="color:#555555;line-height:20px; font-size:small;">[法] 安托万·圣·埃克苏佩里</span>
            <span style="color:#555555;line-height:20px; font-size:small;margin-left:20px;">天津人民出版社</span><br />
            <!-- 评分 -->
            <a-rate v-model='value'
                    disabled="true" />
            <span style="font-size:small;color:#999999;">19803条评论</span>
            <br />
            <a-tag color="cyan"
                   style="margin-top:5px;">儿童</a-tag>
            <a-tag color="cyan"
                   style="margin-top:5px;">外国文学</a-tag><br /><br />
            <p align="left"
               style="line-height:20px;">
              《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。
            </p>
            <a-button style="background-color:#EAF4EB;margin-top:5px;">加入购物车</a-button>
            <a-button style="margin-left:20px;margin-top:5px;">收藏</a-button>
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
    }
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");
</style>