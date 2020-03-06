import Router from "vue-router"
import User from '@/component/user/User'
import Login from '@/component/user/login/Login'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/user',
            name:'User',
            component:User
            
        },
        {
            path:'/',
            name:'Login',
            component:Login

        }
    ]
})
