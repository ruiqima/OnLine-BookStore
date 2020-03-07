<template>
  <a-menu
    @click="handleClick"
    :defaultOpenKeys="['sub1']"
    :openKeys.sync="openKeys"
    mode="inline"
  >
    <a-sub-menu key="sub1" @titleClick="titleClick">
      <span slot="title"> <a-icon type="bars" /><span>全部分类</span> </span>
      <a-menu-item key="1">文艺</a-menu-item>
      <a-menu-item key="2">心理</a-menu-item>
      <a-menu-item key="3">社会</a-menu-item>
      <a-menu-item key="4">法律</a-menu-item>
      <a-menu-item key="5">科学</a-menu-item>
      <a-menu-item key="6">科幻</a-menu-item>
      <a-menu-item key="7">健康</a-menu-item>
      <a-menu-item key="8">设计</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1']
    }
  },
  methods: {
    watch: {
      openKeys(val) {
        console.log('openKeys', val)
      }
    },

    // 侧面导航栏方法
    handleClick: function(e) {
      console.log('click', e)
    },
    titleClick: function(e) {
      //点击：全部分类
      console.log('titleClick', e)
    }
  }
}
</script>

<style scoped></style>
