import Router from "vue-router"
import User from '@/component/user/User'
import Login from '@/component/user/login/Login'
import Registry from '@/component/user/login/Registry'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/user',
            name:'User',
            component:User
            
        },
        {
            path:'/user/login',
            name:'Login',
            component:Login

        },{
            path:'/user/login',
            name:'Registry',
            component:Registry
        }
    ]
})
