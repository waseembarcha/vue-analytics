import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import RealTime from '@/pages/RealTime'
import Audience from '@/pages/Audience'
import Acquistion from '@/pages/Acquistion'
import Behaviour from '@/pages/Behaviour'
import Conversions from '@/pages/Conversions'
import Duplicates from '@/pages/Duplicates'
import Discover from '@/pages/Discover'
import Dashboard from '@/pages/Dashboard'


Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/real-time',
      name: 'RealTime',
      component: RealTime
    },
    {
      path: '/audience',
      name: 'Audience',
      component: Audience
    },
    {
      path: '/acquistion',
      name: 'Acquistion',
      component: Acquistion
    },
    {
      path: '/behaviour',
      name: 'Behaviour',
      component: Behaviour
    },
    {
      path: '/conversions',
      name: 'Conversions',
      component: Conversions
    },
    {
      path: '/duplicates',
      name: 'Duplicates',
      component: Duplicates
    },
    {
      path: '/',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
  ]
})
