<!--
--Created by Hu Sicheng 2017302580096--
-- on 2020/4/17
-->
<!--这个页面即是结算页，也是立即购买页-->
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
          <a-layout-content class='content'>
              
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
                <span id='tip'>填写并核对订单信息</span>
                <div class='revContent'>
                  <div class='first'>
                  <span id='revinfo'>收货人信息</span>
                  <a @click="addAdd()" id='add'>新增收货地址</a>
                    <a-radio-group v-model="value" @change="onChange(item)" class='address' v-for="item in addresses" :key="item.addressId">
                    <a-radio-button  :value='item.addressId' style="font-weight:bold;margin:2%;">{{item.name}}</a-radio-button>
                    <span>{{item.address}}</span>
                    <br/>
                    <br/>
                    </a-radio-group>
                  </div>
                  <hr style="width:90%;"/>
                  <div class='first'>
                    <!--送货清单-->
                    <span id='revinfo'>送货清单</span>
                    <div class='cart-content' v-for="bitem in bought" :key="bitem.book.title"  >
                      <img :src="bitem.book.coverUrl" style="width:10%;"/>
                      <div>数量：{{bitem.count}}</div>
                      <div style="font-size=16px;">单价：{{bitem.book.price}}</div>
                      <div style="color:#ea1;">小计：{{bitem.itemsum}}</div>
                      <div>配送方式：<span  style="font-weight:bold;" >快递运输</span></div>
                    </div>
                      <hr style="width:100%;"/>
                  </div>
                  <div class='first'>
                    <span id='revinfo'>优惠方式</span>
                  <div style="width:100%;">
                    <span style="float:left;margin:2%;margin-bottom:4%;">优惠：<span style="color:rgb(216, 68, 42);font-size:18px;">{{discount}}</span></span>
                  </div>
                  
                  </div>
                  
                </div>
                <div class='footer'>
                  <div class='ensure'>
                  <span><span style="color:rgb(216, 68, 42);">{{choose}}</span>件商品，总金额：{{cutSum}}</span>
                  <span>运费：0.0元</span>
                  </div>
                  <div class='ensure' style="background-color:white;border-bottom: 1px solid #cdcdcd;">
                    <span>
                      <span>应付总额：</span>
                      <span style="font-size:25px;font-weight:bold;color:rgb(216, 68, 42);">￥{{cutSum}}</span>
                    </span>
                    <span>寄送至：{{destination.address}} <span> 收货人：{{destination.name}}  {{destination.phone}}</span></span>

                  </div>
                  </div>
                  <a-button type="primary" @click='submit' style="width:10%;margin:2% 0 2% 80%;">提交订单</a-button>




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
import '/OnLine-BookStore/online-bookstore/global'

export default {
  components: {
    Header
  },
  data() {
      return {
        value: 1,
        size: 'large',
       addresses:[],
        userId:0,
        bought:[],
        sum:0.0,
        discount:'',
        allDiscount:[],
        cutSum:0.0,
        choose:0,
        destination:{},
        products:[],
      };
    },
    created(){
      this.userId=global.userId;
      this.bought=this.$route.params.bought;
      this.sum=this.$route.params.sum;
      console.log(this.sum);
      this.choose=this.$route.params.choose;
      this.getAddress();
      this.getDiscount();
      //对bought到product做一个转换
      this.bought.forEach(element => {
        let item={
          isbn:element.book.isbn,
          count:element.count,
        };
        this.products.push(item);
      });
      console.log(this.products);
      

    },
    methods: {
      submit(){
        var _this=this;
        let timestamp=new Date().getTime();
        console.log(this.destination)
        if(JSON.stringify(this.destination)!="{}"){
        this.axios.post('/api/order/user/'+this.userId,{
          originalPrice:Number(this.sum),
          paidPrice:Number(this.cutSum),
          name:this.destination.name,
          phone:this.destination.phone,
          address:this.destination.address,
          products:this.products,//这个是传过去账单的参数
          time:timestamp,
          
        })
        .then(function (response) {
        // handle success
        console.log(response);
        if (response.data==true){
          alert("系统已为您提交订单，支付成功！");
          _this.$router.push({ name:`Order`})
        }else{
          alert("抱歉，提交失败，检查一下消息是否完善哦~")
        }
        
        })
        .catch(function (error) {
        // handle error
        console.log(error);
          })
        }else{
          this.$message.error('请选择您的收货地址');
      }
        

      },
      onChange(item) {
        //console.log(`checked = ${e.target.value}`);
        console.log(item);
        this.destination=item;
      },
      getAddress(){
        var _this=this;
        this.axios.get('/api/address/user/'+this.userId,
        {
          params:{
            page:0,
            size:10,
          }
        })
        .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.data);
        _this.addresses=response.data.data;
        })
        .catch(function (error) {
        // handle error
        console.log(error);
          })
        

      },
      addAdd(){
        this.$router.push({ name:`Address` });

      },
      getDiscount(){
        var _this=this;
        var satisfy=[];
        this.axios.get('/api/discount/')
        .then(function (response) {
        // handle success
        console.log(response);
        _this.allDiscount=response.data;
        _this.allDiscount.forEach(element => {
          if(this.sum>=element.total){
            satisfy.push(element);
          }
        });
        function compare(property){
          return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
          }
        }
        satisfy.sort(compare('discount'));
        if(satisfy.length!=0){
          _this.cutSum=_this.sum-satisfy[0].discount;
          _this.discount='已享受满'+satisfy[0].total+'减'+satisfy[0].discount;
        }else{
          _this.cutSum=_this.sum;
          _this.discount="无合适的优惠";
        }

        
        })
        .catch(function (error) {
        // handle error
        console.log(error);
          })
      }
      
    },
}
</script>

<style scoped>
	/*注意文件路径*/
@import url("../../assets/css/homepage.css");	
.ensure{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width:80%;
  padding:2%;
  margin-left:10%;
  background-color: whitesmoke;
}	
.footer{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.cart-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width:100%;
  margin:1%;
  margin-right:20px;
  padding-top:1%;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;
  padding-top: 1%;
  border-radius: 3px;
}
.revContent{
  width:80%;
  margin-left:10%;
  background-color: white;
  border: #cdcdcd solid 1px;
}
#add{
  display: flex;
  justify-content: flex-end;
  width:100%;
  margin-right:8%;

}
.address{
  text-align:left;
  width:100%;
  display: flex;
  align-items: center;
  
}
.stepbar{
    width:50%;
    text-align: center;
    margin:2%;
    margin-left:45%;
    
}		
.content{
  display: flex;
  flex-direction: column;
  
  
  
}
#tip{
  text-align: left;
  width:100%;
  font-size: 20px;
  margin-left:3%;

}
.first{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:90%;
  margin-left:5%;
}
#revinfo{
  font-size:18px;
  font-weight: bold;
  margin:2%;
  
 
}
</style>