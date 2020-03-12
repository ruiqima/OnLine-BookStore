<template>
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
            <Result @sendPageInfo='getpage' />

          </a-layout-content>

        </a-layout>
      </a-layout>

      <a-layout-sider style="background-color: #F5F5F5;"
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
import Result from '@/components/search/Result'
import SearchFilter from '@/components/search/SearchFilter'


const param = {
  keyword: '',
  order: 'title',
  page: 0,
  size: 1
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
    }
  },

  //组件创建后调用
  created () {
    param.keyword = this.$route.params.keyword
    console.log(param)
    this.search()


  },
  methods: {
    //连接后台，搜索
    search () {
      this.axios.get('/api/search', {
        params: param
      })
        .then(function (response) {
          console.log(response);
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
      console.log(param)

    },
    getpage (data) {
      console.log(data)
      this.$set(param, 'page', data.page - 1)
      this.$set(param, 'size', data.size)
      this.$set(param, 'keyword', this.$route.params.keyword)
      console.log(param)
    },
    getnewkeyword (data) {
      param.keyword = data
      this.search()
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/homepage.css");
</style>