<!--
--Created by Hu Sicheng 2017302580096--
-- on 2020/4/17
-->
<template>
<div class='loginbg'>
  <div class="formlist">
  <a-form :form="form" @submit="handleSubmit" >
    <div class="welcome">欢迎来到书的世界！</div>
    
    <div class='upload' style="margin-left:40%;">
        <a-upload
          name="avatar"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :beforeUpload="beforeUpload"
          @change="handleChange"
          >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" style="width:72px;height:72px;"/>
        <div v-else>
        <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">上传头像</div>
          </div>
        </a-upload>
          </div>
    <div class='form'>
      
              <a-form-item v-bind="formItemLayout" >
              <span slot="label">
                  昵称&nbsp;
              <a-tooltip title="填写一个有趣的名字吧~">
                <a-icon type="question-circle-o" />
                </a-tooltip>
              </span>
              <a-input style="width:130%;"
                  v-decorator="[
                  'nickname',
                {
                rules: [{ required: true, message: '请输入您的昵称', whitespace: true }],
                },
              ]"
                />
              </a-form-item>
              <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
      <a-input style="width:130%;"
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入您的密码',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
      <a-input style="width:130%;"
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请确认您的密码！',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" style="width:120%;margin-right:20px;">
        注册
      </a-button>
    </a-form-item>
            
    </div>
  </a-form>
  </div>
</div>
</template>

<script>
import '/OnLine-BookStore/online-bookstore/global.js'
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
export default {
  data() {
    return {
      loading: false,
        imageUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
    tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },

    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    
    handleChange(info) {
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            console.log('图片地址'+this.imageUrl);
            this.loading = false;
          });
        }
      },
      beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          this.$message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      },
    handleSubmit(e) {
      var _this=this;
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.axios.get('/api/user/check',
          {
            params:{
              username:values.nickname
          }})
          .then(function (response) {
              console.log(response.data);
              if(response.data==true){
                _this.$message.error('你的昵称太受欢迎啦~换个名字吧');
          }else{
            _this.axios.post('/api/user/customer',{
              username:values.nickname,
              password:values.password,
              profile:_this.imageUrl
            })
            .then(function(response){
              console.log(response.data)
              if(response.data==true){
                _this.$message.success('注册成功！返回登录吧！');
              }
            }).catch(function (error) {
              console.log(error);
            })
          }
            })
          .catch(function (error) {
              console.log(error);
            })
          
          console.log('Received', values);
          }
        
    });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次密码不一致！');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    
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

.form{
  display: flex;
  flex-direction: column;
  
  margin-right:30%;
  
  
}
.welcome {
  padding-top: 10%;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
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
 .avatar-uploader > .ant-upload {
    width: 72px;
    height: 72px;
  }
  .ant-upload-select-picture-card i {
    font-size: 25px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 2px;
    color: #666;
    font-size:12px;
  }
</style>
