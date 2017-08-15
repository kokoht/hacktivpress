import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sidebarbalapan from '@/components/sidebarbalapan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    // ,    just for edu
    // {
    //   path: '/side',
    //   name: 'sidebarbalapan',
    //   component: sidebarbalapan
    // }
  ]
})
