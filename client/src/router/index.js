import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Zone from '@/views/Zone'

var rootPath = '/'
if (process.env.publicPath) {
  rootPath = process.env.publicPath
}

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
