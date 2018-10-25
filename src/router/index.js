import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import Project from '@/pages/project/Project'
import Join from '@/pages/join/Join'
import Welfare from '@/pages/welfare/welfare'
import Contact from '@/pages/contact/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/project',
      name: 'Project',
      component: Project
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/welfare',
      name: 'Welfare',
      component: Welfare
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
