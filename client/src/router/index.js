import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Zone from '@/views/Zone'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/zone/:id',
      name: 'Zone',
      component: Zone
    }
  ]
})
