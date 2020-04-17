<!--
--Created by Hu Sicheng 2017302580096--
-- on 2020/4/17
-->
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
            <div class='userinfo'>
              <!--这里是个人信息及收货等等的选项卡-->
              <div class='left'>
                <router-link :to="{name:'Edit'}">
                  <img id='ava'
                       :src="profile" />
                </router-link>
                <span style="margin:10px;color:white;">{{username}}</span>
                <a @click="toAdd"
                   style="color:white; border:1px solid; width:50%; padding:2%;border-radius:3px;">收货地址</a>
              </div>
              <div class='right'>
                <a-card title="我的订单"
                        :bordered="false"
                        style="width: 180%; text-align:left; margin-top:2%;">
                  <div style="display:flex;flex-direction:row; flex-wrap:wrap;">
                    <a-card-grid @click="toOrder(1)"
                                 style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                      <a-icon type="credit-card"
                              style="font-size:300%;padding:15%;" />
                      <span>所有订单</span>
                    </a-card-grid>

                    <a-card-grid @click="toOrder(2)"
                                 style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                      <a-badge :count="count1">
                        <a-icon type="credit-card"
                                style="font-size:300%;padding:15%;" />
                      </a-badge>
                      <span>已付款</span>
                    </a-card-grid>

                    <a-card-grid @click="toOrder(3)"
                                 style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                      <a-badge :count="count2">
                        <a-icon type="inbox"
                                style="font-size:300%;padding:15%;" />
                      </a-badge>
                      <span>待收货</span>
                    </a-card-grid>

                    <a-card-grid @click="toOrder(4)"
                                 style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                      <a-badge :count="count3">
                        <a-icon type="message"
                                style="font-size:300%;padding:15%;" />
                      </a-badge>
                      <span>待评价</span>
                    </a-card-grid>
                  </div>

                </a-card>
              </div>

            </div>
            <div class="flex-column">
              <div class="card-title-div ver-center">
                <span class="card-title-text"
                      style="padding:3%;">猜你喜欢</span>
              </div>
              <a-row type="flex"
                     justify="space-between"
                     :gutter="15">
                <div style="background-color: #f5f5f5;">
                  <a-row type="flex"
                         justify="space-around"
                         :gutter="15">
                    <a-col :xs="24"
                           :sm="19"
                           :md="12"
                           :lg="6"
                           :xl="6"
                           v-for="book in booksCard"
                           :key="book.title">

                      <a-card hoverable
                              style="margin-bottom:10px;"
                              size="small">
                        <div class="hori-center">
                          <img alt="图片"
                               :src="book.coverUrl"
                               slot="cover"
                               class="card-img" /></div>
                        <a-card-meta :title="book.title"
                                     :description="book.author">
                        </a-card-meta>
                        <template><br /><span style="color:#ea1;font-size:small;">￥{{book.price}}</span><br /><br /></template>
                        <template slot="extra">
                          <!-- 右上角跳转链接 -->
                          <router-link :to="{ name: `SearchResult`, params: { keyword: book.title } }">
                            <a-icon type="double-right"
                                    :style="{ fontSize: '10px', color: '#999' }" />
                          </router-link>
                        </template>
                      </a-card>
                    </a-col>

                  </a-row>
                </div>
                <!-- </a-col> -->
              </a-row>
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
      count1: 0,
      count2: 0,
      count3: 0,
      page: 0,
      size: 5,
      booksCard: [],
      titleImgUrl: "",
      //用户信息
      userId: 0,
      username: "",
      profile: "",
    }
  },
  mounted () {

  },
  created () {
    this.userId = global.userId;
    console.log(this.userId);
    this.getUserInfo();
    this.getcontent();
    this.getCount();
  },
  methods: {
    getCount () {
      //已付款
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
          _this.count1 = response.data.data.length;
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
      //待收货
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
          status: '待收货',
        }
      })
        .then(function (response) {
          // handle success
          _this.count2 = response.data.data.length;
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
      //待评价
      this.axios.get('/api/order/user/' + this.userId, {
        params: {
          page: 0,
          size: 10,
          status: '待评价',
        }
      })
        .then(function (response) {
          // handle success
          _this.count3 = response.data.data.length;
        }).catch(function (error) {
          // handle error
          console.log(error);
        })

    },
    toAdd () {
      this.$router.push({ name: `Address` });
    },
    toOrder (key) {
      this.$router.push({        name: `Order`, params: {
          key: key
        }      });
    },
    getUserInfo () {
      var _this = this;
      _this.axios.get('/api/user/customer/' + _this.userId)
        .then(function (response) {
          console.log(response);
          _this.username = response.data.username;
          _this.profile = response.data.profile;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    getcontent () {
      var _this = this;
      _this.axios.get('/api/recommendation/user/' + _this.userId,
        {
          params: {
            page: _this.page,
            size: _this.size
          }
        }).then(function (response) {
          console.log(response);
          _this.booksCard = response.data.data;
        })
        .catch(function (error) {
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
@import url("../../assets/css/homepage.css");

#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
.card {
  margin: 1%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.contend {
  display: flex;
  flex-direction: row;
}
.recommand {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin-left: 6%;
}
#bear {
  width: 90%;
  box-shadow: 0px 0px 2px rgb(121, 121, 121);
  margin-top: 1%;
  margin-bottom: 1%;
}
#ava {
  border: whitesmoke solid 3px;
  box-shadow: 2px black;
  border-radius: 100%;
  width: 40%;
  height: 100px;
}
.userinfo {
  display: flex;
  flex-direction: row;
}
.left {
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    62deg,
    #719669 0%,
    #4e8c41 50%,
    #58904c 50%,
    #3e8331 100%
  );
  border-radius: 2px;
  width: 20%;
  height: 210px;
  box-shadow: 0px 0px 2px 2px #a5a5a5;
  margin-left: 5%;
  margin-top: 2%;
}
.border {
  border: 2px solid black;
}
.img-header-logo {
  width: 60px;
}
.flex-colunm {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.ver-center {
  display: flex;
  align-items: center;
}
.hori-center {
  display: flex;
  justify-content: center;
}
.p-header-text {
  width: 200px;
  font-size: 40px;
  /* margin-top: 20px; */
}
.hmp-title-text {
  color: darkolivegreen;
  font-size: large;
}
.card-title-div {
  height: 50px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.card-title-text {
  font-size: large;
  color: #999999;
  font-weight: 300;
  letter-spacing: 2px;
}
/* .img-cover-div {
  height: 200px;
  width: 150px;
}
.img-cover {
  height: 200px;
  width: 150px;
} */
/* .rec-content {
  width: 1200px;
} */
.img-cover-div-detail {
  height: 400px;
  width: 450px;
}
.img-cover-detail {
  width: 100%;
  margin-right: 30px;
}
</style>