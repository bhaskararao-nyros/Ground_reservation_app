import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Grounds from '@/components/Grounds'
import Admin from '@/components/Admin'
import Parks from '@/components/Parks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grounds',
      name: 'Grounds',
      component: Grounds
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/parks',
      name: 'Parks',
      component: Parks
    }
  ]
})
