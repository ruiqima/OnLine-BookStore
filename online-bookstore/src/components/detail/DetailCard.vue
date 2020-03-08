<template>
  <a-card :bordered="false"
          style="width: 1200px;margin-top:7px;">
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
            <span style="color:black;line-height:35px;font-size:x-large;font-weight:700;line-height:50px;">小王子</span><br />

            <p align="left"
               style="line-height:20px;letter-spacing: 1px;color:#555555;font-size:15px;line-height:25px;"> 书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。
            </p>
            <span style="color:#555555;line-height:20px; font-size:small;">作者：[法] 安托万·圣·埃克苏佩里</span>
            <span style="color:#555555;line-height:20px; font-size:small;margin-left:20px;">出版社：天津人民出版社</span><br />

            <!-- 评分 -->
            <a-rate v-model='value'
                    disabled="true" />
            <span style="font-size:small;color:#999999;">19803条评论</span>
            <br />

            <a-tag color="cyan"
                   style="margin-top:5px;">儿童</a-tag>
            <a-tag color="cyan"
                   style="margin-top:5px;">外国文学</a-tag><br /><br />
            <span style="font-size:small;color:#999999;">价格 </span>
            <span style="font-weight:600;color:#ea1;line-height:30px;font-size:xx-large;margin-left:10px;">￥19.80</span><br />

            <span style="font-size:small;color:#999999; line-height:40px;">本店活动 </span>
            <span style="color:#B5621B; margin-left:20px;letter-spacing:1px;">满300减30</span><br />
            <span style="font-size:small;color:#999999;">销量</span>
            <span style="font-size:small;color:#999999;margin-left:10px;">1835</span><br />
            <span style="font-size:small;color:#999999; line-height:40px;">库存 </span>
            <span style="font-size:small;color:#999999;margin-left:10px;">127</span><br /><br />

            <a-button style="background-color:#EAF4EB;margin-top:5px;">加入购物车</a-button>
            <a-button style="margin-left:20px;margin-top:5px;">立即购买</a-button>
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