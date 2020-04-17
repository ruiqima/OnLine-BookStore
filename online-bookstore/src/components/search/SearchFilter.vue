<template>
  <!-- ********************************

        created by：马睿祺 2017302580166

    *********************************** -->
  <div style="display:flex;justify-content:space-between;margin-top:30px;background-color:#f5f5f5;">
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
                size="small"
                @click="order2Parent('title')">默认</a-button><br />
      <a-button style="margin-left:5px;margin-top:15px;"
                size="small"
                @click="order2Parent('sales')">销量升序</a-button>
      <a-button style="margin-left:5px;"
                size="small"
                @click="order2Parent('sales_desc')">销量降序</a-button><br />
      <a-button style="margin-left:5px;margin-top:15px;"
                size="small"
                @click="order2Parent('price')">价格升序</a-button>
      <a-button style="margin-left:5px;"
                size="small"
                @click="order2Parent('price_desc')">价格降序</a-button>
      <a-divider />
      <span>价格区间</span><br /><br />
      <a-input-number size="large"
                      :min="1"
                      :max="100000"
                      v-model="min" />
      <span style="color:#bbbbbb">——</span>
      <a-input-number size="large"
                      :min="1"
                      :max="100000"
                      v-model="max"
                      style="margin-left:10px;" />
      <a-button style="margin-left:180px;margin-top:20px;"
                size="small"
                @click="price2Parent">确定</a-button>

    </a-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 'default',
      visible: false,
      max: '',
      min: '',
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

    //传order给父组件
    order2Parent (type) {
      this.$emit('sendorder', type)
    },
    price2Parent () {
      var price = {
        'low': this.min,
        'high': this.max
      }
      this.$emit('sendprice', price)
      this.onClose()
    }
  },
}
</script>

<style scoped>
@import url("../../assets/css/homepage.css");

.ant-input-number {
  margin-right: 10px;
}
</style>