<!--
--Created by Hu Sicheng 2017302580096--
-- on 2020/4/17
-->
<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
      <a-layout>
        <Header />
        <a-layout>
          <a-layout-content style="background-color: white;">
            <div class="content">
              <span id='tip'>
                <p style="margin-left:3%;margin-top:2%;">收货地址</p>
              </span>
              <span style="color:#3e8331;text-align:left;margin-left:10%;">新增收货地址</span>
              <div class='form'>
                <a-form :form="form"
                        @submit="handleSubmit">
                  <a-form-item v-bind="formItemLayout"
                               label="收货地址：">
                    <a-textarea v-model="address" />
                  </a-form-item>
                  <a-form-item v-bind="formItemLayout"
                               label="收货人姓名：">
                    <a-input v-model='name'
                             v-decorator="[
                    {
                  rules: [
                  { type: 'array', required: true, message: '请填写收货人姓名' },
                          ],
                    },
                              ]" />
                  </a-form-item>
                  <a-form-item v-bind="formItemLayout"
                               label="手机号码：">
                    <a-input v-model='phone'
                             v-decorator="[
                    'phone',
                    {
                    rules: [{ required: true, message: '请输入您的电话号码！' }],
                      },
                      ]"
                             style="width: 100%">
                      <a-select slot="addonBefore"
                                v-decorator="['prefix', { initialValue: '86' }]"
                                style="width: 150px">
                        <a-select-option value="86">
                          中国大陆 +86
                        </a-select-option>
                        <a-select-option value="852">
                          中国香港 +852
                        </a-select-option>
                      </a-select>
                    </a-input>
                  </a-form-item>
                  <a-form-item v-bind="tailFormItemLayout">
                    <a-button type="primary"
                              html-type="submit"
                              style="width:60%;">
                      保存
                    </a-button>
                  </a-form-item>
                </a-form>
              </div>
              <span style="color:#3e8331;text-align:left;margin-left:10%;">已保存的地址</span>
              <div class="table"
                   style="width:90%;">
                <a-table bordered
                         :dataSource="dataSource"
                         :columns="columns">
                  <template slot="operation"
                            slot-scope="text, record">
                    <a-popconfirm v-if="dataSource.length"
                                  title="Sure to delete?"
                                  @confirm="() => onDelete(record.key)">
                      <a href="javascript:;">Delete</a>
                    </a-popconfirm>
                  </template>

                </a-table>

              </div>
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
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from '@/components/home/Header'
import '../../../../global'

export default {
  data () {
    return {
      phone: '',
      address: '',
      name: '',
      userId: 0,
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
      dataSource: [],
      columns: [
        {
          title: '收货人',
          dataIndex: 'name',
          width: '20%',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: '详细地址',
          dataIndex: 'address',
        },
        {
          title: '电话/手机',
          dataIndex: 'phone',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },

      ],
    }
  },
  mounted () {
    this.userId = global.userId;
    this.loadData();
  },
  methods: {
    onDelete (key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleSubmit (e) {
      var _this = this;
      e.preventDefault();
      console.log(this.name);
      console.log(this.address);
      console.log(this.phone);
      this.axios.post('/api/address/user/' + this.userId, {
        name: this.name,
        address: this.address,
        phone: this.phone
      })
        .then(function (response) {
          console.log(response);
          if (response.data == true) {
            alert("保存成功！");
          }
          _this.loadData();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadData () {
      var _this = this;
      this.axios.get('/api/address/user/' + this.userId,
        {
          params: {
            page: 0,
            size: 10,
          }
        })
        .then(function (response) {
          // handle success

          console.log(response.data.data);
          let val = response.data.data;
          console.log(val);
          _this.dataSource = response.data.data;
          console.log(this.dataSource);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

  },
  components: {
    Header
  },
}
</script>

<style scoped>
/*注意文件路径*/
@import url("../../../assets/css/homepage.css");
.table {
  margin-left: 5%;
  margin-top: 2%;
}
.form {
  display: inline-flex;
  justify-content: center;
  width: 70%;
  margin: 5%;
}
.content {
  display: flex;
  flex-direction: column;
}
#tip {
  font-size: 18px;
  text-align: left;
  background-color: whitesmoke;
  width: 90%;
  margin: 2%;
}
</style>