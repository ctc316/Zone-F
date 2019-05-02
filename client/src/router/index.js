import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Zone from '@/views/Zone'

const rootPath = process.env.publicPath ? process.env.publicPath : '/'

console.log(rootPath)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: rootPath,
      name: 'Home',
      component: Home
    },
    {
      path: rootPath + 'zone/:id',
      name: 'Zone',
      component: Zone
    }
  ]
})
