<template>
  <!-- *****************************************

 作者：马睿祺

***************************************** -->
  <a-layout style="background-color: #F5F5F5;">
    <a-layout style="background-color: #F5F5F5;">
      <a-layout-sider style="background-color: #F5F5F5;"
                      width="100px">
      </a-layout-sider>
      <!-- header -->
      <a-layout>
        <Header :keyword="$route.params.keyword"
                @newkeyword='getnewkeyword' />
        <div style="height:20px;background-color:white;"></div>

        <a-layout>
          <!-- 搜索结果 -->
          <a-layout-content style="background-color:#f5f5f5;">
            <!-- 筛选栏 -->
            <SearchFilter @sendorder='getorder'
                          @sendprice='getprice' />
            <!-- 搜索结果列表 -->
            <Result @sendPageInfo='getpage'
                    :bookDatas="bookDatas"
                    :current="page+1"
                    :userId="$route.params.userId" />

          </a-layout-content>

        </a-layout>
      </a-layout>

      <a-layout-sider style="
                    background-color:#F5F5F5;"
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
import Result from '@/components/search/Result'
import SearchFilter from '@/components/search/SearchFilter'


const param = {
  keyword: '',
  order: 'title',
  page: 0,
  size: 5
}

export default {
  components: {
    Header, Result, SearchFilter
  },

  data () {
    return {
      order: '',
      lowestPrice: 0,
      highestPrice: 0,
      page: 0,
      size: 5,
      bookDatas: {}
    }
  },

  //组件创建后调用
  created () {
    param.keyword = this.$route.params.keyword
    this.search()
  },
  methods: {
    //连接后台，搜索
    search () {
      this.axios.get('/api/search', {
        params: param
      })
        .then((response) => {
          //书目列表结果
          this.bookDatas = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    getorder (data) {
      if (data != '') {
        this.$set(param, 'order', data)
      }
    },
    getprice (data) {
      if (data.low <= 0) {
        if (data.high > 0) {
          this.$set(param, 'highestPrice', data.high)
        }
      } else {
        if (data.high <= 0) {
          this.$set(param, 'lowestPrice', data.low)
        } else {
          this.$set(param, 'highestPrice', data.high)
          this.$set(param, 'lowestPrice', data.low)
        }
      }
      param.page = 0
      this.page = 0
      this.search()

    },
    getpage (data) {
      param.page = data.page
      this.page = data.page
      this.search()
    },
    getnewkeyword (data) {
      param.keyword = data
      param.page = 0
      this.page = 0
      this.search()
    }
  },
  beforeRouteLeave (to, from, next) {

    delete param.lowestPrice
    delete param.highestPrice
    param.order = 'title'
    next()
  }
}
</script>

<style scoped>
@import url("../assets/css/homepage.css");
</style>