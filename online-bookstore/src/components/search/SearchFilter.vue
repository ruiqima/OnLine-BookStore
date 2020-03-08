<template>
  <div style="display:flex;justify-content:space-between;margin-top:30px;">
    <span class="card-title-text"
          style="margin-left:30px;">搜索结果</span>

    <a-checkable-tag @change="showDrawer"
                     style="margin-right:30px;">
      <span style="font-size:medium;letter-spacing:1px;">筛选</span>
    </a-checkable-tag>

    <a-drawer title="筛选条件"
              placement="right"
              :closable="false"
              @close="onClose"
              :visible="visible"
              width="300px">
      <span>排序方式</span><br /><br />

      <a-button style="margin-left:5px;"
                size="small">默认</a-button><br />
      <a-button style="margin-left:5px;margin-top:15px;"
                size="small">销量升序</a-button>
      <a-button style="margin-left:5px;"
                size="small">销量降序</a-button><br />
      <a-button style="margin-left:5px;margin-top:15px;"
                size="small">价格升序</a-button>
      <a-button style="margin-left:5px;"
                size="small">价格降序</a-button>
      <a-divider />
      <span>价格区间</span><br /><br />
      <a-input-number size="large"
                      :min="1"
                      :max="100000"
                      @change="onChangemin" />
      <span style="color:#bbbbbb">——</span>
      <a-input-number size="large"
                      :min="1"
                      :max="100000"
                      @change="onChangemax"
                      style="margin-left:10px;" />
      <a-button style="margin-left:180px;margin-top:20px;"
                size="small">确定</a-button>

    </a-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 'default',
      visible: false,
    }
  },
  methods: {
    handleSizeChange (e) {
      this.size = e.target.value
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    // 数字输入框
    onChangemin (value) {
      console.log('changed', value);
    },
    onChangemax (value) {
      console.log('changed', value);
    },
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");

.ant-input-number {
  margin-right: 10px;
}
</style>