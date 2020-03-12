<template>
  <div>
    <!-- 走马灯 -->
    <a-carousel autoplay>
      <div>
        <img src="{caro.carouselUrl}"
             style="width:100%;height:100%;"
             v-for="caro in carousels"
             :key="caro.carouselUrl" />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
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
          carouselUrl: "../../assets/imgs/car1.jpg"        },
        {          carouselId: 2,
          carouselUrl: "../../assets/imgs/car2.jpg"        },
        {          carouselId: 3,
          carouselUrl: "../../assets/imgs/car3.jpg"        },
        {          carouselId: 4,
          carouselUrl: "../../assets/imgs/car4.jpg"        }
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
