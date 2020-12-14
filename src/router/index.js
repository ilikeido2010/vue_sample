import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld4 from '@/components/HelloWorld'
import tijiao from '@/components/tijiao'
import gettimu from '@/components/GetTimu'
import jieshu from '@/components/jieshu'
import chaxun from '@/components/chaxun'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld4
    },
    {
      path: '/tijiao',
      name: 'tijiao',
      component: tijiao
    },
    {
      path: '/gettimu',
      name: 'gettimu',
      component: gettimu
    },
    {
      path: '/jieshu',
      name: 'jieshu',
      component: jieshu
    },
    {
      path: '/chaxun',
      name: 'chaxun',
      component: chaxun
    }
  ]
})
