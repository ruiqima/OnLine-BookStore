<template>

  <a-list bordered
          :dataSource="categories">
    <a-list-item slot="renderItem"
                 slot-scope="cate">
      <a-button style="border:none;">{{cate.category}}
        <a-icon type="right" />
      </a-button>
    </a-list-item>
    <div slot="header">全部分类</div>
  </a-list>

</template>

<script>
export default {
  data () {
    return {
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

}
</script>

<style scoped></style>
