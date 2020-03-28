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
                   <img id='ava' src="../../assets/imgs/avatar.jpg" />
                 </router-link>
                   <span style="margin:10px;color:white;">昵称</span>
                   <a @click="toAdd" style="color:white; border:1px solid; width:50%; padding:2%;border-radius:3px;">收货地址</a>
               </div>
               <div class='right'>
                    <a-card title="我的订单" :bordered="false" style="width: 180%; text-align:left; margin-top:2%;">
                        <div style="display:flex;flex-direction:row; flex-wrap:wrap;">
                        <a-card-grid  @click="toOrder" style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                            <a-badge :count="count1">
                            <a-icon type="credit-card" style="font-size:300%;padding:15%;"/>
                            </a-badge>
                            <span>待付款</span>
                        </a-card-grid>
                        
                        <a-card-grid  @click="toOrder" style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                            <a-badge :count="count2">
                            <a-icon type="inbox" style="font-size:300%;padding:15%;"/>
                            </a-badge>
                            <span>待收货</span>
                        </a-card-grid>

                        <a-card-grid @click="toOrder" style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                            <a-badge :count="count3">
                            <a-icon type="message" style="font-size:300%;padding:15%;"/>
                            </a-badge>
                            <span>待评价</span>
                        </a-card-grid>

                        <a-card-grid  @click="toOrder" style="display:flex; flex-direction:column;width:25%;text-align:center;justify-content:center">
                            <a-badge :count="count4">
                            <a-icon type="insurance" style="font-size:300%;padding:15%;"/>
                            </a-badge>
                            <span>退款/售后</span>
                        </a-card-grid>
                        </div>

      
                    </a-card>
               </div>

           </div>
           <div class='recommand'>
           <span style="font-size:18px;">猜你喜欢</span>
           <img src='../../assets/imgs/bar.png' id='bear'/>
           <div class="contend">
               <!--猜你喜欢-->
               <a-card hoverable style="width: 240px" class='card' >
                <img
                    src="../../assets/imgs/pic1.jpg"
                    slot="cover"
                />
                <p style="font-size:16px;font-weight:bold;">{{name}}</p>
                <p>出版社信息</p>
                <p style="font-size:20px;font-weight:bold; color:#ea1;">￥{{price}}</p>
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
import Header from '@/components/home/Header'


export default {
    data(){
        return{
            count1:5,
            count2:0,
            count3:0,
            count4:0,
            name:"爱丽丝漫游奇遇记",
            price:17.20
            

        }
    },
    methods:{
      toAdd(){
        this.$router.push({ name:`Address` });
      },
      toOrder(){
        this.$router.push({name:`Order`});
      }
    },
  components: {
    Header
  },
}
</script>

<style scoped>
.card{
    margin:1%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.contend{
    display: flex;
    flex-direction: row;
}
.recommand{
    display: flex;
    flex-direction: column;
    text-align: left;
    width:90%;
    margin-left:6%;
}
#bear{
    width:90%;
    box-shadow: 0px 0px 2px rgb(121, 121, 121);
    margin-top:1%;
    margin-bottom: 1%;
}
#ava{
    border:whitesmoke solid 3px;
    box-shadow:2px black ;
    border-radius: 100%;
    width:40%;
    height:100px;

}
.userinfo{
    display: flex;
    flex-direction: row;
    
   
}
.left{
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
  width:20%;
  height:210px;
 box-shadow: 0px 0px 2px 2px #a5a5a5;
 margin-left:5%;
 margin-top:2%;
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