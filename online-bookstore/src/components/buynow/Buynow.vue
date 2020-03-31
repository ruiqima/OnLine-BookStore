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
          <a-layout-content style="background-color: white;display:flex;flex-direction:column;">
              
                <a-steps :current="1" class="stepbar">
                    <a-step>
                    <!-- <span slot="title">Finished</span> -->
                    <template slot="title">
                        第一步
                    </template>
                    <span slot="description" >加入购物车/直接购买</span>
                    </a-step>
                    <a-step title="第二步" description="填写核对订单信息" />
                    <a-step title="第三步" description="成功提交订单" />
                    </a-steps>
                
                <div>
                    <template>
                        <a-radio-group @change="onChange" v-model="value">
                        <a-radio :style="radioStyle" :value="1">Option A</a-radio>
                        <a-radio :style="radioStyle" :value="2">Option B</a-radio>
                        <a-radio :style="radioStyle" :value="3">Option C</a-radio>
                        <a-radio :style="radioStyle" :value="4">
                            More...
                        </a-radio>
                        </a-radio-group>
                    </template>
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
      <a-divider style="color:#ccc;font-size:x-small;">ONLINE BOOKSTORE ©2020 Created by Our Team</a-divider>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'


export default {
  components: {
    Header
  },
  data() {
      return {
        value: 1,
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
      };
    },
    methods: {
      onChange(e) {
        console.log('radio checked', e.target.value);
      },
    },
}
</script>

<style scoped>
	/*注意文件路径*/
@import url("../../assets/css/homepage.css");		
.stepbar{
    width:50%;
    float:right;
    margin:2%;
    margin-right:8%;
    
}		
</style>