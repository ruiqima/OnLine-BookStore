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
                <a-checkbox :indeterminate="indeterminate"
                            @change="onCheckAllChange"
                            :checked="checkAll">
                  全选
                </a-checkbox>
                <p>商品</p>
                <p>单价</p>
                <p>数量</p>
                <p>小计</p>
                <p>操作</p>
             </div>
             <div class='cart-content' v-for="book in booklist" :key="book.title">
               <a-checkbox :options="products" v-model="checkedList" @change="onChange" />
               <img :src="book.coverUrl" style="width:10%;"/>
               <div style="font-size=16px;">￥{{book.price}}</div>
               <div>
                   <a-input-number id="inputNumber" :min="1" :max="max" v-model="value" @change="onChange1" />
               </div>
               <div style="color:#ea1;">￥{{itemsum}}</div>
               <a @click="onDelete" >删除</a>
               
             </div>
             <div class='cart-footer'>
               <a-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">
               全选
               </a-checkbox>
                 <a @click="onDelete">删除选中商品</a>
                 <p>已选商品
                   <span style="font-size:20px;font-weight:bold; color:rgb(216, 68, 42);">
                   {{choose}}
                   </span>
                   件</p>
                 <p>合计：<span style="font-size:20px;font-weight:bold; color:rgb(216, 68, 42);">￥{{sum}}</span>
                 </p>
                 <a-button type="primary" style="width:10%;">结算</a-button>
             </div>
           </div>
          </a-layout-content>
        </a-layout>

      </a-layout>

      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
    </a-layout>
    <a-layout-footer style="margin-top:50px;margin-bottom:30px;background-color: #F5F5F5;">
      <p style="font-size:medium;letter-spacing:3px;color:#ccc;margin-bottom:40px;">让每个人都能能享受阅读的乐趣</p>
      <a-divider style="color:#ccc;font-size:x-small;">ONLINE BOOKSTORE ©2020 Created by Our Team</a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'
const defaultCheckedList = [];
export default {
  data () {
    return {
      checkedList: defaultCheckedList,
      indeterminate: false,
      checkAll: false,
      max:10,
      value: 1,
      userId:0,
      products:[],
      booklist:[],
      itemsum:0,//小计
      sum:0,//购物车选中物品的值的总和
      choose:0,//已选择的件数

    };
  },
  created(){
  this.userId=this.$route.params.userId;
  console.log(this.userId);
  this.getProducts();
},
  methods: {
    onDelete () {
      alert("删除当前元素");
    },
    onChange1 (value) {
      console.log('changed', value);
    },
    onChange () {//checkedList
      //this.indeterminate = !!checkedList.length && checkedList.length < products.length;
      //this.checkAll = checkedList.length === products.length;
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        //checkedList: e.target.checked ? products : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    getPlainOptions () {
      this.product.isbn = "12345";
      this.product.count = 5;
    },
    getProducts(){
      var _this=this;
      _this.axios.get('/api/cart/'+_this.userId)
      .then(function (response) {
      console.log(response);
      _this.products=response.data;
      })
      .catch(function (error) {
      console.log(error);
      })

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
.cart-footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: whitesmoke;
  text-align: center;
  padding-top:1.5%;
  padding-bottom:2%;
  border-radius: 3px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: #eee;
  z-index: 9999;
}	
.cart-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width:95%;
  margin:1%;
  margin-left:3%;
  padding-top:1%;
  border-radius: 3px;
  align-items: center;

  margin: 1%;
  padding-top: 1%;
  border-radius: 3px;
}
.cart-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: whitesmoke;
  margin: 1%;
  padding-top: 1%;
  border-radius: 3px;
}
</style>