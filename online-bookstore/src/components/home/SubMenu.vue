<template>

  <!-- <a-collapse :bordered="false"
              style="width:200px;">
    <a-collapse-panel header="全部分类"
                      key=""
                      :showArrow="false">
      <a-card>
        <a-card-grid style="width:50%;textAlign:'center'"
                     v-for="cate in categories"
                     :key="cate">{{cate.category}}</a-card-grid>

      </a-card>
    </a-collapse-panel>
  </a-collapse> -->

  <div>
    <a-checkable-tag v-model="checked1"
                     @change="handleChange"
                     v-for="cate in categories"
                     :key="cate"
                     style="font-size:15px;">{{cate.category}}</a-checkable-tag>
  </div>
</template>

<script>
export default {
  data () {

    return {
      checked1: false,
      checked2: false,
      checked3: false,
      categories: [
        {          categoryId: 1,
          category: '文学'        },
        {          categoryId: 2,
          category: '艺术'        },
        {          categoryId: 3,
          category: '科学'        },
        {          categoryId: 4,
          category: '健康'        },
        {          categoryId: 5,
          category: '生活'        },
        {          categoryId: 6,
          category: '运动'        },
      ]
    };
  },
  method: {
    handleChange (checked) {
      console.log(checked);
    },
  }

}
</script>

<style scoped></style>
