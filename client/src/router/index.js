import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Zone from '@/views/Zone'

Vue.use(Router)

const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/zonef/'
console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: BASE_URL,
      name: 'Home',
      component: Home
    },
    {
      path: BASE_URL + 'zone/:id',
      name: 'Zone',
      component: Zone
    }
  ]
})
