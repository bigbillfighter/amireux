import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Appearance from '../views/Appearance'
import Elaboration from '../views/Elaboration'
import Flower from '../views/Flower'
import Blogs from '../views/Blogs'
import Info from '../views/Info'
import Research from '../views/Research'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/appearance',
      name: 'Appearance',
      component: Appearance
    },
    {
      path: '/elaboration',
      name: 'Elaboration',
      component: Elaboration
    },
    {
      path: '/flower',
      name: 'Flower',
      component: Flower
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home'
    }
  ]
})
