import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/pages/Index'
import Mainbottomone from '../components/pages/Mainbottomone'
import Mainbottomtwo from '../components/pages/Mainbottomtwo'
import Mainbottomthress from '../components/pages/Mainbottomthress'
import Mainbottomfirt from '../components/pages/Mainbottomfirt'
// 2
import Indexone from '../components/pages/Indexone'
import Indextwo from '../components/pages/Indextwo'
import Zhuce from '../components/pages/Zhuce'
// import Indexthree from '../components/pages/Indexthree'

Mainbottomfirt
Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/indextwo',
      component:Indextwo,
    },
    // {
    //   path: '/indexthree',
    //   component:Indexthree,
    // },
    {
      path: '/indexone',
      component: Indexone,
    },
    {
      path: '/zhuce',
      component:Zhuce,
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'mainbottomone',
          component: Mainbottomone,
        },
        {
          path: 'mainbottomone/:id',
          component: Indextwo,
        },
        {
          path: 'mainbottomtwo',
          component: Mainbottomtwo,
        },
        {
          path: 'mainbottomthress',
          component: Mainbottomthress,
        },
        {
          path: 'mainbottomfirt',
          component: Mainbottomfirt,
        },
        {
          path: '',
          redirect: "Mainbottomone"
        },

      ]
    },

    {
      path: "*",
      redirect: "/index"
    }
  ]
})
