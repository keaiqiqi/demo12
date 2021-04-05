import Vue from 'vue'
import Router from 'vue-router'
//引入页面组根据路由变化显示的页面组件
import Index from '../components/pages/Index'
import Login from '../components/pages/Login'
import Category from '../components/pages/Category' 
import User from '../components/pages/User' 
import Setting from '../components/pages/Setting' 
import Lunbotu from '../components/pages/Lunbotu' 
// 用户提交页面

//用户添加页面
import Usertianjia from '../components/pages/Usertianjia'
// 2
import Settinginfo from '../components/pages/Settinginfo'
// 3
import Categoryinfo from '../components/pages/Categoryinfo'
// 管理
import Lunbotuinfo from '../components/pages/Lunbotuinfo'
Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'category',
          component:Category,
        },
        // 1
        {
          path:'user',
          component:User,
        },
        {
          path:'user/add',
          component:Usertianjia,
        },
      
        {
          path:'user/:userid',
          component:Usertianjia,
        },
          // 管理
        // {
        //   path:'users/manage',
        //   component:Userguanli,
        // },
        // {
        //   path:'users',
        //   component:Userguanli,
        // },
        // 2
        {
          path:'setting',
          component:Setting,
        },
        {
          path:'setting/add',
          component:Settinginfo,
        },
        {
          path:'setting/:userid',
          component:Settinginfo,
        },
        // 3
        {
          path:'Category',
          component:Category,
        },
        {
          path:'Category/add',
          component:Categoryinfo,
        },
        {
          path:'Category/:userid',
          component:Categoryinfo,
        },
        // 轮播图
        {
          path:'lunbotu',
          component:Lunbotu,
        },
        {
          path:'lunbotu/add',
          component:Lunbotuinfo,
        },
        {
          path:'lunbotu/:userid',
          component:Lunbotuinfo,
        },
      ]
    },
    {
      path:'/login',
      component:Login
    },
  
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
