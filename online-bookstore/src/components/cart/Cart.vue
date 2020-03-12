<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
<!-- *****************上面都不用改****************** -->



	<!-- 这个a-layout是除了左右两个灰色sider，正中间那一块，包括header和它下面的正文部分 -->
      <a-layout>
        <Header />
		<!-- 正文内容写在这一块 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
           <div class='content'>
             <div class='cart-header'>
                <a-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">
                  全选
                </a-checkbox>
                <p>商品</p>
                <p>单价</p>
                <p>数量</p>
                <p>小计</p>
                <p>操作</p>
             </div>
             <div class='cart-content'>
               <a-checkbox :options="products" v-model="checkedList" @change="onChange" />
               <img src="../../assets/imgs/pic1.jpg" style="width:10%;"/>
               <div style="font-size=16px;">￥21.20</div>
               <div>
                   <a-input-number id="inputNumber" :min="1" :max="10" v-model="value" @change="onChange1" />
               </div>
               <div style="color:#ea1;">小计</div>
               <a @click="onDelete" >删除</a>
               
             </div>
             <div class='cart-footer'>
             </div>
           </div>
          </a-layout-content>
        </a-layout>

      </a-layout>

      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="height:300px;background-color:white;margin-top:50px;">
      <a-divider><span style="letter-spacing:4px;color:#999999;">让每个人都能享受阅读的乐趣</span></a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'
  const defaultCheckedList = [];
  var product={
    isbn:"12345",
    count:2
  }
  var products=[product];
  
  export default {
    data() {
      return {
        checkedList: defaultCheckedList,
        indeterminate: false,
        checkAll: false,
        value:3
      };
    },
    methods: {
      onDelete(){
        alert("删除当前元素");
      },
      onChange1(value) {
        console.log('changed', value);
      },
      onChange(checkedList) {
        this.indeterminate = !!checkedList.length && checkedList.length < products.length;
        this.checkAll = checkedList.length === products.length;
      },
      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e.target.checked ? products : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      },
      getPlainOptions(){
        this.product.isbn="12345";
        this.product.count=5;
      }
    },
    components: {
    Header
  },

  };
</script>

<style scoped>
	/*注意文件路径*/
@import url("../../assets/css/homepage.css");		
.cart-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  margin:1%;
  padding-top:1%;
  border-radius: 3px;

}
.cart-header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: whitesmoke;
  margin:1%;
  padding-top:1%;
  border-radius: 3px;

}		
</style>