<template>
    <a-layout style="background-color: #ececec;">
        <a-layout style="background-color: #ececec;">
        <!-- 这是整个界面最左侧的灰色sider区域，不用改这里~ -->
        <a-layout-sider style="background-color: #ececec;"
                      width="100px">
                      </a-layout-sider>
	<!-- 这个a-layout是除了左右两个灰色sider，正中间那一块，包括header和它下面的正文部分 -->
        <a-layout>
        <div class='header'>
            <div class='logo'>logo</div>
            <div class='userInfo'>
            <div class='info'>
                <a-avatar :size="48" icon="user" class='icon' />
                <div class="nick" style="margin-top:5px;">昵称</div>
            </div>
            <a-menu v-model="current" mode="horizontal" class="menulist" >
                <a-menu-item key="mail" class='amenu'> <a-icon type="mail" style="font-size:16px;"/>收货地址</a-menu-item>
                <a-menu-item key="app" class='amenu'> <a-icon type="appstore" style="font-size:16px;"/>我的订单</a-menu-item>
                <a-menu-item key="alipay" class='amenu'>
                <a href="#" target="_blank" rel="noopener noreferrer"
                ><a-icon type="user" style="font-size:16px;"/>退出账号</a>
                </a-menu-item>
            </a-menu>    
            </div>
        </div>

		<!-- 正文内容写在这一块 -->
        <a-layout>
            <a-layout-content style="background-color: white;">
                <div class='main'>
                <div class='sider'>
                    <a-menu style="width: 256px" mode="vertical" @click="handleClick">
                    <a-menu-item key="1">
                    <a-icon type="shopping" />
                    购物车
                    </a-menu-item>
                    <a-menu-item key="2">
                    <a-icon type="credit-card" />
                      待付款
                    </a-menu-item>
                    <a-menu-item key="3">
                    <a-icon type="rocket" />
                    待发货
                    </a-menu-item>
                    <a-menu-item key="4">
                    <a-icon type="sound" />
                        待收货
                    </a-menu-item>
                    <a-menu-item key="5">
                    <a-icon type="message" />
                        待评价
                    </a-menu-item>
                    <a-menu-item key="6">
                    <a-icon type="export" />
                    退款
                    </a-menu-item>
                    </a-menu>
                </div>
                <div class='content'>
                <a-card title="购物清单" style="text-align:left">
                    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500;">
                        <a-icon type='home' style='margin:2px;'/>
                    猫咪铛铛图书屋
                    </p>
                
                <a-card title="小王子">
                   
                <a href="#" slot="extra">More</a>
                 <a-checkbox >
                <div class='detail'>
                   
                    <img src="../../assets/imgs/pic2.jpg" slot="cover" class='books'/>
                    <div style="font-size:18px;">￥13.70</div>
                    <div>
                        <a-input-number id="inputNumber" :min="1" :max="10" v-model="value" @change="onChange" />
                    </div>
                    <div style="font-size:19px;color:#ea1;font-weight:bold">￥{{sum}}</div>
                    <a-button type="link">删除</a-button>
                </div>
                </a-checkbox>
                </a-card>
                </a-card>
      
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
export default {
data() {
      return {
        value: 3,
        sum:23.1
      };
    },
methods: {
      handleClick(e) {
        console.log('click ', e);
      },
    },
   onChange(value) {
        console.log('changed', value);
      },
}
</script>

<style scoped>
	.header{
      display:flex;
      flex-direction: row;
      align-items: flex-end;
      font-size: 15px;
      justify-content: space-between;
      background-color: white !important;
  }
  .icon{
      margin-right:20px !important;
      margin-left:15px !important;
     
  }
  .info{
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
      width:150px;  
  }
  .nick{
      font-size: 16px;
      color:black;

  }
  .userInfo{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      width:1000px;
      
  }
  .logo{
      background-color:#3ba0e9;
      height:64px;
      width:270px;
      z-index: 99;

      
  }
  .flow-sider{
    display: flex;
  }
  .items{
      width:300px;
  }
  .main{
      display: flex;
      flex-direction: row;
  }
  .content{
      width:1150px;
      margin-top:20px !important;
  }
  .books{
      width:200px;
      margin:5px;
  }
  .detail{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
</style>