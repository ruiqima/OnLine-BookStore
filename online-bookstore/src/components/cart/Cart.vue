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
              <div v-if="products.length==0"
                   style="margin:10%;font-size:20px; color:#cdcdcd">购物车空空如也，快去选点东西吧~</div>
              <div class='cart-content'
                   v-for="bitem in booklist"
                   :key="bitem.book.title">

                <a-checkbox :checked="bitem.check"
                            @change="onChange(bitem)" />
                <img :src="bitem.book.coverUrl"
                     style="width:10%;" />
                <div style="font-size=16px;">￥{{bitem.book.price}}</div>
                <div>
                  <a-input-number id="inputNumber"
                                  :min="1"
                                  :max="10"
                                  v-model="bitem.count"
                                  @change="onChange1(bitem)" />
                </div>
                <div style="color:#ea1;">￥{{bitem.itemsum}}</div>
                <a @click="onDelete(bitem)">删除</a>

              </div>

              <div class='cart-footer'>
                <a-checkbox :indeterminate="indeterminate"
                            @change="onCheckAllChange"
                            :checked="checkAll">
                  全选
                </a-checkbox>
                <a @click="onDeleteAll">删除选中商品</a>

                <p>已选商品
                  <span style="font-size:20px;font-weight:bold; color:rgb(216, 68, 42);">
                    {{choose}}
                  </span>
                  件</p>
                <p>合计：<span style="font-size:20px;font-weight:bold; color:rgb(216, 68, 42);">￥{{sum}}</span>
                </p>
                <a-button type="primary"
                          style="width:10%;"
                          @click="pay">结算</a-button>
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
import '../../../global'
export default {
  data () {
    return {
      checkedList: [],
      indeterminate: false,
      checkAll: false,
      max: 10,
      userId: 0,
      products: [],
      booklist: [],
      sum: 0.0,//购物车选中物品的值的总和
      choose: 0,//已选择的件数
      isbns: [""]
    };
  },
  created () {
    this.userId = global.userId
    //console.log(this.userId);
    this.getProducts();
  },
  methods: {
    onDeleteAll () {
      //删除选中商品
      this.isbns = [];
      this.checkedList.forEach(element => {
        this.isbns.push(element.book.isbn),
          this.booklist.splice(this.booklist.indexOf(element), 1)

      });
      this.axios.delete('/api/cart/' + this.userId,
        {
          data: this.isbns
        }
      )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });




    },
    pay () {
      if (this.choose == 0) {
        alert("请选择要购买的物品");
      } else {
        this.$router.push({          name: `Buynow`, params: {
            bought: this.checkedList,
            sum: this.sum,
            choose: this.choose
          }        })
      }
      //删掉购物车里的物品
      this.checkedList.forEach(element => {
        this.onDelete(element);
      });

    },
    onDelete (bitem) {
      this.isbns = [""];
      this.booklist.splice(this.booklist.indexOf(bitem), 1)
      this.isbns[0] = bitem.book.isbn;
      console.log(this.isbns);
      this.axios.delete('/api/cart/' + this.userId,
        {
          data: this.isbns
        }
      )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    onChange1 (bitem) {
      console.log(bitem.count);
      //修改商品数量
      var _this = this;
      bitem.itemsum = bitem.book.price * bitem.count;
      _this.axios.put('/api/cart/' + _this.userId, {
        isbn: bitem.book.isbn,
        count: bitem.count
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    onChange (bitem) {//checkedList
      bitem.check = !bitem.check;
      console.log(bitem.check);
      if (bitem.check == true) {
        this.checkedList.push(bitem);
      } else {
        this.checkedList.splice(this.checkedList.indexOf(bitem), 1);
      }

      this.indeterminate = !!this.checkedList.length && this.checkedList.length < this.products.length;
      this.checkAll = this.checkedList.length === this.products.length;

      console.log(this.checkedList);
      this.calculate();
    },
    onCheckAllChange () {
      if (this.checkAll == false) {
        this.checkAll = true;
        this.indeterminate = false;
        this.checkedList = this.booklist;
        this.booklist.forEach(element => {
          element.check = true;

        });
      } else {
        this.checkAll = false;
        this.checkedList = [];
        this.booklist.forEach(element => {
          element.check = false;
        });
      }
      this.calculate();
      console.log(this.checkedList)
    },
    calculate () {
      //这个函数负责更新下面的bar
      this.choose = 0;
      this.sum = 0;
      this.checkedList.forEach(element => {
        this.choose += element.count;
        this.sum += element.itemsum;

      });
      this.sum = this.sum.toFixed(2);


    },
    getProducts () {
      var _this = this;
      _this.axios.get('/api/cart/' + _this.userId)
        .then(function (response) {
          _this.products = response.data;
          for (let i = 0; i < response.data.length; i++) {
            let item = {
              count: 0,
              book: {},
              itemsum: 0,
              check: false
            }
            var isbn = response.data[i].isbn;
            _this.axios.get('/api/book/' + isbn)
              .then(function (response) {
                console.log(i);
                item.count = _this.products[i].count;
                item.book = response.data;
                item.itemsum = _this.products[i].count * response.data.price;
                _this.booklist.push(item);
              }
              )
              .catch(function (error) {
                console.log(error);
              })
          }
          console.log(_this.booklist);
        })
        .catch(function (error) {
          console.log(error);
        })
    },

  },

  components: {
    Header
  },

};
</script>

<style scoped>
/*注意文件路径*/
@import url("../../assets/css/homepage.css");
.cart-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: whitesmoke;
  text-align: center;
  padding-top: 1.5%;
  padding-bottom: 2%;
  border-radius: 3px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: #eee;
  z-index: 9999;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 1%;
  margin-right: 20px;
  padding-top: 1%;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
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