<template>
<div class='loginbg'>
  <div class="formlist">
  <a-form :form="form" @submit="handleSubmit" >
    <div class="welcome">欢迎来到书的世界！</div>
    <div class='form'>
    <a-form-item  :label-col="{ span: 8 }" :wrapper-col="{ span: 10}" >
      <a-input class='cover'
        v-decorator="['username', { rules: [{ required: true, message: '请输入有效的用户名！' }] }]"
      placeholder="请输入您的用户名~"
      />
    </a-form-item>
    <a-form-item  :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }">
      <a-input class='cover'
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入有效的密码！' }] },
        ]"
        type="password"
        placeholder="请输入您的密码~"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 10 }">
      <a-button type="primary" html-type="confirm" class="cover">
        登录
      </a-button>
    </a-form-item>
    </div>
    <router-link :to="{name:'Registry'}"><div class="tip">还没有账号？点我注册</div></router-link>
  </a-form>
  </div>
</div>
</template>

<script>
import '/OnLine-BookStore/online-bookstore/global.js'
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      var _this=this;
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
        _this.axios.post('/api/user/customer/authentication',{
            username: values.username,
            password: values.password
        }).then(function(response){
          console.log(response);
          if(response.data.userId==0||response.data==""){
            console.log("login failed");
            alert("请输入正确的用户名或密码！")
          }else{
            global.isLogin=true;
            _this.$router.push({
            name:`Home`,
            params: {userId:response.data.userId}
            });
            console.log(global.userId)
            global.userId=response.data.userId
            console.log(global.isLogin)

          }
        }).catch(function (error) {
          console.log(error);
          })
      })
    }
  }
}
</script>

<style>
.loginbg {
  background: linear-gradient(
    62deg,
    #719669 0%,
    #4e8c41 50%,
    #58904c 50%,
    #3e8331 100%
  );
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-color: #3e8331;
  height: 642px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.formlist{
  
  background-color:rgba(245, 245, 245, 0.911);
  border-radius: 5px;
  box-shadow: #cdcdcd 2px;
  width:500px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
  
}
.form{
  
  padding-left:18%;
}
.welcome {
  padding-top: 10%;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}
.cover{
  width:300px !important;
  height:45px !important;
  font-size: 16px !important;
  margin:5%;
}
.tip {
  font-size: 15px;
  padding-bottom: 10%;
  color:black;
}
</style>
