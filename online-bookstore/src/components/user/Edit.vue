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
            <!-- 这里是正中间的A区域，把你现有的代码（除了header）复制到这儿就可以啦 -->
            <!-- 因为宽度变得比整个屏幕的宽度窄了，可能需要调整你的width之类的~ -->
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


export default {
  components: {
    Header
  },
}
</script>

<style scoped>
	/*注意文件路径*/
@import url("../../assets/css/homepage.css");				
</style>