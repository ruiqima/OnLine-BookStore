<template>
<div class='loginbg'>
  <a-form :form="form" @submit="handleSubmit" class='form'>
    <div class="welcome">欢迎来到书的世界！</div>
    <a-form-item  :label-col="{ span: 8 }" :wrapper-col="{ span: 4}" >
      <a-input class='cover'
        v-decorator="['userName', { rules: [{ required: true, message: '请输入有效的用户名！' }] }]"
      placeholder="请输入您的用户名~"
      />
    </a-form-item>
    <a-form-item  :label-col="{ span: 8 }" :wrapper-col="{ span: 4 }">
      <a-input class='cover'
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入有效的密码！' }] },
        ]"
        placeholder="请输入您的密码~"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 6 }">
      <a-button type="primary" html-type="确定" class="cover">
        登录
      </a-button>
    </a-form-item>
    <router-link :to="{name:'Registry'}"><div class="tip">还没有账号？点我注册</div></router-link>
  </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      }
    },
}
</script>

<style>

.loginbg{
  background:linear-gradient(62deg,#719669 0%,#4e8c41 50%,#58904c 50%, #3e8331 100%);
  background-position: center center;
  background-attachment: scroll; 
  background-size: cover;
  background-color: #3e8331;
  height:642px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top:100px;
  padding-bottom: 100px;
}
.form{
  
  background-color:whitesmoke;
  border-radius: 5px;
  box-shadow: #cdcdcd 2px;
  width:500px;
  
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  
}
.welcome{
  padding-top:10%;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}
.cover{
  width:300px !important;
  margin-left:100px !important;
  height:45px !important;
  font-size: 16px !important;
  
}
.tip{
  font-size:15px;
  padding-bottom: 10%;
}


</style>