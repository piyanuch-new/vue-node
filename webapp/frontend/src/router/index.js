import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/google-api',
    component: 'GoogleAPI'
  },
  {
    path: '/line-api',
    component: 'LineAPI'
  },
  {
    path: '/express-js',
    component: 'ExpressJS'
  }
]

const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import (`@/components/${route.component}.vue`)
  }
})

export default new Router({
  mode: 'history',
  routes
})