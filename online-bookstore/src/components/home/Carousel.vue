<template>
  <!-- *****************************************

 作者：马睿祺

***************************************** -->
  <div>
    <!-- 走马灯 -->
    <a-carousel autoplay>
      <div v-for="caro in carousels"
           :key="caro.carouselUrl">
        <img :src="caro.carouselUrl"
             style="object-fit:contain;" />
      </div>
    </a-carousel>
  </div>
</template>

<script>

export default {
  data () {

    return {
      carousels: [
        {          carouselId: 1,
          carouselUrl: "https://s1.ax1x.com/2020/04/08/GROCm4.jpg"        },
        {          carouselId: 2,
          carouselUrl: "https://s1.ax1x.com/2020/04/08/GRXAbQ.jpg"        },
        {          carouselId: 3,
          carouselUrl: "https://s1.ax1x.com/2020/04/08/GRXoZQ.jpg"        },
        {          carouselId: 4,
          carouselUrl: "https://s1.ax1x.com/2020/04/08/GRjteg.jpg"        }
      ]
    };
  },
}
</script>

<style scoped>
.ant-carousel /deep/ .slick-slide {
  text-align: center;
  height: 450px;
  line-height: 450px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel /deep/ .slick-slide h3 {
  color: #ea1;
}
</style>
