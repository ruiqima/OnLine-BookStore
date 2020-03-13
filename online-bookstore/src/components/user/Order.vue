<template>
  <a-layout style="background-color: #ececec;">
    <a-layout style="background-color: #ececec;">
      <a-layout-sider style="background-color: #ececec;"
                      width="100px">
      </a-layout-sider>
      <a-layout>
        <Header/>
		<!-- 正文内容写在这一块 -->
        <a-layout>
          <a-layout-content style="background-color: white;">
            <div style="margin:2%; font-size:16px;">
            <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="所有订单" key="0">
              <!--用table实现-->
              <a-table :columns="columns" :dataSource="data" bordered>
                <template slot="name" slot-scope="text">
                <a href="javascript:;">{{text}}</a>
                </template>
              </a-table>
            </a-tab-pane>
            <a-tab-pane tab="待付款" key="1">待付款</a-tab-pane>
            <a-tab-pane tab="待收货" key="2" forceRender>待收货</a-tab-pane>
            <a-tab-pane tab="待评价" key="3">待评价</a-tab-pane>
            <a-tab-pane tab="退款/售后" key="4">退款/售后</a-tab-pane>

            </a-tabs>
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
const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      attrs: {},
    };
    if (index === 4) {
      obj.attrs.colSpan = 0;
    }
    return obj;
  };

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    },
  ];

export default {
   data() {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          customRender: (text, row, index) => {
            if (index < 4) {
              return <a href="javascript:;">{text}</a>;
            }
            return {
              children: <a href="javascript:;">{text}</a>,
              attrs: {
                colSpan: 5,
              },
            };
          },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          customRender: renderContent,
        },
        {
          title: 'Home phone',
          colSpan: 2,
          dataIndex: 'tel',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {},
            };
            if (index === 2) {
              obj.attrs.rowSpan = 2;
            }
            // These two are merged into above cell
            if (index === 3) {
              obj.attrs.rowSpan = 0;
            }
            if (index === 4) {
              obj.attrs.colSpan = 0;
            }
            return obj;
          },
        },
        {
          title: 'Phone',
          colSpan: 0,
          dataIndex: 'phone',
          customRender: renderContent,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          customRender: renderContent,
        },
      ];
      return {
        data,
        columns,
      };
    },
   methods: {
      callback(key) {
        console.log(key);
      },
    },
  components: {
    Header
  },
}
</script>

<style scoped>
	/*注意文件路径*/
@import url("../../assets/css/homepage.css");				
.order-content{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width:95%;
  margin:1%;
  margin-left:3%;
  padding-top:1%;
  border-radius: 3px;
  align-items: center;

}
</style>