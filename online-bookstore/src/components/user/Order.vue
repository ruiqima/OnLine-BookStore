<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
      <a-layout>
        <Header />
        <!-- 正文内容写在这一块 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
            <div style="margin:2%; font-size:16px;">
              <a-tabs :defaultActiveKey="key"
                      @change="callback">
                <a-tab-pane tab="所有订单"
                            key="1">
                  <div v-if="allOrders.length==0">没有符合要求的订单呢~</div>
                  <div class='content'
                       v-for="order in allOrders"
                       :key="order.orderId">
                    <div class='banner'>
                      <span style="margin-right:5px">{{formatDate(order.time,order)}}</span>
                      <span>订单号：{{order.orderId}}</span>
                    </div>
                    <div class='orderform'>
                      <div style="width:55%">
                        <div class='cart-content'
                             v-for="pitem in order.products"
                             :key="pitem.isbn">
                          <div style="display:flex;flex-direction:row;justify-content:space-around;align-items:center;">
                            <img :src='pitem.book.coverUrl'
                                 style="width:10%;" />
                            <div>{{pitem.book.title}}</div>
                            <div>X{{pitem.count}}</div>
                          </div>
                        </div>
                      </div>
                      <div class='others'>
                        <a-popover :title='order.name'
                                   placement="leftTop">
                          <template slot="content">
                            <p>{{order.address}}</p>
                            <p>{{order.phone}}</p>
                          </template>
                          <span>收货人</span>
                          <br />
                          <a-button style="margin:4%;"
                                    type="primary">{{order.name}}</a-button>
                        </a-popover>
                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <span>总额：￥{{order.paidPrice}}</span>
                        <hr style="width:80%;" />
                        <span>在线支付</span>

                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <a-popover placement="leftTop">
                          <template slot="content"
                                    v-if="order.status=='待收货' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>派送中...</p>
                            <p>您现在在待收货状态，请耐心等待</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='已付款' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>您现在在已付款状态~</p>
                            <p>耐心等待发货吧~</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='待评价'">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>商品已经收到啦，还满意吗？</p>
                          </template>
                          <span slot="title">物流信息</span>
                          <a-icon type="car" />物流信息
                        </a-popover>
                      </div>
                      <div class='buttons'
                           v-if="order.status=='已付款'">
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="ensure(order)">确认收货</a-button>
                        <a @click="deleteOrder(order)">取消订单</a>
                      </div>
                      <div class='button'
                           v-if="order.status=='待收货'">
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="ensure(order)">确认收货</a-button>
                      </div>
                      <div class='buttons'
                           v-if="order.status=='待评价'">
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="comment(order)">点击评论</a-button>
                        <a @click="deleteOrder(order)">删除订单</a>
                      </div>
                      <div class='buttons'
                           v-if="order.status=='已评价'">
                        <a @click="deleteOrder(order)">删除订单</a>
                      </div>

                    </div>

                  </div>
                </a-tab-pane>

                <a-tab-pane tab="已付款"
                            key="2">
                  <div v-if="paidOrders.length==0">没有符合要求的订单呢~</div>
                  <div class='content'
                       v-for="order in paidOrders"
                       :key="order.orderId">
                    <div class='banner'>
                      <span style="margin-right:5px">{{formatDate(order.time,order)}}</span>
                      <span>订单号：{{order.orderId}}</span>
                    </div>
                    <div class='orderform'>
                      <div style="width:55%">
                        <div class='cart-content'
                             v-for="pitem in order.products"
                             :key="pitem.isbn">
                          <div style="display:flex;flex-direction:row;justify-content:space-around;align-items:center;">
                            <img :src='pitem.book.coverUrl'
                                 style="width:10%;" />
                            <div>{{pitem.book.title}}</div>
                            <div>X{{pitem.count}}</div>
                          </div>
                        </div>
                      </div>
                      <div class='others'>
                        <a-popover :title='order.name'
                                   placement="leftTop">
                          <template slot="content">
                            <p>{{order.address}}</p>
                            <p>{{order.phone}}</p>
                          </template>
                          <span>收货人</span>
                          <br />
                          <a-button style="margin:4%;"
                                    type="primary">{{order.name}}</a-button>
                        </a-popover>
                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <span>总额：￥{{order.paidPrice}}</span>
                        <hr style="width:80%;" />
                        <span>在线支付</span>

                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <a-popover placement="leftTop">
                          <template slot="content"
                                    v-if="order.status=='待收货' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>派送中...</p>
                            <p>您现在在待收货状态，请耐心等待</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='已付款' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>您现在在已付款状态~</p>
                            <p>耐心等待发货吧~</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='待评价' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>商品已经收到啦，还满意吗？</p>
                            <a>前去评价</a>
                          </template>
                          <span slot="title">物流信息</span>
                          <a-icon type="car" />物流信息
                        </a-popover>
                      </div>
                      <div class='buttons'>
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="ensure(order)">确认收货</a-button>
                        <a @click="deleteOrder(order)">取消订单</a>
                      </div>
                    </div>

                  </div>
                </a-tab-pane>

                <a-tab-pane tab="待收货"
                            key="3">
                  <div v-if="waitOrders.length==0">没有符合要求的订单呢~</div>
                  <div class='content'
                       v-for="order in waitOrders"
                       :key="order.orderId">
                    <div class='banner'>
                      <span style="margin-right:5px">{{formatDate(order.time,order)}}</span>
                      <span>订单号：{{order.orderId}}</span>
                    </div>
                    <div class='orderform'>
                      <div style="width:55%">
                        <div class='cart-content'
                             v-for="pitem in order.products"
                             :key="pitem.isbn">
                          <div style="display:flex;flex-direction:row;justify-content:space-around;align-items:center;">
                            <img :src='pitem.book.coverUrl'
                                 style="width:10%;" />
                            <div>{{pitem.book.title}}</div>
                            <div>X{{pitem.count}}</div>
                          </div>
                        </div>
                      </div>
                      <div class='others'>
                        <a-popover :title='order.name'
                                   placement="leftTop">
                          <template slot="content">
                            <p>{{order.address}}</p>
                            <p>{{order.phone}}</p>
                          </template>
                          <span>收货人</span>
                          <br />
                          <a-button style="margin:4%;"
                                    type="primary">{{order.name}}</a-button>
                        </a-popover>
                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <span>总额：￥{{order.paidPrice}}</span>
                        <hr style="width:80%;" />
                        <span>在线支付</span>

                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <a-popover placement="leftTop">
                          <template slot="content"
                                    v-if="order.status=='待收货' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>派送中...</p>
                            <p>您现在在待收货状态，请耐心等待</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='已付款' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>您现在在已付款状态~</p>
                            <p>耐心等待发货吧~</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='待评价' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>商品已经收到啦，还满意吗？</p>
                            <a>前去评价</a>
                          </template>
                          <span slot="title">物流信息</span>
                          <a-icon type="car" />物流信息
                        </a-popover>
                      </div>
                      <div class='buttons'>
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="ensure(order)">确认收货</a-button>

                      </div>
                    </div>

                  </div>
                </a-tab-pane>
                <a-tab-pane tab="待评价"
                            key="4">
                  <div v-if="commentOrders.length==0">没有符合要求的订单呢~</div>
                  <div class='content'
                       v-for="order in commentOrders"
                       :key="order.orderId">
                    <div class='banner'>
                      <span style="margin-right:5px">{{formatDate(order.time,order)}}</span>
                      <span>订单号：{{order.orderId}}</span>
                    </div>
                    <div class='orderform'>
                      <div style="width:55%">
                        <div class='cart-content'
                             v-for="pitem in order.products"
                             :key="pitem.isbn">
                          <div style="display:flex;flex-direction:row;justify-content:space-around;align-items:center;">
                            <img :src='pitem.book.coverUrl'
                                 style="width:10%;" />
                            <div>{{pitem.book.title}}</div>
                            <div>X{{pitem.count}}</div>
                          </div>
                        </div>
                      </div>
                      <div class='others'>
                        <a-popover :title='order.name'
                                   placement="leftTop">
                          <template slot="content">
                            <p>{{order.address}}</p>
                            <p>{{order.phone}}</p>
                          </template>
                          <span>收货人</span>
                          <br />
                          <a-button style="margin:4%;"
                                    type="primary">{{order.name}}</a-button>
                        </a-popover>
                      </div>
                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <span>总额：￥{{order.paidPrice}}</span>
                        <hr style="width:80%;" />
                        <span>在线支付</span>

                      </div>

                      <div style="width:10%;padding-top:1%;  border: #cdcdcd solid 1px;">
                        <a-popover placement="leftTop">
                          <template slot="content"
                                    v-if="order.status=='待收货' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>派送中...</p>
                            <p>您现在在待收货状态，请耐心等待</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='已付款' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>您现在在已付款状态~</p>
                            <p>耐心等待发货吧~</p>
                          </template>
                          <template slot="content"
                                    v-if="order.status=='待评价' ">
                            <a-timeline>
                              <a-timeline-item>已付款</a-timeline-item>
                              <a-timeline-item>待收货</a-timeline-item>
                              <a-timeline-item>待评价</a-timeline-item>
                            </a-timeline>
                            <p>商品已经收到啦，还满意吗？</p>
                            <a>前去评价</a>
                          </template>
                          <span slot="title">物流信息</span>
                          <a-icon type="car" />物流信息
                        </a-popover>
                      </div>
                      <div class='buttons'>
                        <a-button type="primary"
                                  style="width:50%;margin:2%;"
                                  @click="comment(order)">点击评论</a-button>
                        <a @click="deleteOrder(order)">删除订单</a>
                      </div>
                    </div>

                  </div>
                </a-tab-pane>

              </a-tabs>
            </div>
          </a-layout-content>
        </a-layout>

      </a-layout>

      <!-- *****************下面一直到</template>都不用改****************** -->

      <!-- 这是整个界面最右侧的灰色sider区域，不用改这里~ -->
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
    </a-layout>
    <!-- 这是整个界面的footer，咱俩的footer要不要统一？因为footer的内容跟界面没有关系（我感觉） -->
    <!-- 可以之后一起新建一个比如说叫Footer.vue的啥的，这个可以先不慌 -->
    <a-layout-footer style="height:300px;background-color:white;margin-top:50px;">
      <a-divider><span style="letter-spacing:4px;color:#999999;">让每个人都能享受阅读的乐趣</span></a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'
import '../../../global'

export default {
  data () {
    return {
      userId: 0,
      allOrders: [],
      receiver: '',
      address: '',
      phone: '',
      waitOrders: [],
      commentOrders: [],
      paidOrders: [],
      key: "1"

    };
  },
  created () {
    this.userId = global.userId;
    this.key = String(this.$route.params.key);
    console.log(this.key);
    this.getAllOrders();
    this.getWaitOrders();
    this.getcommentOrders();
    this.getPaidOrders();
  },
  methods: {
    ensure (order) {
      var _this = this;
      this.$message.success(
        '确认收货成功！希望您喜欢收到的书~',
        8,
      );
      //状态变成待评价
      this.axios.put('/api/order/' + order.orderId + '/status',
        {
          status: '待评价'
        }
      )
        .then(function (response) {
          console.log(response);
          _this.getAllOrders();
          _this.getWaitOrders();
          _this.getcommentOrders();
          _this.getPaidOrders();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    },
    comment (order) {
      console.log(order);
      this.$router.push({        name: `Comment`,
        params: {
          order: order
        }      });

    },
    deleteOrder (order) {
      //取消这个order，等于直接放弃了，因为不涉及钱没有退款过程，然后待评价和待收货没有取消订单
      //对于待评价或者已完成的订单来说，只能删除订单
      console.log(order);


    },
    formatDate (now) { //两个任务
      console.log(now);
      var newDate = new Date(now);
      console.log(newDate.toLocaleString());
      return newDate.toLocaleString();
    },
    getPaidOrders () {
      var _this = this;
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
          status: '已付款',
        }
      })
        .then(function (response) {
          // handle success
          if (response.data.data.length != 0) {
            _this.paidOrders = response.data.data;
            _this.receiver = response.data.data[0].name;
            _this.address = response.data.data[0].address;
            _this.phone = response.data.data[0].phone;
          }
          console.log(_this.paidOrders);
          _this.paidOrders.forEach(order => {
            let booklist = [];
            order.products.forEach(elem => {
              let item = {
                count: 0,
                book: {}
              }
              _this.axios.get('/api/book/' + elem.isbn)
                .then(function (response) {
                  item.count = elem.count;
                  item.book = response.data;
                  booklist.push(item);
                })
            });
            console.log(booklist);
            order.products = booklist;
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    },
    getcommentOrders () {
      console.log("待评价")
      var _this = this;
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
          status: '待评价'
        }
      })
        .then(function (response) {
          // handle success
          console.log(response);
          if (response.data.data.length != 0) {
            _this.commentOrders = response.data.data;
            _this.receiver = response.data.data[0].name;
            _this.address = response.data.data[0].address;
            _this.phone = response.data.data[0].phone;
          }
          console.log(_this.commentOrders);
          _this.commentOrders.forEach(order => {
            let booklist = [];
            order.products.forEach(elem => {
              let item = {
                count: 0,
                book: {}
              }
              _this.axios.get('/api/book/' + elem.isbn)
                .then(function (response) {
                  item.count = elem.count;
                  item.book = response.data;
                  booklist.push(item);
                })
            });
            console.log(booklist);
            order.products = booklist;
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    },
    getWaitOrders () {
      var _this = this;
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
          status: '待收货'
        }
      })
        .then(function (response) {
          // handle success
          if (response.data.data.length != 0) {
            _this.waitOrders = response.data.data;
            _this.receiver = response.data.data[0].name;
            _this.address = response.data.data[0].address;
            _this.phone = response.data.data[0].phone;
          }
          console.log(_this.waitOrders);
          _this.waitOrders.forEach(order => {
            let booklist = [];
            order.products.forEach(elem => {
              let item = {
                count: 0,
                book: {}
              }
              _this.axios.get('/api/book/' + elem.isbn)
                .then(function (response) {
                  item.count = elem.count;
                  item.book = response.data;
                  booklist.push(item);
                })
            });
            console.log(booklist);
            order.products = booklist;
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


    },
    getAllOrders () {
      var _this = this;
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
        }
      })
        .then(function (response) {
          // handle success
          _this.allOrders = response.data.data;
          _this.receiver = response.data.data[0].name;
          _this.address = response.data.data[0].address;
          _this.phone = response.data.data[0].phone;
          console.log(_this.allOrders);
          _this.allOrders.forEach(order => {
            let booklist = [];
            order.products.forEach(elem => {
              let item = {
                count: 0,
                book: {},
              }
              _this.axios.get('/api/book/' + elem.isbn)
                .then(function (response) {
                  item.count = elem.count;
                  item.book = response.data;
                  booklist.push(item);
                })
            });
            console.log(booklist);
            order.products = booklist;
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  components: {
    Header
  },
}
</script>

<style scoped>
/*注意文件路径*/
@import url("../../assets/css/homepage.css");
.buttons {
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-top: 1%;
  border: #cdcdcd solid 1px;
  align-items: center;
}
.others {
  width: 10%;
  padding-top: 1%;
  border: #cdcdcd solid 1px;
}
.orderform {
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
  margin: 1%;
}
.banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: whitesmoke;
  padding: 1%;
}
.cart-content {
  display: flex;

  width: 100%;
  padding: 1%;
  padding-top: 1%;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
  padding-top: 1%;
  border: #cdcdcd solid 1px;
}
</style>