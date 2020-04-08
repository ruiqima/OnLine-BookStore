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
            <div class='content'>
              <div class='banner'>
                <span style="margin-right:5px">{{formatDate(order.time,order)}}</span>
                <span>订单号：{{order.orderId}}</span>
              </div>
              <div>
                <div class='cart-content'
                     v-for="pitem in order.products"
                     :key="pitem.isbn">
                  <div style="display:flex;flex-direction:row;justify-content:space-around;align-items:center;">
                    <img :src='pitem.book.coverUrl'
                         style="width:10%;" />
                    <div>{{pitem.book.title}}</div>
                    <div class="comment">
                      <div class='score'
                           style="width:80%;margin-right:5%;">
                        <span>评分：</span>
                        <a-rate :defaultValue="0"
                                v-model="pitem.score"
                                allowHalf />
                      </div>
                      <a-textarea style="height:100px;"
                                  v-model="pitem.comment"
                                  placeholder="这本书怎么样？给出您的评价吧~"
                                  :autoSize="{ minRows: 1, maxRows: 5 }" />
                    </div>
                  </div>
                </div>
                <br />
                <a-button type='primary'
                          style="width:30%;"
                          @click="postComment()">提交评价</a-button>
              </div>
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
  created () {
    this.order = this.$route.params.order;
    console.log(this.order);
  },
  data () {
    return {
      order: {},
    };

  },
  methods: {
    formatDate (now) { //两个任务
      console.log(now);
      var newDate = new Date(now);
      console.log(newDate.toLocaleString());
      return newDate.toLocaleString();
    },
    postComment () {
      let timestamp = new Date().getTime();
      var _this = this;
      let test = true;
      for (var i = 0; i < this.order.products.length; i++) {
        if (this.order.products[i].score == undefined || this.order.products[i].comment == undefined) {
          console.log(this.order.products[i].score);
          console.log(this.order.products[i].comment);
          test = false;
          break;
        }
      }
      if (test == false) {
        this.$message.error(
          '请将评价填写完整！',
          8,
        );

      } else {
        this.order.products.forEach(pitem => {
          this.axios.post('/api/comment/user/' + global.userId + '/book/' + pitem.isbn, {
            content: pitem.comment,
            stars: pitem.score,
            time: timestamp

          })
            .then(function (response) {
              if (response.data == true) {
                _this.$message.success(
                  '提交评论成功！',
                  8,
                );
                //修改订单的状态
                _this.axios.put('/api/order/' + _this.order.orderId + '/status',
                  {
                    status: '已评价'
                  }).then(function (response) {
                    console.log(response);
                  })
                _this.$router.push({ name: `Order` })

              } else {
                _this.$message.error(
                  '提交失败了，待会儿再试吧~',
                  8,
                );
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        });
      }


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
.comment {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
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
  justify-content: space-around;
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


  